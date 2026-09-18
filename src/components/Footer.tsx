import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-surfaceHover pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center font-bold text-white text-xl">GX</div>
              <div>
                <div className="font-display font-bold text-white leading-none tracking-wider">GRADE X</div>
                <div className="text-[10px] font-mono text-gray-400 tracking-widest mt-1">COMMERCIAL SOLUTIONS</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Western Australia's premier, technology-driven commercial kitchen exhaust and hygiene specialists.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-xs font-mono text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              SERVICING PERTH / WA
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-bold text-white tracking-widest text-sm mb-6">SERVICES</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-primary transition-colors">Kitchen Exhaust Cleaning</a></li>
              <li><a href="#technology" className="hover:text-primary transition-colors">Robotic Duct Cleaning</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Kitchen Equipment Hygiene</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">General Commercial Cleaning</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-bold text-white tracking-widest text-sm mb-6">COMPANY</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><a href="#compliance" className="hover:text-primary transition-colors">Compliance & WHS</a></li>
              <li><a href="#evidence" className="hover:text-primary transition-colors">Digital Evidence</a></li>
              <li><a href="#process" className="hover:text-primary transition-colors">Our Methodology</a></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-bold text-white tracking-widest text-sm mb-6">CONTACT</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="flex flex-col">
                <span className="text-gray-500 text-xs font-mono uppercase">Phone (24/7)</span>
                <a href="tel:0430360162" className="text-white hover:text-primary transition-colors font-bold">0430 360 162</a>
              </li>
              <li className="flex flex-col mt-2">
                <span className="text-gray-500 text-xs font-mono uppercase">Email</span>
                <a href="mailto:gradex.perth@gmail.com" className="text-white hover:text-primary transition-colors">gradex.perth@gmail.com</a>
              </li>
              <li className="flex flex-col mt-2">
                <span className="text-gray-500 text-xs font-mono uppercase">Address</span>
                <span className="text-white">5 Elward Way, Balga WA 6061</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Grade X Commercial Solutions Pty Ltd. ABN 45 684 073 345.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
