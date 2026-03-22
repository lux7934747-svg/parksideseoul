
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
      isScrolled ? 'bg-[#0A192F]/95 backdrop-blur-sm py-4 shadow-sm text-white' : 'bg-transparent py-8 text-white'
    }`}>
      <div className="max-w-[1440px] mx-auto px-8 flex justify-between items-center">
        <div 
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <h1 className="font-serif text-2xl md:text-3xl tracking-[0.3em] font-light">THE PARKSIDE <span className="text-[#C5A059]">SEOUL</span></h1>
        </div>
        
        <div className="hidden md:flex gap-12">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[12px] tracking-[0.2em] font-medium hover:text-[#C5A059] transition-colors uppercase"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Removed EN button */}
      </div>
    </nav>
  );
};

export default Navbar;
