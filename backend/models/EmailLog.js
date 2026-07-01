const mongoose = require('mongoose');

const emailLogSchema = new mongoose.Schema({
  recipient: { type: String, required: true },
  subject: { type: String, required: true },
  body: { type: String, required: true },
  type: {
    type: String,
    enum: ['Artist Notification', 'Client Confirmation', 'Status Update'],
    required: true
  },
  bookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  sent: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('EmailLog', emailLogSchema);
