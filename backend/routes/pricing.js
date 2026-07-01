const express = require('express');
const router = express.Router();
const Pricing = require('../models/Pricing');
const { protect } = require('../middleware/auth');

// GET /api/pricing - Public
router.get('/', async (req, res) => {
  try {
    const pricing = await Pricing.find().sort({ order: 1 });
    res.json(pricing);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /api/pricing - Admin: create package
router.post('/', protect, async (req, res) => {
  try {
    const pkg = await Pricing.create(req.body);
    res.status(201).json(pkg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /api/pricing/:id - Admin: update package
router.put('/:id', protect, async (req, res) => {
  try {
    const pkg = await Pricing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pkg) return res.status(404).json({ message: 'Package not found.' });
    res.json(pkg);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /api/pricing/:id - Admin only
router.delete('/:id', protect, async (req, res) => {
  try {
    await Pricing.findByIdAndDelete(req.params.id);
    res.json({ message: 'Package deleted.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
