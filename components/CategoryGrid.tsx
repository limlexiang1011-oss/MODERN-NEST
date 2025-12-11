import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

const categories: Category[] = [
  { id: '1', name: 'Living Room', image: 'https://i.ibb.co/99GQRmXh/Luxury-Living-Room-Option-4.png', link: '/shop/living' },
  { id: '2', name: 'Dining', image: 'https://i.ibb.co/cG1VSfR/Modern-Nest-Caf-Corner.png', link: '/shop/dining' },
  { id: '3', name: 'Bedroom', image: 'https://i.ibb.co/4ZcGbmw2/image.png', link: '/shop/bedroom' },
  { id: '4', name: 'Lighting', image: 'https://i.ibb.co/VWPJbB5M/9.png', link: '/shop/lighting' },
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-serif text-primary mb-2">Shop by Category</h3>
        <p className="text-secondary">Curated collections for every room.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link key={cat.id} to={cat.link} className="group relative block overflow-hidden">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 px-6 py-3 w-[80%] text-center backdrop-blur-sm">
              <span className="uppercase tracking-widest text-sm font-bold text-primary group-hover:text-accent transition-colors">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;