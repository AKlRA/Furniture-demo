import './Marquee.css';

const items = [
  'Living Room', 'Bedroom', 'Dining', 'Office',
  'Custom Orders', 'AR Visualizer', 'Free Delivery',
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-strip">
      <div className="marquee-inner">
        {doubled.map((item, i) => (
          <span key={i}>
            {item}
            {i < doubled.length - 1 && <span className="dot"> · </span>}
          </span>
        ))}
      </div>
    </div>
  );
}
