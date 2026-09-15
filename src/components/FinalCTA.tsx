"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="quote" className="py-32 bg-brand-midnight text-white relative overflow-hidden flex items-center justify-center">
      {/* Cinematic Background - Stainless Steel / Dark environment placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-midnight via-brand-dark to-[#050810] z-10"></div>
        <div className="absolute inset-0 opacity-30 mix-blend-luminosity bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4wNSIgbnVtT2N0YXZlcz0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-20 text-center">
        <motion.div
          className="glass-dark p-12 md:p-16 rounded-2xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Subtle cyan glow inside the card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-cyan/5 blur-[100px] -z-10"></div>

          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
            CLEANER KITCHENS. <br />
            SAFER OPERATIONS. <br />
            <span className="text-brand-cyan">BETTER EVIDENCE.</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Experience the difference of technology-led commercial kitchen exhaust cleaning.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-sm font-semibold tracking-wide hover:bg-blue-600 transition-all shadow-[0_0_20px_var(--color-brand-blue-glow)]">
              REQUEST A QUOTE
              <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white rounded-sm font-semibold tracking-wide hover:bg-white/5 transition-all">
              <Phone size={18} />
              TALK TO OUR TEAM
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
