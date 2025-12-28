
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import ProductCard from './components/ProductCard';
import ProductDetailPage from './components/ProductDetailPage';
import WhatsAppButton from './components/WhatsAppButton';
import CartDrawer from './components/CartDrawer';
import SupportPage from './components/SupportPage';
import DesignerSection from './components/DesignerSection';
import { Product, CartItem } from './types';
import { FEATURED_PRODUCTS, ALL_PRODUCTS } from './data/products';

const HomePage: React.FC<{ onAddToCart: (p: Product) => void }> = ({ onAddToCart }) => (
  <main className="flex-grow">
    <Hero />
    
    <CategoryGrid />

    {/* Designer Section moved higher for better visibility */}
    <DesignerSection />

    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h3 className="text-3xl font-serif text-primary mb-2">New Arrivals</h3>
          <p className="text-secondary">Discover our latest curated pieces.</p>
        </div>
        <Link to="/shop" className="hidden md:block text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
          View All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {FEATURED_PRODUCTS.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>

    <section className="bg-offwhite py-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <img src="https://i.ibb.co/JW4KJZXR/image.png" alt="Craftsmanship" className="w-full h-auto shadow-xl" />
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <span className="text-accent uppercase tracking-widest font-bold text-sm">Our Philosophy</span>
          <h2 className="text-4xl font-serif text-primary">Designed for Life,<br/>Crafted to Last.</h2>
          <p className="text-secondary leading-relaxed">
            At Modern Nest, we believe a home is more than a space — it’s a sanctuary built from moments, textures, and the quiet comfort of good design. 
            Our journey began with a simple idea: beautiful furniture should feel effortless.
          </p>
          <Link to="/about" className="inline-block pt-4 text-primary font-bold border-b border-primary hover:text-accent hover:border-accent transition-colors">
            Read Our Story
          </Link>
        </div>
      </div>
    </section>
  </main>
);

const ShopPage: React.FC<{ onAddToCart: (p: Product) => void }> = ({ onAddToCart }) => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <h1 className="text-4xl font-serif text-primary mb-8 text-center">Shop All</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
      {ALL_PRODUCTS.map((product, idx) => (
         <ProductCard key={`${product.id}-${idx}`} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  </div>
);

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCart(prev => prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans text-primary">
        <Header 
          cartCount={cartCount} 
          onOpenCart={() => setIsCartOpen(true)}
        />
        
        <Routes>
          <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="/shop/:category" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetailPage onAddToCart={addToCart} />} />
          <Route path="/collections" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/designers" element={
            <div className="max-w-5xl mx-auto px-4 py-20">
              <div className="text-center mb-16">
                 <h1 className="text-5xl font-serif text-primary mb-4 tracking-tight">Italian Excellence</h1>
                 <p className="text-accent uppercase tracking-[0.4em] text-sm font-bold">The Design Collective</p>
                 <div className="w-24 h-px bg-accent mx-auto mt-8"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
                 <div className="aspect-[3/4] overflow-hidden shadow-2xl">
                    <img src="https://i.ibb.co/xSXvzfmN/AI-sales-Post-2.png" alt="Luca Santini" className="w-full h-full object-cover" />
                 </div>
                 <div className="space-y-8">
                    <h2 className="text-4xl font-serif">Luca Santini</h2>
                    <p className="text-secondary leading-relaxed text-lg">
                      Luca Santini is a Milan-based industrial designer whose work for Modern Nest focuses on the "tactile harmony" of materials. With over 20 years of experience designing for high-end Italian brands, he brings an uncompromising standard of quality to every sketch.
                    </p>
                    <p className="text-secondary leading-relaxed text-lg">
                      His signature style—Rational Minimalism—emphasizes the beauty of exposed joints and the natural grain of premium timbers.
                    </p>
                    <div className="bg-offwhite p-8 border border-gray-100 italic font-serif text-xl">
                      "I don't design objects. I design the light and space that surrounds them."
                    </div>
                 </div>
              </div>

              <div className="bg-primary text-white p-12 md:p-20 text-center space-y-6">
                 <h3 className="text-3xl font-serif">A Global Vision</h3>
                 <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                   While our roots are Italian, our production partners are selected from the finest workshops in Malaysia and beyond, ensuring that world-class design remains accessible without compromising on ethics or quality.
                 </p>
              </div>
            </div>
          } />
          <Route path="/about" element={
            <div className="max-w-3xl mx-auto px-4 py-20">
              <div className="text-center mb-12">
                 <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Our Story</h1>
                 <div className="w-20 h-1 bg-accent mx-auto"></div>
              </div>
              <div className="space-y-8 text-lg text-secondary leading-relaxed text-center font-light">
                <p>
                  At Modern Nest, we believe a home is more than a space — it’s a sanctuary built from moments, textures, and the quiet comfort of good design.
                  Our journey began with a simple idea: beautiful furniture should feel effortless.
                  Timeless pieces, honest materials, and thoughtful craftsmanship — all curated to help you create a home that feels truly yours.
                </p>
                <p>
                  From the clean warmth of Nordic silhouettes to the calm harmony of Japanese simplicity, every collection is designed with one purpose:
                  to elevate daily living through functional, modern elegance.
                </p>
                <p>
                  Today, we continue to craft spaces that inspire slow mornings, meaningful gatherings, and restful nights.
                  Welcome to Modern Nest — where design meets comfort, and every piece tells a story of home.
                </p>
              </div>
            </div>
          } />
          <Route path="*" element={<HomePage onAddToCart={addToCart} />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          cart={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </HashRouter>
  );
};

export default App;
