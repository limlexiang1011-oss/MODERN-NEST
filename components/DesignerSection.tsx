
import React from 'react';
import { Link } from 'react-router-dom';

const DesignerSection: React.FC = () => {
  return (
    <section className="bg-white py-24 overflow-hidden border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-accent uppercase tracking-[0.3em] font-bold text-xs">Excellence in Craft</span>
            {/* The "Italian Heritage Meet Modern Living" heading and the associated image module have been removed as requested. */}
          </div>
          
          <div className="space-y-8 text-secondary leading-relaxed font-light text-lg">
            <p>
              Rooted in the prestigious ateliers of Milan, our design philosophy is a tribute to Italian structural integrity and aesthetic grace. Every piece at Modern Nest is born from a collaboration with lead designer <strong>Luca Santini</strong>.
            </p>
            <p>
              Inspired by the rationalist architecture of Lombardy, Santini brings a "material-first" approach to our furniture—combining sustainably sourced Malaysian hardwoods with premium Italian leathers.
            </p>
            
            <div className="pt-8 border-t border-gray-100 mt-10 max-w-2xl mx-auto">
              <p className="italic text-primary text-2xl font-serif leading-snug">
                "Our goal is not to fill a room, but to curate an atmosphere where design serves the human spirit."
              </p>
            </div>

            <div className="pt-6">
              <Link to="/designers" className="inline-block border border-primary px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-300">
                Explore Designer Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignerSection;
