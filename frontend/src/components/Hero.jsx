import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" style={{
      position:'relative', minHeight:'100vh', display:'flex', alignItems:'center',
      color:'#fff', paddingTop:80, overflow:'hidden',
    }}>
      {/* ── Video Background ── */}
      <video
        autoPlay muted loop playsInline
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', zIndex:0 }}
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* ── Dark overlay ── */}
      <div style={{
        position:'absolute', inset:0, zIndex:1,
        background:'linear-gradient(rgba(75,46,46,0.65),rgba(75,46,46,0.8))',
      }} />

      {/* Floating decorative mandalas */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:2 }}>
        <svg className="spin-slow" style={{ position:'absolute', top:'15%', right:'10%', width:250, height:250, opacity:0.15, color:'var(--gold)' }}
          viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3">
        </svg>
        <svg className="spin-slow-rev" style={{ position:'absolute', bottom:'10%', left:'5%', width:180, height:180, opacity:0.15, color:'var(--gold)' }}
          viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.3">
        </svg>
      </div>

      <div className="container" style={{ position:'relative', zIndex:3, width: '100%' }}>
        <div className="animate-fadeInUp hero-content" style={{ maxWidth:750, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <p className="section-tagline" style={{ color:'var(--gold)', textAlign: 'center', width: '100%' }}>Exquisite Bridal Artistry</p>
          <h1 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(2.8rem,6vw,4.5rem)', color:'#fff', lineHeight:1.15, marginBottom:'1.5rem', fontWeight:700, textAlign: 'center', width: '100%' }}>
            Beautiful <span style={{ fontStyle:'italic', color:'var(--gold)' }}>Mehndi Art</span><br />for Every Celebration
          </h1>
          <p className="hero-desc" style={{ fontSize:'1.15rem', color:'var(--beige)', marginBottom:'2.5rem', fontWeight:300, maxWidth:600, marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', width: '100%' }}>
            Bridal Mehndi, Engagement Mehndi, Wedding Mehndi, Festival Mehndi &amp; Customized Designs Crafted with Passion and Artistic Excellence.
          </p>
          <div className="hero-buttons" style={{ display:'flex', gap:16, flexWrap:'wrap', justifyContent: 'center', width: '100%' }}>
            <Link to="/book" className="btn btn-primary">Book Appointment</Link>
            <Link to="/gallery" className="btn btn-secondary" style={{ color:'#fff', borderColor:'rgba(255,255,255,0.5)' }}>View Gallery</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
