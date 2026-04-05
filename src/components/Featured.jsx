import { useApp } from '../App';
import './Featured.css';

export default function Featured() {
  const { openProduct } = useApp();

  return (
    <section className="featured-section" id="featured">
      <div className="section-header fade-up">
        <span className="section-tag">Editor's Selection</span>
        <h2 className="section-title">This <em>Season's</em> Highlights</h2>
        <div className="section-line"></div>
      </div>
      <div className="featured-grid">
        <div className="featured-hero-card fade-up" onClick={() => openProduct(0)}>
          <img
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80"
            alt="Velvet Meridian Sofa"
            loading="lazy"
          />
          <div className="featured-hero-info">
            <div className="tag">Best Seller · Living Room</div>
            <h3>Velvet Meridian Sofa</h3>
            <div className="price">₹1,24,000</div>
          </div>
        </div>
        <div className="featured-side">
          <div className="featured-side-card fade-up" onClick={() => openProduct(2)}>
            <img
              src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=75"
              alt="Ashwood Slab Table"
              loading="lazy"
            />
            <div className="info">
              <div className="tag">New Arrival · Dining</div>
              <h3>Ashwood Slab Table</h3>
              <div className="price">₹88,000</div>
            </div>
          </div>
          <div className="featured-side-card fade-up" onClick={() => openProduct(4)}>
            <img
              src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=75"
              alt="Executive Walnut Desk"
              loading="lazy"
            />
            <div className="info">
              <div className="tag">Trending · Office</div>
              <h3>Executive Walnut Desk</h3>
              <div className="price">₹96,500</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
