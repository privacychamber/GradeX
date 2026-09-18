import React, { useState, useEffect } from 'react';
import { Phone, AlertCircle, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technology', href: '#technology' },
    { name: 'Services', href: '#services' },
    { name: 'Evidence', href: '#evidence' },
    { name: 'Compliance', href: '#compliance' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 backdrop-blur-lg border-b border-white/10 shadow-lg py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center font-bold text-white text-xl">GX</div>
            <div className="hidden sm:block">
              <div className="font-display font-bold text-white leading-none tracking-wider">GRADE X</div>
              <div className="text-[10px] font-mono text-gray-400 tracking-widest mt-1">COMMERCIAL SOLUTIONS</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact / Emergency */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 text-secondary text-xs font-bold tracking-widest">
                <AlertCircle className="w-3 h-3" />
                24/7 EMERGENCY RESPONSE
              </div>
              <a href="tel:0430360162" className="text-white font-bold hover:text-primary transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                0430 360 162
              </a>
            </div>
            <a 
              href="#contact"
              className="px-6 py-2.5 bg-primary hover:bg-blue-500 text-white font-bold rounded-full transition-colors text-sm"
            >
              REQUEST QUOTE
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-32 px-6 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-display font-bold text-gray-300 hover:text-white border-b border-white/10 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-8 flex flex-col gap-4">
                <a 
                  href="tel:0430360162" 
                  className="flex items-center gap-3 text-xl font-bold text-white"
                >
                  <Phone className="w-6 h-6 text-primary" />
                  0430 360 162
                </a>
                <div className="flex items-center gap-2 text-secondary font-bold tracking-widest text-sm">
                  <AlertCircle className="w-4 h-4" />
                  24/7 EMERGENCY RESPONSE
                </div>
                <a 
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 text-center px-6 py-4 bg-primary text-white font-bold rounded-full w-full"
                >
                  REQUEST A QUOTE
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
