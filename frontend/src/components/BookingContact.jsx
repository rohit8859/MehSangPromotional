// import { useState } from 'react';
// import { submitBooking } from '../services/api';

// export default function BookingContact() {
//   const [form, setForm] = useState({ name:'', phone:'', email:'', eventDate:'', eventType:'', location:'', message:'' });
//   const [submitting, setSubmitting] = useState(false);
//   const [toast, setToast] = useState(null);
//   const [errors, setErrors] = useState({});

//   const showToast = (msg, type='success') => {
//     setToast({ msg, type });
//     setTimeout(() => setToast(null), 4000);
//   };

//   const validate = () => {
//     const e = {};
//     if (!form.name.trim()) e.name = true;
//     if (!/^\d{10}$/.test(form.phone)) e.phone = true;
//     if (!/\S+@\S+\.\S+/.test(form.email)) e.email = true;
//     if (!form.eventDate || new Date(form.eventDate) < new Date()) e.eventDate = true;
//     if (!form.eventType) e.eventType = true;
//     if (!form.location.trim()) e.location = true;
//     setErrors(e);
//     return Object.keys(e).length === 0;
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     if (!validate()) return;
//     setSubmitting(true);
//     try {
//       await submitBooking(form);
//       showToast('✅ Booking submitted! We\'ll contact you within 12 hours.');
//       setForm({ name:'', phone:'', email:'', eventDate:'', eventType:'', location:'', message:'' });
//     } catch (err) {
//       showToast('❌ ' + (err.response?.data?.message || 'Something went wrong.'), 'error');
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const inp = (name, label, type='text', placeholder='') => (
//     <div style={{ marginBottom:20, position:'relative' }}>
//       <label style={{ display:'block', fontSize:'0.85rem', fontWeight:600, color:'var(--brown)', marginBottom:8, textTransform:'uppercase', letterSpacing:'0.5px' }}>{label}</label>
//       <input type={type} value={form[name]} placeholder={placeholder}
//         onChange={e => setForm(f => ({...f, [name]:e.target.value}))}
//         className="form-control"
//         style={{ borderColor: errors[name] ? '#cc3333' : '' }} />
//       {errors[name] && <span style={{ color:'#cc3333', fontSize:'0.78rem', marginTop:4, display:'block' }}>Required field</span>}
//     </div>
//   );

//   const socials = [
//     { icon:'📸', href:'https://instagram.com/mehsangofficial', label:'Instagram' },
//     { icon:'📘', href:'https://facebook.com/mehsangofficial', label:'Facebook' },
//     { icon:'🐦', href:'#', label:'Twitter' },
//   ];

//   return (
//     <section id="booking" className="section" style={{ background:'var(--beige)' }}>
//       <div className="container">
//         <div style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:60, alignItems:'start' }} className="contact-grid-resp">

//           {/* Info panel */}
//           <div id="contact" style={{
//             background:'var(--brown)', color:'#fff', padding:50, borderRadius:24,
//             boxShadow:'0 15px 35px var(--shadow)', position:'relative', overflow:'hidden',
//           }}>
//             <div style={{ position:'absolute', bottom:-50, right:-50, width:200, height:200, border:'2px solid rgba(212,175,55,0.15)', borderRadius:'50%', pointerEvents:'none' }} />
//             <p className="section-tagline" style={{ color:'var(--gold)' }}>Get In Touch</p>
//             <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:'1.8rem', color:'#fff', marginBottom:30 }}>Contact Studio</h3>

//             <div style={{ display:'flex', flexDirection:'column', gap:24, marginBottom:40 }}>
//               {[
//                 { icon:'📞', title:'Call Us', val:'+91 6395670421', href:'tel:+916395670421' },
//                 { icon:'💬', title:'WhatsApp Chat', val:'+91 6395670421', href:'https://wa.me/916395670421?text=Hi%20MehSang,%20I%20would%20like%20to%20book%20mehndi' },
//                 { icon:'✉️', title:'Email Studio', val:'mehsangofficial@gmail.com', href:'mailto:mehsangofficial@gmail.com' },
//                 { icon:'📍', title:'Address', val:'Main Market Green Park, New Delhi, 110016', href:null },
//               ].map(c => (
//                 <div key={c.title} style={{ display:'flex', alignItems:'flex-start', gap:16 }}>
//                   <span style={{ fontSize:'1.2rem', color:'var(--gold)', flexShrink:0 }}>{c.icon}</span>
//                   <div>
//                     <h4 style={{ color:'var(--gold)', fontSize:'0.85rem', textTransform:'uppercase', letterSpacing:1, marginBottom:4 }}>{c.title}</h4>
//                     {c.href ? <a href={c.href} target="_blank" rel="noreferrer" style={{ color:'var(--beige)', fontSize:'1rem', textDecoration:'none' }}>{c.val}</a>
//                       : <p style={{ color:'var(--beige)', fontSize:'0.95rem' }}>{c.val}</p>}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div style={{ display:'flex', gap:16 }}>
//               {socials.map(s => (
//                 <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-circle" title={s.label} style={{ fontSize:'1rem' }}>{s.icon}</a>
//               ))}
//             </div>
//           </div>

//           {/* Booking form */}
//           <div style={{ background:'#fff', padding:50, borderRadius:24, boxShadow:'0 15px 35px var(--shadow)', border:'1px solid rgba(75,46,46,0.03)' }}>
//             <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:'1.8rem', color:'var(--brown)', marginBottom:30, paddingBottom:12, position:'relative', borderBottom:'none' }}>
//               Request A Booking
//               <span style={{ display:'block', position:'absolute', bottom:0, left:0, width:40, height:3, background:'var(--gold)', borderRadius:999 }} />
//             </h3>

//             <form onSubmit={handleSubmit} noValidate>
//               {inp('name','Name','text','Enter your full name')}
//               <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }} className="form-row-resp">
//                 {inp('phone','Phone Number','tel','10-digit number')}
//                 {inp('email','Email Address','email','your@email.com')}
//               </div>
//               <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }} className="form-row-resp">
//                 {inp('eventDate','Event Date','date','')}
//                 <div style={{ marginBottom:20 }}>
//                   <label style={{ display:'block', fontSize:'0.85rem', fontWeight:600, color:'var(--brown)', marginBottom:8, textTransform:'uppercase', letterSpacing:'0.5px' }}>Event Type</label>
//                   <select value={form.eventType} onChange={e => setForm(f=>({...f,eventType:e.target.value}))} className="form-control" style={{ borderColor: errors.eventType?'#cc3333':'', cursor:'pointer' }}>
//                     <option value="">Select event type</option>
//                     <option>Bridal Ceremony</option>
//                     <option>Engagement</option>
//                     <option>Sangeet / Guests Group</option>
//                     <option>Festival Celebration</option>
//                     <option>Custom Concept</option>
//                   </select>
//                   {errors.eventType && <span style={{ color:'#cc3333', fontSize:'0.78rem', marginTop:4, display:'block' }}>Required</span>}
//                 </div>
//               </div>
//               {inp('location','Event Location','text','Venue details or address')}
//               <div style={{ marginBottom:20 }}>
//                 <label style={{ display:'block', fontSize:'0.85rem', fontWeight:600, color:'var(--brown)', marginBottom:8, textTransform:'uppercase', letterSpacing:'0.5px' }}>Special Requirements</label>
//                 <textarea value={form.message} onChange={e => setForm(f=>({...f,message:e.target.value}))}
//                   placeholder="Details about designs, guest counts, customization themes..."
//                   rows={4} className="form-control" style={{ resize:'vertical' }} />
//               </div>
//               <button type="submit" className="btn btn-primary" disabled={submitting} style={{ width:'100%', justifyContent:'center', marginTop:10 }}>
//                 {submitting ? 'Submitting...' : '✉ Request Booking'}
//               </button>
//             </form>
//           </div>
//         </div>

//         {/* Map */}
//         <div style={{ marginTop:80, borderRadius:24, overflow:'hidden', height:400, boxShadow:'0 10px 30px var(--shadow)' }}>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.082!2d77.2046!3d28.5494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26d83a1c7ad%3A0x75a41073c695e74d!2sGreen+Park%2C+New+Delhi!5e0!3m2!1sen!2sin!4v1703278988544"
//             width="100%" height="100%" style={{ border:0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Studio Location" />
//         </div>
//       </div>

//       {/* Toast */}
//       {toast && (
//         <div style={{ position:'fixed', bottom:30, right:30, zIndex:2500 }}>
//           <div className={`toast ${toast.type==='success'?'toast-success':''}`}>{toast.msg}</div>
//         </div>
//       )}

//       <style>{`
//         .contact-grid-resp { grid-template-columns:1fr 1.2fr; }
//         @media(max-width:991px){ .contact-grid-resp { grid-template-columns:1fr !important; gap:40px !important; } }
//         @media(max-width:576px){ .form-row-resp { grid-template-columns:1fr !important; } }
//       `}</style>
//     </section>
//   );
// }

import { useState } from 'react';
import { submitBooking } from '../services/api';
import { FaWhatsapp } from "react-icons/fa";

export default function BookingContact() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', eventDate:'', eventType:'', location:'', message:'' });
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState(null);
  const [errors, setErrors] = useState({});

  const showToast = (msg, type='success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = true;
    if (!/^\d{10}$/.test(form.phone)) e.phone = true;
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = true;
    if (!form.eventDate || new Date(form.eventDate) < new Date()) e.eventDate = true;
    if (!form.eventType) e.eventType = true;
    if (!form.location.trim()) e.location = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await submitBooking(form);
      showToast('✅ Booking submitted! We\'ll contact you within 12 hours.');
      setForm({ name:'', phone:'', email:'', eventDate:'', eventType:'', location:'', message:'' });
    } catch (err) {
      showToast('❌ ' + (err.response?.data?.message || 'Something went wrong.'), 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const inp = (name, label, type='text', placeholder='') => (
    <div style={{ marginBottom:20, position:'relative' }}>
      <label style={{ display:'block', fontSize:'0.85rem', fontWeight:600, color:'var(--brown)', marginBottom:8, textTransform:'uppercase', letterSpacing:'0.5px' }}>{label}</label>
      <input type={type} value={form[name]} placeholder={placeholder}
        onChange={e => setForm(f => ({...f, [name]:e.target.value}))}
        className="form-control"
        style={{ borderColor: errors[name] ? '#cc3333' : '' }} />
      {errors[name] && <span style={{ color:'#cc3333', fontSize:'0.78rem', marginTop:4, display:'block' }}>Required field</span>}
    </div>
  );

  return (
    <section id="booking" className="section" style={{ background:'var(--beige)' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1.2fr', gap:60, alignItems:'start' }} className="contact-grid-resp">

          {/* Info panel */}
          <div id="contact" style={{
            background:'var(--brown)', color:'#fff', padding:50, borderRadius:24,
            boxShadow:'0 15px 35px var(--shadow)', position:'relative', overflow:'hidden',
          }}>
            <div style={{ position:'absolute', bottom:-50, right:-50, width:200, height:200, border:'2px solid rgba(212,175,55,0.15)', borderRadius:'50%', pointerEvents:'none' }} />
            <p className="section-tagline" style={{ color:'var(--gold)' }}>Get In Touch</p>
            <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:'1.8rem', color:'#fff', marginBottom:30 }}>Contact Studio</h3>

            <div style={{ display:'flex', flexDirection:'column', gap:24, marginBottom:40 }}>
              {[
                { icon:'📞', title:'Call Us', val:'+91 6395670421', href:'tel:+916395670421' },
                { icon:'💬', title:'WhatsApp Chat', val:'+91 6395670421', href:'https://wa.me/916395670421?text=Hi%20MehSang,%20I%20would%20like%20to%20book%20mehndi' },
                { icon:'✉️', title:'Email Studio', val:'mehsangofficial@gmail.com', href:'mailto:mehsangofficial@gmail.com' },
                { icon:'📍', title:'Address', val:'Main Market Green Park, New Delhi, 110016', href:null },
              ].map(c => (
                <div key={c.title} style={{ display:'flex', alignItems:'flex-start', gap:16 }}>
                  <span style={{ fontSize:'1.2rem', color:'var(--gold)', flexShrink:0 }}>{c.icon}</span>
                  <div>
                    <h4 style={{ color:'var(--gold)', fontSize:'0.85rem', textTransform:'uppercase', letterSpacing:1, marginBottom:4 }}>{c.title}</h4>
                    {c.href ? <a href={c.href} target="_blank" rel="noreferrer" style={{ color:'var(--beige)', fontSize:'1rem', textDecoration:'none' }}>{c.val}</a>
                      : <p style={{ color:'var(--beige)', fontSize:'0.95rem' }}>{c.val}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp only */}
            <div style={{ display:'flex', gap:16 }}>
              <a href="https://wa.me/916395670421?text=Hi%20MehSang,%20I%20would%20like%20to%20book%20mehndi"
                 target="_blank" rel="noreferrer" className="social-circle" title="WhatsApp">
                <FaWhatsapp size={28} color="#25D366" />
              </a>
            </div>
          </div>

          {/* Booking form */}
          <div style={{ background:'#fff', padding:50, borderRadius:24, boxShadow:'0 15px 35px var(--shadow)', border:'1px solid rgba(75,46,46,0.03)' }}>
            <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:'1.8rem', color:'var(--brown)', marginBottom:30, paddingBottom:12, position:'relative', borderBottom:'none' }}>
              Request A Booking
              <span style={{ display:'block', position:'absolute', bottom:0, left:0, width:40, height:3, background:'var(--gold)', borderRadius:999 }} />
            </h3>

            <form onSubmit={handleSubmit} noValidate>
              {inp('name','Name','text','Enter your full name')}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }} className="form-row-resp">
                {inp('phone','Phone Number','tel','10-digit number')}
                {inp('email','Email Address','email','your@email.com')}
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }} className="form-row-resp">
                {inp('eventDate','Event Date','date','')}
                <div style={{ marginBottom:20 }}>
                  <label style={{ display:'block', fontSize:'0.85rem', fontWeight:600, color:'var(--brown)', marginBottom:8, textTransform:'uppercase', letterSpacing:'0.5px' }}>Event Type</label>
                  <select value={form.eventType} onChange={e => setForm(f=>({...f,eventType:e.target.value}))} className="form-control" style={{ borderColor: errors.eventType?'#cc3333':'', cursor:'pointer' }}>
                    <option value="">Select event type</option>
                    <option>Bridal Ceremony</option>
                    <option>Engagement</option>
                    <option>Sangeet / Guests Group</option>
                    <option>Festival Celebration</option>
                    <option>Custom Concept</option>
                  </select>
                  {errors.eventType && <span style={{ color:'#cc3333', fontSize:'0.78rem', marginTop:4, display:'block' }}>Required</span>}
                </div>
              </div>
              {inp('location','Event Location','text','Venue details or address')}
              <div style={{ marginBottom:20 }}>
                <label style={{ display:'block', fontSize:'0.85rem', fontWeight:600, color:'var(--brown)', marginBottom:8, textTransform:'uppercase', letterSpacing:'0.5px' }}>Special Requirements</label>
                <textarea value={form.message} onChange={e => setForm(f=>({...f,message:e.target.value}))}
                  placeholder="Details about designs, guest counts, customization themes..."
                  rows={4} className="form-control" style={{ resize:'vertical' }} />
              </div>
              <button type="submit" className="btn btn-primary" disabled={submitting} style={{ width:'100%', justifyContent:'center', marginTop:10 }}>
                {submitting ? 'Submitting...' : '✉ Request Booking'}
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div style={{ marginTop:80, borderRadius:24, overflow:'hidden', height:400, boxShadow:'0 10px 30px var(--shadow)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.082!2d77.2046!3d28.5494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26d83a1c7ad%3A0x75a41073c695e74d!2sGreen+Park%2C+New+Delhi!5e0!3m2!1sen!2sin!4v1703278988544"
            width="100%" height="100%" style={{ border:0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Studio Location" />
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div style={{ position:'fixed', bottom:30, right:30, zIndex:2500 }}>
          <div className={`toast ${toast.type==='success'?'toast-success':''}`}>{toast.msg}</div>
        </div>
      )}

      <style>{`
        .contact-grid-resp { grid-template-columns:1fr 1.2fr; }
        @media(max-width:991px){ .contact-grid-resp { grid-template-columns:1fr !important; gap:40px !important; } }
        @media(max-width:576px){ .form-row-resp { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
} 
