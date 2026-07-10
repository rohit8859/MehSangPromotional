import { Link } from 'react-router-dom';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Reviews', path: '/about' },
    { label: 'Pricing', path: '/services' },
    { label: 'Contact', path: '/book' },
  ];
  const svcLinks = ['Bridal Mehndi','Engagement Mehndi','Wedding Guest Mehndi','Festival Mehndi','Arabic Mehndi','Custom Designs'];

  return (
    <footer style={{ background:'var(--brown)', color:'#fff', padding:'80px 0 30px', borderTop:'3px solid var(--gold)' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr 1fr', gap:40, marginBottom:50 }} className="footer-grid-resp">

          {/* Brand */}
          <div>
            <Link to="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
              <img 
                src="/logo.png" 
                alt="MehSang Logo" 
                style={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  objectFit: 'contain', 
                  background: '#fff', 
                  padding: '2px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }} 
              />
              <span style={{ fontFamily:'Playfair Display,serif', fontSize:'1.8rem', fontWeight:800, color:'#fff', letterSpacing:1 }}>MehSang</span>
            </Link>
            <p style={{ color:'var(--beige)', marginTop:15, fontSize:'0.9rem', lineHeight:1.7 }}>
              Dedicated to creating memorable mehndi experiences through chemical-free organic henna and beautiful, intricate designs.
            </p>
            <div style={{ display:'flex', gap:12, marginTop:15 }}>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ color:'var(--gold)', fontSize:'1.1rem', fontFamily:'Playfair Display,serif', marginBottom:24, position:'relative', paddingBottom:8 }}>
              Quick Links
              <span style={{ position:'absolute', bottom:0, left:0, width:30, height:2, background:'var(--gold)', display:'block' }} />
            </h4>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {quickLinks.map(l => (
                <Link key={l.label} to={l.path} style={{ color:'var(--beige)', fontSize:'0.9rem', textDecoration:'none', transition:'all 0.2s' }}
                  onMouseEnter={e => { e.target.style.color='var(--gold)'; e.target.style.paddingLeft='5px'; }}
                  onMouseLeave={e => { e.target.style.color='var(--beige)'; e.target.style.paddingLeft='0'; }}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color:'var(--gold)', fontSize:'1.1rem', fontFamily:'Playfair Display,serif', marginBottom:24, position:'relative', paddingBottom:8 }}>
              Services
              <span style={{ position:'absolute', bottom:0, left:0, width:30, height:2, background:'var(--gold)', display:'block' }} />
            </h4>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {svcLinks.map(l => (
                <Link key={l} to="/services" style={{ color:'var(--beige)', fontSize:'0.9rem', textDecoration:'none', transition:'all 0.2s' }}
                  onMouseEnter={e => { e.target.style.color='var(--gold)'; e.target.style.paddingLeft='5px'; }}
                  onMouseLeave={e => { e.target.style.color='var(--beige)'; e.target.style.paddingLeft='0'; }}>{l}</Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ color:'var(--gold)', fontSize:'1.1rem', fontFamily:'Playfair Display,serif', marginBottom:24, position:'relative', paddingBottom:8 }}>
              Working Hours
              <span style={{ position:'absolute', bottom:0, left:0, width:30, height:2, background:'var(--gold)', display:'block' }} />
            </h4>
            <div style={{ display:'flex', flexDirection:'column', gap:8, color:'var(--beige)', fontSize:'0.9rem' }}>
              <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
              <p>Sat - Sun: 8:00 AM - 9:00 PM</p>
              <p style={{ marginTop:10, color:'var(--gold)', fontWeight:500 }}>Prior Booking Essential</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:30, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:15 }}>
          <p style={{ fontSize:'0.85rem', color:'var(--beige-dark)' }}>© 2026 MehSang. All Rights Reserved.</p>
          <p style={{ fontSize:'0.85rem', color:'var(--beige-dark)' }}>Designed with Love for Premium Artistry</p>
        </div>
      </div>
      <style>{`
        .footer-grid-resp { grid-template-columns:1.5fr 1fr 1fr 1fr; }
        @media(max-width:768px){ .footer-grid-resp { grid-template-columns:1fr 1fr !important; } }
        @media(max-width:480px){ .footer-grid-resp { grid-template-columns:1fr !important; } }
      `}</style>
    </footer>
  );
}


// import { FaWhatsapp } from "react-icons/fa";

// export default function Footer() {
//   const quickLinks = ['Home','About','Services','Gallery','Reviews','Pricing','Contact'];
//   const svcLinks = ['Bridal Mehndi','Engagement Mehndi','Wedding Guest Mehndi','Festival Mehndi','Arabic Mehndi','Custom Designs'];

//   return (
//     <footer style={{ background:'var(--brown)', color:'#fff', padding:'80px 0 30px', borderTop:'3px solid var(--gold)' }}>
//       <div className="container">
//         <div style={{ display:'grid', gridTemplateColumns:'1.5fr 1fr 1fr 1fr', gap:40, marginBottom:50 }} className="footer-grid-resp">

//           {/* WhatsApp Only */}
//           <div>
//             <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
//                style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
//               <FaWhatsapp size={40} color="#25D366" />
//               <span style={{ fontFamily:'Playfair Display,serif', fontSize:'1.2rem', fontWeight:600, color:'#fff' }}>
//                 WhatsApp
//               </span>
//             </a>
//             <p style={{ color:'var(--beige)', marginTop:15, fontSize:'0.9rem', lineHeight:1.7 }}>
//               Reach us instantly on WhatsApp for bookings, inquiries, and personalized mehndi services.
//             </p>
//           </div>

//           {/* Quick links */}
//           <div>
//             <h4 style={{ color:'var(--gold)', fontSize:'1.1rem', fontFamily:'Playfair Display,serif', marginBottom:24, position:'relative', paddingBottom:8 }}>
//               Quick Links
//               <span style={{ position:'absolute', bottom:0, left:0, width:30, height:2, background:'var(--gold)', display:'block' }} />
//             </h4>
//             <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
//               {quickLinks.map(l => (
//                 <a key={l} href={`#${l.toLowerCase()}`} style={{ color:'var(--beige)', fontSize:'0.9rem', textDecoration:'none', transition:'all 0.2s' }}
//                   onMouseEnter={e => { e.target.style.color='var(--gold)'; e.target.style.paddingLeft='5px'; }}
//                   onMouseLeave={e => { e.target.style.color='var(--beige)'; e.target.style.paddingLeft='0'; }}>{l}</a>
//               ))}
//             </div>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 style={{ color:'var(--gold)', fontSize:'1.1rem', fontFamily:'Playfair Display,serif', marginBottom:24, position:'relative', paddingBottom:8 }}>
//               Services
//               <span style={{ position:'absolute', bottom:0, left:0, width:30, height:2, background:'var(--gold)', display:'block' }} />
//             </h4>
//             <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
//               {svcLinks.map(l => (
//                 <a key={l} href="#services" style={{ color:'var(--beige)', fontSize:'0.9rem', textDecoration:'none', transition:'all 0.2s' }}
//                   onMouseEnter={e => { e.target.style.color='var(--gold)'; e.target.style.paddingLeft='5px'; }}
//                   onMouseLeave={e => { e.target.style.color='var(--beige)'; e.target.style.paddingLeft='0'; }}>{l}</a>
//               ))}
//             </div>
//           </div>

//           {/* Hours */}
//           <div>
//             <h4 style={{ color:'var(--gold)', fontSize:'1.1rem', fontFamily:'Playfair Display,serif', marginBottom:24, position:'relative', paddingBottom:8 }}>
//               Working Hours
//               <span style={{ position:'absolute', bottom:0, left:0, width:30, height:2, background:'var(--gold)', display:'block' }} />
//             </h4>
//             <div style={{ display:'flex', flexDirection:'column', gap:8, color:'var(--beige)', fontSize:'0.9rem' }}>
//               <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
//               <p>Sat - Sun: 8:00 AM - 9:00 PM</p>
//               <p style={{ marginTop:10, color:'var(--gold)', fontWeight:500 }}>Prior Booking Essential</p>
//             </div>
//           </div>
//         </div>

//         <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:30, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:15 }}>
//           <p style={{ fontSize:'0.85rem', color:'var(--beige-dark)' }}>© 2026 MehSang. All Rights Reserved.</p>
//           <p style={{ fontSize:'0.85rem', color:'var(--beige-dark)' }}>Designed with Love for Premium Artistry</p>
//         </div>
//       </div>
//       <style>{`
//         .footer-grid-resp { grid-template-columns:1.5fr 1fr 1fr 1fr; }
//         @media(max-width:768px){ .footer-grid-resp { grid-template-columns:1fr 1fr !important; } }
//         @media(max-width:480px){ .footer-grid-resp { grid-template-columns:1fr !important; } }
//       `}</style>
//     </footer>
//   );
// }
