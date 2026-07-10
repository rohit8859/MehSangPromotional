import { useState, useEffect } from 'react';

const reviews = [
  { name:'Priya Sharma', img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D', text:'MehSang made my wedding day extra special! The bridal design was so detailed and neat. Everyone loved the deep color stain, and it lasted for almost two weeks. Extremely professional and highly recommended!' },
  { name:'Anjali Gupta', img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D', text:'I booked MehSang for my bridal mehndi and she exceeded all expectations! The fusion of traditional Rajasthani and modern geometric patterns was flawless. The stain was deep dark red and lasted throughout all my wedding festivities.' },
  { name:'Ritu Verma', img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D', text:'Outstanding experience for my engagement and pre-wedding mehndi! The team was highly professional and successfully integrated our wedding logo and initials into the palm design. Absolutely perfect symmetry and neatness.' },
  { name:'Meera Patel', img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D', text:'We hired MehSang\'s team for our guest mehndi function. They were incredibly efficient, managing to apply gorgeous, detailed patterns for over 45 bridesmaids and guests in record time. Everyone was in awe of their speed and artistry!' },
  { name:'Yasmin Khan', img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMGljb258ZW58MHx8MHx8fDA%3D', text:'The Arabic bridal design I got for my Nikah ceremony was spectacular. The bold outlines and delicate shading details made my hands look stunning. The organic henna gave a rich, dark mahogany stain that stayed perfect for days!' },
  { name:'Shreya Reddy', img:'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text:'Highly recommend MehSang for custom bridal mehndi! I had a custom story theme including caricature portraits of my husband, our pets, and the skyline of where we met. The details were incredibly crisp and precise!' },
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
