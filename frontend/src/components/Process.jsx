const steps = [
  { n:'1', title:'Contact Us', desc:'Fill out the booking form or drop a WhatsApp message.' },
  { n:'2', title:'Discuss Details', desc:'Share event date, location size, and design details.' },
  { n:'3', title:'Select Package', desc:'Choose from our curated bridal or festive packages.' },
  { n:'4', title:'Confirm Booking', desc:'Secure the date with a minimal reservation deposit.' },
  { n:'5', title:'Enjoy Your Event', desc:'Relax as we craft stunning henna art on your big day.' },
];

export default function Process() {
  return (
    <section id="process" className="section" style={{ background:'var(--ivory)' }}>
      <div className="container">
        <p className="section-tagline" style={{ textAlign:'center' }}>The Journey</p>
        <h2 className="section-title center" style={{ textAlign:'center' }}>How Booking Works</h2>

        <div style={{ position:'relative', maxWidth:1000, margin:'50px auto 0', display:'flex', justifyContent:'space-between' }} className="timeline-resp">
          {/* connector line */}
          <div style={{ position:'absolute', top:30, left:'5%', right:'5%', height:3, background:'var(--beige-dark)', zIndex:1 }} className="timeline-line" />
          {steps.map(s => (
            <div key={s.n} style={{ position:'relative', display:'flex', flexDirection:'column', alignItems:'center', width:'18%', textAlign:'center', zIndex:2 }} className="step-resp">
              <div style={{
                width:60, height:60, background:'var(--ivory)', border:'3px solid var(--beige-dark)',
                borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily:'Playfair Display,serif', fontSize:'1.5rem', fontWeight:700,
                color:'var(--brown)', marginBottom:20, transition:'all 0.4s', cursor:'default',
              }}
                className="step-circle"
                onMouseEnter={e => { e.currentTarget.style.borderColor='var(--gold)'; e.currentTarget.style.background='var(--gold)'; e.currentTarget.style.color='#fff'; e.currentTarget.style.boxShadow='0 4px 15px rgba(212,175,55,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='var(--beige-dark)'; e.currentTarget.style.background='var(--ivory)'; e.currentTarget.style.color='var(--brown)'; e.currentTarget.style.boxShadow=''; }}>
                {s.n}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="step-text-container">
                <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:'1rem', color:'var(--brown)', marginBottom:8 }} className="step-title">{s.title}</h3>
                <p style={{ fontSize:'0.8rem', color:'var(--text-light)' }} className="step-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .timeline-line {
          position: relative;
        }
        .timeline-line::after {
          content: '';
          position: absolute;
          right: -8px;
          top: 50%;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 8px solid var(--beige-dark);
        }
        @media(max-width:768px){
          .timeline-resp { flex-direction:column !important; gap:40px !important; align-items:flex-start !important; padding-left:20px; }
          .timeline-line { top:0 !important; bottom:0 !important; left:50px !important; width:3px !important; right:auto !important; height:100% !important; }
          .timeline-line::after {
            right: auto !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            bottom: -8px !important;
            top: auto !important;
            border-left: 6px solid transparent !important;
            border-right: 6px solid transparent !important;
            border-top: 8px solid var(--beige-dark) !important;
          }
          .step-resp { flex-direction:row !important; width:100% !important; text-align:left !important; gap:24px !important; align-items:flex-start !important; }
          .step-resp > .step-circle { margin-bottom:0 !important; flex-shrink:0; z-index: 5; }
          .step-text-container { align-items: flex-start !important; text-align: left !important; }
          .step-title { margin-bottom: 4px !important; font-size: 1.1rem !important; }
          .step-desc { font-size: 0.85rem !important; line-height: 1.4 !important; }
        }
      `}</style>
    </section>
  );
}
