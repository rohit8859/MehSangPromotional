// const features = [
//   { icon: '🏆', title: 'Years of Experience', desc: 'Decorating over 500+ brides with stunning art.' },
//   { icon: '✨', title: 'Professional Artistry', desc: 'Highly intricate, neat, and sharp layouts.' },
//   { icon: '🎨', title: 'Customized Designs', desc: 'Incorporate love stories, initials, and themes.' },
//   { icon: '😊', title: 'Customer Satisfaction', desc: 'Delighting clients with professional service.' },
// ];

// export default function About() {
//   return (
//     <section id="about" className="section" style={{ background:'var(--ivory)' }}>
//       <div className="container">
//         <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }} className="about-grid-resp">
//           {/* Image */}
//           <div style={{ position:'relative', borderRadius:24, overflow:'hidden', boxShadow:'0 20px 40px var(--shadow)' }}>
//             <div style={{
//               position:'absolute', top:15, left:15, right:15, bottom:15,
//               border:'2px solid var(--gold)', borderRadius:19, zIndex:2, pointerEvents:'none',
//             }} />
//             <img src="/gallary/about2.png"
//   alt="MehSang artist applying bridal henna" style={{ width:'100%', height:550, objectFit:'cover' }} />
//             {/* <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80"
//               alt="Mehndi artist applying henna" style={{ width:'100%', height:550, objectFit:'cover' }} /> */}
//           </div>

//           {/* Text */}
//           <div>
//             <p className="section-tagline">The Story Behind The Stains</p>
//             <h2 className="section-title">About MehSang</h2>
//             <p style={{ color:'var(--text-light)', marginBottom:15, lineHeight:1.8 }}>
//               MehSang is dedicated to creating memorable, highly personalized mehndi experiences through intricate bridal art, professional service, and organic excellence. We specialize in custom-crafted designs that beautifully blend traditional Indian heritage with contemporary floral and geometric creativity.
//             </p>
//             <p style={{ color:'var(--text-light)', lineHeight:1.8, marginBottom:'2rem' }}>
//               Our formulas are crafted from 100% natural, chemical-free henna leaves, ensuring a deep mahogany stain that is safe for all skin types.
//             </p>
//             <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginTop:'1rem' }}>
//               {features.map(f => (
//                 <div key={f.title} style={{ display:'flex', alignItems:'flex-start', gap:16 }}>
//                   <div style={{
//                     background:'var(--beige)', color:'var(--gold-dark)',
//                     padding:10, borderRadius:'50%', display:'flex', alignItems:'center',
//                     justifyContent:'center', flexShrink:0, fontSize:'1.1rem', width:42, height:42,
//                   }}>{f.icon}</div>
//                   <div>
//                     <h4 style={{ fontWeight:600, color:'var(--brown)', marginBottom:4, fontSize:'0.95rem' }}>{f.title}</h4>
//                     <p style={{ fontSize:'0.85rem', color:'var(--text-light)' }}>{f.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <style>{`
//         .about-grid-resp { grid-template-columns:1fr 1fr; }
//         @media(max-width:991px){ .about-grid-resp { grid-template-columns:1fr !important; gap:40px !important; } }
//       `}</style>
//     </section>
//   );
// }

// const features = [
//   { icon: '🏆', title: 'Years of Experience', desc: 'Decorating over 500+ brides with stunning art.' },
//   { icon: '✨', title: 'Professional Artistry', desc: 'Highly intricate, neat, and sharp layouts.' },
//   { icon: '🎨', title: 'Customized Designs', desc: 'Incorporate love stories, initials, and themes.' },
//   { icon: '😊', title: 'Customer Satisfaction', desc: 'Delighting clients with professional service.' },
// ];

// export default function About() {
//   return (
//     <section id="about" className="section" style={{ background:'var(--ivory)' }}>
//       <div className="container">
//         <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }} className="about-grid-resp">
//           {/* Image */}
//           <div style={{ position:'relative', borderRadius:24, overflow:'hidden', boxShadow:'0 20px 40px var(--shadow)' }}>
//             <div style={{
//               position:'absolute', top:15, left:15, right:15, bottom:15,
//               border:'2px solid var(--gold)', borderRadius:19, zIndex:2, pointerEvents:'none',
//             }} />
//             <img src="/gallery/about-mehndi-artist.png"
//               alt="MehSang artist applying bridal henna" style={{ width:'100%', height:550, objectFit:'cover' }} />
//           </div>

//           {/* Text */}
//           <div>
//             <p className="section-tagline">The Story Behind The Stains</p>
//             <h2 className="section-title">About MehSang</h2>
//             <p style={{ color:'var(--text-light)', marginBottom:15, lineHeight:1.8 }}>
//               MehSang is dedicated to creating memorable, highly personalized mehndi experiences through intricate bridal art, professional service, and organic excellence. We specialize in custom-crafted designs that beautifully blend traditional Indian heritage with contemporary floral and geometric creativity.
//             </p>
//             <p style={{ color:'var(--text-light)', lineHeight:1.8, marginBottom:'2rem' }}>
//               Our formulas are crafted from 100% natural, chemical-free henna leaves, ensuring a deep mahogany stain that is safe for all skin types.
//             </p>
//             <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginTop:'1rem' }}>
//               {features.map(f => (
//                 <div key={f.title} style={{ display:'flex', alignItems:'flex-start', gap:16 }}>
//                   <div style={{
//                     background:'var(--beige)', color:'var(--gold-dark)',
//                     padding:10, borderRadius:'50%', display:'flex', alignItems:'center',
//                     justifyContent:'center', flexShrink:0, fontSize:'1.1rem', width:42, height:42,
//                   }}>{f.icon}</div>
//                   <div>
//                     <h4 style={{ fontWeight:600, color:'var(--brown)', marginBottom:4, fontSize:'0.95rem' }}>{f.title}</h4>
//                     <p style={{ fontSize:'0.85rem', color:'var(--text-light)' }}>{f.desc}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <style>{`
//         .about-grid-resp { grid-template-columns:1fr 1fr; }
//         @media(max-width:991px){ .about-grid-resp { grid-template-columns:1fr !important; gap:40px !important; } }
//       `}</style>
//     </section>
//   );
// }

const features = [
  { icon: '🏆', title: 'Years of Experience', desc: 'Decorating over 500+ brides with stunning art.' },
  { icon: '✨', title: 'Professional Artistry', desc: 'Highly intricate, neat, and sharp layouts.' },
  { icon: '🎨', title: 'Customized Designs', desc: 'Incorporate love stories, initials, and themes.' },
  { icon: '😊', title: 'Customer Satisfaction', desc: 'Delighting clients with professional service.' },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background:'var(--ivory)' }}>
      <div className="container">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }} className="about-grid-resp">
          
          {/* Image */}
          <div style={{ position:'relative', borderRadius:24, overflow:'hidden', boxShadow:'0 20px 40px var(--shadow)' }}>
            {/* Removed background logo/border div */}
            <img 
              src="/gallery/about-mehndi-artist.png"
              alt="MehSang artist applying bridal henna" 
              className="about-img"
              style={{ width:'100%', height:'auto', objectFit:'cover' }} 
            />
          </div>

          {/* Text */}
          <div>
            <p className="section-tagline">The Story Behind The Stains</p>
            <h2 className="section-title">About MehSang</h2>
            <p style={{ color:'var(--text-light)', marginBottom:15, lineHeight:1.8 }}>
              MehSang is dedicated to creating memorable, highly personalized mehndi experiences through intricate bridal art, professional service, and organic excellence. We specialize in custom-crafted designs that beautifully blend traditional Indian heritage with contemporary floral and geometric creativity.
            </p>
            <p style={{ color:'var(--text-light)', lineHeight:1.8, marginBottom:'2rem' }}>
              Our formulas are crafted from 100% natural, chemical-free henna leaves, ensuring a deep mahogany stain that is safe for all skin types.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24, marginTop:'1rem' }}>
              {features.map(f => (
                <div key={f.title} style={{ display:'flex', alignItems:'flex-start', gap:16 }}>
                  <div style={{
                    background:'var(--beige)', color:'var(--gold-dark)',
                    padding:10, borderRadius:'50%', display:'flex', alignItems:'center',
                    justifyContent:'center', flexShrink:0, fontSize:'1.1rem', width:42, height:42,
                  }}>{f.icon}</div>
                  <div>
                    <h4 style={{ fontWeight:600, color:'var(--brown)', marginBottom:4, fontSize:'0.95rem' }}>{f.title}</h4>
                    <p style={{ fontSize:'0.85rem', color:'var(--text-light)' }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .about-grid-resp { grid-template-columns:1fr 1fr; }
        @media(max-width:991px){ 
          .about-grid-resp { grid-template-columns:1fr !important; gap:40px !important; } 
          .about-img { height:auto !important; max-height:400px; display:block; margin:0 auto; }
        }
        @media(max-width:576px){
          .about-img { height:auto !important; max-height:300px; display:block; margin:0 auto; }
        }
      `}</style>
    </section>
  );
}
