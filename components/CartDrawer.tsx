import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';
import { Link } from 'react-router-dom';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, newQuantity: number) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cart, 
  onRemove, 
  onUpdateQuantity 
}) => {
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-serif font-bold text-primary flex items-center gap-2">
            Shopping Cart
            <span className="text-sm font-sans font-normal text-secondary">({cart.length} items)</span>
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-primary">
            <X size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="bg-gray-50 p-6 rounded-full">
                <ShoppingBag size={48} className="text-gray-300" />
              </div>
              <p className="text-lg font-serif text-primary">Your cart is empty</p>
              <p className="text-secondary text-sm max-w-xs mx-auto">Looks like you haven't added anything to your cart yet.</p>
              <button 
                onClick={onClose}
                className="mt-4 border-b border-primary text-primary font-bold hover:text-accent hover:border-accent transition-colors pb-1"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-24 h-24 bg-gray-100 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif font-medium text-primary line-clamp-1">{item.name}</h3>
                      <p className="text-xs text-secondary uppercase tracking-wider mt-1">{item.category}</p>
                    </div>
                    <button 
                      onClick={() => onRemove(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-end mt-2">
                    <div className="flex items-center border border-gray-200">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-1 hover:bg-gray-50 text-primary"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-50 text-primary"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-medium text-primary">RM {(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-secondary uppercase tracking-wider">Subtotal</span>
              <span className="text-xl font-serif font-bold text-primary">RM {subtotal.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500 mb-6 text-center">Shipping and taxes calculated at checkout.</p>
            <button className="w-full bg-primary text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors shadow-lg">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;