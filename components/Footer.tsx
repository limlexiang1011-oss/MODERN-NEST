import React from 'react';
import { Facebook, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
  };

  const address = "10, Jalan Sri Sulong 25, Taman Industri Sri Sulong, 83500 Parit Sulong, Johor Darul Ta'zim";
  const mapQuery = encodeURIComponent(address);
  const mapLocationLink = "https://maps.app.goo.gl/penWmQDasnmSdFFg9";

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold">MODERN NEST</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting homes with timeless elegance and modern comfort. 
              We believe in sustainable, high-quality furniture that tells a story.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61569202478085" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-accent">Shop</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-accent">Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/support#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/support#shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/support#faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/support#care" className="hover:text-white transition-colors">Care Guide</Link></li>
              <li><Link to="/support#warranty" className="hover:text-white transition-colors">Warranty</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-6 text-accent">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-3" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 text-white px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent w-full"
                required
              />
              <button type="submit" className="bg-white text-primary px-4 py-3 text-sm font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16 border-t border-gray-800 pt-12">
           <div className="flex flex-col md:flex-row justify-between items-end mb-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-2">Visit Our Showroom</h4>
                <address className="text-gray-400 text-sm not-italic leading-relaxed">
                  10, Jalan Sri Sulong 25, Taman Industri Sri Sulong,<br/>
                  83500 Parit Sulong, Johor Darul Ta'zim
                </address>
              </div>
              <p className="text-gray-400 text-xs mt-4 md:mt-0 hidden md:block">Come see our collection in person.</p>
           </div>
           <div className="w-full h-80 bg-gray-800 rounded-sm overflow-hidden relative group">
              <iframe 
                src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Showroom Location"
              ></iframe>
              <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:bg-transparent transition-colors"></div>
              <a 
                href={mapLocationLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 bg-white text-primary px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-colors shadow-xl z-10"
              >
                Get Directions
              </a>
           </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2024 Modern Nest Furniture. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/about" className="hover:text-white">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;