import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="hero-tag">New Collection 2025</div>
        <h1 className="hero-title">
          Where <em>Craft</em><br />Becomes<br />Home
        </h1>
        <p className="hero-sub">
          Curated furniture of extraordinary character. Each piece is an heirloom
          in the making — designed for lives that value beauty and permanence.
        </p>
        <div className="hero-ctas">
          <a href="#catalogue" className="btn-primary">Explore Catalogue</a>
          <a href="#ar-section" className="btn-outline">View in Your Room</a>
        </div>
        <div className="hero-stats">
          <div>
            <span className="stat-num">240+</span>
            <span className="stat-label">Pieces</span>
          </div>
          <div>
            <span className="stat-num">12</span>
            <span className="stat-label">Collections</span>
          </div>
          <div>
            <span className="stat-num">18yr</span>
            <span className="stat-label">Craft Legacy</span>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img
          className="hero-img"
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1200&q=80"
          alt="Luxury living room"
          loading="eager"
        />
        <div className="hero-right-overlay">
          <div>
            <div className="featured-label">Featured Piece</div>
            <div className="featured-name">Velvet Meridian Sofa</div>
          </div>
          <div className="featured-price">₹1,24,000</div>
        </div>
        <div className="scroll-indicator">
          Scroll<span></span>
        </div>
      </div>
    </section>
  );
}
