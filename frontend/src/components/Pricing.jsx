import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPricing } from '../services/api';

export default function Pricing() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPricing().then(r => setPackages(r.data)).catch(console.error).finally(() => setLoading(false));
  }, []);

  const fallback = [
    { _id:'p1', name:'Basic Mehndi Package', price:399, description:'Simple, elegant designs perfect for light celebrations.', features:['Both palms beautiful designs','Mandala motif','Organic dark-staining henna','Aftercare instructions','~20 min application'], isPopular:false, badge:'' },
    { _id:'p2', name:'Festival Package', price:1100, description:'Perfect for Eid, Diwali, Teej, and Karwa Chauth rituals.', features:['Full hands to wrists','Choice of Arabic or Traditional motifs','Homemade aromatic henna cone','Finger lace details','Free henna oil bottle'], isPopular:true, badge:'Festive Favorite' },
    { _id:'p3', name:'Engagement Package', price:3100, description:'Premium intricate mehndi blending tradition with jewelry look.', features:['Heavy patterns up to mid-forearm','Personalized motifs & dates','Symmetrical lace wrist cuffs','Scented essential oil blends','~1.5 hour application'], isPopular:false, badge:'' },
    { _id:'p4', name:'Bridal Package', price:4100, description:'Ultimate luxury bespoke experience for your grand wedding.', features:['Bespoke patterns up to elbow','Custom bride & groom portraits','Bridal legs & feet designs','Private pre-consultation','Full bridal care pack','Dedicated senior artist'], isPopular:false, badge:'Elite Bridal' },
  ];

  const pkgs = packages.length > 0 ? packages : fallback;

  return (
    <section id="pricing" className="section" style={{ background:'var(--ivory)' }}>
      <div className="container">
        <p className="section-tagline" style={{ textAlign:'center' }}>Investment</p>
        <h2 className="section-title center" style={{ textAlign:'center' }}>Our Mehndi Packages</h2>

        {loading ? (
          <div style={{ textAlign:'center', marginTop:50 }}><div style={{ width:40,height:40,border:'3px solid var(--beige-dark)',borderTop:'3px solid var(--gold)',borderRadius:'50%',animation:'spin 0.8s linear infinite',margin:'0 auto' }} /></div>
        ) : (
          <div className="pricing-grid">
            {pkgs.map(pkg => (
              <div key={pkg._id} className={`pricing-card${pkg.isPopular ? ' popular' : ''}`}>
                {pkg.badge && (
                  <div style={{
                    position:'absolute', top:-15, left:'50%', transform:'translateX(-50%)',
                    background:'linear-gradient(135deg,var(--gold),var(--gold-dark))',
                    color:'#fff', padding:'6px 18px', borderRadius:999,
                    fontSize:'0.75rem', fontWeight:600, textTransform:'uppercase', letterSpacing:1, whiteSpace:'nowrap',
                  }}>{pkg.badge}</div>
                )}
                <p style={{ fontFamily:'Poppins,sans-serif', fontSize:'1rem', fontWeight:600, color:'var(--text-light)', textTransform:'uppercase', letterSpacing:1, marginBottom:12 }}>{pkg.name}</p>
                <div style={{ display:'flex', alignItems:'baseline', justifyContent:'center', marginBottom:24 }}>
                  <span style={{ fontFamily:'Playfair Display,serif', fontSize:'2.8rem', color:'var(--brown)', fontWeight:700 }}>₹{pkg.price.toLocaleString('en-IN')}</span>
                </div>
                <ul style={{ textAlign:'left', marginBottom:35, flexGrow:1, listStyle:'none', display:'flex', flexDirection:'column', gap:12 }}>
                  {pkg.features.map(f => (
                    <li key={f} style={{ display:'flex', alignItems:'flex-start', gap:10, fontSize:'0.9rem', color:'var(--text-dark)' }}>
                      <span style={{ color:'var(--gold)', flexShrink:0, marginTop:2 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <Link to="/book" className={`btn ${pkg.isPopular ? 'btn-gold' : 'btn-primary'}`} style={{ width:'100%', justifyContent:'center' }}>
                  Book This Package
                </Link>
              </div>
            ))}
          </div>
        )}
        <p style={{ textAlign:'center', marginTop:30, color:'var(--text-light)', fontSize:'0.85rem' }}>
          * Travel charges may apply · Prices inclusive of all materials
        </p>
      </div>
      <style>{`
        @keyframes spin { to { transform:rotate(360deg); } }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          margin-top: 50px;
          padding: 10px 0;
        }
        .pricing-card {
          background: #fff;
          border-radius: 24px;
          padding: 40px 30px;
          box-shadow: 0 10px 30px var(--shadow);
          border: 1px solid rgba(75, 46, 46, 0.03);
          text-align: center;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .pricing-card:hover {
          transform: translateY(-5px);
        }
        .pricing-card.popular {
          border: 2px solid var(--gold);
          transform: translateY(-8px);
        }
        .pricing-card.popular:hover {
          transform: translateY(-10px);
        }
        
        @media(max-width:768px) {
          .pricing-grid {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 20px;
            padding: 20px 24px;
            margin: 30px -24px 0 -24px;
            scroll-padding: 24px;
            scrollbar-width: none;
          }
          .pricing-grid::-webkit-scrollbar {
            display: none;
          }
          .pricing-card {
            flex: 0 0 290px;
            scroll-snap-align: start;
          }
          .pricing-card, .pricing-card.popular, .pricing-card:hover, .pricing-card.popular:hover {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
