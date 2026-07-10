import { useState, useEffect } from 'react';

const reviews = [
  { name: 'Priya Sharma', gender: 'female', text: 'MehSang made my wedding day extra special! The bridal design was so detailed and neat. Everyone loved the deep color stain, and it lasted for almost two weeks. Extremely professional and highly recommended!' },
  { name: 'Anjali Gupta', gender: 'female', text: 'I booked MehSang for my bridal mehndi and she exceeded all expectations! The fusion of traditional Rajasthani and modern geometric patterns was flawless. The stain was deep dark red and lasted throughout all my wedding festivities.' },
  { name: 'Rahul Mehta', gender: 'male', text: 'We hired MehSang for my wife\'s bridal mehndi, and I was absolutely blown away by the detail. They even designed a perfect custom caricature portrait of us on her palm! Highly professional and very clean setup.' },
  { name: 'Ritu Verma', gender: 'female', text: 'Outstanding experience for my engagement and pre-wedding mehndi! The team was highly professional and successfully integrated our wedding logo and initials into the palm design. Absolutely perfect symmetry and neatness.' },
  { name: 'Meera Patel', gender: 'female', text: 'We hired MehSang\'s team for our guest mehndi function. They were incredibly efficient, managing to apply gorgeous, detailed patterns for over 45 bridesmaids and guests in record time. Everyone was in awe of their speed and artistry!' },
  { name: 'Yasmin Khan', gender: 'female', text: 'The Arabic bridal design I got for my Nikah ceremony was spectacular. The bold outlines and delicate shading details made my hands look stunning. The organic henna gave a rich, dark mahogany stain that stayed perfect for days!' },
  { name: 'Shreya Reddy', gender: 'female', text: 'Highly recommend MehSang for custom bridal mehndi! I had a custom story theme including caricature portraits of my husband, our pets, and the skyline of where we met. The details were incredibly crisp and precise!' },
];

const FemaleAvatar = () => (
  <div style={{
    width: 70, height: 70, borderRadius: '50%',
    background: 'rgba(212, 175, 55, 0.15)',
    border: '2px solid var(--gold)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 15px', overflow: 'hidden'
  }}>
    <svg viewBox="0 0 100 100" style={{ width: '80%', height: '80%' }}>
      {/* Hair outline in back */}
      <path d="M25,50 C25,25 75,25 75,50 C75,68 70,72 70,85 L30,85 C30,72 25,68 25,50 Z" fill="var(--brown)" opacity="0.85" />
      {/* Head & Neck */}
      <path d="M50,68 L50,75 L46,75 L46,68 Z" fill="var(--beige-dark)" />
      <circle cx="50" cy="45" r="18" fill="var(--beige-dark)" />
      {/* Hair front/sides */}
      <path d="M32,45 C32,28 68,28 68,45 C68,52 64,56 64,65 C60,60 55,62 50,58 C45,62 40,60 36,65 C36,56 32,52 32,45 Z" fill="var(--brown)" />
      {/* Shoulders */}
      <path d="M22,90 C22,76 34,75 50,75 C66,75 78,76 78,90 Z" fill="var(--brown-light)" />
    </svg>
  </div>
);

const MaleAvatar = () => (
  <div style={{
    width: 70, height: 70, borderRadius: '50%',
    background: 'rgba(212, 175, 55, 0.15)',
    border: '2px solid var(--gold)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    margin: '0 auto 15px', overflow: 'hidden'
  }}>
    <svg viewBox="0 0 100 100" style={{ width: '80%', height: '80%' }}>
      {/* Hair outline (shorter) */}
      <path d="M33,35 C33,22 67,22 67,35 C67,39 63,39 60,37 C57,39 53,39 50,37 C47,39 43,39 40,37 C37,39 33,39 33,35 Z" fill="var(--brown)" />
      {/* Head & Neck */}
      <path d="M50,68 L50,75 L46,75 L46,68 Z" fill="var(--beige-dark)" />
      <circle cx="50" cy="48" r="18" fill="var(--beige-dark)" />
      {/* Shoulders */}
      <path d="M22,90 C22,76 34,75 50,75 C66,75 78,76 78,90 Z" fill="var(--brown-light)" />
    </svg>
  </div>
);

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setIdx(i => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIdx(i => (i + 1) % reviews.length);
  const r = reviews[idx];

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--beige)' }}>
      <div className="container">
        <p className="section-tagline" style={{ textAlign: 'center' }}>Kind Words</p>
        <h2 className="section-title center" style={{ textAlign: 'center' }}>What Our Clients Say</h2>

        <div style={{ position: 'relative', maxWidth: 900, margin: '50px auto 0' }}>
          {/* Card */}
          <div style={{
            background: '#fff', borderRadius: 24, padding: '50px',
            boxShadow: '0 15px 35px var(--shadow)', border: '1px solid rgba(75,46,46,0.03)',
            textAlign: 'center', transition: 'all 0.4s',
          }}>
            <div style={{ fontFamily: 'Playfair Display,serif', fontSize: '4rem', color: 'var(--beige-dark)', lineHeight: 1, marginBottom: -15 }}>"</div>
            <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--brown)', marginBottom: 30, fontWeight: 300 }}>{r.text}</p>
            
            {/* Dynamic Avatar Render */}
            {r.gender === 'female' ? <FemaleAvatar /> : <MaleAvatar />}
            
            <h4 style={{ fontWeight: 600, color: 'var(--brown)', marginBottom: 8 }}>{r.name}</h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 4, color: 'var(--gold)' }}>
              {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
            </div>
          </div>

          {/* Prev / Next */}
          {['prev', 'next'].map(dir => (
            <button key={dir} onClick={dir === 'prev' ? prev : next} style={{
              position: 'absolute', top: '50%', transform: 'translateY(-50%)',
              [dir === 'prev' ? 'left' : 'right']: 0,
              width: 45, height: 45, background: '#fff', borderRadius: '50%',
              border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--brown)', boxShadow: '0 4px 12px rgba(75, 46, 46, 0.1)', transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--brown)'; }}>
              {dir === 'prev' ? '‹' : '›'}
            </button>
          ))}

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className={`slider-dot${i === idx ? ' active' : ''}`}
                style={{ border: 'none', cursor: 'pointer', padding: 0 }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
