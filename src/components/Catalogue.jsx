import { useApp } from '../App';
import { products, filterCategories } from '../data/products';
import './Catalogue.css';

export default function Catalogue() {
  const { activeFilter, filterCatalogue, wishlist, toggleWishlist, openProduct } = useApp();

  const filtered = activeFilter === 'All'
    ? products
    : products.filter((p) => p.category === activeFilter);

  const handleAR = (id) => {
    const el = document.getElementById('ar-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="catalogue" id="catalogue">
      <div className="section-header fade-up">
        <span className="section-tag">Our Catalogue</span>
        <h2 className="section-title">Crafted <em>With Intention</em></h2>
        <div className="section-line"></div>
      </div>
      <div className="filter-bar">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => filterCatalogue(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="product-grid stagger">
        {filtered.map((p, i) => (
          <div
            key={p.id}
            className="product-card fade-up"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="product-img-wrap">
              <img className="product-img" src={p.img} alt={p.name} loading="lazy" />
              {p.badge && <div className="product-badge">{p.badge}</div>}
              <button
                className={`wishlist-btn ${wishlist.includes(p.id) ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleWishlist(p.id); }}
              >
                {wishlist.includes(p.id) ? '♥' : '♡'}
              </button>
              <div className="card-actions">
                <button className="card-action-btn" onClick={() => openProduct(p.id)}>
                  View Details
                </button>
                <button className="card-action-btn ar-btn" onClick={() => handleAR(p.id)}>
                  ⬡ AR
                </button>
              </div>
            </div>
            <div className="product-info" onClick={() => openProduct(p.id)}>
              <div className="product-category">{p.category}</div>
              <div className="product-name">{p.name}</div>
              <div className="product-desc">{p.desc.substring(0, 80)}...</div>
              <div className="product-footer">
                <div className="product-price">{p.price}</div>
                <div className="product-rating">
                  ★ {p.rating} <span className="count">({p.reviews})</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
