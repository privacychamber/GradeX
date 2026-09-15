"use client";

import Link from "next/link";

export default function Footer() {
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Technology", href: "#technology" },
    { name: "Evidence", href: "#evidence" },
    { name: "Compliance", href: "#compliance" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#050810] text-gray-400 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-bold tracking-tighter text-white">
                GRADE <span className="text-brand-cyan">X</span>
              </span>
              <p className="text-lg font-light text-gray-300">
                Cleaner Kitchens.<br />
                Safer Tomorrows.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-sm">Navigation</h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-brand-cyan transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide text-sm">Contact</h4>
            <address className="not-italic flex flex-col gap-2 text-sm">
              <p className="text-white font-medium">Grade X Commercial Solutions Pty Ltd</p>
              <p>5 Elward Way<br />Balga WA 6061</p>
              <p className="mt-2 text-white">0430 360 162</p>
              <a href="mailto:gradex.perth@gmail.com" className="hover:text-brand-cyan transition-colors">
                gradex.perth@gmail.com
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs">
          <p>&copy; {new Date().getFullYear()} Grade X Commercial Solutions Pty Ltd. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
