import { useState } from 'react';

const faqs = [
  { q:'How far in advance should I book?', a:'For bridal bookings, we recommend securing your date 3 to 6 months in advance, especially during the wedding season. For festive and guest bookings, 2 to 4 weeks in advance is usually sufficient.' },
  { q:'Do you provide home service?', a:'Yes, we offer door-to-door home services for all bridal and group bookings. Travel charges may apply depending on your location outside our base studio radius.' },
  { q:'Which mehndi do you use?', a:'We use 100% natural, fresh henna cones prepared at home with triple-sifted organic Sojat henna powder, eucalyptus essential oil, lemon juice, and sugar. It is completely safe, free of chemicals, preservatives, and black dye (PPD).' },
  { q:'How long does the stain last?', a:'Our organic henna stains deep reddish-mahogany. Depending on your skin chemistry, body temperature, and post-care routine (avoiding water and applying lemon-sugar syrup), the stain lasts beautifully for 7 to 14 days before gradually fading.' },
  { q:'Can designs be customized?', a:'Absolutely! Customization is our specialty. We can incorporate your wedding hashtags, groom\'s name/initials, portrait drawings, skylines, religious symbols, or specific romantic highlights into the layout.' },
  { q:'What are your bridal packages?', a:'We offer several tiers of bridal packages, ranging from basic classic wrist-length layouts to premium royal configurations covering full forearms, elbows, and feet. Detailed pricing is listed in our investment section.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="section" style={{ background:'var(--ivory)' }}>
      <div className="container">
        <p className="section-tagline" style={{ textAlign:'center' }}>Common Queries</p>
        <h2 className="section-title center" style={{ textAlign:'center' }}>Frequently Asked Questions</h2>

        <div style={{ maxWidth:800, margin:'50px auto 0', display:'flex', flexDirection:'column', gap:16 }}>
          {faqs.map((f, i) => (
            <div key={i} style={{
              background:'#fff', borderRadius:16, overflow:'hidden',
              boxShadow:'0 5px 15px var(--shadow)',
              border: open===i ? '1px solid var(--gold)' : '1px solid rgba(75,46,46,0.02)',
              transition:'border-color 0.3s',
            }}>
              <button onClick={() => setOpen(open===i ? null : i)} style={{
                width:'100%', padding:24, display:'flex', justifyContent:'space-between',
                alignItems:'center', textAlign:'left', fontWeight:600, color:'var(--brown)',
                fontSize:'1.05rem', background:'none', border:'none', cursor:'pointer',
              }}>
                <span>{f.q}</span>
                <span style={{ transition:'transform 0.3s', transform: open===i ? 'rotate(180deg)' : '', color: open===i ? 'var(--gold)' : 'var(--brown)', flexShrink:0, marginLeft:12 }}>▼</span>
              </button>
              <div style={{
                maxHeight: open===i ? 300 : 0, overflow:'hidden',
                transition:'max-height 0.4s ease-out',
              }}>
                <div style={{ padding:'0 24px 24px', color:'var(--text-light)', fontSize:'0.95rem', lineHeight:1.7 }}>{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
