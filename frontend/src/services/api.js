import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { 'Content-Type': 'application/json' }
});

// Attach JWT token if present
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('mehsang_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Auto-logout on 401
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('mehsang_token');
      window.location.href = '/admin/login';
    }
    return Promise.reject(err);
  }
);

export default api;

// ── Public APIs ──────────────────────────────────────────
export const getPricing = () => api.get('/pricing');
export const submitBooking = (data) => api.post('/bookings', data);

// ── Admin APIs ───────────────────────────────────────────
export const adminLogin = (data) => api.post('/auth/login', data);
export const getMe = () => api.get('/auth/me');

export const getBookings = (params) => api.get('/bookings', { params });
export const updateBookingStatus = (id, status) => api.patch(`/bookings/${id}/status`, { status });
export const deleteBooking = (id) => api.delete(`/bookings/${id}`);

export const createPricing = (data) => api.post('/pricing', data);
export const updatePricing = (id, data) => api.put(`/pricing/${id}`, data);
export const deletePricing = (id) => api.delete(`/pricing/${id}`);

export const getEmailLogs = () => api.get('/emails');
