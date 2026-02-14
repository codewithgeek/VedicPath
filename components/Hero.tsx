import React from "react";
import { ArrowRight } from "lucide-react";
import { Page } from "../types";

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-maroon-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 transition-transform duration-10000 hover:scale-105"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1626284299977-2216a3f90b8a?q=80&w=2000&auto=format&fit=crop")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/90 via-maroon-900/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-5 md:px-10 max-w-5xl mx-auto">
        <div className="mb-6 animate-fade-in-up">
          <img
            src="/images/om.png"
            alt="Om Mandala"
            className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 opacity-100"
          />
          <span className="text-gold-400 tracking-[0.3em] text-lg md:text-base font-bold uppercase">
            ॐ श्री गणेशाय नमः
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-display font-bold mb-6 leading-tight drop-shadow-lg">
          Authentic Vedic Rituals & <br />{" "}
          <span className="text-saffron-400">Hindu Sanskars</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-serif leading-relaxed">
          Connecting you with an experienced Pandit for Havans, Pujas, and
          Weddings. Experience the divine, accessible online & offline.
        </p>

        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <button
            onClick={() => onNavigate(Page.CONTACT)}
            className="group bg-saffron-600 hover:bg-saffron-500 text-white px-8 py-4 text-lg font-semibold rounded-sm shadow-lg shadow-saffron-900/50 flex items-center justify-center transition-all transform hover:-translate-y-1"
          >
            Book Pandit Ji
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => onNavigate(Page.SERVICES)}
            className="bg-transparent border-2 border-white hover:border-gold-400 hover:text-gold-400 text-white px-8 py-4 text-lg font-semibold rounded-sm transition-all backdrop-blur-sm"
          >
            Explore Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
