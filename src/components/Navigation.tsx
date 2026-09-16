"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#050A10]/90 backdrop-blur-md shadow-lg border-b border-white/5 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-cyan rounded-md flex items-center justify-center">
            <span className="text-[#050A10] font-bold font-mono tracking-tighter">GX</span>
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? 'text-white' : 'text-white'}`}>
            GRADE X
          </span>
        </div>

      {/* Center: Corporate Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {["Services", "Technology", "Compliance", "Case Studies", "About", "Contact"].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-xs font-semibold tracking-wide text-gray-300 hover:text-brand-cyan transition-colors uppercase"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Right: CTA & Mobile Menu */}
      <div className="flex items-center gap-4">
        <button className="btn-uiverse hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#071019] bg-brand-cyan px-5 py-2.5 rounded">
          BOOK INSPECTION
          <ArrowRight className="w-3 h-3" />
        </button>
        <button className="lg:hidden text-white p-2">
          <Menu size={24} />
        </button>
      </div>
      </div>
    </motion.nav>
  );
}
