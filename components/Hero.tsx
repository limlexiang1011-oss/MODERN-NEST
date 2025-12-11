import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[70vh] w-full overflow-hidden">
      <img
        src="https://i.ibb.co/Pvct1gcR/Warm-Minimalist-Luxury-Living-Room-2.png"
        alt="Modern living room"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center text-center px-4">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-white text-lg md:text-xl font-medium tracking-widest uppercase">
            New Collection 2025
          </h2>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-medium leading-tight">
            Timeless Comfort for <br /> Modern Living
          </h1>
          <div className="pt-6">
            <Link
              to="/shop"
              className="inline-block bg-white text-primary px-8 py-3 text-sm font-bold tracking-widest uppercase hover:bg-accent hover:text-white transition-all duration-300"
            >
              Shop The Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;