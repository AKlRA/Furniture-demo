import { useState, useRef } from 'react';
import { useApp } from '../App';
import './BookingModal.css';

export default function BookingModal() {
  const { bookingProduct, closeBooking, showToast } = useApp();
  const [success, setSuccess] = useState(false);
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) closeBooking();
  };

  const handleSubmit = () => {
    if (!nameRef.current?.value || !phoneRef.current?.value || !emailRef.current?.value) {
      showToast('Please fill in your details');
      return;
    }
    setSuccess(true);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="booking-overlay" onClick={handleOverlay}>
      <div className="booking-modal">
        <button className="booking-close" onClick={closeBooking}>✕</button>

        {!success ? (
          <div>
            <h2 className="booking-title">Reserve a Piece</h2>
            <p className="booking-sub">
              {bookingProduct
                ? `Enquiring about: ${bookingProduct.name} — ${bookingProduct.price}`
                : 'Book an appointment or enquire about any item'}
            </p>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your name" ref={nameRef} />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" ref={phoneRef} />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="email@example.com" ref={emailRef} />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Preferred Date</label>
                <input type="date" min={minDate} />
              </div>
              <div className="form-group">
                <label>Visit Type</label>
                <select>
                  <option>Showroom Visit</option>
                  <option>Home Consultation</option>
                  <option>Phone Call</option>
                  <option>WhatsApp Enquiry</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Message (optional)</label>
              <textarea rows="2" placeholder="Any specific requirements..." />
            </div>
            <button
              className="btn-primary"
              style={{ width: '100%', border: 'none', cursor: 'pointer' }}
              onClick={handleSubmit}
            >
              Confirm Reservation
            </button>
            <p className="form-note">We'll confirm within 2 hours. No payment required to book.</p>
          </div>
        ) : (
          <div className="booking-success">
            <div className="check">✓</div>
            <h3>Booking Confirmed!</h3>
            <p>
              We'll reach out within 2 hours to confirm your appointment.
              Looking forward to welcoming you to MAISON.
            </p>
            <button
              className="btn-primary"
              style={{ marginTop: '1.5rem', border: 'none', cursor: 'pointer' }}
              onClick={closeBooking}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
