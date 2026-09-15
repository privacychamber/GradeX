"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        
        {/* Left: Logo & Tagline */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl tracking-tight text-gray-900">
              GRADE <span className="text-brand-cyan font-black">X</span>
            </span>
          </Link>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 leading-relaxed">
            Cleaner Kitchens.<br/>
            Safer Tomorrows.
          </p>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-col gap-3">
          {["Services", "Technology", "Compliance", "Case Studies", "About", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-semibold tracking-wide text-gray-600 hover:text-brand-blue transition-colors w-fit"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Right: Contact Details */}
        <div className="flex flex-col gap-3">
          <a href="tel:1300000000" className="text-sm font-semibold tracking-wide text-gray-600 hover:text-brand-blue transition-colors">
            1300 000 000
          </a>
          <a href="mailto:info@gradex.com.au" className="text-sm font-semibold tracking-wide text-gray-600 hover:text-brand-blue transition-colors">
            info@gradex.com.au
          </a>
          <p className="text-sm font-semibold tracking-wide text-gray-600">
            Perth, Western Australia
          </p>
        </div>

      </div>
      
      {/* Bottom Legal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs text-gray-400 font-mono tracking-wider">
          © {new Date().getFullYear()} GRADE X COMMERCIAL SOLUTIONS PTY LTD.
        </span>
        <div className="flex gap-6">
          <Link href="#" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-xs text-gray-400 hover:text-gray-900 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
