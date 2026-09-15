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
    { name: "Services", href: "#services" },
    { name: "Technology", href: "#technology" },
    { name: "Evidence", href: "#evidence" },
    { name: "Compliance", href: "#compliance" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About", href: "#about" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "glass-dark border-b border-white/10" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-10">
          {/* We will use a styled text logo for now until image is linked */}
          <div className="flex items-center">
             <span className="text-2xl font-bold tracking-tighter text-white">
               GRADE <span className="text-brand-cyan">X</span>
             </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="#quote"
            className="px-6 py-2.5 rounded-sm bg-brand-blue/20 border border-brand-blue/50 text-brand-cyan text-sm font-semibold tracking-wide hover:bg-brand-blue hover:text-white transition-all duration-300 shadow-[0_0_15px_var(--color-brand-blue-glow)]"
          >
            REQUEST A QUOTE
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white relative z-10 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 right-0 glass-dark border-b border-white/10 p-6 flex flex-col gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-gray-300 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#quote"
            className="w-full py-3 text-center rounded-sm bg-brand-blue border border-brand-blue/50 text-white font-semibold tracking-wide"
            onClick={() => setMobileMenuOpen(false)}
          >
            REQUEST A QUOTE
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
