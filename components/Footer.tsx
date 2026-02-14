import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-midnight-900 text-gray-300 relative overflow-hidden border-t-8 border-gold-500">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23daa520' fill-opacity='0.1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.99 7.5V30L0 22.5zM15 15l12.99 7.5V30L15 22.5z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 pt-16 pb-8">
        {/* Vedic Quote Section */}
        <div className="text-center mb-16 pb-12 border-b border-gold-600/20">
          <h3 className="text-3xl font-display text-gold-400 mb-4 tracking-wider">
            "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन"
          </h3>
          <p className="font-serif text-gray-300 italic max-w-3xl mx-auto">
            "You have a right to perform your prescribed duties, but you are not
            entitled to the fruits of your actions."
          </p>
          <p className="font-serif text-sm text-gray-400 mt-2">
            - Bhagavad Gita 2.47
          </p>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-3xl text-saffron-500">🕉</span>
              <span className="text-2xl font-display font-bold text-white">
                VedicPath
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Your trusted partner for all Hindu religious services, led by
              Pandit Sunil Shastri Ji.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="p-2 bg-white/10 rounded-full text-gray-400 hover:text-white hover:bg-saffron-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-2 bg-white/10 rounded-full text-gray-400 hover:text-white hover:bg-saffron-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-2 bg-white/10 rounded-full text-gray-400 hover:text-white hover:bg-saffron-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Services List
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Book a Pandit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Puja Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Havan & Yagya
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Wedding Ceremony
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Namakaran Sanskar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gold-400 transition-colors"
                >
                  Vastu Shanti
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-6">
              Contact Pandit Ji
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-3 text-saffron-500 flex-shrink-0 mt-1"
                />
                <span className="text-gray-400">
                  Pandit Sunil Shastri Ji <br />
                  Serving Globally (Online & Offline)
                </span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={18}
                  className="mr-3 text-saffron-500 flex-shrink-0"
                />
                <a
                  href="tel:+919457077623"
                  className="text-gray-400 hover:text-gold-400"
                >
                  +91 94570 77623
                </a>
              </li>
              <li className="flex items-center">
                <Mail
                  size={18}
                  className="mr-3 text-saffron-500 flex-shrink-0"
                />
                <a
                  href="mailto:shastrisunil281@gmail.com"
                  className="text-gray-400 hover:text-gold-400"
                >
                  shastrisunil281@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold-600/20 pt-8 text-center text-sm text-gray-400">
          <p className="mb-2">Crafted with devotion for the digital age.</p>
          {/* FIX: Corrected function call to get the current year. */}
          <p>
            &copy; {new Date().getFullYear()} Services by Pandit Sunil Shastri
            Ji. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
