import { useApp } from '../App';
import { categories } from '../data/products';
import './Categories.css';

export default function Categories() {
  const { filterCatalogue } = useApp();

  return (
    <section className="categories" id="categories">
      <div className="section-header fade-up">
        <span className="section-tag">Browse by Room</span>
        <h2 className="section-title">Find Your <em>Perfect</em> Space</h2>
        <div className="section-line"></div>
      </div>
      <div className="cat-grid stagger">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="cat-card fade-up"
            onClick={() => filterCatalogue(cat.name)}
          >
            <img className="cat-img" src={cat.img} alt={cat.name} loading="lazy" />
            <div className="cat-overlay">
              <div className="cat-name">{cat.name}</div>
              <div className="cat-count">{cat.count} pieces</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
