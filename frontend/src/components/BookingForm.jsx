// import { useState, useEffect } from 'react';
// import { submitBooking } from '../services/api';
// import toast from 'react-hot-toast';
// import { Calendar, Phone, Mail, User, MapPin, MessageSquare, ChevronDown } from 'lucide-react';

// const EVENT_TYPES = ['Bridal', 'Engagement', 'Festival', 'Birthday', 'Corporate', 'Other'];
// const PACKAGES = ['Basic Mehndi Package', 'Festival Package', 'Engagement Package', 'Bridal Package', 'Not sure yet'];

// const Field = ({ icon: Icon, children }) => (
//   <div className="relative">
//     <div className="absolute left-4 top-1/2 -translate-y-1/2 text-maroon-400">
//       <Icon size={16} />
//     </div>
//     {children}
//   </div>
// );

// export default function BookingForm() {
//   const [form, setForm] = useState({
//     name: '', phone: '', email: '', eventDate: '',
//     eventType: '', packageSelected: '', location: '', message: ''
//   });
//   const [submitting, setSubmitting] = useState(false);
//   const [success, setSuccess] = useState(false);

//   // Pre-select package from URL param
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const pkg = params.get('package');
//     if (pkg) setForm(f => ({ ...f, packageSelected: pkg }));
//   }, []);

//   const handleChange = e => {
//     setForm(f => ({ ...f, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     setSubmitting(true);
//     try {
//       await submitBooking(form);
//       setSuccess(true);
//       toast.success('🎉 Booking submitted! We\'ll contact you within 12 hours.');
//       setForm({ name: '', phone: '', email: '', eventDate: '', eventType: '', packageSelected: '', location: '', message: '' });
//     } catch (err) {
//       toast.error(err.response?.data?.message || 'Something went wrong. Please try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const inputCls = "w-full pl-11 pr-4 py-3.5 bg-white border border-cream-300 rounded-xl font-body text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-maroon-400 focus:border-transparent transition-all";

//   return (
//     <section id="book" className="py-24 bg-maroon-900 relative overflow-hidden">
//       {/* Decorative */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-10 right-10 w-72 h-72 rounded-full border-2 border-gold-400" />
//         <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full border-2 border-gold-400" />
//       </div>

//       <div className="relative max-w-3xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <p className="section-subtitle text-gold-400 mb-4">Book Your Session</p>
//           <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-4">
//             Reserve Your Date
//           </h2>
//           <p className="font-body text-maroon-200 max-w-xl mx-auto">
//             Fill in your details and we'll be in touch within 12 hours to confirm your booking.
//           </p>
//         </div>

//         {success ? (
//           <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20">
//             <div className="text-6xl mb-4">🎊</div>
//             <h3 className="font-display text-3xl text-gold-400 font-bold mb-3">Booking Received!</h3>
//             <p className="font-body text-maroon-200 text-lg mb-6">
//               Thank you! Our team will contact you within 12 hours on WhatsApp to confirm your session.
//             </p>
//             <button
//               onClick={() => setSuccess(false)}
//               className="bg-gold-400 text-maroon-900 px-8 py-3 rounded-full font-body font-bold text-sm"
//             >
//               Make Another Booking
//             </button>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/20">
//             <div className="grid sm:grid-cols-2 gap-5">
//               <Field icon={User}>
//                 <input
//                   name="name" value={form.name} onChange={handleChange}
//                   placeholder="Your Full Name *" required className={inputCls}
//                 />
//               </Field>

//               <Field icon={Phone}>
//                 <input
//                   name="phone" value={form.phone} onChange={handleChange}
//                   placeholder="WhatsApp Number *" required className={inputCls}
//                 />
//               </Field>

//               <Field icon={Mail}>
//                 <input
//                   type="email" name="email" value={form.email} onChange={handleChange}
//                   placeholder="Email Address *" required className={inputCls}
//                 />
//               </Field>

//               <Field icon={Calendar}>
//                 <input
//                   type="date" name="eventDate" value={form.eventDate} onChange={handleChange}
//                   required className={inputCls}
//                   min={new Date().toISOString().split('T')[0]}
//                 />
//               </Field>

//               {/* Event Type select */}
//               <div className="relative">
//                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-maroon-400">
//                   <ChevronDown size={16} />
//                 </div>
//                 <select
//                   name="eventType" value={form.eventType} onChange={handleChange}
//                   required
//                   className={`${inputCls} appearance-none cursor-pointer`}
//                 >
//                   <option value="">Select Event Type *</option>
//                   {EVENT_TYPES.map(t => <option key={t}>{t}</option>)}
//                 </select>
//               </div>

//               {/* Package select */}
//               <div className="relative">
//                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-maroon-400">
//                   <ChevronDown size={16} />
//                 </div>
//                 <select
//                   name="packageSelected" value={form.packageSelected} onChange={handleChange}
//                   className={`${inputCls} appearance-none cursor-pointer`}
//                 >
//                   <option value="">Select Package (optional)</option>
//                   {PACKAGES.map(p => <option key={p}>{p}</option>)}
//                 </select>
//               </div>

//               <div className="sm:col-span-2">
//                 <Field icon={MapPin}>
//                   <input
//                     name="location" value={form.location} onChange={handleChange}
//                     placeholder="Event Venue / City" className={inputCls}
//                   />
//                 </Field>
//               </div>

//               <div className="sm:col-span-2 relative">
//                 <MessageSquare size={16} className="absolute left-4 top-4 text-maroon-400" />
//                 <textarea
//                   name="message" value={form.message} onChange={handleChange}
//                   placeholder="Any special requests or details about your design preference..."
//                   rows={4}
//                   className={`${inputCls} pt-4 resize-none`}
//                   style={{ paddingLeft: '2.75rem' }}
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               disabled={submitting}
//               className="mt-8 w-full bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-maroon-900 py-4 rounded-full font-body font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-lg"
//             >
//               {submitting ? 'Submitting...' : 'Submit Booking Request ✦'}
//             </button>

//             <p className="text-center mt-4 font-body text-maroon-300 text-xs">
//               * Required fields · Your data is safe with us · No spam, ever
//             </p>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// }

import { useState, useEffect } from 'react';
import { submitBooking } from '../services/api';
import toast from 'react-hot-toast';
import { Calendar, Phone, Mail, User, MapPin, MessageSquare, ChevronDown } from 'lucide-react';

const EVENT_TYPE_SUGGESTIONS = ['Bridal', 'Engagement', 'Festival', 'Birthday', 'Corporate', 'Other'];
const PACKAGES = [
  'Basic Mehndi Package',
  'Festival Package',
  'Engagement Package',
  'Bridal Package',
  'Not sure yet'
];

const Field = ({ icon: Icon, children }) => (
  <div className="relative">
    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-maroon-400">
      <Icon size={16} />
    </div>
    {children}
  </div>
);

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', eventDate: '',
    eventType: '', packageSelected: '', location: '', message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // validate eventType from URL (trim to avoid stray whitespace breaking enum match)
    const eventType = params.get('eventType')?.trim();
    if (eventType) {
      setForm(f => ({ ...f, eventType }));
    }

    // validate package from URL
    const pkg = params.get('package')?.trim();
    if (pkg && PACKAGES.includes(pkg)) {
      setForm(f => ({ ...f, packageSelected: pkg }));
    }
  }, []);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    // Normalize before sending — trims stray whitespace so values match backend enum exactly
    const payload = {
      ...form,
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      eventType: form.eventType.trim(),
      packageSelected: form.packageSelected.trim(),
      location: form.location.trim(),
      message: form.message.trim(),
    };

    if (!payload.eventType) {
      toast.error('Please select a valid event type.');
      return;
    }

    setSubmitting(true);
    try {
      await submitBooking(payload);
      setSuccess(true);
      toast.success('🎉 Booking submitted! We\'ll contact you within 12 hours.');
      setForm({ name: '', phone: '', email: '', eventDate: '', eventType: '', packageSelected: '', location: '', message: '' });
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls = "w-full pl-11 pr-4 py-3.5 bg-white border border-cream-300 rounded-xl font-body text-gray-700 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-maroon-400 focus:border-transparent transition-all";

  return (
    <section id="book" className="py-24 bg-maroon-900 relative overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-6">
        {success ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20">
            <div className="text-6xl mb-4">🎊</div>
            <h3 className="font-display text-3xl text-gold-400 font-bold mb-3">Booking Received!</h3>
            <p className="font-body text-maroon-200 text-lg mb-6">
              Thank you! Our team will contact you within 12 hours on WhatsApp to confirm your session.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-gold-400 text-maroon-900 px-8 py-3 rounded-full font-body font-bold text-sm"
            >
              Make Another Booking
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/20">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field icon={User}>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your Full Name *" required className={inputCls} />
              </Field>

              <Field icon={Phone}>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="WhatsApp Number *" required className={inputCls} />
              </Field>

              <Field icon={Mail}>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email Address *" required className={inputCls} />
              </Field>

              <Field icon={Calendar}>
                <input type="date" name="eventDate" value={form.eventDate} onChange={handleChange} required className={inputCls} min={new Date().toISOString().split('T')[0]} />
              </Field>

              {/* Event Type input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-maroon-400">
                  <ChevronDown size={16} />
                </div>
                <input
                  name="eventType"
                  value={form.eventType}
                  onChange={handleChange}
                  required
                  list="event-type-suggestions"
                  placeholder="Event Type *"
                  className={inputCls}
                />
                <datalist id="event-type-suggestions">
                  {EVENT_TYPE_SUGGESTIONS.map(t => (
                    <option key={t} value={t} />
                  ))}
                </datalist>
              </div>

              {/* Package select */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-maroon-400">
                  <ChevronDown size={16} />
                </div>
                <select
                  name="packageSelected"
                  value={form.packageSelected}
                  onChange={handleChange}
                  className={`${inputCls} appearance-none cursor-pointer`}
                >
                  <option value="">Select Package (optional)</option>
                  {PACKAGES.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <Field icon={MapPin}>
                  <input name="location" value={form.location} onChange={handleChange} placeholder="Event Venue / City" className={inputCls} />
                </Field>
              </div>

              <div className="sm:col-span-2 relative">
                <MessageSquare size={16} className="absolute left-4 top-4 text-maroon-400" />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Any special requests or details about your design preference..."
                  rows={4}
                  className={`${inputCls} pt-4 resize-none`}
                  style={{ paddingLeft: '2.75rem' }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 w-full bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-maroon-900 py-4 rounded-full font-body font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-lg"
            >
              {submitting ? 'Submitting...' : 'Submit Booking Request ✦'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
