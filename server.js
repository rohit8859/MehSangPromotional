require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = (process.env.CLIENT_URLS || 'http://localhost:5173,http://localhost:3000')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

// Connect MongoDB
connectDB();

// Middleware
app.use(cors({
  origin(origin, callback) {
    if (
      !origin || 
      allowedOrigins.includes(origin) || 
      origin.endsWith('.vercel.app') || 
      origin.includes('mehsang')
    ) {
      return callback(null, true);
    }
    return callback(new Error(`CORS blocked origin: ${origin}`));
  },
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/pricing', require('./routes/pricing'));
app.use('/api/emails', require('./routes/emails'));
app.use('/api/gallery', require('./routes/gallery'));

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'MehSang API Running ✅' }));

// Serve static assets in production
const path = require('path');
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'frontend/dist')));
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ message: 'API Route not found' });
    }
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
} else {
  // 404 handler
  app.use((req, res) => res.status(404).json({ message: 'Route not found' }));
}

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`🚀 MehSang Backend running on http://localhost:${PORT}`));
}

module.exports = app;
