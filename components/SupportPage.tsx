import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Truck, HelpCircle, ShieldCheck, HeartHandshake } from 'lucide-react';

const SupportPage: React.FC = () => {
  const { hash } = useLocation();

  useEffect(() => {
    // Scroll to the specific section if a hash is present in the URL
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  // Fixed: Made children optional in props type definition to avoid TS error
  const Section = ({ id, title, icon: Icon, children }: { id: string, title: string, icon: any, children?: React.ReactNode }) => (
    <div id={id} className="mb-20 scroll-mt-32">
      <div className="flex items-center space-x-3 mb-6 border-b border-gray-100 pb-4">
        <Icon className="text-accent" size={28} />
        <h2 className="text-2xl font-serif text-primary">{title}</h2>
      </div>
      <div className="text-secondary leading-relaxed space-y-4 text-base md:text-lg">
        {children}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-6">Customer Support</h1>
        <p className="text-secondary max-w-2xl mx-auto text-lg">
          We are here to help. Find everything you need to know about our products, shipping policies, and care guides below.
        </p>
      </div>

      <Section id="contact" title="Contact Us" icon={Mail}>
        <p>
          We'd love to hear from you. Whether you have a question about our products, need assistance with an order, or just want to say hello, our team is ready to assist.
        </p>
        <div className="bg-offwhite p-8 rounded-sm border border-gray-100 mt-6 shadow-sm">
          <p className="font-bold text-primary mb-2 text-lg">Email Support</p>
          <p className="mb-4">For the fastest response, please email us directly:</p>
          <a href="mailto:modernnest.furniture@gmail.com" className="text-accent font-bold text-xl md:text-2xl hover:underline break-all">
            modernnest.furniture@gmail.com
          </a>
          <p className="text-sm text-gray-400 mt-6">We aim to respond to all inquiries within 24 hours, Monday through Friday.</p>
        </div>
      </Section>

      <Section id="shipping" title="Shipping & Returns" icon={Truck}>
        <h3 className="font-bold text-primary text-lg">Shipping Policy</h3>
        <p>
          We offer free standard shipping on all orders over RM 3000 within Malaysia. For orders under RM 3000, a flat rate calculation applies at checkout based on your location.
          Standard delivery typically takes 5-7 business days.
        </p>
        <h3 className="font-bold text-primary mt-6 text-lg">Return Policy</h3>
        <p>
          We want you to love your new furniture. If you're not completely satisfied, you may return eligible items within 30 days of delivery. 
          Items must be in their original packaging and condition. Please note that return shipping fees may apply.
        </p>
      </Section>

      <Section id="faq" title="Frequently Asked Questions" icon={HelpCircle}>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-bold text-primary text-lg mb-2">Do you offer assembly services?</p>
            <p>Yes, we offer White Glove delivery service which includes assembly and packaging removal for an additional fee in select areas.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-bold text-primary text-lg mb-2">Where are your products made?</p>
            <p>Our designs are globally sourced, working with skilled artisans in Malaysia, Vietnam, and China who share our commitment to quality and sustainability.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="font-bold text-primary text-lg mb-2">Can I customize the fabric?</p>
            <p>Currently, we offer a curated selection of fabrics as shown on the product pages. Custom orders are available for trade clients.</p>
          </div>
        </div>
      </Section>

      <Section id="care" title="Care Guide" icon={HeartHandshake}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-primary text-lg mb-2">Wood Furniture</h3>
            <p>Dust frequently with a clean, soft, dry, lint-free cloth. Clean with hot water and mild soap. Wipe dry immediately.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-primary text-lg mb-2">Upholstery</h3>
            <p>Vacuum weekly. Protect from direct sunlight to prevent fading. Blot spills immediately with a clean, dry cloth. Do not rub.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-primary text-lg mb-2">Leather</h3>
            <p>Dust regularly. Clean with a soft damp cloth. Condition once or twice a year to keep leather soft and prevent cracking.</p>
          </div>
        </div>
      </Section>

      <Section id="warranty" title="Warranty" icon={ShieldCheck}>
        <p>
          Modern Nest Furniture stands behind the quality of our products. We offer a 5-year structural warranty on all furniture frames and a 1-year warranty on fabrics, leathers, and workmanship.
        </p>
        <p className="mt-4 p-4 bg-yellow-50 border border-yellow-100 rounded text-sm text-yellow-800">
          This warranty covers defects in materials and workmanship under normal home use. It does not cover normal wear and tear, commercial use, or damage from misuse.
        </p>
      </Section>
    </div>
  );
};

export default SupportPage;