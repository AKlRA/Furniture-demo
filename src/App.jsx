import { useState, useEffect, useCallback, useRef, createContext, useContext } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Categories from './components/Categories';
import Catalogue from './components/Catalogue';
import Featured from './components/Featured';
import ARVisualizer from './components/ARVisualizer';
import Testimonials from './components/Testimonials';
import ShowroomCTA from './components/ShowroomCTA';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import BookingModal from './components/BookingModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import Toast from './components/Toast';
import { products } from './data/products';

export const AppContext = createContext();

export function useApp() {
  return useContext(AppContext);
}

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [bookingProduct, setBookingProduct] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const [toast, setToast] = useState({ message: '', visible: false });
  const toastTimeout = useRef(null);

  const showToast = useCallback((message) => {
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    setToast({ message, visible: true });
    toastTimeout.current = setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }));
    }, 2500);
  }, []);

  const toggleWishlist = useCallback((id) => {
    setWishlist((prev) => {
      if (prev.includes(id)) {
        showToast('Removed from wishlist');
        return prev.filter((x) => x !== id);
      } else {
        showToast('Added to wishlist ♥');
        return [...prev, id];
      }
    });
  }, [showToast]);

  const openProduct = useCallback((id) => {
    const p = products.find((x) => x.id === id);
    if (p) {
      setSelectedProduct(p);
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const closeProduct = useCallback(() => {
    setSelectedProduct(null);
    document.body.style.overflow = '';
  }, []);

  const openBooking = useCallback((product) => {
    setBookingProduct(product || null);
    setShowBooking(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeBooking = useCallback(() => {
    setShowBooking(false);
    setBookingProduct(null);
    document.body.style.overflow = '';
  }, []);

  const filterCatalogue = useCallback((filter) => {
    setActiveFilter(filter);
    document.getElementById('catalogue')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  // Intersection Observer for fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const els = document.querySelectorAll('.fade-up');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  const ctx = {
    wishlist,
    toggleWishlist,
    activeFilter,
    filterCatalogue,
    selectedProduct,
    openProduct,
    closeProduct,
    bookingProduct,
    showBooking,
    openBooking,
    closeBooking,
    showToast,
  };

  return (
    <AppContext.Provider value={ctx}>
      <Navbar />
      <Hero />
      <Marquee />
      <Categories />
      <Catalogue />
      <Featured />
      <ARVisualizer />
      <Testimonials />
      <ShowroomCTA />
      <Footer />
      {selectedProduct && <ProductModal />}
      {showBooking && <BookingModal />}
      <WhatsAppFloat />
      <Toast message={toast.message} visible={toast.visible} />
    </AppContext.Provider>
  );
}

export default App;
