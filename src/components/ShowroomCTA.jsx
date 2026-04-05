import { useApp } from '../App';
import './ShowroomCTA.css';

export default function ShowroomCTA() {
  const { openBooking } = useApp();

  return (
    <section className="showroom-cta" id="showroom">
      <h2 className="fade-up">Visit Our Showroom</h2>
      <p className="fade-up">
        Experience the full collection in person. Our design consultants will guide you
        through our curated spaces and help you find pieces that speak to your home's soul.
      </p>
      <div className="showroom-cta-buttons fade-up">
        <button className="btn-primary" onClick={() => openBooking(null)}>
          Book a Visit
        </button>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          WhatsApp Us
        </a>
      </div>
      <p className="showroom-address fade-up">
        📍 45 Lavelle Road, Bengaluru · Mon–Sat 10am–7pm
      </p>
    </section>
  );
}
