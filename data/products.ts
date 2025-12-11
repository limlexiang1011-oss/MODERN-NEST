import { Product } from '../types';

export const ALL_PRODUCTS: Product[] = [
  // FEATURED
  { 
    id: '101', 
    name: 'Oslo Lounge Chair', 
    category: 'Chairs', 
    price: 599, 
    image: 'https://i.ibb.co/wZMnnRgr/High-Backed-Reading-Chair-Corner.png', 
    images: [
      'https://i.ibb.co/wZMnnRgr/High-Backed-Reading-Chair-Corner.png',
      'https://i.ibb.co/4ZcGbmw2/image.png',
    ],
    isNew: true,
    description: 'The Oslo Lounge Chair combines the best of Nordic design with exceptional comfort. Crafted from solid white oak and upholstered in a premium wool blend, its organic curves and understated elegance make it a perfect focal point for any modern living space. The wide seat and supportive backrest invite you to relax for hours.',
    dimensions: 'W: 78cm x D: 84cm x H: 76cm',
    material: 'Solid Oak Frame, Wool Blend Fabric, High-density Foam',
    sku: 'OSLO-CH-001'
  },
  { 
    id: '102', 
    name: 'Kyoto Coffee Table', 
    category: 'Tables', 
    price: 450, 
    image: 'https://i.ibb.co/ksTm0FhG/8.png',
    images: [
      'https://i.ibb.co/ksTm0FhG/8.png',
      'https://i.ibb.co/qFjTsNck/10.png',
    ],
    description: 'Inspired by traditional Japanese joinery, the Kyoto Coffee Table features a low profile and clean geometric lines. The walnut finish brings warmth and sophistication, while the floating top design adds a sense of airiness to your room. Includes a hidden lower shelf for magazines and remotes.',
    dimensions: 'W: 120cm x D: 60cm x H: 35cm',
    material: 'Walnut Veneer, Solid Ash Legs',
    sku: 'KYOTO-TBL-002'
  },
  { 
    id: '103', 
    name: 'Havana Velvet Sofa', 
    category: 'Sofas', 
    price: 1299, 
    image: 'https://i.ibb.co/3863qVN/Luxury-Living-Room-Option-3.png',
    images: [
      'https://i.ibb.co/3863qVN/Luxury-Living-Room-Option-3.png',
      'https://i.ibb.co/99GQRmXh/Luxury-Living-Room-Option-4.png',
    ],
    description: 'Sink into luxury with the Havana Velvet Sofa. Featuring deep channel tufting and rich, jewel-toned velvet upholstery, this sofa is a statement piece that exudes glamour. The brass-capped legs add a touch of vintage mid-century modern flair.',
    dimensions: 'W: 220cm x D: 95cm x H: 82cm',
    material: 'Performance Velvet, Kiln-dried Hardwood Frame',
    sku: 'HAVANA-SF-003'
  },
  { 
    id: '104', 
    name: 'Nordic Floor Lamp', 
    category: 'Lighting', 
    price: 299, 
    image: 'https://i.ibb.co/qFjTsNck/10.png',
    isNew: true,
    description: 'Illuminate your space with the sleek Nordic Floor Lamp. Its matte black finish and adjustable brass head allow you to direct light exactly where you need it. Perfect for reading nooks or adding ambient lighting to a dark corner.',
    dimensions: 'H: 155cm x Base Dia: 28cm',
    material: 'Powder Coated Steel, Brass Details',
    sku: 'NORDIC-LMP-004'
  },
  
  // BEST SELLERS
  { 
    id: '201', 
    name: 'Eames Style Recliner', 
    category: 'Chairs', 
    price: 899, 
    image: 'https://i.ibb.co/qLYmVJdp/Modern-Dining-Chair-Sales-Poster.png',
    images: [
      'https://i.ibb.co/qLYmVJdp/Modern-Dining-Chair-Sales-Poster.png',
      'https://i.ibb.co/wZMnnRgr/High-Backed-Reading-Chair-Corner.png'
    ],
    description: 'An homage to iconic mid-century design, this recliner offers unparalleled comfort. Upholstered in genuine top-grain leather with a molded plywood shell, it comes complete with a matching ottoman for the ultimate relaxation experience.',
    dimensions: 'W: 84cm x D: 85cm x H: 84cm',
    material: 'Top-grain Leather, Plywood, Aluminum Base',
    sku: 'ES-REC-201'
  },
  { 
    id: '202', 
    name: 'Minimalist Bookshelf', 
    category: 'Storage', 
    price: 650, 
    image: 'https://i.ibb.co/4RZ0V5Ch/7.png',
    description: 'Showcase your library and collectibles with this airy, open-back bookshelf. The asymmetrical shelf heights allow for versatile display options, from tall vases to stacks of art books. Sturdy metal frame with oak shelves.',
    dimensions: 'W: 100cm x D: 30cm x H: 180cm',
    material: 'Black Metal Frame, Oak Veneer Shelves',
    sku: 'MIN-BK-202'
  },
  { 
    id: '203', 
    name: 'Ceramic Vase Set', 
    category: 'Decor', 
    price: 120, 
    image: 'https://i.ibb.co/qYy49069/6.png',
    images: [
        'https://i.ibb.co/qYy49069/6.png',
        'https://i.ibb.co/ksTm0FhG/8.png'
    ],
    description: 'A trio of handcrafted ceramic vases in varying organic shapes and earthy tones. These sculptural pieces look stunning on their own or filled with dried botanicals. Each piece is unique due to the reactive glaze finish.',
    dimensions: 'Various Heights: 15cm, 22cm, 30cm',
    material: 'Stoneware Ceramic',
    sku: 'CER-VS-203'
  },
  { 
    id: '204', 
    name: 'Wool Area Rug', 
    category: 'Rugs', 
    price: 350, 
    image: 'https://i.ibb.co/VWPJbB5M/9.png',
    description: 'Hand-tufted from 100% New Zealand wool, this area rug features a subtle high-low geometric pattern that adds texture without overwhelming your space. Soft underfoot and naturally stain-resistant.',
    dimensions: '200cm x 300cm',
    material: '100% New Zealand Wool, Cotton Backing',
    sku: 'WOOL-RG-204'
  },
];

export const FEATURED_PRODUCTS = ALL_PRODUCTS.filter(p => ['101', '102', '103', '104'].includes(p.id));
export const BEST_SELLERS = ALL_PRODUCTS.filter(p => ['201', '202', '203', '204'].includes(p.id));

export const getProductById = (id: string): Product | undefined => {
  return ALL_PRODUCTS.find(p => p.id === id);
};

export const getRelatedProducts = (category: string, currentId: string): Product[] => {
  return ALL_PRODUCTS.filter(p => p.category === category && p.id !== currentId).slice(0, 4);
};