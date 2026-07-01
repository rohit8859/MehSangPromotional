import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

export default function AdminLogin() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await login(form.email, form.password);
      toast.success('Welcome back!');
      navigate('/admin');
    } catch {
      toast.error('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'linear-gradient(180deg, #4a1526 0%, #2d0c18 100%)' }}>
      <div className="bg-white rounded-3xl p-8 md:p-10 w-full max-w-md shadow-2xl" style={{ border: '1px solid rgba(171,26,69,0.15)' }}>
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.35em] text-maroon-400 mb-3">Admin Access Only</p>
          <h1 className="font-display text-3xl font-bold text-maroon-800 mb-1">MehSang</h1>
          <p className="font-body text-gold-600 text-xs uppercase tracking-widest mb-4">Admin Portal</p>
          <p className="font-body text-gray-500 text-sm">Sign in to manage bookings and pricing</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-xs font-semibold uppercase tracking-wider text-maroon-700">Admin Email</label>
          <input
            type="email"
            placeholder="Admin Email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            required
            className="w-full px-4 py-3.5 border border-cream-300 rounded-xl font-body text-sm focus:outline-none focus:ring-2 focus:ring-maroon-400"
            style={{ color: '#3f2a1e' }}
          />
          <label className="block text-xs font-semibold uppercase tracking-wider text-maroon-700">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
            required
            className="w-full px-4 py-3.5 border border-cream-300 rounded-xl font-body text-sm focus:outline-none focus:ring-2 focus:ring-maroon-400"
            style={{ color: '#3f2a1e' }}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white py-4 rounded-xl font-body font-semibold text-sm transition-colors disabled:opacity-60"
            style={{ background: loading ? '#8b3d56' : '#7a1738', boxShadow: '0 12px 28px rgba(122,23,56,0.28)' }}
          >
            {loading ? 'Signing in...' : 'Log In to Dashboard'}
          </button>
        </form>

        <p className="text-center mt-6 text-xs text-gray-500">
          If you are the admin, use your email and password here.
        </p>

        <p className="text-center mt-4">
          <a href="/" className="font-body text-maroon-400 hover:text-maroon-600 text-sm transition-colors">
            ← Back to Website
          </a>
        </p>
      </div>
    </div>
  );
}
