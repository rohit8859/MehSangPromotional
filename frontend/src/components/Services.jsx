import { useState } from 'react';
import { Link } from 'react-router-dom';

const services = [
  { id:'bridal', title:'Bridal Mehndi', img:'/services/service-1.png', icon:'❤️',
    desc:'Intricate full hands and feet bridal packages customized with personalized story elements, husband\'s name, and portraits.',
    details:'The ultimate bridal experience. We craft heavy, dense designs covering full forearms and feet.',
    includes:['Full hand & feet heavy designs','Groom\'s name / portrait inclusion','Symmetrical wrist and ankle cuffs','Lemon-sugar aftercare kit','Private pre-consultation session'] },
  { id:'engagement', title:'Engagement Mehndi', img:'/services/service-2.png', icon:'💎',
    desc:'Elegant and stylish designs for engagement ceremonies, focusing on modern negative space patterns and beautiful mandalas.',
    details:'Premium patterns up to mid-forearm for your engagement day.',
    includes:['Front & back hand patterns','Initials / date integration','Wrist lace cuffs','Essential oil aftercare','~1.5 hr application'] },
  { id:'guest', title:'Wedding Guest Mehndi', img:'/services/service-3.png', icon:'👥',
    desc:'Quick, modern, and beautiful designs for wedding guests, bridesmaid groups, and family members with high-speed execution.',
    details:'Group mehndi service for your sangeet and wedding functions.',
    includes:['Arabic or modern design style','High-speed team execution','40+ guests manageable','Both hand designs','Organic henna cones'] },
  { id:'festival', title:'Festival Mehndi', img:'/services/service-4.png', icon:'🎊',
    desc:'Special designs for Karwa Chauth, Teej, Eid, Diwali, and general family functions.',
    details:'Festive-themed patterns for all major Indian celebrations.',
    includes:['Full palm + back designs','Choice of Arabic or Traditional','Finger lace details','Free henna oil bottle','~45 min session'] },
  { id:'arabic', title:'Arabic Mehndi', img:'/services/service-5.png', icon:'⭐',
    desc:'Bold, flowing trails and modern shading patterns emphasizing floral layouts, vine architecture, and elegant borders.',
    details:'Gulf-style bold strokes with modern shading.',
    includes:['Flowing vine & floral layouts','Bold border work','Shaded leaves & petals','Clean negative space','Quick 20-30 min session'] },
  { id:'custom', title:'Custom Mehndi', img:'/services/service-6.png', icon:'✏️',
    desc:'Bespoke themed mehndi incorporating elements like skyline architectures, floral caricatures, pets, and personalized stories.',
    details:'Fully bespoke mehndi — you dream it, we draw it.',
    includes:['Pre-design sketch session','Pet / skyline / caricature art','Custom hashtag / symbol inclusion','Full arm canvas option','Exclusive senior artist'] },
];

export default function Services() {
  const [modalSvc, setModalSvc] = useState(null);

  return (
    <section id="services" className="section" style={{ background:'var(--beige)' }}>
      <div className="container">
        <p className="section-tagline" style={{ textAlign:'center' }}>Our Offerings</p>
        <h2 className="section-title center" style={{ textAlign:'center' }}>Mehndi Services We Offer</h2>

        <div style={{ 
          display: 'flex', 
          gap: 30, 
          marginTop: 50, 
          overflowX: 'auto', 
          padding: '10px 10px 25px 0', 
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'thin',
          scrollbarColor: 'var(--gold) transparent'
        }} className="services-horizontal-scroll">
          {services.map(s => (
            <div key={s.id} style={{
              flex: '0 0 350px',
              background: '#fff', 
              borderRadius: 16, 
              overflow: 'hidden',
              boxShadow: '0 10px 30px var(--shadow)', 
              border: '1px solid rgba(75,46,46,0.05)',
              display: 'flex', 
              flexDirection: 'column', 
              transition: 'all 0.4s cubic-bezier(0.25,1,0.5,1)',
              scrollSnapAlign: 'start'
            }}
              className="service-card"
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.borderColor='var(--gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.borderColor='rgba(75,46,46,0.05)'; }}>
              <div style={{ position:'relative', height:240, overflow:'hidden' }}>
                <img src={s.img} alt={s.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform='scale(1.08)'}
                  onMouseLeave={e => e.target.style.transform=''} />
                <div style={{
                  position:'absolute', bottom:-20, right:24, width:50, height:50,
                  background:'var(--gold)', borderRadius:'50%',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  boxShadow:'0 4px 10px rgba(212,175,55,0.3)', zIndex:2, fontSize:'1.2rem',
                }}>{s.icon}</div>
              </div>
              <div style={{ padding:'35px 24px 24px', flexGrow:1, display:'flex', flexDirection:'column' }}>
                <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:'1.4rem', color:'var(--brown)', marginBottom:12 }}>{s.title}</h3>
                <p style={{ fontSize:'0.9rem', color:'var(--text-light)', marginBottom:20, flexGrow:1 }}>{s.desc}</p>
                <button onClick={() => setModalSvc(s)}
                  style={{ display:'inline-flex', alignItems:'center', gap:8, fontWeight:600, color:'var(--green)', fontSize:'0.9rem', background:'none', border:'none', cursor:'pointer' }}>
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {modalSvc && (
        <div className="modal-overlay" onClick={() => setModalSvc(null)}>
          <div onClick={e => e.stopPropagation()} style={{
            background:'#fff', borderRadius:24, width:'100%', maxWidth:580,
            maxHeight:'90vh', overflowY:'auto', padding:40,
            boxShadow:'0 20px 50px rgba(75,46,46,0.3)', border:'2px solid var(--gold)',
            position:'relative', transform:'scale(1)', transition:'transform 0.3s',
          }}>
            <button onClick={() => setModalSvc(null)} style={{
              position:'absolute', top:16, right:16, width:44, height:44,
              borderRadius:'50%', background:'rgba(75,46,46,0.08)',
              display:'flex', alignItems:'center', justifyContent:'center',
              border:'none', cursor:'pointer', fontSize:'1.2rem', color:'var(--brown)',
            }}>×</button>
            <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:'1.8rem', color:'var(--brown)', marginBottom:12 }}>{modalSvc.title}</h3>
            <p style={{ color:'var(--text-light)', marginBottom:24 }}>{modalSvc.details}</p>
            <h4 style={{ fontSize:'1rem', color:'var(--brown)', marginBottom:12 }}>What this service includes:</h4>
            <ul style={{ paddingLeft:20, display:'flex', flexDirection:'column', gap:8, marginBottom:24, color:'var(--text-dark)' }}>
              {modalSvc.includes.map(it => <li key={it} style={{ fontSize:'0.9rem' }}>✓ {it}</li>)}
            </ul>
            <div style={{ display:'flex', gap:12, justifyContent:'flex-end' }}>
              <button className="btn btn-secondary" onClick={() => setModalSvc(null)}>Close</button>
              <Link to="/book" className="btn btn-primary" onClick={() => setModalSvc(null)}>Book This Service</Link>
            </div>
          </div>
        </div>
      )}
      <style>{`
        .services-horizontal-scroll::-webkit-scrollbar {
          height: 6px;
        }
        .services-horizontal-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .services-horizontal-scroll::-webkit-scrollbar-thumb {
          background-color: var(--gold);
          border-radius: 999px;
        }
        @media(max-width: 480px) {
          .service-card {
            flex: 0 0 290px !important;
          }
        }
      `}</style>
    </section>
  );
}
