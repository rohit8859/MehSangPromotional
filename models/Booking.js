const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: 
  { type: String, required: true, trim: true },
  phone:
   { type: String, required: true, trim: true },
  email:
   { type: String, required: true, lowercase: true, trim: true },
  eventDate:
   { type: Date, required: true },
  eventType: {
    type: String,
    required: true,
    trim: true
  },
  packageSelected: { type: String, default: '' },
  location: { type: String, default: 'To Be Finalized' },
  message: { type: String, default: '' },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Declined', 'Completed'],
    default: 'Pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
