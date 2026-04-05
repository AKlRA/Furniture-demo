import { useState, useEffect } from 'react';
import { useApp } from '../App';
import './Navbar.css';

export default function Navbar() {
  const { wishlist, openBooking, showToast } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobile = () => setMobileOpen((o) => !o);
  const closeMobile = () => setMobileOpen(false);

  const handleShowWishlist = () => {
    if (!wishlist.length) {
      showToast('Your wishlist is empty');
      return;
    }
    showToast(`${wishlist.length} item(s) in wishlist`);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
        <a href="#home" className="nav-logo">
          M<span className="accent">A</span>ISON
        </a>
        <ul className="nav-links">
          <li><a href="#catalogue">Catalogue</a></li>
          <li><a href="#featured">Collections</a></li>
          <li><a href="#ar-section">Visualize</a></li>
          <li><a href="#showroom">Showroom</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openBooking(null); }}>Book</a></li>
        </ul>
        <div className="nav-right">
          <button className="nav-icon" onClick={() => openBooking(null)} title="Book">🗓</button>
          <button className="nav-icon" onClick={handleShowWishlist} title="Wishlist">
            ♡<span className="cart-badge">{wishlist.length}</span>
          </button>
        </div>
        <button
          className={`hamburger ${mobileOpen ? 'open' : ''}`}
          onClick={toggleMobile}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`}>
        <button className="mobile-nav-close" onClick={closeMobile}>✕</button>
        <a href="#catalogue" onClick={closeMobile}>Catalogue</a>
        <a href="#featured" onClick={closeMobile}>Collections</a>
        <a href="#ar-section" onClick={closeMobile}>Visualize</a>
        <a href="#showroom" onClick={closeMobile}>Showroom</a>
        <a href="#" onClick={(e) => { e.preventDefault(); closeMobile(); openBooking(null); }}>
          Book Appointment
        </a>
      </div>
    </>
  );
}
