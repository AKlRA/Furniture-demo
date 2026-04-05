export const products = [
  {
    id: 0,
    name: "Velvet Meridian Sofa",
    category: "Living Room",
    price: "₹1,24,000",
    priceNum: 124000,
    badge: "Best Seller",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80",
    desc: "Deep-seated, velvet-wrapped luxury. The Meridian Sofa features solid ashwood legs, down-feather cushioning, and a silhouette inspired by mid-century Italian design.",
    specs: {
      Material: "Velvet + Ashwood",
      Dimensions: "240 × 90 × 80 cm",
      Weight: "68 kg",
      "Lead Time": "3–4 weeks",
    },
    swatches: ["#6B4C3B", "#2C3E50", "#8B7355", "#4A4A4A"],
    model:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb",
    rating: 4.9,
    reviews: 42,
  },
  {
    id: 1,
    name: "Arc Lounge Chair",
    category: "Living Room",
    price: "₹48,500",
    priceNum: 48500,
    badge: "New",
    img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=700&q=80",
    desc: "A single-seater companion for quiet evenings. Sculpted ash frame with woven cane back and mohair seat cushion.",
    specs: {
      Material: "Ash + Mohair",
      Dimensions: "72 × 80 × 85 cm",
      Weight: "14 kg",
      "Lead Time": "2–3 weeks",
    },
    swatches: ["#C9A96E", "#8B7355", "#556B2F"],
    model:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb",
    rating: 4.8,
    reviews: 28,
  },
  {
    id: 2,
    name: "Ashwood Slab Table",
    category: "Dining",
    price: "₹88,000",
    priceNum: 88000,
    badge: "New",
    img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=700&q=80",
    desc: "Live-edge ashwood slab on hand-forged iron legs. Each table is unique — no two grain patterns are alike. Seats 6–8 comfortably.",
    specs: {
      Material: "Solid Ashwood + Iron",
      Dimensions: "220 × 95 × 76 cm",
      Weight: "72 kg",
      "Lead Time": "4–6 weeks",
    },
    swatches: ["#8B7355", "#3D2B1F", "#C0A080"],
    model:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb",
    rating: 4.9,
    reviews: 19,
  },
  {
    id: 3,
    name: "Linen Platform Bed",
    category: "Bedroom",
    price: "₹72,000",
    priceNum: 72000,
    badge: null,
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&q=80",
    desc: "Low-slung, clean-lined platform bed with an upholstered linen headboard and solid walnut base. Timeless Scandinavian influence.",
    specs: {
      Material: "Linen + Walnut",
      Dimensions: "King: 200 × 200 cm",
      Weight: "55 kg",
      "Lead Time": "3–4 weeks",
    },
    swatches: ["#E8D5A3", "#D4C5A9", "#8B7355"],
    model:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb",
    rating: 4.7,
    reviews: 35,
  },
  {
    id: 4,
    name: "Executive Walnut Desk",
    category: "Office",
    price: "₹96,500",
    priceNum: 96500,
    badge: "Trending",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=700&q=80",
    desc: "Solid walnut top with integrated cable management, two leather-lined drawers, and solid brass hardware. For those who work in beauty.",
    specs: {
      Material: "Solid Walnut + Brass",
      Dimensions: "160 × 75 × 76 cm",
      Weight: "38 kg",
      "Lead Time": "3–5 weeks",
    },
    swatches: ["#3D2B1F", "#5C4033", "#8B7355"],
    model:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb",
    rating: 4.9,
    reviews: 22,
  },
  {
    id: 5,
    name: "Cane Bookshelf",
    category: "Living Room",
    price: "₹38,000",
    priceNum: 38000,
    badge: null,
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80",
    desc: "An open-frame shelf in rattan-wrapped teak, celebrating natural craft. Five adjustable shelves, ideal for books, plants, and objects of meaning.",
    specs: {
      Material: "Teak + Rattan",
      Dimensions: "90 × 35 × 180 cm",
      Weight: "22 kg",
      "Lead Time": "2–3 weeks",
    },
    swatches: ["#C9A96E", "#8B7355", "#3D2B1F"],
    model:
      "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb",
    rating: 4.6,
    reviews: 31,
  },
];

export const categories = [
  {
    name: "Living Room",
    count: 48,
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=70",
  },
  {
    name: "Bedroom",
    count: 36,
    img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=400&q=70",
  },
  {
    name: "Dining",
    count: 22,
    img: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?w=400&q=70",
  },
  {
    name: "Office",
    count: 30,
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=70",
  },
];

export const testimonials = [
  {
    quote:
      '"The Meridian Sofa transformed our living room completely. The craftsmanship is beyond anything I\'ve seen at this price point. We used the AR viewer to confirm it would fit — absolute game-changer."',
    name: "Priya Mehta",
    location: "Mumbai · Interior Designer",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b8a0?w=100&q=80",
    stars: 5,
  },
  {
    quote:
      '"I uploaded a photo of my study, placed the walnut desk virtually, and immediately knew I had to have it. The booking process was seamless and delivery was on time."',
    name: "Arjun Kapoor",
    location: "Bengaluru · Architect",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    stars: 5,
  },
  {
    quote:
      '"The dining table is a statement piece. Guests always ask where we got it. The wood grain is phenomenal and the AR feature helped my wife and me agree on the purchase without a single disagreement."',
    name: "Rahul & Ananya S.",
    location: "Delhi · Homeowners",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    stars: 5,
  },
];

export const filterCategories = [
  "All",
  "Living Room",
  "Bedroom",
  "Dining",
  "Office",
];
