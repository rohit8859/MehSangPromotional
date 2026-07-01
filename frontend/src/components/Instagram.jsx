// const posts = [
//   'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80',
//   'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?auto=format&fit=crop&w=400&q=80',
//   'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=400&q=80',
//   'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=400&q=80',
//   'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=400&q=80',
//   'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=400&q=80',
// ];

// export default function Instagram() {
//   return (
//     <section className="section" style={{ background:'var(--beige)' }}>
//       <div className="container">
//         <p className="section-tagline" style={{ textAlign:'center' }}>Social Media</p>
//         <h2 className="section-title center" style={{ textAlign:'center' }}>Follow Our Work</h2>
//         <p style={{ textAlign:'center', color:'var(--text-light)', marginTop:-10 }}>
//           {/* <a href="https://instagram.com/mehsangofficial" target="_blank" rel="noreferrer" style={{ color:'var(--gold)', fontWeight:600 }}>@MehSang</a> */}
//         </p>

//         <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:15, marginTop:40 }} className="insta-grid-resp">
//           {posts.map((src,i) => (
//             <div key={i} style={{ position:'relative', aspectRatio:'1', borderRadius:16, overflow:'hidden', boxShadow:'0 5px 15px var(--shadow)' }}>
//               <img src={src} alt="Instagram post" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
//               <div style={{
//                 position:'absolute', inset:0, background:'rgba(75,46,46,0.7)',
//                 display:'flex', alignItems:'center', justifyContent:'center',
//                 color:'#fff', fontSize:'1.5rem', opacity:0, transition:'opacity 0.4s',
//               }}
//                 onMouseEnter={e => e.currentTarget.style.opacity=1}
//                 onMouseLeave={e => e.currentTarget.style.opacity=0}>📷</div>
//             </div>
//           ))}
//         </div>

//         {/* <div style={{ textAlign:'center', marginTop:35 }}>
//           <a href="https://instagram.com/mehsangofficial" target="_blank" rel="noreferrer" className="btn btn-gold">
//             📸 Follow MehSang
//           </a>
//         </div> */}
//       </div>
//       <style>{`
//         @media(max-width:991px){ .insta-grid-resp { grid-template-columns:repeat(3,1fr) !important; } }
//         @media(max-width:480px){ .insta-grid-resp { grid-template-columns:repeat(2,1fr) !important; } }
//       `}</style>
//     </section>
//   );
// }

// const posts = [
//   'https://i.pinimg.com/736x/57/9f/73/579f73e1090c9fb822cef0724e608f14.jpg',
//   'https://i.pinimg.com/736x/32/9e/85/329e8506f60ad36ce18ff95a689fe983.jpg',
//   'https://i.pinimg.com/vwebp/736x/7c/71/00/7c7100ede1eb66a781f54f4969851855.webp',
//   'https://i.pinimg.com/736x/12/55/99/1255990072bc1015e71d5988a06d9057.jpg',
//   'https://i.pinimg.com/vwebp/1200x/56/46/b4/5646b4740fd456d68a05261ec9e6214f.webp',
//   'https://i.pinimg.com/736x/7a/ef/85/7aef85c2c5b117a5e0327864985b2199.jpg',
//   'https://i.pinimg.com/236x/e2/fd/88/e2fd88e7c5523709900a85e75b81927a.jpg',
//   'https://i.pinimg.com/736x/2d/be/8d/2dbe8d2807ffc67ccd4d51af9f2c02d6.jpg',
//   'https://i.pinimg.com/736x/df/9f/0a/df9f0aff8a57b8f86ad1f2c2114368a7.jpg',
//   'https://i.pinimg.com/vwebp/736x/3d/d6/5f/3dd65f28b22e376f4910723773e7d545.webp',
//   'https://i.pinimg.com/1200x/e8/4f/ff/e84fff93f6b05bdec0890ec97e0f9bd8.jpghttps://i.pinimg.com/1200x/e8/4f/ff/e84fff93f6b05bdec0890ec97e0f9bd8.jpg',
//   'https://i.pinimg.com/1200x/e8/4f/ff/e84fff93f6b05bdec0890ec97e0f9bd8.jpghttps://i.pinimg.com/1200x/e8/4f/ff/e84fff93f6b05bdec0890ec97e0f9bd8.jpg',

  
// ];

// export default function Instagram() {
//   return (
//     <section className="section" style={{ background: 'var(--beige)' }}>
//       <div className="container">
//         {/* "Social Media" ki jagah "Trending Mehendi" kar diya hai */}
//         <p className="section-tagline" style={{ textAlign: 'center' }}>Trending Mehendi Designs</p>
//         {/* <h2 className="section-title center" style={{ textAlign: 'center' }}>Follow Our Work</h2>
//          */}
//         {/* <p style={{ textAlign: 'center', color: 'var(--text-light)', marginTop: -10 }}>
//           <a href="https://instagram.com/mehsangofficial" target="_blank" rel="noreferrer" style={{ color: 'var(--gold)', fontWeight: 600 }}>
//             @MehSang
//           </a>
//         </p> */}

//         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 15, marginTop: 40 }} className="insta-grid-resp">
//           {posts.map((src, i) => (
//             <div key={i} className="insta-item" style={{ position: 'relative', aspectRatio: '1', borderRadius: 16, overflow: 'hidden', boxShadow: '0 5px 15px var(--shadow)' }}>
//               <img src={src} alt="Mehendi Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              
//               {/* JS onMouseEnter/Leave hata kar isse niche CSS se control kiya hai */}
//               <div className="insta-overlay" style={{
//                 position: 'absolute', inset: 0, background: 'rgba(75,46,46,0.7)',
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 color: '#fff', fontSize: '1.5rem', opacity: 0, transition: 'opacity 0.4s',
//               }}>
//                 📷
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* <div style={{ textAlign: 'center', marginTop: 35 }}>
//           <a href="https://instagram.com/mehsangofficial" target="_blank" rel="noreferrer" className="btn btn-gold">
//             📸 Follow MehSang
//           </a>
//         </div> */}
//       </div>

//       <style>{`
//         /* Smooth CSS Hover effect */
//         .insta-item:hover .insta-overlay {
//           opacity: 1 !important;
//         }
//         @media(max-width:991px){ .insta-grid-resp { grid-template-columns:repeat(3,1fr) !important; } }
//         @media(max-width:480px){ .insta-grid-resp { grid-template-columns:repeat(2,1fr) !important; } }
//       `}</style>
//     </section>
//   );
// }

const posts = [
  'https://i.pinimg.com/736x/57/9f/73/579f73e1090c9fb822cef0724e608f14.jpg',
  'https://i.pinimg.com/736x/32/9e/85/329e8506f60ad36ce18ff95a689fe983.jpg',
  'https://i.pinimg.com/vwebp/736x/7c/71/00/7c7100ede1eb66a781f54f4969851855.webp',
  'https://i.pinimg.com/736x/12/55/99/1255990072bc1015e71d5988a06d9057.jpg',
  'https://i.pinimg.com/vwebp/1200x/56/46/b4/5646b4740fd456d68a05261ec9e6214f.webp',
  'https://i.pinimg.com/736x/7a/ef/85/7aef85c2c5b117a5e0327864985b2199.jpg',
  'https://i.pinimg.com/236x/e2/fd/88/e2fd88e7c5523709900a85e75b81927a.jpg',
  'https://i.pinimg.com/736x/2d/be/8d/2dbe8d2807ffc67ccd4d51af9f2c02d6.jpg',
  'https://i.pinimg.com/736x/df/9f/0a/df9f0aff8a57b8f86ad1f2c2114368a7.jpg',
  'https://i.pinimg.com/736x/b5/d9/41/b5d94163c8d834df3c4d0ca757fdb6af.jpg',
  'https://i.pinimg.com/736x/41/6d/19/416d19af68cf87ee2b72d327f4fce68b.jpg',
  'https://i.pinimg.com/736x/c8/33/45/c83345114d2e67a84fdf192b9fdef8f8.jpg',
];

export default function Instagram() {
  return (
    <section className="section" style={{ background: 'var(--beige)' }}>
      <div className="container">
        <p className="section-tagline" style={{ textAlign: 'center' }}>
          Trending Mehendi Designs
        </p>

        <div className="insta-scroll">
          <div className="insta-gallery">
            {posts.map((src, i) => (
              <div key={i} className="insta-item">
                <img src={src} alt="Mehendi Design" />
                <div className="insta-overlay">📷</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .insta-scroll {
          margin-top: 40px;
          overflow-x: auto;
          overflow-y: hidden;
          padding-bottom: 10px;
          scroll-snap-type: x mandatory;
        }
        .insta-gallery {
          display: flex;
          flex-wrap: nowrap;
          gap: 15px;
          width: max-content;
        }
        .insta-item {
          position: relative;
          flex: 0 0 auto;
          width: 200px;
          height: 200px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 5px 15px var(--shadow);
          scroll-snap-align: start;
        }
        .insta-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .insta-overlay {
          position: absolute;
          inset: 0;
          background: rgba(75,46,46,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 1.5rem;
          opacity: 0;
          transition: opacity 0.4s;
        }
        .insta-item:hover .insta-overlay {
          opacity: 1;
        }
        @media(max-width:480px){
          .insta-item {
            width: 180px;
            height: 180px;
          }
        }
        .insta-scroll::-webkit-scrollbar {
          height: 8px;
        }
        .insta-scroll::-webkit-scrollbar-thumb {
          background: var(--gold);
          border-radius: 4px;
        }
        .insta-scroll::-webkit-scrollbar-track {
          background: var(--beige);
        }
      `}</style>
    </section>
  );
}
