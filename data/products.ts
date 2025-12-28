
import { Product } from '../types';

export const ALL_PRODUCTS: Product[] = [
  // FEATURED / NEW ARRIVALS
  { 
    id: '101', 
    name: 'Oslo Lounge Chair', 
    category: 'Chairs', 
    image: 'https://i.ibb.co/qYy49069/6.png', 
    images: [
      'https://i.ibb.co/qYy49069/6.png',
      'https://i.ibb.co/4ZcGbmw2/image.png',
    ],
    isNew: true,
    description: 'The Oslo Lounge Chair combines the best of Nordic design with exceptional comfort. Crafted from solid white oak and upholstered in a premium wool blend, its organic curves and understated elegance make it a perfect focal point for any modern living space.',
    dimensions: 'W: 78cm x D: 84cm x H: 76cm',
    material: 'Solid Oak Frame, Wool Blend Fabric, High-density Foam',
    sku: 'OSLO-CH-001'
  },
  { 
    id: '102', 
    name: 'Kyoto Coffee Table', 
    category: 'Tables', 
    image: 'https://i.ibb.co/ksTm0FhG/8.png',
    images: [
      'https://i.ibb.co/ksTm0FhG/8.png',
      'https://i.ibb.co/qFjTsNck/10.png',
    ],
    description: 'Inspired by traditional Japanese joinery, the Kyoto Coffee Table features a low profile and clean geometric lines. The walnut finish brings warmth and sophistication.',
    dimensions: 'W: 120cm x D: 60cm x H: 35cm',
    material: 'Walnut Veneer, Solid Ash Legs',
    sku: 'KYOTO-TBL-002'
  },
  { 
    id: '103', 
    name: 'Havana Velvet Sofa', 
    category: 'Sofas', 
    image: 'https://i.ibb.co/4RZ0V5Ch/7.png',
    images: [
      'https://i.ibb.co/4RZ0V5Ch/7.png',
      'https://i.ibb.co/99GQRmXh/Luxury-Living-Room-Option-4.png',
    ],
    description: 'Sink into luxury with the Havana Velvet Sofa. Featuring deep channel tufting and rich, jewel-toned velvet upholstery, this sofa is a statement piece that exudes glamour.',
    dimensions: 'W: 220cm x D: 95cm x H: 82cm',
    material: 'Performance Velvet, Kiln-dried Hardwood Frame',
    sku: 'HAVANA-SF-003'
  },
  { 
    id: '104', 
    name: 'Nordic Floor Lamp', 
    category: 'Lighting', 
    image: 'https://i.ibb.co/qFjTsNck/10.png',
    isNew: true,
    description: 'Illuminate your space with the sleek Nordic Floor Lamp. Its matte black finish and adjustable brass head allow you to direct light exactly where you need it.',
    dimensions: 'H: 155cm x Base Dia: 28cm',
    material: 'Powder Coated Steel, Brass Details',
    sku: 'NORDIC-LMP-004'
  },
  
  // ADDITIONAL PRODUCTS
  { 
    id: '204', 
    name: 'Wool Area Rug', 
    category: 'Rugs', 
    image: 'https://i.ibb.co/VWPJbB5M/9.png',
    description: 'Hand-tufted from 100% New Zealand wool, featuring a subtle high-low geometric pattern for added texture.',
    dimensions: '200cm x 300cm',
    material: '100% New Zealand Wool, Cotton Backing',
    sku: 'WOOL-RG-204'
  },

  // NEW ADDITIONS FROM USER
  { 
    id: '301', 
    name: 'NOVA Lounge Chair', 
    category: 'Lounge chair', 
    image: 'https://i.ibb.co/jk4NhH1d/5.png',
    isNew: true,
    description: 'The NOVA features a sweeping silhouette and deep-set seating, perfect for contemporary relaxation spaces.',
    dimensions: 'W: 75cm x D: 80cm x H: 72cm',
    material: 'Curved Ash Wood, Premium Linen',
    sku: 'NOVA-LC-301'
  },
  { 
    id: '302', 
    name: 'HAVEN Lounge Chair', 
    category: 'Lounge chair', 
    image: 'https://i.ibb.co/B202p1Xb/6.png',
    description: 'Designed as a personal retreat, the HAVEN offers an enveloping backrest and soft, textured upholstery.',
    dimensions: 'W: 82cm x D: 88cm x H: 78cm',
    material: 'Walnut Finish, Bouclé Fabric',
    sku: 'HAVEN-LC-302'
  },
  { 
    id: '303', 
    name: 'AXIS Dining Chair', 
    category: 'Dining chair', 
    image: 'https://i.ibb.co/LX8Hx1Fq/7.png',
    description: 'A study in geometric balance, the AXIS Dining Chair provides ergonomic support with a striking structural profile.',
    dimensions: 'W: 48cm x D: 52cm x H: 85cm',
    material: 'Powder-coated Steel, Molded Plywood',
    sku: 'AXIS-DC-303'
  },
  { 
    id: '304', 
    name: 'EMBER Dining Chair', 
    category: 'Dining chair', 
    image: 'https://i.ibb.co/DPyhQBxK/8.png',
    isNew: true,
    description: 'Warm and inviting, the EMBER combines traditional woodworking with a modern, slimline aesthetic.',
    dimensions: 'W: 50cm x D: 55cm x H: 82cm',
    material: 'Solid Cherry Wood, Leather Seat Cushion',
    sku: 'EMBER-DC-304'
  },
  { 
    id: '305', 
    name: 'VERA Dining Chair', 
    category: 'Dining chair', 
    image: 'https://i.ibb.co/TxWhBchV/9.png',
    description: 'Elegant and understated, the VERA features a curved backrest that seamlessly flows into its supportive legs.',
    dimensions: 'W: 52cm x D: 54cm x H: 80cm',
    material: 'Oak Wood, Performance Fabric',
    sku: 'VERA-DC-305'
  }
];

export const FEATURED_PRODUCTS = ALL_PRODUCTS.filter(p => ['101', '102', '103', '104'].includes(p.id));

export const getProductById = (id: string): Product | undefined => {
  return ALL_PRODUCTS.find(p => p.id === id);
};

export const getRelatedProducts = (category: string, currentId: string): Product[] => {
  return ALL_PRODUCTS.filter(p => p.category === category && p.id !== currentId).slice(0, 4);
};
