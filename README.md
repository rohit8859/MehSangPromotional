# MehSang — Premium Mehndi Artist Website (MERN Stack)

A full-stack MERN (MongoDB, Express, React, Node.js) website for a luxury mehndi artist studio.

## Project Structure

```
mehsang/
├── backend/                  # Node.js + Express + MongoDB API
│   ├── config/db.js          # MongoDB connection
│   ├── models/               # Mongoose schemas
│   │   ├── Admin.js
│   │   ├── Booking.js
│   │   ├── Pricing.js
│   │   └── EmailLog.js
│   ├── routes/               # Express API routes
│   │   ├── auth.js           # POST /api/auth/login
│   │   ├── bookings.js       # CRUD bookings
│   │   ├── pricing.js        # CRUD pricing packages
│   │   └── emails.js         # Email log audit trail
│   ├── middleware/auth.js     # JWT protection middleware
│   ├── seed.js               # Seeds admin + pricing data
│   ├── server.js             # Express app entry point
│   └── .env.example          # Copy to .env and fill in
│
└── frontend/                 # React + Vite + Tailwind CSS
    ├── public/gallery/       # ← ADD YOUR IMAGES HERE
    ├── src/
    │   ├── components/       # Reusable UI components
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── Gallery.jsx
    │   │   ├── Pricing.jsx
    │   │   ├── BookingForm.jsx
    │   │   ├── Footer.jsx
    │   │   └── ProtectedRoute.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   └── admin/
    │   │       ├── Login.jsx
    │   │       └── Dashboard.jsx
    │   ├── context/AuthContext.jsx
    │   ├── services/api.js    # All API calls via axios
    │   └── index.css          # Tailwind + global styles
    └── tailwind.config.js
```

## Quick Start

### 1. Prerequisites
- Node.js v18+
- MongoDB (local) or MongoDB Atlas account

### 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and settings
npm run seed      # Creates admin user + pricing packages
npm run dev       # Starts on http://localhost:5000
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev       # Starts on http://localhost:5173
```

### 4. Environment Variables (backend/.env)

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/mehsang
JWT_SECRET=your_super_secret_jwt_key
ADMIN_EMAIL=your@email.com
ADMIN_PASSWORD=your_admin_password
```

## API Endpoints

### Public
| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/pricing | Get all pricing packages |
| POST | /api/bookings | Submit a booking |

### Admin (requires JWT token)
| Method | URL | Description |
|--------|-----|-------------|
| POST | /api/auth/login | Admin login |
| GET | /api/auth/me | Get current admin |
| GET | /api/bookings | List all bookings |
| PATCH | /api/bookings/:id/status | Update booking status |
| DELETE | /api/bookings/:id | Delete a booking |
| POST | /api/pricing | Create a package |
| PUT | /api/pricing/:id | Update a package |
| DELETE | /api/pricing/:id | Delete a package |
| GET | /api/emails | Email audit logs |

## Adding Your Images

Place your gallery images in:
```
frontend/public/gallery/
  bridal-1.jpg
  bridal-2.jpg
  engagement-1.jpg
  festival-1.jpg
  arabic-1.jpg
  festival-2.jpg
```
Then update the `src` paths in `src/components/Gallery.jsx`.

## Admin Panel

Visit `/admin/login` and use the credentials from your `.env` file.

Features:
- View all bookings with filters
- Update booking status (Pending → Confirmed / Declined / Completed)
- Delete bookings
- View email audit trail

## Brand Colors

| Name | Hex |
|------|-----|
| Maroon (primary) | #ab1a45 |
| Gold (accent) | #d97706 |
| Cream (background) | #fdfaf5 |
