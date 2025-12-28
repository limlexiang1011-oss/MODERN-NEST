
import React, { useState } from 'react';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onOpenCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="p-2 text-primary hover:text-accent">
                <Menu size={24} />
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto">
              <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-primary">
                MODERN NEST
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-primary">
              <Link to="/" className="hover:text-accent transition-colors">HOME</Link>
              <Link to="/shop" className="hover:text-accent transition-colors">SHOP</Link>
              <Link to="/about" className="hover:text-accent transition-colors">OUR STORY</Link>
              <Link to="/designers" className="hover:text-accent transition-colors">DESIGNERS</Link>
            </nav>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-6 text-primary">
              <button 
                onClick={onOpenCart}
                className="relative hover:text-accent transition-colors"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
            
            {/* Mobile Cart Icon (Visible on mobile) */}
            <div className="flex items-center md:hidden absolute right-4">
               <button 
                 onClick={onOpenCart}
                 className="relative hover:text-accent transition-colors"
               >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}></div>
          <div className="relative w-4/5 max-w-xs bg-white h-full shadow-xl flex flex-col p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-8">
              <span className="font-serif text-xl font-bold">Menu</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col space-y-6 text-lg font-medium">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Shop</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>Our Story</Link>
              <Link to="/designers" onClick={() => setIsMenuOpen(false)}>Designers</Link>
              <Link to="/support" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
