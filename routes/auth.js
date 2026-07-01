const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const { protect } = require('../middleware/auth');

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const normalizedEmail = String(email || '').trim().toLowerCase();
    const defaultEmail = String(process.env.ADMIN_EMAIL || '').trim().toLowerCase();
    const defaultPassword = String(process.env.ADMIN_PASSWORD || '');

    let admin = await Admin.findOne({ email: normalizedEmail });

    if (!admin && normalizedEmail === defaultEmail && password === defaultPassword) {
      admin = await Admin.create({
        email: defaultEmail,
        password: defaultPassword,
        name: 'MehSang Admin'
      });
    }

    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.json({
      token: generateToken(admin._id),
      admin: { id: admin._id, email: admin.email, name: admin.name }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET /api/auth/me
router.get('/me', protect, (req, res) => {
  res.json(req.admin);
});

module.exports = router;
