const mongoose = require('mongoose');

const GallerySchema = new mongoose.Schema({
  src: { type: String, required: true },
  category: { type: String, default: '' },
  occasion: { type: String, default: '' },
  placement: { type: String, default: '' },
  complexity: { type: String, default: '' },
  side: { type: String, default: '' },
  designElements: [{ type: String }],
  isSpecial: { type: Boolean, default: false },
  status: { type: String, default: 'APPROVED' }
}, { timestamps: true });

module.exports = mongoose.model('Gallery', GallerySchema);
