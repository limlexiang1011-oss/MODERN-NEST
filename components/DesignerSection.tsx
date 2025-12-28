
import React from 'react';
import { Link } from 'react-router-dom';

const DesignerSection: React.FC = () => {
  return (
    <section className="bg-white py-24 overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="text-accent uppercase tracking-[0.3em] font-bold text-xs">Excellence in Craft</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
                Italian Heritage <br />
                <span className="italic font-light">Meet Modern Living</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-secondary leading-relaxed font-light text-lg">
              <p>
                Rooted in the prestigious ateliers of Milan, our design philosophy is a tribute to Italian structural integrity and aesthetic grace. Every piece at Modern Nest is born from a collaboration with lead designer <strong>Luca Santini</strong>.
              </p>
              <p>
                Inspired by the rationalist architecture of Lombardy, Santini brings a "material-first" approach to our furniture—combining sustainably sourced Malaysian hardwoods with premium Italian leathers.
              </p>
              
              <div className="pt-6 border-l-2 border-accent pl-6 italic text-primary">
                "Our goal is not to fill a room, but to curate an atmosphere where design serves the human spirit."
              </div>

              <div className="pt-8">
                <Link to="/designers" className="inline-block border border-primary px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                  Explore Designer Profile
                </Link>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="flex-1 relative order-1 lg:order-2">
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://i.ibb.co/xSXvzfmN/AI-sales-Post-2.png" 
                alt="Italian Designer Furniture detail" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-10 -right-10 w-full h-full bg-offwhite -z-0 translate-x-12 translate-y-12 opacity-50"></div>
            
            <div className="absolute -top-6 -right-6 p-10 bg-accent text-white z-20 hidden md:block rotate-3 shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] font-bold">Designer Series</p>
              <p className="text-3xl font-serif mt-2">100% Original</p>
              <p className="text-[10px] mt-1 opacity-80 italic">Curated in Italy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignerSection;
