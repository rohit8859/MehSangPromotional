

// import { useState } from 'react';

// const allItems = [
//   { src:'/gallery/bridal-1.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-2.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-3.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-4.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-5.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-6.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-7.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-8.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-9.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-10.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-11.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/bridal-12.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/arabic-1.jpg', category:'arabic', tag:'Arabic' },
//   { src:'/gallery/engagement-1.jpg', category:'traditional', tag:'Traditional' },
//   { src:'/gallery/festival-1.jpg', category:'modern', tag:'Modern' },
//   { src:'/gallery/gallery-1.jpg', category:'modern', tag:'Modern' },
//   { src:'/gallery/gallery-2.jpg', category:'minimal', tag:'Minimal' },
//   { src:'/gallery/gallery-3.jpg', category:'traditional', tag:'Traditional' },
//   { src:'/gallery/gallery-4.jpg', category:'arabic', tag:'Arabic' },
//   { src:'/gallery/gallery-5.jpg', category:'minimal', tag:'Minimal' },
//   { src:'/gallery/gallery-6.jpg', category:'traditional', tag:'Traditional' },
//   { src:'/gallery/gallery-7.jpg', category:'arabic', tag:'Arabic' },
//   { src:'/gallery/gallery-8.jpg', category:'modern', tag:'Modern' },
//   { src:'/gallery/gallery-9.jpg', category:'minimal', tag:'Minimal' },
//   { src:'/gallery/gallery-10.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/gallery-11.jpg', category:'arabic', tag:'Arabic' },
//   { src:'/gallery/gallery-12.jpg', category:'traditional', tag:'Traditional' },
//   { src:'/gallery/gallery-13.jpg', category:'modern', tag:'Modern' },
//   { src:'/gallery/gallery-14.jpg', category:'minimal', tag:'Minimal' },
//   { src:'/gallery/gallery-15.jpg', category:'arabic', tag:'Arabic' },
//   { src:'/gallery/gallery-16.jpg', category:'traditional', tag:'Traditional' },
//   { src:'/gallery/gallery-17.jpg', category:'bridal', tag:'Bridal' },
//   { src:'/gallery/gallery-18.webp', category:'modern', tag:'Modern' },
//   { src:'/gallery/gallery-19.jpg', category:'minimal', tag:'Minimal' },
//   { src:'/gallery/gallery-20.jpg', category:'arabic', tag:'Arabic' },
// ];

// const FILTERS = ['all','bridal','arabic','traditional','modern','minimal'];

// export default function Gallery() {
//   const [active, setActive] = useState('all');
//   const [lightbox, setLightbox] = useState(null);

//   const filtered = active === 'all' ? allItems : allItems.filter(i => i.category === active);

//   return (
//     <section id="gallery" className="section" style={{ background:'var(--ivory)' }}>
//       <div className="container">
//         <p className="section-tagline" style={{ textAlign:'center' }}>Our Masterpieces</p>
//         <h2 className="section-title center" style={{ textAlign:'center' }}>Stunning Design Gallery</h2>

//         {/* Filters */}
//         <div style={{ display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap', marginBottom:40, marginTop:10 }}>
//           {FILTERS.map(f => (
//             <button key={f} onClick={() => setActive(f)}
//               className={`filter-btn${active===f?' active':''}`}>
//               {f === 'all' ? 'All Designs' : f.charAt(0).toUpperCase()+f.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Masonry */}
//         <div className="masonry-grid">
//           {filtered.map((item, i) => (
//             <div key={item.src+i} className="masonry-item" style={{ position:'relative', borderRadius:16, overflow:'hidden', boxShadow:'0 8px 20px var(--shadow)', cursor:'pointer' }}
//               onClick={() => setLightbox(item)}>
//               <img src={item.src} alt={item.tag} loading="lazy"
//                 style={{ width:'100%', display:'block', borderRadius:16, transition:'transform 0.4s' }}
//                 onMouseEnter={e => e.target.style.transform='scale(1.05)'}
//                 onMouseLeave={e => e.target.style.transform=''} />
//               <div style={{
//                 position:'absolute', inset:0,
//                 background:'linear-gradient(to top, rgba(75,46,46,0.9), rgba(75,46,46,0.2))',
//                 display:'flex', flexDirection:'column', justifyContent:'flex-end',
//                 padding:24, opacity:0, transition:'opacity 0.4s', borderRadius:16,
//               }}
//                 onMouseEnter={e => e.currentTarget.style.opacity=1}
//                 onMouseLeave={e => e.currentTarget.style.opacity=0}>
//                 <span style={{ fontSize:'0.75rem', color:'var(--gold)', textTransform:'uppercase', fontWeight:600, letterSpacing:1, marginBottom:4 }}>
//                   {item.tag}
//                 </span>
//                 {/* Title removed */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox */}
//       {lightbox && (
//         <div className="modal-overlay" onClick={() => setLightbox(null)}>
//           <button onClick={() => setLightbox(null)} style={{
//             position:'absolute', top:24, right:24, width:50, height:50,
//             borderRadius:'50%', background:'rgba(255,255,255,0.1)', color:'#fff',
//             display:'flex', alignItems:'center', justifyContent:'center',
//             border:'none', cursor:'pointer', fontSize:'1.4rem',
//           }}>×</button>
//           <div onClick={e => e.stopPropagation()} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:16 }}>
//             <img src={lightbox.src} alt={lightbox.tag}
//               style={{ maxHeight:'75vh', maxWidth:'90vw', objectFit:'contain', borderRadius:16, boxShadow:'0 10px 40px rgba(0,0,0,0.5)' }} />
//             {/* Title removed */}
//           </div>
//         </div>
//       )}
//     </section>
//   );
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getGallery } from '../services/api';

// Static fallback items to display if Google Sheet URL is not configured or fails to load
const allItems = [
  { src: '/gallery/bridal-1.jpg', category: 'bridal', tag: 'Bridal' },
  { src: '/gallery/bridal-2.jpg', category: 'bridal', tag: 'Bridal' },
  { src: '/gallery/bridal-3.jpg', category: 'bridal', tag: 'Bridal' },
  { src: '/gallery/bridal-4.jpg', category: 'bridal', tag: 'Bridal' },
  { src: '/gallery/bridal-5.jpg', category: 'bridal', tag: 'Bridal' },
  { src: '/gallery/bridal-6.jpg', category: 'bridal', tag: 'Bridal' },
  { src: '/gallery/bridal-7.jpg', category: 'bridal', tag: 'Bridal' },
  { src: '/gallery/bridal-8.jpg', category: 'bridal', tag: 'Bridal' },
  { src: '/gallery/bridal-9.jpg', category: 'bridal', tag: 'Bridal' },
  { src: '/gallery/bridal-10.jpg', category: 'bridal', tag: 'Bridal' },
  { src: '/gallery/bridal-11.jpg', category: 'bridal', tag: 'Bridal' },
  { src: '/gallery/bridal-12.jpg', category: 'bridal', tag: 'Bridal' },
  { src: '/gallery/arabic-1.jpg', category: 'arabic', tag: 'Arabic' },
  { src: '/gallery/gallery-4.jpg', category: 'arabic', tag: 'Arabic' },
  { src: '/gallery/gallery-7.jpg', category: 'arabic', tag: 'Arabic' },
  { src: '/gallery/gallery-11.jpg', category: 'arabic', tag: 'Arabic' },
  { src: '/gallery/gallery-15.jpg', category: 'arabic', tag: 'Arabic' },
  { src: '/gallery/gallery-20.jpg', category: 'arabic', tag: 'Arabic' },
  { src: '/gallery/festival-1.jpg', category: 'modern', tag: 'Modern' },
  { src: '/gallery/gallery-1.jpg', category: 'modern', tag: 'Modern' },
  { src: '/gallery/gallery-8.jpg', category: 'modern', tag: 'Modern' },
  { src: '/gallery/gallery-13.jpg', category: 'modern', tag: 'Modern' },
  { src: '/gallery/gallery-18.webp', category: 'modern', tag: 'Modern' },
  { src: '/gallery/gallery-2.jpg', category: 'minimal', tag: 'Minimal' },
  { src: '/gallery/gallery-5.jpg', category: 'minimal', tag: 'Minimal' },
  { src: '/gallery/gallery-9.jpg', category: 'minimal', tag: 'Minimal' },
  { src: '/gallery/gallery-14.jpg', category: 'minimal', tag: 'Minimal' },
  { src: '/gallery/gallery-19.jpg', category: 'minimal', tag: 'Minimal' },
  { src: '/gallery/engagement-1.jpg', category: 'traditional', tag: 'Traditional' },
  { src: '/gallery/gallery-3.jpg', category: 'traditional', tag: 'Traditional' },
  { src: '/gallery/gallery-6.jpg', category: 'traditional', tag: 'Traditional' },
  { src: '/gallery/gallery-12.jpg', category: 'traditional', tag: 'Traditional' },
  { src: '/gallery/gallery-16.jpg', category: 'traditional', tag: 'Traditional' }
];

// Convert Google Drive sharing link to direct image URL
function convertDriveUrl(url) {
  if (!url) return '';
  const str = url.trim();
  if (str.includes('drive.google.com')) {
    let fileId = '';
    const idMatch = str.match(/[?&]id=([^&]+)/);
    if (idMatch) {
      fileId = idMatch[1];
    } else {
      const dMatch = str.match(/\/file\/d\/([^\/]+)/);
      if (dMatch) {
        fileId = dMatch[1];
      }
    }
    if (fileId) {
      return `https://lh3.googleusercontent.com/d/${fileId}`;
    }
  }
  return str;
}

// Parse CSV and normalize column values
function parseCSV(text) {
  const lines = text.split('\n');
  const result = [];
  if (lines.length === 0) return result;

  const headers = lines[0].split(',').map(h => h.trim().toLowerCase().replace(/['"]/g, ''));

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const fields = [];
    let currentField = '';
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        fields.push(currentField.trim());
        currentField = '';
      } else {
        currentField += char;
      }
    }
    fields.push(currentField.trim());

    const item = {};
    headers.forEach((header, index) => {
      let val = fields[index] || '';
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.slice(1, -1);
      }
      item[header] = val.trim();
    });

    const rawUrl = item['image url'] || item.imageurl || item.src || item.url || item.image || '';
    const src = convertDriveUrl(rawUrl);

    const category = item.category || '';
    const occasion = item.occasion || '';
    const placement = item.placement || '';
    const complexity = item.complexity || '';
    const side = item.side || '';
    const rawDesignElements = item['design element'] || item.designelement || item['design elements'] || item.designelements || '';
    const status = item.status || '';

    if (src) {
      const designElements = rawDesignElements
        ? rawDesignElements.split(',').map(e => e.trim()).filter(Boolean)
        : [];

      result.push({
        src,
        category: category.trim(),
        occasion: occasion.trim(),
        placement: placement.trim(),
        complexity: complexity.trim(),
        side: side.trim(),
        designElements,
        status: status.toUpperCase().trim()
      });
    }
  }
  return result;
}

// Clean and capitalize labels
const formatLabel = (name) => {
  if (!name) return '';
  if (name.toLowerCase() === 'all') return 'All';
  return name
    .split(/[\s-_]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function Gallery({ limit }) {
  const [items, setItems] = useState(allItems);
  const [loading, setLoading] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);
  
  // Filtering States
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedOccasion, setSelectedOccasion] = useState('all');
  const [selectedPlacement, setSelectedPlacement] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');
  const [selectedSide, setSelectedSide] = useState('all');
  const [selectedDesignElement, setSelectedDesignElement] = useState('all');
  const [showAdvanced, setShowAdvanced] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGallery()
      .then(res => {
        if (res.data && res.data.length > 0) {
          setItems(res.data);
          console.log(`✅ Loaded ${res.data.length} items from backend gallery API.`);
        }
      })
      .catch(err => {
        console.error('❌ Failed to load backend gallery items, using local static fallbacks:', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Filter out draft items only if sheet provides STATUS column control
  const approvedItems = items.filter(item => {
    const hasStatus = items.some(i => i.status);
    if (hasStatus) {
      return item.status === 'APPROVED';
    }
    return true;
  });

  // Dynamically extract unique option values from the loaded items
  const categories = Array.from(new Set(approvedItems.map(item => item.category).filter(Boolean))).sort();
  const occasions = Array.from(new Set(approvedItems.map(item => item.occasion).filter(Boolean))).sort();
  const placements = Array.from(new Set(approvedItems.map(item => item.placement).filter(Boolean))).sort();
  const complexities = Array.from(new Set(approvedItems.map(item => item.complexity).filter(Boolean))).sort();
  const sides = Array.from(new Set(approvedItems.map(item => item.side).filter(Boolean))).sort();
  const designElements = Array.from(new Set(approvedItems.flatMap(item => item.designElements || []).filter(Boolean))).sort();

  // Show advanced filters only if there's data populated in those columns
  const hasAdvancedOptions = occasions.length > 0 || placements.length > 0 || complexities.length > 0 || sides.length > 0 || designElements.length > 0;

  // Filter application logic
  const allFiltered = approvedItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesOccasion = selectedOccasion === 'all' || item.occasion.toLowerCase() === selectedOccasion.toLowerCase();
    const matchesPlacement = selectedPlacement === 'all' || item.placement.toLowerCase() === selectedPlacement.toLowerCase();
    const matchesComplexity = selectedComplexity === 'all' || item.complexity.toLowerCase() === selectedComplexity.toLowerCase();
    const matchesSide = selectedSide === 'all' || item.side.toLowerCase() === selectedSide.toLowerCase();
    const matchesDesignElement = selectedDesignElement === 'all' || (item.designElements && item.designElements.some(e => e.toLowerCase() === selectedDesignElement.toLowerCase()));
    
    return matchesCategory && matchesOccasion && matchesPlacement && matchesComplexity && matchesSide && matchesDesignElement;
  });

  const teaserItems = allFiltered.filter(item => item.isSpecial);
  const teaserList = teaserItems.length > 0 ? teaserItems : allFiltered;
  const filtered = limit ? teaserList.slice(0, limit) : allFiltered;

  const clearAllFilters = () => {
    setSelectedOccasion('all');
    setSelectedPlacement('all');
    setSelectedComplexity('all');
    setSelectedSide('all');
    setSelectedDesignElement('all');
  };

  const hasActiveFilters = selectedOccasion !== 'all' || selectedPlacement !== 'all' || selectedComplexity !== 'all' || selectedSide !== 'all' || selectedDesignElement !== 'all';

  return (
    <section id="gallery" className="section" style={{ background: 'var(--ivory)' }}>
      <div className="container">
        <p className="section-tagline" style={{ textAlign: 'center' }}>
          {limit ? 'OUR BEST CREATIONS' : 'OUR MASTERPIECES'}
        </p>
        <h2 className="section-title center" style={{ textAlign: 'center' }}>
          {limit ? 'Our Special Designs' : 'Stunning Design Gallery'}
        </h2>

        {/* Primary Category Selector & Advanced Filters Toggle */}
        {!limit && (
          <div className="gallery-filter-controls">
            <div className="categories-row">
              {['all', ...categories].map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`filter-btn${selectedCategory === category ? ' active' : ''}`}
                >
                  {category === 'all' ? 'All Designs' : formatLabel(category)}
                </button>
              ))}
            </div>
            
            {hasAdvancedOptions && (
              <button 
                onClick={() => setShowAdvanced(!showAdvanced)} 
                className={`advanced-toggle-btn${showAdvanced ? ' active' : ''}`}
              >
                <span>🔍</span> Advanced Filters {hasActiveFilters && <span className="indicator">•</span>}
              </button>
            )}
          </div>
        )}

        {/* Slide-Down Advanced Filters Drawer */}
        {!limit && hasAdvancedOptions && showAdvanced && (
          <div className="advanced-filters-panel">
            {occasions.length > 0 && (
              <div className="filter-group">
                <label>Occasion</label>
                <select value={selectedOccasion} onChange={e => setSelectedOccasion(e.target.value)}>
                  <option value="all">All Occasions</option>
                  {occasions.map(o => <option key={o} value={o}>{formatLabel(o)}</option>)}
                </select>
              </div>
            )}
            
            {placements.length > 0 && (
              <div className="filter-group">
                <label>Placement</label>
                <select value={selectedPlacement} onChange={e => setSelectedPlacement(e.target.value)}>
                  <option value="all">All Placements</option>
                  {placements.map(p => <option key={p} value={p}>{formatLabel(p)}</option>)}
                </select>
              </div>
            )}

            {complexities.length > 0 && (
              <div className="filter-group">
                <label>Complexity</label>
                <select value={selectedComplexity} onChange={e => setSelectedComplexity(e.target.value)}>
                  <option value="all">All Complexities</option>
                  {complexities.map(c => <option key={c} value={c}>{formatLabel(c)}</option>)}
                </select>
              </div>
            )}

            {sides.length > 0 && (
              <div className="filter-group">
                <label>Side</label>
                <select value={selectedSide} onChange={e => setSelectedSide(e.target.value)}>
                  <option value="all">All Sides</option>
                  {sides.map(s => <option key={s} value={s}>{formatLabel(s)}</option>)}
                </select>
              </div>
            )}

            {designElements.length > 0 && (
              <div className="filter-group">
                <label>Design Element</label>
                <select value={selectedDesignElement} onChange={e => setSelectedDesignElement(e.target.value)}>
                  <option value="all">All Elements</option>
                  {designElements.map(de => <option key={de} value={de}>{formatLabel(de)}</option>)}
                </select>
              </div>
            )}
          </div>
        )}

        {/* Active Filter Tags */}
        {!limit && hasActiveFilters && (
          <div className="active-tags-row">
            <span className="tags-label">Active Filters:</span>
            {selectedOccasion !== 'all' && (
              <span className="active-tag">
                Occasion: {formatLabel(selectedOccasion)} 
                <button onClick={() => setSelectedOccasion('all')}>×</button>
              </span>
            )}
            {selectedPlacement !== 'all' && (
              <span className="active-tag">
                Placement: {formatLabel(selectedPlacement)} 
                <button onClick={() => setSelectedPlacement('all')}>×</button>
              </span>
            )}
            {selectedComplexity !== 'all' && (
              <span className="active-tag">
                Complexity: {formatLabel(selectedComplexity)} 
                <button onClick={() => setSelectedComplexity('all')}>×</button>
              </span>
            )}
            {selectedSide !== 'all' && (
              <span className="active-tag">
                Side: {formatLabel(selectedSide)} 
                <button onClick={() => setSelectedSide('all')}>×</button>
              </span>
            )}
            {selectedDesignElement !== 'all' && (
              <span className="active-tag">
                Element: {formatLabel(selectedDesignElement)} 
                <button onClick={() => setSelectedDesignElement('all')}>×</button>
              </span>
            )}
            <button className="clear-all-btn" onClick={clearAllFilters}>Clear All</button>
          </div>
        )}

        {/* Loader or Gallery Scroll */}
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}>
            <div className="gallery-spinner"></div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="gallery-empty-state">
            <span className="empty-icon">🎨</span>
            <p>No designs match the selected filters.</p>
            <button className="reset-btn" onClick={() => { setSelectedCategory('all'); clearAllFilters(); }}>Reset Filters</button>
          </div>
        ) : (
          <div className="gallery-scroll">
            {filtered.map((item, index) => (
              <div key={item.src + index} className="masonry-item" onClick={() => setActivePhoto(item)} style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', boxShadow: '0 8px 20px var(--shadow)', cursor: 'pointer' }}>
                <img 
                  src={item.src} 
                  alt={item.tag || 'Mehndi Design'} 
                  loading="lazy" 
                  referrerPolicy="no-referrer"
                  style={{ width: '100%', display: 'block', borderRadius: 16, transition: 'transform 0.4s' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(75,46,46,0.9), rgba(75,46,46,0.2))', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 24, opacity: 0, transition: 'opacity 0.4s', borderRadius: 16 }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: 1, marginBottom: 4 }}>
                    {item.tag || formatLabel(item.category)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {limit && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <Link 
              to="/gallery" 
              className="btn btn-primary" 
              style={{ 
                padding: '12px 32px', 
                borderRadius: '30px', 
                fontWeight: 600, 
                textDecoration: 'none',
                boxShadow: '0 4px 15px rgba(171,26,69,0.2)' 
              }}
            >
              Explore Full Gallery
            </Link>
          </div>
        )}
      </div>
      
      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="lightbox-overlay" onClick={() => setActivePhoto(null)}>
          <button className="lightbox-close" onClick={() => setActivePhoto(null)}>×</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={activePhoto.src} alt={activePhoto.tag || 'Mehndi Design'} referrerPolicy="no-referrer" />
            <div className="lightbox-details">
              <h3>{activePhoto.tag || formatLabel(activePhoto.category)}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '6px', marginTop: '8px' }}>
                {activePhoto.occasion && <span className="lightbox-badge">{formatLabel(activePhoto.occasion)}</span>}
                {activePhoto.placement && <span className="lightbox-badge">{formatLabel(activePhoto.placement)}</span>}
                {activePhoto.complexity && <span className="lightbox-badge">{formatLabel(activePhoto.complexity)}</span>}
                {activePhoto.side && <span className="lightbox-badge">{formatLabel(activePhoto.side)}</span>}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .gallery-filter-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
          flex-wrap: wrap;
        }
        .categories-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .advanced-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: #fff;
          border: 1px solid rgba(171, 26, 69, 0.15);
          color: var(--primary, #ab1a45);
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px var(--shadow);
        }
        .advanced-toggle-btn:hover {
          background: var(--primary, #ab1a45);
          color: #fff;
          border-color: var(--primary, #ab1a45);
        }
        .advanced-toggle-btn.active {
          background: var(--primary, #ab1a45);
          color: #fff;
        }
        .advanced-toggle-btn .indicator {
          color: var(--gold, #d97706);
          font-size: 1.2rem;
          line-height: 0;
          margin-left: 2px;
        }
        .advanced-filters-panel {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 16px;
          background: #fff;
          padding: 20px;
          border-radius: 16px;
          margin-bottom: 24px;
          box-shadow: 0 6px 15px var(--shadow);
          border: 1px solid rgba(171, 26, 69, 0.08);
          animation: slideDown 0.3s ease-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .filter-group label {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--gold, #d97706);
          letter-spacing: 0.5px;
        }
        .filter-group select {
          padding: 10px 14px;
          border-radius: 8px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background-color: var(--ivory, #fdfaf5);
          font-size: 0.85rem;
          color: #4b2e2e;
          font-weight: 500;
          cursor: pointer;
          transition: border-color 0.2s;
        }
        .filter-group select:focus {
          outline: none;
          border-color: var(--primary, #ab1a45);
        }
        .active-tags-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 24px;
          animation: fadeIn 0.2s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .tags-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #666;
        }
        .active-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: rgba(171, 26, 69, 0.08);
          border: 1px solid rgba(171, 26, 69, 0.15);
          color: var(--primary, #ab1a45);
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .active-tag button {
          background: none;
          border: none;
          color: var(--primary, #ab1a45);
          font-weight: bold;
          font-size: 1rem;
          line-height: 1;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
        }
        .active-tag button:hover {
          color: var(--gold, #d97706);
        }
        .clear-all-btn {
          background: none;
          border: none;
          color: #888;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
          padding: 0 4px;
        }
        .clear-all-btn:hover {
          color: var(--primary, #ab1a45);
        }
        .gallery-empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 250px;
          background: #fff;
          border-radius: 16px;
          padding: 40px;
          box-shadow: 0 4px 12px var(--shadow);
        }
        .gallery-empty-state .empty-icon {
          font-size: 3rem;
          margin-bottom: 12px;
        }
        .gallery-empty-state p {
          color: #666;
          font-size: 1rem;
          margin-bottom: 20px;
          font-weight: 500;
        }
        .reset-btn {
          background: var(--primary, #ab1a45);
          color: #fff;
          border: none;
          padding: 10px 24px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .reset-btn:hover {
          background: var(--gold, #d97706);
        }
        .gallery-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(171, 26, 69, 0.1);
          border-top-color: var(--primary, #ab1a45);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .gallery-scroll {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 20px;
          padding: 10px 10px 10px 0;
          max-height: 600px;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: var(--primary-light, rgba(171, 26, 69, 0.3)) transparent;
        }
        .gallery-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .gallery-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .gallery-scroll::-webkit-scrollbar-thumb {
          background-color: var(--primary-light, rgba(171, 26, 69, 0.3));
          border-radius: 20px;
        }
        .gallery-scroll::-webkit-scrollbar-thumb:hover {
          background-color: var(--primary, #ab1a45);
        }
        .masonry-item {
          width: 100%;
          aspect-ratio: 1;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 20px var(--shadow);
          cursor: pointer;
        }
        .masonry-item:hover img {
          transform: scale(1.05);
        }
        .masonry-item:hover div {
          opacity: 1;
        }
        @media(max-width:480px) {
          .gallery-scroll {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 12px;
            max-height: 480px;
          }
        }

        /* Lightbox Styles */
        .lightbox-overlay {
          position: fixed;
          inset: 0;
          background: rgba(43, 26, 26, 0.9);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.25s ease-out;
        }
        .lightbox-content {
          position: relative;
          max-width: 90%;
          max-height: 95%;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: zoomIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        @keyframes zoomIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .lightbox-content img {
          max-width: 100%;
          max-height: 75vh;
          object-fit: contain;
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .lightbox-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.4);
          border: none;
          color: #fff;
          font-size: 2.2rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          z-index: 10000;
        }
        .lightbox-close:hover {
          transform: scale(1.1);
          background: rgba(0, 0, 0, 0.6);
          color: var(--gold, #d97706);
        }
        .lightbox-details {
          margin-top: 16px;
          text-align: center;
          color: #fff;
          background: rgba(43, 26, 26, 0.6);
          padding: 12px 24px;
          border-radius: 12px;
          backdrop-filter: blur(4px);
        }
        .lightbox-details h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          color: var(--gold, #d97706);
          margin: 0 0 6px 0;
        }
        .lightbox-badge {
          display: inline-block;
          background: rgba(255, 255, 255, 0.12);
          color: #fdfaf5;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: capitalize;
        }
      `}</style>
    </section>
  );
}

//         @media(max-width:480px){
