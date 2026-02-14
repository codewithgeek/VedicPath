import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-maroon-900 text-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#DAA520 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <Quote className="w-16 h-16 text-gold-500 mx-auto mb-8 opacity-50" />
        
        <div className="min-h-[200px] flex items-center justify-center">
          <div className="animate-fade-in transition-opacity duration-500">
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
              "{TESTIMONIALS[current].text}"
            </p>
            <div className="flex flex-col items-center">
               <div className="flex space-x-1 mb-2">
                 {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                   <span key={i} className="text-gold-400">★</span>
                 ))}
               </div>
               <h4 className="text-xl font-bold font-display">{TESTIMONIALS[current].name}</h4>
               <span className="text-saffron-300 text-sm">{TESTIMONIALS[current].location}</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === current ? 'bg-gold-500 w-8' : 'bg-white/30 hover:bg-white/60'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;