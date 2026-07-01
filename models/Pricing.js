const mongoose = require('mongoose');

const pricingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  features: [{ type: String }],
  badge: { type: String, default: '' },
  isPopular: { type: Boolean, default: false },
  order: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Pricing', pricingSchema);
