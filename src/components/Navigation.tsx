"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

export default function Navigation() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full h-[70px] bg-white border-b border-gray-100 z-50 flex items-center justify-between px-6 md:px-12"
    >
      {/* Left: Logo Area */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-xl tracking-tight text-gray-900">
            GRADE <span className="text-brand-cyan font-black">X</span>
          </span>
        </Link>
      </div>

      {/* Center: Corporate Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {["Services", "Technology", "Compliance", "Case Studies", "About", "Contact"].map((item) => (
          <Link 
            key={item} 
            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="text-xs font-semibold tracking-wide text-gray-600 hover:text-brand-blue transition-colors uppercase"
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* Right: CTA & Mobile Menu */}
      <div className="flex items-center gap-4">
        <button className="btn-uiverse hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-white bg-brand-blue px-5 py-2.5 rounded">
          BOOK INSPECTION
          <ArrowRight className="w-3 h-3" />
        </button>
        <button className="lg:hidden text-gray-900 p-2">
          <Menu size={24} />
        </button>
      </div>
    </motion.header>
  );
}
