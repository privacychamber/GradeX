"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export default function TheProblem() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleDrag = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    let clientX = 0;
    
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }
    
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  return (
    <section id="problem" className="py-32 bg-brand-midnight text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-brand-cyan text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-4">
            THE PROBLEM
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            GREASE HIDES <br className="hidden md:block" />
            <span className="text-gray-500">WHERE YOU CAN&apos;T SEE IT.</span>
          </h2>
        </motion.div>

        {/* Comparison Slider */}
        <motion.div
          ref={containerRef}
          className="relative w-full aspect-video md:aspect-[21/9] max-h-[600px] bg-brand-dark rounded-xl overflow-hidden shadow-2xl cursor-ew-resize select-none border border-white/5"
          onMouseMove={(e) => e.buttons === 1 && handleDrag(e)}
          onMouseDown={handleDrag}
          onTouchMove={handleDrag}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* AFTER Image (Background/Base) */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-500 flex items-center justify-center">
             <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] mix-blend-overlay"></div>
             <span className="text-white/50 font-mono text-2xl tracking-widest absolute right-10 bottom-10 z-0">AFTER</span>
          </div>

          {/* BEFORE Image (Clipped overlay) */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#2A1D0D] to-[#1F1710] flex items-center justify-center border-r border-brand-cyan/50 shadow-[5px_0_15px_rgba(0,0,0,0.5)]"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
             {/* Grimy texture simulation */}
             <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4wNSIgbnVtT2N0YXZlcz0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')]"></div>
             <span className="text-white/30 font-mono text-2xl tracking-widest absolute left-10 bottom-10 z-0">BEFORE</span>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white/20 cursor-ew-resize hover:bg-white/40 transition-colors"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-cyan text-brand-midnight rounded-full flex items-center justify-center shadow-[0_0_20px_var(--color-brand-blue-glow)] hover:scale-110 transition-transform">
              <MoveHorizontal size={24} />
            </div>
          </div>

          {/* Glass labels */}
          <div className="absolute top-6 left-6 glass-dark px-4 py-2 rounded-sm text-xs font-mono tracking-widest border border-white/10 z-10">
            GREASE BUILDUP
          </div>
          <div className="absolute top-6 right-6 glass-light px-4 py-2 rounded-sm text-xs font-mono tracking-widest border border-black/10 text-brand-dark z-10">
            CLEAN STAINLESS STEEL
          </div>
        </motion.div>
      </div>
    </section>
  );
}
