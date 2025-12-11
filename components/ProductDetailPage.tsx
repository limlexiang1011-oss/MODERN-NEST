import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Minus, Plus, Star, Truck, Shield, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { Product } from '../types';
import { getProductById, getRelatedProducts } from '../data/products';
import ProductCard from './ProductCard';

interface ProductDetailPageProps {
  onAddToCart: (product: Product) => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onAddToCart }) => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [activeImage, setActiveImage] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [openSection, setOpenSection] = useState<string | null>('description');

  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      const foundProduct = getProductById(id);
      setProduct(foundProduct);
      if (foundProduct) {
        setActiveImage(foundProduct.image);
        setRelatedProducts(getRelatedProducts(foundProduct.category, foundProduct.id));
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 text-center">
        <h2 className="text-2xl font-serif text-primary mb-4">Product Not Found</h2>
        <p className="text-secondary mb-6">The item you are looking for does not exist or has been moved.</p>
        <Link to="/shop" className="bg-primary text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors">
          Back to Shop
        </Link>
      </div>
    );
  }

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    // In a real app, we would pass quantity to addToCart
    for(let i=0; i<quantity; i++) {
        onAddToCart(product);
    }
  };

  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  const AccordionItem = ({ title, id, children }: React.PropsWithChildren<{ title: string, id: string }>) => (
    <div className="border-b border-gray-200">
      <button 
        onClick={() => setOpenSection(openSection === id ? null : id)}
        className="w-full py-4 flex justify-between items-center text-left"
      >
        <span className="font-medium text-primary uppercase tracking-wide text-sm">{title}</span>
        {openSection === id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${openSection === id ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Breadcrumbs */}
      <nav className="text-xs text-gray-500 mb-8 flex items-center space-x-2">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link to="/shop" className="hover:text-primary">Shop</Link>
        <span>/</span>
        <span className="text-primary font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
        {/* Left Column - Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 overflow-hidden">
            <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveImage(img)}
                className={`aspect-square bg-gray-100 overflow-hidden border-2 transition-colors ${activeImage === img ? 'border-primary' : 'border-transparent'}`}
              >
                <img src={img} alt={`${product.name} view ${idx+1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-2">{product.name}</h1>
          
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-xl text-secondary">RM {product.price.toLocaleString()}</span>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              <span className="text-gray-400 text-xs ml-2">(24 reviews)</span>
            </div>
          </div>

          <p className="text-secondary leading-relaxed mb-8">
            {product.description || "Experience timeless elegance with this handcrafted piece, designed to bring comfort and style to your modern home."}
          </p>

          <div className="mb-8 p-4 bg-offwhite border border-gray-100 rounded-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Quantity</span>
              <div className="flex items-center border border-gray-300 bg-white">
                <button 
                  onClick={() => handleQuantityChange(-1)} 
                  className="p-3 hover:bg-gray-100 text-primary transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(1)} 
                  className="p-3 hover:bg-gray-100 text-primary transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="w-full bg-primary text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors shadow-sm"
            >
              Add to Cart - RM {(product.price * quantity).toLocaleString()}
            </button>
          </div>

          {/* Features / Benefits */}
          <div className="grid grid-cols-2 gap-4 mb-8 text-xs text-secondary">
             <div className="flex items-center space-x-2">
                <Truck size={18} />
                <span>Free shipping on orders over RM 3000</span>
             </div>
             <div className="flex items-center space-x-2">
                <Shield size={18} />
                <span>5-year structural warranty</span>
             </div>
          </div>

          {/* Accordions */}
          <div className="border-t border-gray-200">
            <AccordionItem title="Dimensions" id="dimensions">
              {product.dimensions || "See product images for detailed dimensions."}
            </AccordionItem>
            <AccordionItem title="Materials & Care" id="materials">
              {product.material || "High quality sustainable materials."}
              <br/><br/>
              Wipe clean with a soft, dry cloth. Avoid direct sunlight and heat sources to preserve the finish.
            </AccordionItem>
            <AccordionItem title="Delivery & Returns" id="delivery">
              <strong>Delivery:</strong> Standard delivery takes 5-7 business days. White glove service available at checkout.<br/><br/>
              <strong>Returns:</strong> We accept returns within 30 days of delivery. Items must be in original packaging and condition.
            </AccordionItem>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-gray-200 pt-16">
          <h3 className="text-2xl font-serif text-primary mb-8 text-center">You Might Also Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetailPage;