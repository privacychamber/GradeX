"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HtmlOverlays() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Create a context for all GSAP animations in this component
    const ctx = gsap.context(() => {
      
      // Select all sections that need fade in/out
      const sections = gsap.utils.toArray<HTMLElement>('.gsap-fade-section');
      
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          {
            opacity: 1, 
            y: 0,
            scrollTrigger: {
              trigger: section,
              start: "top 60%", // Start fading in when top hits 60% of viewport
              end: "bottom 40%", // Fade out when bottom hits 40% of viewport
              toggleActions: "play reverse play reverse", // fade in/out repeatedly
            }
          }
        );
      });
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full text-foreground relative z-10 flex flex-col">
      
      {/* PAGE 0: HERO */}
      <section className="w-full min-h-[120vh] flex flex-col justify-start pt-48 px-6 lg:px-20 pointer-events-none gsap-fade-section">
        <div className="max-w-7xl mx-auto w-full sticky top-48">
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

      {/* SPACE FILLER FOR DUCT ENTRY */}
      <div className="h-[50vh]"></div>

      {/* PAGE 3: TECHNOLOGY (Over robot) */}
      <section className="w-full min-h-[150vh] flex flex-col justify-start px-6 lg:px-20 pointer-events-none gsap-fade-section">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-2 sticky top-1/3">
          <div className="col-span-1 flex flex-col gap-8 bg-background/50 backdrop-blur-sm p-8 rounded-lg border border-white/10">
            <span className="font-mono text-brand-cyan text-sm tracking-[0.3em]">01 / THE ROBOT</span>
            <h2 className="text-5xl font-display font-bold tracking-tighter leading-tight text-white drop-shadow-lg">
              ENGINEERED FOR <br/> REAL RESULTS.
            </h2>
            <div className="flex flex-col gap-4 border-l border-border pl-6 font-mono text-sm">
              <div className="text-brand-cyan transition-colors">INSPECT</div>
              <div className="text-white transition-colors">MEASURE</div>
              <div className="text-white transition-colors">CLEAN</div>
              <div className="text-white transition-colors">VERIFY</div>
              <div className="text-white transition-colors">REPORT</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* PAGE 5: DIGITAL EVIDENCE */}
      <section className="w-full min-h-[150vh] flex flex-col justify-start px-6 lg:px-20 pointer-events-none gsap-fade-section">
        <div className="max-w-7xl mx-auto w-full flex justify-end sticky top-1/3">
          <div className="w-full md:w-1/2 glass-dark p-12 flex flex-col gap-6 pointer-events-auto shadow-2xl border border-white/10 rounded-lg">
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

      {/* SPACE FILLER BEFORE FINAL SECTIONS */}
      <div className="h-[30vh]"></div>

      {/* PAGE 7: SERVICES (Separate Section) */}
      <section className="w-full min-h-[100vh] flex flex-col justify-center px-6 lg:px-20 bg-background pointer-events-auto py-32 z-20 relative border-t border-border gsap-fade-section">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex flex-col gap-8">
            <span className="font-mono text-brand-cyan text-sm tracking-[0.3em] text-center">03 / EXPERTISE</span>
            <h2 className="text-5xl font-display font-bold tracking-tighter leading-tight text-center">
              PRECISION SERVICES.
            </h2>
            <div className="flex flex-col border-t border-border mt-12">
              {['Commercial Exhaust Cleaning', 'Filter Exchange Program', 'Compliance Certification', 'HVAC Duct Remediation'].map((service, i) => (
                <div key={i} className="py-8 border-b border-border flex justify-between items-center group cursor-pointer hover:px-6 transition-all duration-300">
                  <span className="text-2xl font-light text-foreground group-hover:text-brand-cyan transition-colors">{service}</span>
                  <span className="font-mono text-sm text-muted group-hover:text-brand-cyan transition-colors">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAGE 8: COMPLIANCE & WA MAP (Separate Section) */}
      <section className="w-full min-h-[100vh] flex flex-col justify-center px-6 lg:px-20 bg-background pointer-events-auto pb-32 z-20 relative gsap-fade-section">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex flex-col justify-between p-16 bg-surface rounded-lg border border-border shadow-2xl">
            <div className="flex flex-col gap-6 text-center items-center">
              <span className="font-mono text-brand-blue text-sm tracking-[0.3em]">04 / ASSURANCE</span>
              <h2 className="text-4xl font-display font-bold tracking-tighter text-foreground max-w-2xl">
                FULLY COMPLIANT. <br/> FULLY DOCUMENTED.
              </h2>
              <p className="text-muted mt-4 max-w-2xl">
                Meeting all AS1851-2012 regulatory requirements for Western Australian commercial kitchens. Every service includes a comprehensive photographic report and compliance certificate.
              </p>
            </div>
            
            <div className="mt-16 pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col gap-2 items-center md:items-start">
                <span className="font-mono text-xs text-brand-cyan tracking-widest">BUILT FOR</span>
                <span className="text-3xl font-display font-bold tracking-tight">WESTERN AUSTRALIA</span>
              </div>
              <button className="px-8 py-4 bg-foreground text-background font-bold tracking-widest text-sm hover:bg-brand-cyan hover:text-foreground transition-colors shrink-0">
                GET CERTIFIED
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
