import { testimonials } from '../data/products';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-header fade-up">
        <span className="section-tag">What Our Clients Say</span>
        <h2 className="section-title">Loved by <em>Homeowners</em></h2>
        <div className="section-line"></div>
      </div>
      <div className="test-track stagger">
        {testimonials.map((t, i) => (
          <div key={i} className="test-card fade-up">
            <div className="test-stars">{'★'.repeat(t.stars)}</div>
            <p className="test-quote">{t.quote}</p>
            <div className="test-author">
              <img className="test-avatar" src={t.avatar} alt={t.name} loading="lazy" />
              <div>
                <div className="test-name">{t.name}</div>
                <div className="test-loc">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
