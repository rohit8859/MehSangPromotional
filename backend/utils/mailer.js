const nodemailer = require('nodemailer');

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

const hasSmtpConfig = Boolean(smtpHost && smtpUser && smtpPass);

const transport = hasSmtpConfig
  ? nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })
  : null;

async function sendMail({ to, subject, text }) {
  if (!transport) {
    return { sent: false, skipped: true };
  }

  await transport.sendMail({
    from: process.env.MAIL_FROM || smtpUser,
    to,
    subject,
    text,
  });

  return { sent: true, skipped: false };
}

module.exports = {
  hasSmtpConfig,
  sendMail,
};