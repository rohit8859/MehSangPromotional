

// import { useState } from 'react';

// const allItems = [
//   { src:'/gallery/bridal-1.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-2.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-3.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-4.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-5.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-6.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-7.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-8.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-9.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-10.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-11.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-12.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/arabic-1.jpg', category:'arabic', tag:'Arabic' },
//   { src:'/gallery/engagement-1.jpg', category:'traditional', tag:'Traditional' },
//   { src:'/gallery/festival-1.jpg', category:'modern', tag:'Modern' },
//   { src:'/gallery/gallery-1.jpg', category:'modern', tag:'Modern' },
//   { src:'/gallery/gallery-2.jpg', category:'minimal', tag:'Minimal' },
//   { src:'/gallery/gallery-3.jpg', category:'traditional', tag:'Traditional' },
//   { src:'/gallery/gallery-4.jpg', category:'arabic', tag:'Arabic' },
//   { src:'/gallery/gallery-5.jpg', category:'minimal', tag:'Minimal' },
//   { src:'/gallery/gallery-6.jpg', category:'traditional', tag:'Traditional' },
//   { src:'/gallery/gallery-7.jpg', category:'arabic', tag:'Arabic' },
//   { src:'/gallery/gallery-8.jpg', category:'modern', tag:'Modern' },
//   { src:'/gallery/gallery-9.jpg', category:'minimal', tag:'Minimal' },
//   { src:'/gallery/gallery-10.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/gallery-11.jpg', category:'arabic', tag:'Arabic' },
//   { src:'/gallery/gallery-12.jpg', category:'traditional', tag:'Traditional' },
//   { src:'/gallery/gallery-13.jpg', category:'modern', tag:'Modern' },
//   { src:'/gallery/gallery-14.jpg', category:'minimal', tag:'Minimal' },
//   { src:'/gallery/gallery-15.jpg', category:'arabic', tag:'Arabic' },
//   { src:'/gallery/gallery-16.jpg', category:'traditional', tag:'Traditional' },
//   { src:'/gallery/gallery-17.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/gallery-18.webp', category:'modern', tag:'Modern' },
//   { src:'/gallery/gallery-19.jpg', category:'minimal', tag:'Minimal' },
//   { src:'/gallery/gallery-20.jpg', category:'arabic', tag:'Arabic' },
// ];

// const FILTERS = ['all','bridal','arabic','traditional','modern','minimal'];

// export default function Gallery() {
//   const [active, setActive] = useState('all');
//   const [lightbox, setLightbox] = useState(null);

//   const filtered = active === 'all' ? allItems : allItems.filter(i => i.category === active);

//   return (
//     <section id="gallery" className="section" style={{ background:'var(--ivory)' }}>
//       <div className="container">
//         <p className="section-tagline" style={{ textAlign:'center' }}>Our Masterpieces</p>
//         <h2 className="section-title center" style={{ textAlign:'center' }}>Stunning Design Gallery</h2>

//         {/* Filters */}
//         <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap', marginBottom:40, marginTop:10 }}>
//           {FILTERS.map(f => (
//             <button key={f} onClick={() => setActive(f)}
//               className={`filter-btn${active===f?' active':''}`}>
//               {f === 'all' ? 'All Designs' : f.charAt(0).toUpperCase()+f.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Masonry */}
//         <div className="masonry-grid">
//           {filtered.map((item, i) => (
//             <div key={item.src+i} className="masonry-item" style={{ position:'relative', borderRadius:16, overflow:'hidden', boxShadow:'0 8px 20px var(--shadow)', cursor:'pointer' }}
//               onClick={() => setLightbox(item)}>
//               <img src={item.src} alt={item.tag} loading="lazy"
//                 style={{ width:'100%', display:'block', borderRadius:16, transition:'transform 0.4s' }}
//                 onMouseEnter={e => e.target.style.transform='scale(1.05)'}
//                 onMouseLeave={e => e.target.style.transform=''} />
//               <div style={{
//                 position:'absolute', inset:0,
//                 background:'linear-gradient(to top, rgba(75,46,46,0.9), rgba(75,46,46,0.2))',
//                 display:'flex', flexDirection:'column', justifyContent:'flex-end',
//                 padding:24, opacity:0, transition:'opacity 0.4s', borderRadius:16,
//               }}
//                 onMouseEnter={e => e.currentTarget.style.opacity=1}
//                 onMouseLeave={e => e.currentTarget.style.opacity=0}>
//                 <span style={{ fontSize:'0.75rem', color:'var(--gold)', textTransform:'uppercase', fontWeight:600, letterSpacing:1, marginBottom:4 }}>
//                   {item.tag}
//                 </span>
//                 {/* Title removed */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox */}
//       {lightbox && (
//         <div className="modal-overlay" onClick={() => setLightbox(null)}>
//           <button onClick={() => setLightbox(null)} style={{
//             position:'absolute', top:24, right:24, width:50, height:50,
//             borderRadius:'50%', background:'rgba(255,255,255,0.1)', color:'#fff',
//             display:'flex', alignItems:'center', justifyContent:'center',
//             border:'none', cursor:'pointer', fontSize:'1.4rem',
//           }}>×</button>
//           <div onClick={e => e.stopPropagation()} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:16 }}>
//             <img src={lightbox.src} alt={lightbox.tag}
//               style={{ maxHeight:'75vh', maxWidth:'90vw', objectFit:'contain', borderRadius:16, boxShadow:'0 10px 40px rgba(0,0,0,0.5)' }} />
//             {/* Title removed */}
//           </div>
//         </div>
//       )}
//     </section>
//   );
import { useState } from 'react';

const allItems = [
  { src:'/gallery/bridal-1.jpg', category:'bridal', tag:'Bridal' },
  { src:'/gallery/bridal-2.jpg', category:'bridal', tag:'Bridal' },
  { src:'/gallery/bridal-3.jpg', category:'bridal', tag:'Bridal' },
  { src:'/gallery/bridal-4.jpg', category:'bridal', tag:'Bridal' },
  { src:'/gallery/bridal-5.jpg', category:'bridal', tag:'Bridal' },
  { src:'/gallery/bridal-6.jpg', category:'bridal', tag:'Bridal' },
  { src:'/gallery/bridal-7.jpg', category:'bridal', tag:'Bridal' },
  { src:'/gallery/bridal-8.jpg', category:'bridal', tag:'Bridal' },
  { src:'/gallery/bridal-9.jpg', category:'bridal', tag:'Bridal' },
  { src:'/gallery/bridal-10.jpg', category:'bridal', tag:'Bridal' },
  { src:'/gallery/bridal-11.jpg', category:'bridal', tag:'Bridal' },
  { src:'/gallery/bridal-12.jpg', category:'bridal', tag:'Bridal' },
  { src:'/gallery/arabic-1.jpg', category:'arabic', tag:'Arabic' },
  { src:'/gallery/gallery-4.jpg', category:'arabic', tag:'Arabic' },
  { src:'/gallery/gallery-7.jpg', category:'arabic', tag:'Arabic' },
  { src:'/gallery/gallery-11.jpg', category:'arabic', tag:'Arabic' },
  { src:'/gallery/gallery-15.jpg', category:'arabic', tag:'Arabic' },
  { src:'/gallery/gallery-20.jpg', category:'arabic', tag:'Arabic' },
  { src:'/gallery/festival-1.jpg', category:'modern', tag:'Modern' },
  { src:'/gallery/gallery-1.jpg', category:'modern', tag:'Modern' },
  { src:'/gallery/gallery-8.jpg', category:'modern', tag:'Modern' },
  { src:'/gallery/gallery-13.jpg', category:'modern', tag:'Modern' },
  { src:'/gallery/gallery-18.webp', category:'modern', tag:'Modern' },
  { src:'/gallery/gallery-2.jpg', category:'minimal', tag:'Minimal' },
  { src:'/gallery/gallery-5.jpg', category:'minimal', tag:'Minimal' },
  { src:'/gallery/gallery-9.jpg', category:'minimal', tag:'Minimal' },
  { src:'/gallery/gallery-14.jpg', category:'minimal', tag:'Minimal' },
  { src:'/gallery/gallery-19.jpg', category:'minimal', tag:'Minimal' },
  { src:'/gallery/engagement-1.jpg', category:'traditional', tag:'Traditional' },
  { src:'/gallery/gallery-3.jpg', category:'traditional', tag:'Traditional' },
  { src:'/gallery/gallery-6.jpg', category:'traditional', tag:'Traditional' },
  { src:'/gallery/gallery-12.jpg', category:'traditional', tag:'Traditional' },
  { src:'/gallery/gallery-16.jpg', category:'traditional', tag:'Traditional' },
];

const FILTERS = ['all', 'bridal', 'arabic', 'traditional', 'modern', 'minimal'];

export default function Gallery() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? allItems : allItems.filter(item => item.category === active);

  return (
    <section id="gallery" className="section" style={{ background:'var(--ivory)' }}>
      <div className="container">
        <p className="section-tagline" style={{ textAlign:'center' }}>Our Masterpieces</p>
        <h2 className="section-title center" style={{ textAlign:'center' }}>Stunning Design Gallery</h2>

        <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap', marginBottom:40, marginTop:10 }}>
          {FILTERS.map(filter => (
            <button key={filter} onClick={() => setActive(filter)} className={`filter-btn${active === filter ? ' active' : ''}`}>
              {filter === 'all' ? 'All Designs' : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-scroll">
          {filtered.map((item, index) => (
            <div key={item.src + index} className="masonry-item" style={{ position:'relative', borderRadius:16, overflow:'hidden', boxShadow:'0 8px 20px var(--shadow)', cursor:'pointer' }}>
              <img src={item.src} alt={item.tag} loading="lazy" style={{ width:'100%', display:'block', borderRadius:16, transition:'transform 0.4s' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(75,46,46,0.9), rgba(75,46,46,0.2))', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:24, opacity:0, transition:'opacity 0.4s', borderRadius:16 }}>
                <span style={{ fontSize:'0.75rem', color:'var(--gold)', textTransform:'uppercase', fontWeight:600, letterSpacing:1, marginBottom:4 }}>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .gallery-scroll {
          display: flex;
          flex-wrap: nowrap;
          gap: 15px;
          overflow-x: auto;
          overflow-y: hidden;
          padding-bottom: 10px;
          scroll-snap-type: x mandatory;
        }
        .masonry-item {
          width: 220px;
          height: 220px;
          flex: 0 0 auto;
          aspect-ratio: 1;
          scroll-snap-align: start;
        }
        .masonry-item:hover img {
          transform: scale(1.05);
        }
        .masonry-item:hover div {
          opacity: 1;
        }
        @media(max-width:991px){
          .masonry-item { width: 200px; height: 200px; }
        }
        @media(max-width:480px){
          .masonry-item {
            width: 200px;
            height: 200px;
            flex: 0 0 auto;
          }
        }
      `}</style>
    </section>
  );
}
//         @media(max-width:480px){
