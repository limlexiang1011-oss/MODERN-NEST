import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group">
      <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
        {product.isNew && (
          <span className="absolute top-4 left-4 z-10 bg-white px-2 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            New
          </span>
        )}
        <Link to={`/product/${product.id}`} className="block h-full w-full">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevent navigating if wrapped in Link (though button is on top)
              onAddToCart(product);
            }}
            className="w-full bg-primary text-white py-3 text-sm font-bold uppercase tracking-wider hover:bg-accent transition-colors shadow-lg pointer-events-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="text-center">
        <h4 className="text-sm font-medium text-secondary mb-1 uppercase tracking-wide">{product.category}</h4>
        <Link to={`/product/${product.id}`} className="block">
          <h3 className="text-lg font-serif text-primary mb-2 cursor-pointer hover:text-accent transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-primary font-medium">RM {product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;