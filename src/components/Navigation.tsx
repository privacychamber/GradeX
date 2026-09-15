"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const navLinks = [
    { name: "TECHNOLOGY", href: "#technology" },
    { name: "SERVICES", href: "#services" },
    { name: "EVIDENCE", href: "#evidence" },
    { name: "COMPLIANCE", href: "#compliance" },
    { name: "ABOUT", href: "#about" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-[#050505]/90 border-b border-white/[0.03]" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="w-full px-6 lg:px-12 h-24 flex items-center justify-between">
        {/* Minimal Typographic Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-10">
          <div className="flex items-center">
             <span className="text-sm font-medium tracking-[0.3em] text-white">
               GRADE<span className="text-brand-cyan/80 ml-2">X</span>
             </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] font-mono tracking-[0.2em] text-white/50 hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="#quote"
            className="px-6 py-3 border border-white/10 text-white/80 text-[10px] font-mono tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300"
          >
            REQUEST A QUOTE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/50 hover:text-white relative z-10 p-2 transition-colors duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={20} strokeWidth={1} /> : <Menu size={20} strokeWidth={1} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute top-24 left-0 right-0 bg-[#050505] border-b border-white/5 p-8 flex flex-col gap-8 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-mono tracking-[0.2em] text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#quote"
            className="w-full py-4 text-center border border-white/10 text-white text-[11px] font-mono tracking-[0.2em]"
            onClick={() => setMobileMenuOpen(false)}
          >
            REQUEST A QUOTE
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
