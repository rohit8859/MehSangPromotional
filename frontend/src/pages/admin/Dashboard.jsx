import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { getBookings, updateBookingStatus, deleteBooking, getEmailLogs } from '../../services/api';
import toast from 'react-hot-toast';
import {
  LogOut, Calendar, Mail, TrendingUp, CheckCircle,
  Clock, XCircle, Trash2, RefreshCw
} from 'lucide-react';

const STATUS_COLORS = {
  Pending: 'bg-yellow-100 text-yellow-700',
  Confirmed: 'bg-green-100 text-green-700',
  Declined: 'bg-red-100 text-red-700',
  Completed: 'bg-blue-100 text-blue-700',
};

const STATUS_ICONS = {
  Pending: Clock,
  Confirmed: CheckCircle,
  Declined: XCircle,
  Completed: TrendingUp,
};

export default function AdminDashboard() {
  const { admin, logout } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [emailLogs, setEmailLogs] = useState([]);
  const [tab, setTab] = useState('bookings');
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [bRes, eRes] = await Promise.all([
        getBookings(filter ? { status: filter } : {}),
        getEmailLogs()
      ]);
      setBookings(bRes.data.bookings);
      setEmailLogs(eRes.data);
    } catch {
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, [filter]);

  const handleStatus = async (id, status) => {
    try {
      await updateBookingStatus(id, status);
      toast.success(`Booking ${status.toLowerCase()}!`);
      fetchData();
    } catch {
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this booking?')) return;
    try {
      await deleteBooking(id);
      toast.success('Booking deleted');
      fetchData();
    } catch {
      toast.error('Failed to delete');
    }
  };

  // Stats
  const stats = {
    total: bookings.length,
    pending: bookings.filter(b => b.status === 'Pending').length,
    confirmed: bookings.filter(b => b.status === 'Confirmed').length,
    completed: bookings.filter(b => b.status === 'Completed').length,
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <header className="bg-maroon-900 text-white px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold">MehSang Admin</h1>
          <p className="font-body text-maroon-300 text-xs">Welcome, {admin?.name}</p>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={fetchData} className="text-maroon-300 hover:text-white transition-colors">
            <RefreshCw size={18} />
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-maroon-700 hover:bg-maroon-600 px-4 py-2 rounded-lg text-sm font-body transition-colors"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Bookings', value: stats.total, icon: Calendar, color: 'text-maroon-700' },
            { label: 'Pending', value: stats.pending, icon: Clock, color: 'text-yellow-600' },
            { label: 'Confirmed', value: stats.confirmed, icon: CheckCircle, color: 'text-green-600' },
            { label: 'Completed', value: stats.completed, icon: TrendingUp, color: 'text-blue-600' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm border border-cream-200">
              <div className="flex items-center justify-between mb-3">
                <p className="font-body text-gray-500 text-xs uppercase tracking-wide">{s.label}</p>
                <s.icon size={18} className={s.color} />
              </div>
              <p className={`font-display text-3xl font-bold ${s.color}`}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {['bookings', 'emails'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-2.5 rounded-full font-body font-semibold text-sm capitalize transition-all ${
                tab === t ? 'bg-maroon-700 text-white' : 'bg-white text-gray-600 hover:bg-cream-100 border border-cream-200'
              }`}
            >
              {t === 'bookings' ? <Calendar size={14} className="inline mr-2" /> : <Mail size={14} className="inline mr-2" />}
              {t === 'emails' ? 'Email Logs' : 'Bookings'}
            </button>
          ))}
        </div>

        {/* Bookings Tab */}
        {tab === 'bookings' && (
          <div>
            {/* Filter */}
            <div className="flex flex-wrap gap-2 mb-4">
              {['', 'Pending', 'Confirmed', 'Declined', 'Completed'].map(s => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`px-4 py-1.5 rounded-full text-xs font-body font-semibold transition-all ${
                    filter === s ? 'bg-maroon-700 text-white' : 'bg-white text-gray-600 border border-cream-200 hover:bg-cream-100'
                  }`}
                >
                  {s || 'All'}
                </button>
              ))}
            </div>

            {loading ? (
              <div className="flex justify-center py-20"><div className="spinner" /></div>
            ) : bookings.length === 0 ? (
              <div className="bg-white rounded-2xl p-16 text-center border border-cream-200">
                <Calendar size={40} className="text-cream-400 mx-auto mb-4" />
                <p className="font-body text-gray-400">No bookings found.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {bookings.map(b => {
                  const Icon = STATUS_ICONS[b.status];
                  return (
                    <div key={b._id} className="bg-white rounded-2xl p-5 shadow-sm border border-cream-200">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="font-display font-bold text-maroon-800 text-lg">{b.name}</h3>
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${STATUS_COLORS[b.status]}`}>
                              <Icon size={12} /> {b.status}
                            </span>
                            {b.packageSelected && (
                              <span className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-xs font-semibold">
                                {b.packageSelected}
                              </span>
                            )}
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-body text-gray-500">
                            <span>📱 {b.phone}</span>
                            <span>✉️ {b.email}</span>
                            <span>🎉 {b.eventType}</span>
                            <span>📅 {new Date(b.eventDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                          </div>
                          {b.location && <p className="text-xs text-gray-400 mt-1">📍 {b.location}</p>}
                          {b.message && <p className="text-xs text-gray-400 mt-1 italic">"{b.message}"</p>}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 flex-wrap">
                          {['Pending', 'Confirmed', 'Declined', 'Completed']
                            .filter(s => s !== b.status)
                            .map(s => (
                              <button
                                key={s}
                                onClick={() => handleStatus(b._id, s)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                  s === 'Confirmed' ? 'bg-green-50 text-green-700 hover:bg-green-100'
                                    : s === 'Declined' ? 'bg-red-50 text-red-700 hover:bg-red-100'
                                    : s === 'Completed' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100'
                                    : 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100'
                                }`}
                              >
                                {s}
                              </button>
                            ))
                          }
                          <button
                            onClick={() => handleDelete(b._id)}
                            className="p-1.5 rounded-lg bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-600 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Email Logs Tab */}
        {tab === 'emails' && (
          <div className="space-y-3">
            {emailLogs.length === 0 ? (
              <div className="bg-white rounded-2xl p-16 text-center border border-cream-200">
                <Mail size={40} className="text-cream-400 mx-auto mb-4" />
                <p className="font-body text-gray-400">No email logs yet.</p>
              </div>
            ) : emailLogs.map(e => (
              <div key={e._id} className="bg-white rounded-2xl p-5 shadow-sm border border-cream-200">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                        e.type === 'Artist Notification' ? 'bg-maroon-100 text-maroon-700'
                          : e.type === 'Client Confirmation' ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>{e.type}</span>
                      <span className="font-body text-xs text-gray-400">→ {e.recipient}</span>
                    </div>
                    <p className="font-body font-semibold text-sm text-gray-700">{e.subject}</p>
                    <p className="font-body text-xs text-gray-400 mt-1 line-clamp-2">{e.body}</p>
                  </div>
                  <p className="font-body text-xs text-gray-400 whitespace-nowrap">
                    {new Date(e.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
