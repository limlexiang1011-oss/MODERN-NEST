
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

const categories: Category[] = [
  { id: '1', name: 'Dining chair', image: 'https://i.ibb.co/jk4NhH1d/5.png', link: '/shop/dining-chair' },
  { id: '2', name: 'Relax chair', image: 'https://i.ibb.co/B202p1Xb/6.png', link: '/shop/relax-chair' },
  { id: '3', name: 'Lounge chair', image: 'https://i.ibb.co/LX8Hx1Fq/7.png', link: '/shop/lounge-chair' },
  { id: '4', name: 'Designer chair', image: 'https://i.ibb.co/DPyhQBxK/8.png', link: '/shop/designer-chair' },
  { id: '5', name: 'Bar & island chair', image: 'https://i.ibb.co/TxWhBchV/9.png', link: '/shop/bar-chair' },
];

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 max-w-[1400px] mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-serif text-primary mb-2">Shop by Category</h3>
        <p className="text-secondary">Curated collections for every room.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <Link key={cat.id} to={cat.link} className="group relative block overflow-hidden">
            <div className="aspect-[3/4] overflow-hidden bg-gray-100">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 px-4 py-3 w-[85%] text-center backdrop-blur-sm shadow-sm">
              <span className="uppercase tracking-widest text-[10px] sm:text-xs font-bold text-primary group-hover:text-accent transition-colors block">
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
