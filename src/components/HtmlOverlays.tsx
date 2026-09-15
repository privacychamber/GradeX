"use client";

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function HtmlOverlays() {
  const scroll = useScroll();
  
  // Refs for fading HTML sections based on scroll
  const heroRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const methodologyRef = useRef<HTMLDivElement>(null);
  const evidenceRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useFrame(() => {
    const t = scroll.offset;
    
    // Fade Hero Out
    if (heroRef.current) {
      heroRef.current.style.opacity = `${1 - t * 10}`; // fades out quickly
      heroRef.current.style.transform = `translateY(${t * 200}px)`;
    }
    
    // Fade Tech In/Out (Robot Section)
    if (techRef.current) {
      const opacity = Math.sin((t - 0.2) * Math.PI * 3);
      techRef.current.style.opacity = `${Math.max(0, opacity)}`;
    }
    
    // Fade Evidence In
    if (evidenceRef.current) {
       const opacity = Math.sin((t - 0.5) * Math.PI * 3);
       evidenceRef.current.style.opacity = `${Math.max(0, opacity)}`;
    }
  });

  return (
    <div className="w-full text-foreground relative h-full">
      
      {/* PAGE 0: HERO */}
      <section 
        ref={heroRef}
        className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center px-6 lg:px-20 z-10 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] text-balance">
            PRECISION.<br/>
            TECHNOLOGY.<br/>
            <span className="text-brand-cyan">COMPLIANCE.</span>
          </h1>
          <p className="mt-8 text-xl max-w-2xl text-muted font-light">
            Advanced robotic technology and proven methodology for commercial kitchen exhaust cleaning.
          </p>
          <div className="mt-12 flex gap-4 pointer-events-auto">
            <button className="px-8 py-4 bg-brand-cyan text-brand-midnight font-bold tracking-widest text-sm hover:bg-white transition-colors">
              REQUEST A QUOTE
            </button>
            <button className="px-8 py-4 border border-border text-foreground font-bold tracking-widest text-sm hover:bg-surface-hover transition-colors">
              EXPLORE THE TECHNOLOGY
            </button>
          </div>
        </div>
      </section>

      {/* PAGE 3: TECHNOLOGY (Over robot) */}
      <section
        ref={techRef}
        className="absolute top-[300vh] left-0 w-full h-screen flex flex-col justify-center px-6 lg:px-20 z-10 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2">
          <div className="col-span-1 flex flex-col gap-8">
            <span className="font-mono text-brand-cyan text-sm tracking-[0.3em]">01 / THE ROBOT</span>
            <h2 className="text-5xl font-display font-bold tracking-tighter leading-tight">
              ENGINEERED FOR <br/> REAL RESULTS.
            </h2>
            <div className="flex flex-col gap-4 border-l border-border pl-6 font-mono text-sm">
              <div className="text-brand-cyan">INSPECT</div>
              <div className="text-muted">MEASURE</div>
              <div className="text-muted">CLEAN</div>
              <div className="text-muted">VERIFY</div>
              <div className="text-muted">REPORT</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* PAGE 5: DIGITAL EVIDENCE */}
      <section
        ref={evidenceRef}
        className="absolute top-[500vh] left-0 w-full h-screen flex flex-col justify-center px-6 lg:px-20 z-10 pointer-events-none"
      >
        <div className="max-w-7xl mx-auto w-full flex justify-end">
          <div className="w-1/2 glass-dark p-12 flex flex-col gap-6 pointer-events-auto">
             <span className="font-mono text-brand-cyan text-sm tracking-[0.3em]">02 / EVIDENCE</span>
             <h2 className="text-4xl font-display font-bold tracking-tighter">DIGITAL PROOF</h2>
             <p className="text-muted">
               As the robot cleans, the system constructs a precise digital record of grease reduction, mapping every surface from entry to exit.
             </p>
             <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6 mt-6">
               <div className="flex flex-col">
                 <span className="text-xs text-muted font-mono">BEFORE</span>
                 <span className="text-2xl font-mono">02.8 <span className="text-sm">mm</span></span>
               </div>
               <div className="flex flex-col">
                 <span className="text-xs text-brand-cyan font-mono">AFTER</span>
                 <span className="text-2xl font-mono text-brand-cyan">00.4 <span className="text-sm">mm</span></span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* SPACE FILLER FOR SCROLL */}
      <div style={{ height: "1000vh" }}></div>

    </div>
  );
}
