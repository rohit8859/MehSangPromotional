const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_WHATSAPP_FROM; // e.g., 'whatsapp:+14155238886'

const isTwilioConfigured = Boolean(accountSid && authToken && fromNumber);

let client = null;
if (isTwilioConfigured) {
  try {
    client = twilio(accountSid, authToken);
  } catch (error) {
    console.error('❌ Failed to initialize Twilio client:', error.message);
  }
}

async function sendWhatsapp({ to, body }) {
  if (!isTwilioConfigured || !client) {
    console.warn('⚠️  Twilio WhatsApp not configured or failed to initialize. Skipping WhatsApp notification.');
    return { sent: false, skipped: true };
  }

  try {
    if (!to) {
      console.warn('⚠️  Recipient number not provided. Skipping WhatsApp notification.');
      return { sent: false, skipped: true };
    }

    const formattedTo = to.startsWith('whatsapp:') ? to : `whatsapp:${to}`;
    const formattedFrom = fromNumber.startsWith('whatsapp:') ? fromNumber : `whatsapp:${fromNumber}`;

    const message = await client.messages.create({
      body,
      from: formattedFrom,
      to: formattedTo
    });

    console.log(`✅ WhatsApp message sent: ${message.sid}`);
    return { sent: true, skipped: false, sid: message.sid };
  } catch (error) {
    console.error(`❌ Failed to send WhatsApp notification: ${error.message}`);
    return { sent: false, skipped: false, error: error.message };
  }
}

module.exports = {
  isTwilioConfigured,
  sendWhatsapp
};
