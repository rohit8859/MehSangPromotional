const express = require('express');
const router = express.Router();
const EmailLog = require('../models/EmailLog');
const { protect } = require('../middleware/auth');

// GET /api/emails - Admin only
router.get('/', protect, async (req, res) => {
  try {
    const emails = await EmailLog.find()
      .populate('bookingId', 'name eventType eventDate')
      .sort({ createdAt: -1 })
      .limit(100);
    res.json(emails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
