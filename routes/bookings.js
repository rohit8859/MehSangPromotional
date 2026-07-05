const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const EmailLog = require('../models/EmailLog');
const { hasSmtpConfig, sendMail } = require('../utils/mailer');
const { sendWhatsapp } = require('../utils/whatsapp');
const { protect } = require('../middleware/auth');

// POST /api/bookings - Public: submit booking
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, eventDate, eventType, packageSelected, location, message } = req.body;

    if (!name || !phone || !email || !eventDate || !eventType) {
      return res.status(400).json({ message: 'Please fill all required fields.' });
    }

    const booking = await Booking.create({
      name, phone, email, eventDate, eventType,
      packageSelected: packageSelected || '',
      location: location || 'To Be Finalized',
      message: message || ''
    });

    const adminSubject = `NEW MEHNDI BOOKING: ${name} - ${eventType}`;
    const adminBody = `New booking from ${name} (${phone}) for ${eventType} on ${new Date(eventDate).toDateString()}. Location: ${location || 'To Be Finalized'}. Message: ${message || 'N/A'}`;
    const clientSubject = 'MehSang Studio - Your Booking Request Received!';
    const clientBody = `Namaste ${name}, thank you for choosing MehSang for your ${eventType} on ${new Date(eventDate).toDateString()}. We will contact you on WhatsApp (${phone}) within 12 hours.`;

    const [adminLog, clientLog] = await EmailLog.create([
      {
        recipient: process.env.ADMIN_EMAIL,
        subject: adminSubject,
        body: adminBody,
        type: 'Artist Notification',
        bookingId: booking._id,
        sent: false
      },
      {
        recipient: email,
        subject: clientSubject,
        body: clientBody,
        type: 'Client Confirmation',
        bookingId: booking._id,
        sent: false
      }
    ]);

    const notificationResults = await Promise.allSettled([
      sendMail({
        to: process.env.ADMIN_EMAIL,
        subject: adminSubject,
        text: adminBody,
      }),
      sendMail({
        to: email,
        subject: clientSubject,
        text: clientBody,
      })
    ]);

    const adminDelivered = notificationResults[0].status === 'fulfilled' && notificationResults[0].value?.sent;
    const clientDelivered = notificationResults[1].status === 'fulfilled' && notificationResults[1].value?.sent;

    if (adminDelivered) {
      adminLog.sent = true;
      await adminLog.save();
    }

    if (clientDelivered) {
      clientLog.sent = true;
      await clientLog.save();
    }

    // Send WhatsApp notification to Admin
    let whatsappSent = false;
    if (process.env.ADMIN_WHATSAPP_NUMBER) {
      const waMessage = `🔔 *New Mehndi Booking Request!*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Phone:* ${phone}\n` +
        `📧 *Email:* ${email}\n` +
        `📅 *Date:* ${new Date(eventDate).toDateString()}\n` +
        `🎨 *Event:* ${eventType}\n` +
        `📍 *Location:* ${location || 'To Be Finalized'}\n` +
        `💬 *Message:* ${message || 'N/A'}`;
      
      const waResult = await sendWhatsapp({
        to: process.env.ADMIN_WHATSAPP_NUMBER,
        body: waMessage
      });
      whatsappSent = waResult.sent;
    }

    res.status(201).json({
      message: 'Booking submitted successfully!',
      booking,
      notifications: {
        smtpEnabled: hasSmtpConfig,
        adminDelivered,
        clientDelivered,
        whatsappSent,
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/bookings - Admin only
router.get('/', protect, async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;
    const filter = status ? { status } : {};
    const bookings = await Booking.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));
    const total = await Booking.countDocuments(filter);
    res.json({ bookings, total, page: Number(page), pages: Math.ceil(total / limit) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PATCH /api/bookings/:id/status - Admin only
router.patch('/:id/status', protect, async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['Pending', 'Confirmed', 'Declined', 'Completed'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Invalid status value.' });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!booking) return res.status(404).json({ message: 'Booking not found.' });

    const statusSubjectMap = {
      Confirmed: 'MehSang Studio - Your Booking is Confirmed',
      Declined: 'MehSang Studio - Booking Update',
      Completed: 'MehSang Studio - Booking Completed',
      Pending: 'MehSang Studio - Booking Update',
    };

    const statusBodyMap = {
      Confirmed: `Hello ${booking.name}, your booking for ${booking.eventType} on ${new Date(booking.eventDate).toDateString()} is now confirmed. Our team will contact you shortly with the next steps.`,
      Declined: `Hello ${booking.name}, your booking for ${booking.eventType} on ${new Date(booking.eventDate).toDateString()} has been declined. Please contact us if you would like to discuss alternate options.`,
      Completed: `Hello ${booking.name}, your booking for ${booking.eventType} has been marked as completed. Thank you for choosing MehSang.`,
      Pending: `Hello ${booking.name}, your booking for ${booking.eventType} is currently pending review. We will update you soon.`,
    };

    const subject = statusSubjectMap[status] || 'MehSang Studio - Booking Update';
    const body = statusBodyMap[status] || `Hello ${booking.name}, your booking status has been updated to: ${status}.`;

    const emailLog = await EmailLog.create({
      recipient: booking.email,
      subject,
      body,
      type: 'Status Update',
      bookingId: booking._id
    });

    const emailResult = await sendMail({
      to: booking.email,
      subject,
      text: body,
    });

    if (emailResult.sent) {
      emailLog.sent = true;
      await emailLog.save();
    }

    res.json({ message: 'Status updated', booking, emailSent: emailResult.sent });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/bookings/:id - Admin only
router.delete('/:id', protect, async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: 'Booking deleted.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
