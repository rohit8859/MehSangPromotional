import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import {
  getBookings,
  updateBookingStatus,
  deleteBooking,
  getEmailLogs,
  getGallery,
  addGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
  syncGalleryWithSheet
} from '../../services/api';
import toast from 'react-hot-toast';
import {
  LogOut, Calendar, Mail, TrendingUp, CheckCircle,
  Clock, XCircle, Trash2, RefreshCw, Image, Plus, Link2, Sparkles, Check
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
  const [galleryItems, setGalleryItems] = useState([]);
  const [tab, setTab] = useState('bookings');
  
  // Filtering & loading states
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Gallery Sync & Add states
  const [sheetUrl, setSheetUrl] = useState('https://docs.google.com/spreadsheets/d/e/2PACX-1vTFBY7BhKpoefP5gnmUlfUqDKVYs8YR2HxUKhSYdCwh1KaprvNCwvAr7dGReEhWyvNDiP6T8PgOgbcR/pub?output=csv');
  const [syncing, setSyncing] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [addingItem, setAddingItem] = useState(false);
  const [newItem, setNewItem] = useState({
    src: '',
    category: '',
    occasion: '',
    placement: '',
    complexity: '',
    side: '',
    designElements: '',
    isSpecial: false
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const [bRes, eRes, gRes] = await Promise.all([
        getBookings(filter ? { status: filter } : {}),
        getEmailLogs(),
        getGallery()
      ]);
      setBookings(bRes.data.bookings);
      setEmailLogs(eRes.data);
      setGalleryItems(gRes.data);
    } catch {
      toast.error('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filter]);

  // Bookings Handlers
  const handleStatus = async (id, status) => {
    try {
      await updateBookingStatus(id, status);
      toast.success(`Booking ${status.toLowerCase()}!`);
      fetchData();
    } catch {
      toast.error('Failed to update status');
    }
  };

  const handleDeleteBooking = async (id) => {
    if (!window.confirm('Delete this booking?')) return;
    try {
      await deleteBooking(id);
      toast.success('Booking deleted');
      fetchData();
    } catch {
      toast.error('Failed to delete');
    }
  };

  // Gallery Handlers
  const handleSyncGallery = async (e) => {
    e.preventDefault();
    if (!sheetUrl.trim()) return toast.error('Please enter a Google Sheet CSV URL');
    setSyncing(true);
    try {
      const res = await syncGalleryWithSheet(sheetUrl);
      toast.success(res.data.message || 'Gallery synchronized successfully!');
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to sync gallery from sheet.');
    } finally {
      setSyncing(false);
    }
  };

  const handleToggleSpecial = async (item) => {
    const updatedSpecial = !item.isSpecial;
    try {
      await updateGalleryItem(item._id, { isSpecial: updatedSpecial });
      // Update local state immediately for fast response
      setGalleryItems(prev => prev.map(g => g._id === item._id ? { ...g, isSpecial: updatedSpecial } : g));
      toast.success(updatedSpecial ? 'Design marked as Special (Homepage Teaser)' : 'Design removed from Special list');
    } catch {
      toast.error('Failed to update design special status');
    }
  };

  const handleDeleteGalleryItem = async (id) => {
    if (!window.confirm('Delete this photo from the gallery?')) return;
    try {
      await deleteGalleryItem(id);
      toast.success('Photo removed from gallery');
      fetchData();
    } catch {
      toast.error('Failed to delete photo');
    }
  };

  const handleAddGalleryItem = async (e) => {
    e.preventDefault();
    if (!newItem.src.trim()) return toast.error('Photo Image URL is required');
    setAddingItem(true);
    try {
      // Split design elements by comma
      const data = {
        ...newItem,
        designElements: newItem.designElements
          ? newItem.designElements.split(',').map(el => el.trim()).filter(Boolean)
          : []
      };
      await addGalleryItem(data);
      toast.success('Design added successfully!');
      setNewItem({
        src: '',
        category: '',
        occasion: '',
        placement: '',
        complexity: '',
        side: '',
        designElements: '',
        isSpecial: false
      });
      setShowAddForm(false);
      fetchData();
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to add gallery design');
    } finally {
      setAddingItem(false);
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
        <div className="flex gap-2 mb-6 flex-wrap">
          {[
            { id: 'bookings', label: 'Bookings', icon: Calendar },
            { id: 'gallery', label: 'Gallery Manager', icon: Image },
            { id: 'emails', label: 'Email Logs', icon: Mail }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-6 py-2.5 rounded-full font-body font-semibold text-sm capitalize transition-all flex items-center gap-2 ${
                tab === t.id ? 'bg-maroon-700 text-white' : 'bg-white text-gray-600 hover:bg-cream-100 border border-cream-200'
              }`}
            >
              <t.icon size={14} />
              {t.label}
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
                  const Icon = STATUS_ICONS[b.status] || Clock;
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
                            onClick={() => handleDeleteBooking(b._id)}
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

        {/* Gallery Tab */}
        {tab === 'gallery' && (
          <div className="space-y-6">
            {/* Sync Box & Manual Form Toggle */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sync from Google Sheet */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-200">
                <h3 className="font-display font-bold text-maroon-800 text-lg mb-2 flex items-center gap-2">
                  <Link2 size={18} className="text-gold-600" />
                  Google Sheet Design Sync
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  Import your dynamic designs and tag properties directly from a published Google Sheet CSV file.
                </p>
                <form onSubmit={handleSyncGallery} className="flex gap-2">
                  <input
                    type="url"
                    value={sheetUrl}
                    onChange={(e) => setSheetUrl(e.target.value)}
                    placeholder="https://docs.google.com/spreadsheets/...pub?output=csv"
                    className="flex-1 px-4 py-2 border border-cream-200 rounded-lg text-sm bg-cream-50 focus:outline-none focus:border-maroon-700"
                  />
                  <button
                    type="submit"
                    disabled={syncing}
                    className="bg-maroon-700 hover:bg-maroon-600 text-white px-5 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 disabled:opacity-50 transition-colors"
                  >
                    <RefreshCw size={14} className={syncing ? 'animate-spin' : ''} />
                    {syncing ? 'Syncing...' : 'Sync'}
                  </button>
                </form>
              </div>

              {/* Add New Design Box */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-cream-200 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-maroon-800 text-lg mb-2 flex items-center gap-2">
                    <Sparkles size={18} className="text-gold-600" />
                    Manually Add Design
                  </h3>
                  <p className="text-xs text-gray-500 mb-4">
                    Upload/link an individual photo directly into your dynamic gallery without editing the sheet.
                  </p>
                </div>
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="bg-white hover:bg-cream-50 border border-cream-200 text-maroon-700 px-5 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-colors w-full"
                >
                  <Plus size={16} />
                  {showAddForm ? 'Close Add Form' : 'Add New Design Photo'}
                </button>
              </div>
            </div>

            {/* Manual Form Box */}
            {showAddForm && (
              <form onSubmit={handleAddGalleryItem} className="bg-white rounded-2xl p-6 shadow-sm border border-cream-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Google Drive or Direct Image URL *</label>
                  <input
                    type="text"
                    required
                    value={newItem.src}
                    onChange={(e) => setNewItem(prev => ({ ...prev, src: e.target.value }))}
                    placeholder="https://drive.google.com/open?id=... or direct link"
                    className="w-full px-4 py-2 border border-cream-200 rounded-lg text-sm bg-cream-50 focus:outline-none focus:border-maroon-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Category (e.g. bridal, arabic, traditional)</label>
                  <input
                    type="text"
                    value={newItem.category}
                    onChange={(e) => setNewItem(prev => ({ ...prev, category: e.target.value }))}
                    placeholder="bridal"
                    className="w-full px-4 py-2 border border-cream-200 rounded-lg text-sm bg-cream-50 focus:outline-none focus:border-maroon-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Occasion (e.g. wedding, engagement, festival)</label>
                  <input
                    type="text"
                    value={newItem.occasion}
                    onChange={(e) => setNewItem(prev => ({ ...prev, occasion: e.target.value }))}
                    placeholder="wedding"
                    className="w-full px-4 py-2 border border-cream-200 rounded-lg text-sm bg-cream-50 focus:outline-none focus:border-maroon-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Placement (e.g. palm, back hand, feet)</label>
                  <input
                    type="text"
                    value={newItem.placement}
                    onChange={(e) => setNewItem(prev => ({ ...prev, placement: e.target.value }))}
                    placeholder="palm"
                    className="w-full px-4 py-2 border border-cream-200 rounded-lg text-sm bg-cream-50 focus:outline-none focus:border-maroon-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Complexity (e.g. heavy, medium, minimal)</label>
                  <input
                    type="text"
                    value={newItem.complexity}
                    onChange={(e) => setNewItem(prev => ({ ...prev, complexity: e.target.value }))}
                    placeholder="heavy"
                    className="w-full px-4 py-2 border border-cream-200 rounded-lg text-sm bg-cream-50 focus:outline-none focus:border-maroon-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Hand Side (e.g. front, back, both)</label>
                  <input
                    type="text"
                    value={newItem.side}
                    onChange={(e) => setNewItem(prev => ({ ...prev, side: e.target.value }))}
                    placeholder="front"
                    className="w-full px-4 py-2 border border-cream-200 rounded-lg text-sm bg-cream-50 focus:outline-none focus:border-maroon-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Design Elements (comma separated, e.g. mandala, flowers)</label>
                  <input
                    type="text"
                    value={newItem.designElements}
                    onChange={(e) => setNewItem(prev => ({ ...prev, designElements: e.target.value }))}
                    placeholder="mandala, flowers, leaves"
                    className="w-full px-4 py-2 border border-cream-200 rounded-lg text-sm bg-cream-50 focus:outline-none focus:border-maroon-700"
                  />
                </div>
                <div className="flex items-center gap-2 md:col-span-2 py-2">
                  <input
                    type="checkbox"
                    id="isSpecial"
                    checked={newItem.isSpecial}
                    onChange={(e) => setNewItem(prev => ({ ...prev, isSpecial: e.target.checked }))}
                    className="w-4 h-4 rounded text-maroon-700 focus:ring-maroon-500 cursor-pointer"
                  />
                  <label htmlFor="isSpecial" className="text-sm font-semibold text-gray-700 cursor-pointer select-none">
                    ⭐ Mark as Special (Show in Home Page Teaser immediately)
                  </label>
                </div>
                <div className="md:col-span-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-5 py-2 rounded-lg border border-cream-200 hover:bg-cream-50 text-sm font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={addingItem}
                    className="bg-maroon-700 hover:bg-maroon-600 text-white px-6 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 disabled:opacity-50 transition-colors"
                  >
                    {addingItem ? 'Adding...' : 'Save Design'}
                  </button>
                </div>
              </form>
            )}

            {/* Gallery Grid */}
            <div>
              <h3 className="font-display font-bold text-maroon-800 text-lg mb-4">Gallery Designs ({galleryItems.length})</h3>
              {loading ? (
                <div className="flex justify-center py-20"><div className="spinner" /></div>
              ) : galleryItems.length === 0 ? (
                <div className="bg-white rounded-2xl p-16 text-center border border-cream-200">
                  <Image size={40} className="text-cream-400 mx-auto mb-4" />
                  <p className="font-body text-gray-400">No designs found. Try syncing from your Google Sheet above!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {galleryItems.map(item => (
                    <div key={item._id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cream-200 flex flex-col justify-between">
                      {/* Image Thumbnail */}
                      <div className="aspect-square w-full relative overflow-hidden bg-cream-100 border-b border-cream-100">
                        <img
                          src={item.src}
                          alt="Mehndi design"
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                        {item.isSpecial && (
                          <div className="absolute top-2 left-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                            <Sparkles size={10} /> SPECIAL
                          </div>
                        )}
                      </div>

                      {/* Details & Toggles */}
                      <div className="p-4 space-y-4 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Tags info list */}
                          <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[11px] font-body text-gray-500">
                            <div><span className="font-semibold text-gray-400">Category:</span> {item.category || '—'}</div>
                            <div><span className="font-semibold text-gray-400">Occasion:</span> {item.occasion || '—'}</div>
                            <div><span className="font-semibold text-gray-400">Placement:</span> {item.placement || '—'}</div>
                            <div><span className="font-semibold text-gray-400">Complexity:</span> {item.complexity || '—'}</div>
                            <div className="col-span-2"><span className="font-semibold text-gray-400">Side:</span> {item.side || '—'}</div>
                          </div>
                          {item.designElements && item.designElements.length > 0 && (
                            <p className="text-[10px] text-gray-400 mt-2 line-clamp-1">
                              🏷️ {item.designElements.join(', ')}
                            </p>
                          )}
                        </div>

                        <div className="pt-3 border-t border-cream-100 flex items-center justify-between gap-2">
                          {/* Special Checkbox Toggle */}
                          <button
                            onClick={() => handleToggleSpecial(item)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                              item.isSpecial
                                ? 'bg-yellow-50 text-yellow-700 border border-yellow-200'
                                : 'bg-cream-50 text-gray-500 hover:bg-cream-100 border border-cream-100'
                            }`}
                          >
                            {item.isSpecial ? <Check size={12} /> : <Sparkles size={12} />}
                            {item.isSpecial ? 'Special (On)' : 'Make Special'}
                          </button>

                          {/* Delete Item */}
                          <button
                            onClick={() => handleDeleteGalleryItem(item._id)}
                            className="p-2 rounded-lg bg-red-50 text-red-400 hover:bg-red-100 hover:text-red-600 transition-colors"
                            title="Delete design"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
