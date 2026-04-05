import { useState } from 'react';
import { useApp } from '../App';
import './ProductModal.css';

export default function ProductModal() {
  const { selectedProduct, closeProduct, openBooking } = useApp();
  const [activeSwatch, setActiveSwatch] = useState(0);

  if (!selectedProduct) return null;
  const p = selectedProduct;

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) closeProduct();
  };

  const handleBook = () => {
    closeProduct();
    openBooking(p);
  };

  const handleAR = () => {
    closeProduct();
    document.getElementById('ar-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="modal-overlay" onClick={handleOverlay}>
      <div className="modal">
        <div className="modal-gallery">
          <img className="modal-main-img" src={p.img} alt={p.name} />
          <button className="modal-close" onClick={closeProduct}>✕</button>
        </div>
        <div className="modal-content">
          <div className="modal-category">{p.category}</div>
          <h2 className="modal-title">{p.name}</h2>
          <div className="modal-price">{p.price}</div>
          <p className="modal-desc">{p.desc}</p>
          <div className="modal-specs">
            {Object.entries(p.specs).map(([k, v]) => (
              <div key={k}>
                <div className="spec-key">{k}</div>
                <div className="spec-val">{v}</div>
              </div>
            ))}
          </div>
          <div className="swatches">
            {p.swatches.map((c, i) => (
              <div
                key={i}
                className={`swatch ${i === activeSwatch ? 'active' : ''}`}
                style={{ background: c }}
                onClick={() => setActiveSwatch(i)}
              />
            ))}
          </div>
          <div className="modal-actions">
            <button className="btn-primary" onClick={handleBook}>
              Reserve This Piece
            </button>
            <button className="btn-ar-modal" onClick={handleAR}>
              3D View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
