import React from 'react';
import { SERVICES_LIST } from '../constants';
import { Page } from '../types';
import { Flame, Flower, Heart, Baby, Star, CloudRain } from 'lucide-react';

interface ServicesProps {
  onBook: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onBook }) => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'flame': return <Flame className="w-10 h-10 text-saffron-600" />;
      case 'flower': return <Flower className="w-10 h-10 text-pink-600" />;
      case 'rings': return <Heart className="w-10 h-10 text-red-600" />;
      case 'baby': return <Baby className="w-10 h-10 text-blue-500" />;
      case 'star': return <Star className="w-10 h-10 text-purple-600" />;
      case 'peace': return <CloudRain className="w-10 h-10 text-gray-500" />;
      default: return <Flame className="w-10 h-10 text-saffron-600" />;
    }
  };

  return (
    <div className="py-20 px-4 md:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-saffron-700 text-sm font-bold tracking-widest uppercase mb-2">Our Offerings</h2>
        <h3 className="text-4xl md:text-5xl font-display text-maroon-900 mb-6">Sacred Vedic Services</h3>
        <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_LIST.map((service) => (
          <div 
            key={service.id} 
            className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-b-4 border-saffron-500 group"
          >
            <div className="p-8">
              <div className="mb-6 bg-saffron-50 w-20 h-20 rounded-full flex items-center justify-center group-hover:bg-saffron-100 transition-colors mx-auto md:mx-0">
                {getIcon(service.icon)}
              </div>
              <h4 className="text-2xl font-display font-bold text-gray-800 mb-3 text-center md:text-left group-hover:text-maroon-800 transition-colors">
                {service.title}
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed text-center md:text-left h-24 overflow-hidden">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-4 border-t border-gray-100 pt-4">
                <span className="text-gold-600 font-bold font-display">
                  From {service.priceStart}
                </span>
                <button 
                  onClick={() => onBook(service.id)}
                  className="px-6 py-2 bg-maroon-900 text-white text-sm font-semibold rounded hover:bg-maroon-800 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;