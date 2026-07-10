import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {menuOpen && <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setMenuOpen(false)} />}

      <header style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: scrolled ? '70px' : '80px',
        background: scrolled ? 'rgba(255,253,248,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--beige)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(75,46,46,0.03)' : 'none',
        zIndex: 1000, transition: 'all 0.4s cubic-bezier(0.25,1,0.5,1)',
      }}>
        <div className="container" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', height:'100%' }}>
          {/* Logo */}
          <Link to="/" style={{ display:'flex', alignItems:'center', gap:10 }}>
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
                boxShadow: '0 4px 8px rgba(75,46,46,0.15)' 
              }} 
            />
            <span style={{ fontFamily:'Playfair Display,serif', fontSize:'1.8rem', fontWeight:800, color:'var(--brown)', letterSpacing:1 }}>MehSang</span>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display:'flex', alignItems:'center', gap:32 }} className="hidden-mobile">
            {links.map(l => (
              <Link key={l.path} to={l.path}
                style={{
                  fontSize:'0.95rem', fontWeight:500, color:'var(--brown)',
                  position:'relative', padding:'6px 0', textDecoration:'none',
                }}>
                {l.label}
                <span style={{
                  position:'absolute', bottom:0, left:0,
                  width: isActive(l.path) ? '100%' : '0',
                  height:2, background:'var(--gold)', borderRadius:999,
                  transition:'width 0.2s',
                }} />
              </Link>
            ))}
            <Link to="/book" className="btn btn-primary" style={{ fontSize:'0.85rem', padding:'10px 22px' }}>Book Now</Link>
          </nav>

          {/* Hamburger */}
          <button className="show-mobile" onClick={() => setMenuOpen(!menuOpen)}
            style={{ display:'none', flexDirection:'column', gap:6, cursor:'pointer', zIndex:1010, background:'none', border:'none' }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                width:25, height:'2.5px', background:'var(--brown)', borderRadius:4, display:'block',
                transition:'all 0.2s',
                transform: menuOpen ? (i===0 ? 'rotate(45deg) translate(6px,6px)' : i===2 ? 'rotate(-45deg) translate(6px,-6px)' : '') : '',
                opacity: menuOpen && i===1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div style={{
          position:'fixed', top:0, right: menuOpen ? 0 : '-100%',
          width:300, height:'100vh', background:'var(--ivory)',
          boxShadow:'-10px 0 30px rgba(75,46,46,0.05)',
          display:'flex', flexDirection:'column', justifyContent:'center', gap:24,
          padding:40, zIndex:1005, transition:'right 0.4s cubic-bezier(0.25,1,0.5,1)',
          borderLeft:'1px solid var(--beige)',
        }}>
          {links.map(l => (
            <Link key={l.path} to={l.path}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize:'1.1rem', fontWeight:500, color:'var(--brown)', textDecoration:'none', borderBottom: isActive(l.path) ? '1px solid var(--gold)' : 'none' }}>
              {l.label}
            </Link>
          ))}
          <Link to="/book" className="btn btn-primary" onClick={() => setMenuOpen(false)} style={{ textAlign:'center' }}>Book Now</Link>
        </div>
      </header>

      <style>{`
        @media(max-width:991px){
          .hidden-mobile { display:none !important; }
          .show-mobile { display:flex !important; }
        }
        @media(min-width:992px){
          .show-mobile { display:none !important; }
        }
      `}</style>
    </>
  );
}
