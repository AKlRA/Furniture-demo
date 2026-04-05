import { useApp } from '../App';
import './Footer.css';

export default function Footer() {
  const { filterCatalogue, openBooking } = useApp();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a className="nav-logo" href="#home">
            M<span style={{ color: 'var(--gold)' }}>A</span>ISON
          </a>
          <p>
            Fine furniture for considered living. Each piece designed to endure —
            crafted with care, delivered with integrity.
          </p>
        </div>
        <div className="footer-col">
          <h4>Catalogue</h4>
          <ul>
            <li><a href="#catalogue" onClick={() => filterCatalogue('Living Room')}>Living Room</a></li>
            <li><a href="#catalogue" onClick={() => filterCatalogue('Bedroom')}>Bedroom</a></li>
            <li><a href="#catalogue" onClick={() => filterCatalogue('Dining')}>Dining</a></li>
            <li><a href="#catalogue" onClick={() => filterCatalogue('Office')}>Office</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#ar-section">AR Visualizer</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); openBooking(null); }}>Book Appointment</a></li>
            <li><a href="#">Custom Orders</a></li>
            <li><a href="#">Interior Consultation</a></li>
            <li><a href="#">Delivery & Assembly</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About MAISON</a></li>
            <li><a href="#">Our Craftsmen</a></li>
            <li><a href="#">Sustainability</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 MAISON Fine Furniture. All rights reserved.</p>
        <div className="social-links">
          <a href="#" title="Instagram">IG</a>
          <a href="#" title="Pinterest">PT</a>
          <a href="#" title="Facebook">FB</a>
        </div>
      </div>
    </footer>
  );
}
