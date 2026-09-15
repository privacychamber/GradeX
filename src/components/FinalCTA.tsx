"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="quote" className="py-32 bg-brand-midnight text-white relative overflow-hidden flex items-center justify-center">
      {/* Cinematic Background - Animated scale and fade */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-midnight via-[#101520] to-[#050810] z-10"></div>
        {/* Subtle grid and noise to simulate a dark industrial environment */}
        <div className="absolute inset-0 opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] mix-blend-overlay"></div>
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4wNSIgbnVtT2N0YXZlcz0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')]"></div>
      </motion.div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-20 text-center">
        <motion.div
          className="glass-dark p-12 md:p-16 rounded-2xl border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.8)] backdrop-blur-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 100, rotateX: 20 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // smooth cinematic spring
          style={{ transformPerspective: 1200 }}
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
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-sm font-semibold tracking-wide hover:bg-blue-600 transition-all shadow-[0_0_30px_var(--color-brand-blue-glow)] hover:scale-105 active:scale-95 duration-300">
              REQUEST A QUOTE
              <ArrowRight size={18} />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white rounded-sm font-semibold tracking-wide hover:bg-white/10 hover:border-white/40 transition-all hover:scale-105 active:scale-95 duration-300">
              <Phone size={18} />
              TALK TO OUR TEAM
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
