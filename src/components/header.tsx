import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'My Works', href: '#projects' },
    { name: 'Contact Me', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50  top-0 transition-all duration-300 ${
      scrolled ? 'bg-black/70 backdrop-blur-lg border-b border-white/10 py-3 shadow-lg' : 'bg-[#0F0F0F] py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <a href="#home" className="text-2xl text-yellow-400 font-black tracking-tighter text-white">
          DON
        </a>

        <div className="hidden md:flex space-x-8 text-[11px] font-bold tracking-[0.2em] text-gray-300 uppercase">
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className="hover:text-yellow-400 transition-colors">
              {item.name}
            </a>
          ))}
        </div>

        <button 
          className="md:hidden text-white hover:text-yellow-400 transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#080808] border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-semibold uppercase tracking-widest text-center">
              {navLinks.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-gray-400 hover:text-yellow-400 transition-colors py-2 border-b border-white/5 last:border-0"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;