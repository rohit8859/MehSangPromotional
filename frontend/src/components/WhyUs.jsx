const reasons = [
  { icon:'✨', title:'Professional Artist', desc:'Skillfully trained artist with precise, smooth strokes and visual neatness.' },
  { icon:'🛡️', title:'Hygienic Application', desc:'Clean cones, sanitization focus, and skin allergy-safe natural formulations.' },
  { icon:'🎨', title:'Customized Designs', desc:'Tailored layouts that capture your personal details, storylines, and names.' },
  { icon:'🌿', title:'Premium Quality', desc:'100% organic home-made chemical-free henna for rich mahogany stains.' },
  { icon:'🕐', title:'On-Time Service', desc:'Punctual arrival at your venue or home, ensuring stress-free event flows.' },
  { icon:'💰', title:'Affordable Packages', desc:'Elegant design bundles that offer the best value without compromising quality.' },
  { icon:'❤️', title:'Customer Satisfaction', desc:'A friendly, patient environment focused on your comfort during sessions.' },
  { icon:'🏆', title:'Event Expertise', desc:'Capable of handling large bridal groups, sangeets, and corporate setups smoothly.' },
];

export default function WhyUs() {
  return (
    <section className="section" style={{ background:'var(--beige)' }}>
      <div className="container">
        <p className="section-tagline" style={{ textAlign:'center' }}>Why Choose Us</p>
        <h2 className="section-title center" style={{ textAlign:'center' }}>Experience Professional Excellence</h2>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:30, marginTop:50 }}>
          {reasons.map(r => (
            <div key={r.title} style={{
              background:'#fff', borderRadius:16, padding:'35px 24px',
              boxShadow:'0 10px 30px var(--shadow)', border:'1px solid rgba(75,46,46,0.03)',
              transition:'all 0.4s cubic-bezier(0.25,1,0.5,1)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.borderColor='var(--beige-dark)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform=''; e.currentTarget.style.borderColor='rgba(75,46,46,0.03)'; }}>
              <div style={{
                width:60, height:60, background:'var(--beige)', borderRadius:'50%',
                display:'flex', alignItems:'center', justifyContent:'center',
                marginBottom:24, fontSize:'1.6rem',
                boxShadow:'inset 0 2px 5px rgba(75,46,46,0.05)',
              }}>{r.icon}</div>
              <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:'1.2rem', color:'var(--brown)', marginBottom:12 }}>{r.title}</h3>
              <p style={{ fontSize:'0.9rem', color:'var(--text-light)' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
