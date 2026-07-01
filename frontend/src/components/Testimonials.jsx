import { useState, useEffect } from 'react';

const reviews = [
  { name:'Priya Sharma', img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D', text:'MehSang made my wedding day extra special! The bridal design was so detailed and neat. Everyone loved the deep color stain, and it lasted for almost two weeks. Extremely professional and highly recommended!' },
  { name:'Anjali Gupta', img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D', text:'I booked the Festival Package for Karwa Chauth. The designs were modern and beautiful, and they were applied so quickly. The organic henna smells amazing and stains beautifully without any chemicals.' },
  { name:'Ritu Verma', img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D', text:'Amazing experience for my engagement mehndi! The artist was punctual, patient, and accommodated my request to include our initials. The visual grids were perfectly symmetrical. Worth every rupee!' },
  { name:'Meera Patel', img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D', text:'We hired MehSang for our guest mehndi event. The team was exceptionally organized and managed to decorate over 40 guests in just a few hours. The guests were absolutely delighted with the speed and detail.' },
  { name:'Yasmin Khan', img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D', text:'The Arabic design I got for Eid was superb! Clean strokes, bold borders, and very elegant shading. Staining process went perfectly and the deep mahogany color lasted for days. Will book again!' },
  { name:'Shreya Reddy', img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text:'Very professional and accommodating. I had a custom request to add my pet caricature, and they designed it flawlessly on my arm. The hygiene standards they maintained were top-notch. Highly recommended!' },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i+1)%reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIdx(i => (i-1+reviews.length)%reviews.length);
  const next = () => setIdx(i => (i+1)%reviews.length);
  const r = reviews[idx];

  return (
    <section id="testimonials" className="section" style={{ background:'var(--beige)' }}>
      <div className="container">
        <p className="section-tagline" style={{ textAlign:'center' }}>Kind Words</p>
        <h2 className="section-title center" style={{ textAlign:'center' }}>What Our Clients Say</h2>

        <div style={{ position:'relative', maxWidth:900, margin:'50px auto 0' }}>
          {/* Card */}
          <div style={{
            background:'#fff', borderRadius:24, padding:'50px',
            boxShadow:'0 15px 35px var(--shadow)', border:'1px solid rgba(75,46,46,0.03)',
            textAlign:'center', transition:'all 0.4s',
          }}>
            <div style={{ fontFamily:'Playfair Display,serif', fontSize:'4rem', color:'var(--beige-dark)', lineHeight:1, marginBottom:-15 }}>"</div>
            <p style={{ fontSize:'1.1rem', fontStyle:'italic', color:'var(--brown)', marginBottom:30, fontWeight:300 }}>{r.text}</p>
            <img src={r.img} alt={r.name} style={{ width:70, height:70, borderRadius:'50%', margin:'0 auto 15px', border:'2px solid var(--gold)', objectFit:'cover' }} />
            <h4 style={{ fontWeight:600, color:'var(--brown)', marginBottom:8 }}>{r.name}</h4>
            <div style={{ display:'flex', justifyContent:'center', gap:4, color:'var(--gold)' }}>
              {'★★★★★'.split('').map((s,i) => <span key={i}>{s}</span>)}
            </div>
          </div>

          {/* Prev / Next */}
          {['prev','next'].map(dir => (
            <button key={dir} onClick={dir==='prev'?prev:next} style={{
              position:'absolute', top:'50%', transform:'translateY(-50%)',
              [dir==='prev'?'left':'right']: 0,
              width:45, height:45, background:'#fff', borderRadius:'50%',
              border:'none', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center',
              color:'var(--brown)', boxShadow:'0 4px 12px rgba(75,46,46,0.1)', transition:'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background='var(--gold)'; e.currentTarget.style.color='#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background='#fff'; e.currentTarget.style.color='var(--brown)'; }}>
              {dir==='prev' ? '‹' : '›'}
            </button>
          ))}

          {/* Dots */}
          <div style={{ display:'flex', justifyContent:'center', gap:8, marginTop:24 }}>
            {reviews.map((_,i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`slider-dot${i===idx?' active':''}`}
                style={{ border:'none', cursor:'pointer', padding:0 }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
