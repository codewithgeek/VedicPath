import React, { useState, useEffect } from "react";
import { Page } from "./types";
import { NAV_LINKS } from "./constants";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Booking from "./components/Booking";
import CalendarWidget from "./components/CalendarWidget";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Menu, X } from "lucide-react";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<
    string | undefined
  >(undefined);

  // Handle Scroll Effect for Header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (page !== Page.CONTACT) {
      setSelectedServiceForBooking(undefined);
    }
  };

  const handleBookingRequest = (serviceId: string) => {
    setSelectedServiceForBooking(serviceId);
    handleNavigate(Page.CONTACT);
  };

  const isHeaderSolid = scrolled || currentPage !== Page.HOME;

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-saffron-50/0 selection:bg-saffron-200 selection:text-maroon-900">
      {/* Sticky Header */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isHeaderSolid
            ? "bg-saffron-50/95 shadow-lg py-3 backdrop-blur-sm border-b-2 border-gold-500/30"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavigate(Page.HOME)}
          >
            <img
              src="/images/om.png" /* Replace with the actual path to your PNG */
              alt="VedicPath Logo"
              className={`h-8 w-auto object-contain transition-all duration-300 ${
                isHeaderSolid ? "opacity-100" : "drop-shadow-md"
              }`}
            />
            <span
              className={`text-2xl font-display font-bold tracking-wide ${
                isHeaderSolid ? "text-maroon-900" : "text-white drop-shadow-md"
              }`}
            >
              VedicPath
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNavigate(link.value as Page)}
                className={`relative group font-display text-sm tracking-wider transition-colors duration-300 ${
                  isHeaderSolid
                    ? "text-maroon-800"
                    : "text-white drop-shadow-md"
                }`}
              >
                <span
                  className={`${
                    currentPage === link.value
                      ? isHeaderSolid
                        ? "text-saffron-600 font-bold"
                        : "text-gold-400 font-bold"
                      : "group-hover:text-saffron-500"
                  }`}
                >
                  {link.label}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 block h-0.5 bg-gold-500 transition-all duration-300 ${
                    currentPage === link.value
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
            <button
              onClick={() => handleNavigate(Page.CONTACT)}
              className="font-display text-sm bg-gradient-to-br from-gold-500 to-saffron-600 text-maroon-900 px-6 py-2 rounded-sm font-semibold shadow-md hover:shadow-lg hover:shadow-saffron-700/40 transition-all transform hover:-translate-y-0.5 border border-gold-600/50"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={28} className="text-maroon-800" />
            ) : (
              <Menu size={28} color={isHeaderSolid ? "#9d350e" : "#fff"} />
            )}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-saffron-50 absolute top-full left-0 w-full shadow-xl border-t border-gold-500/20 flex flex-col divide-y divide-gold-500/10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNavigate(link.value as Page)}
                className={`text-left text-lg font-display py-4 px-6 ${
                  currentPage === link.value
                    ? "text-saffron-600 font-bold"
                    : "text-maroon-800"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigate(Page.CONTACT)}
              className="text-left text-lg font-display py-4 px-6 text-maroon-800 bg-saffron-100 font-bold"
            >
              Book Now
            </button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-0">
        {currentPage === Page.HOME && (
          <>
            <Hero onNavigate={handleNavigate} />
            <About />
            <Services onBook={handleBookingRequest} />
            <CalendarWidget />
            <Testimonials />
          </>
        )}

        {currentPage === Page.ABOUT && (
          <div className="pt-24">
            <About />
            <Testimonials />
          </div>
        )}

        {currentPage === Page.SERVICES && (
          <div className="pt-24">
            <Services onBook={handleBookingRequest} />
          </div>
        )}

        {currentPage === Page.CONTACT && (
          <div className="pt-24">
            <Booking initialServiceId={selectedServiceForBooking} />
          </div>
        )}

        {currentPage === Page.CALENDAR && (
          <div className="pt-24">
            <CalendarWidget />
          </div>
        )}

        {currentPage === Page.CONTACT && (
          <div className="pt-24">
            <Contact />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
