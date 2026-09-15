"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollStore } from "@/store/scrollStore";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HtmlOverlays() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      
      // Hero Typography Clip-path reveal (onload)
      gsap.fromTo(".hero-line", 
        { y: 100, clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
        { y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.5, stagger: 0.2, ease: "power4.out", delay: 0.5 }
      );
      
      // Scroll indicator line continuous animation
      gsap.to(".scroll-line", {
        scaleY: 1,
        y: 20,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        ease: "power2.inOut"
      });

      // Section Fade and Translate logic
      const sections = gsap.utils.toArray<HTMLElement>('.gsap-section');
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 30 },
          {
            opacity: 1, 
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 70%", 
              end: "bottom 30%",
              toggleActions: "play reverse play reverse",
            }
          }
        );
      });

      // Parallax text
      gsap.utils.toArray<HTMLElement>('.parallax-slow').forEach(el => {
        gsap.to(el, {
          y: -150,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full text-white relative z-10 flex flex-col font-sans">
      
      {/* 01 — HERO */}
      <section className="w-full h-[200vh] pointer-events-none relative">
        <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center">
          
          {/* Centered Massive Typography */}
          <div className="flex flex-col items-center text-center mix-blend-difference parallax-slow z-20">
            <div className="overflow-hidden py-2">
              <h1 className="hero-line text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-[0.85] text-white">
                PRECISION.
              </h1>
            </div>
            <div className="overflow-hidden py-2">
              <h1 className="hero-line text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-[0.85] text-white">
                TECHNOLOGY.
              </h1>
            </div>
            <div className="overflow-hidden py-2">
              <h1 className="hero-line text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-[0.85] text-brand-cyan">
                COMPLIANCE.
              </h1>
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 flex flex-col items-center gap-4 parallax-slow z-20">
            <span className="text-[9px] font-mono tracking-[0.3em] text-white/50">SCROLL</span>
            <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
              <div className="scroll-line absolute top-0 left-0 w-full h-full bg-white origin-top"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SPACE FILLER: Camera Enters Duct */}
      <div className="h-[200vh]"></div>

      {/* 02 — METHODOLOGY / ROBOT INTERACTION */}
      <section className="w-full min-h-[300vh] relative pointer-events-none gsap-section">
        <div className="w-full h-screen sticky top-0 flex flex-col justify-center px-6 lg:px-24">
          <div className="max-w-xl bg-transparent">
            <div className="overflow-hidden mb-6">
              <span className="text-[10px] font-mono tracking-[0.3em] text-brand-cyan inline-block uppercase">
                01 / Engineering
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-white mb-12">
              THE ROBOTIC <br/> PLATFORM.
            </h2>
            
            {/* Pinned Methodology Steps via Zustand Scroll Store */}
            <div className="flex flex-col gap-6 border-l border-white/10 pl-6 relative">
              <MethodologyTracker />
            </div>
          </div>
        </div>
      </section>
      
      {/* 03 — DIGITAL PROOF (HUD) */}
      <section className="w-full min-h-[200vh] relative pointer-events-none gsap-section">
        <div className="w-full h-screen sticky top-0 flex items-center justify-end px-6 lg:px-24">
          
          {/* Strict Engineering HUD - No Glassmorphism */}
          <div className="w-full md:w-[450px] bg-[#050505] border border-[#333333] p-8 pointer-events-auto">
             <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#222222]">
               <span className="text-[10px] font-mono tracking-[0.2em] text-brand-cyan">02 / EVIDENCE</span>
               <span className="text-[10px] font-mono text-white/30">SYS.ON</span>
             </div>
             
             <h2 className="text-3xl font-bold tracking-tighter mb-6">DIGITAL PROOF</h2>
             <p className="text-[13px] font-mono text-white/50 leading-relaxed mb-8">
               [ RECORDING ] Precise digital record of grease reduction mapped from entry to exit point.
             </p>
             
             <div className="grid grid-cols-2 gap-px bg-[#222222] border border-[#222222]">
               <div className="bg-[#0A0A0A] p-6 flex flex-col gap-2">
                 <span className="text-[9px] text-white/40 font-mono tracking-widest">BEFORE [CONTAMINATED]</span>
                 <span className="text-3xl font-mono text-white">02.8<span className="text-xs text-white/30 ml-1">mm</span></span>
               </div>
               <div className="bg-[#0A0A0A] p-6 flex flex-col gap-2">
                 <span className="text-[9px] text-brand-cyan font-mono tracking-widest">AFTER [VERIFIED]</span>
                 <span className="text-3xl font-mono text-brand-cyan">00.4<span className="text-xs text-brand-cyan/50 ml-1">mm</span></span>
               </div>
             </div>

             <div className="mt-6 flex items-center gap-4">
               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
               <span className="text-[10px] font-mono text-white/50 tracking-widest">AS1851-2012 COMPLIANT</span>
             </div>
          </div>
        </div>
      </section>

      {/* SPACE FILLER: Camera exits duct into final void */}
      <div className="h-[150vh]"></div>

      {/* 04 — SERVICES EXPLORER */}
      <section className="w-full min-h-[100vh] bg-[#020202] py-40 z-20 relative border-t border-white/5 pointer-events-auto gsap-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 block mb-12">03 / EXPERTISE</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-white sticky top-40">
                PRECISION <br/> SERVICES.
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col border-t border-white/10">
              {['Commercial Exhaust Cleaning', 'Filter Exchange Program', 'Compliance Certification', 'HVAC Duct Remediation'].map((service, i) => (
                <div key={i} className="py-12 border-b border-white/10 flex justify-between items-center group cursor-pointer">
                  <span className="text-2xl md:text-3xl font-medium tracking-tight text-white/60 group-hover:text-white transition-colors duration-500">{service}</span>
                  <span className="text-[10px] font-mono text-white/20 group-hover:text-brand-cyan transition-colors duration-500 tracking-widest">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — ASSURANCE & WA MAP */}
      <section className="w-full min-h-[100vh] bg-[#020202] py-40 z-20 relative pointer-events-auto gsap-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-20">
            <div className="flex flex-col max-w-2xl">
              <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 block mb-12">04 / ASSURANCE</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight text-white mb-8">
                FULLY COMPLIANT. <br/> FULLY DOCUMENTED.
              </h2>
              <p className="text-sm font-mono text-white/50 leading-relaxed max-w-xl">
                Meeting all AS1851-2012 regulatory requirements for Western Australian commercial kitchens. Every service includes a comprehensive photographic report and compliance certificate.
              </p>
            </div>
            
            {/* Minimal WA Visualization (Placeholder for SVG Path) */}
            <div className="w-full lg:w-[400px] h-[400px] border border-[#111111] bg-[#050505] flex items-center justify-center relative overflow-hidden">
               {/* Abstract Grid */}
               <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               <div className="text-center z-10 flex flex-col items-center gap-4">
                 <span className="text-[10px] font-mono tracking-[0.2em] text-brand-cyan">BUILT FOR</span>
                 <span className="text-2xl font-bold tracking-tighter text-white">WESTERN AUSTRALIA</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — FINAL CTA */}
      <section className="w-full h-screen bg-[#000000] z-20 relative pointer-events-auto flex flex-col items-center justify-center text-center px-6">
        <div className="max-w-4xl parallax-slow">
          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white mb-16">
            CLEANER KITCHENS.<br/>
            SAFER OPERATIONS.<br/>
            BETTER EVIDENCE.
          </h2>
          <button className="px-10 py-5 border border-white/20 text-white text-[11px] font-mono tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
            REQUEST A QUOTE
          </button>
        </div>
      </section>

    </div>
  );
}

// Sub-component to map scroll progress to methodology steps
function MethodologyTracker() {
  const steps = [
    "INSPECT", "MEASURE", "PREPARE", "CLEAN", "VERIFY", "REPORT"
  ];
  
  // We read the global progress (0 to 1) from the scroll store.
  // The methodology section spans roughly from t = 0.3 to t = 0.5
  const progress = useScrollStore((state) => state.progress);
  
  // Map progress to active step index
  let activeIndex = 0;
  if (progress > 0.3) {
    const range = (progress - 0.3) * 5; // Maps 0.3-0.5 to 0-1
    activeIndex = Math.min(steps.length - 1, Math.floor(range * steps.length));
  }

  return (
    <>
      {steps.map((step, i) => {
        const isActive = i === activeIndex;
        const isPast = i < activeIndex;
        return (
          <div key={step} className="flex items-center gap-6 transition-all duration-300">
            {/* Animated indicator line */}
            <div className={`h-[1px] transition-all duration-500 ${isActive ? 'w-8 bg-brand-cyan' : 'w-4 bg-[#333333]'}`}></div>
            
            <span className={`text-[12px] font-mono tracking-[0.2em] transition-colors duration-500 ${
              isActive ? "text-brand-cyan" : 
              isPast ? "text-white/40" : "text-[#333333]"
            }`}>
              {step}
            </span>
          </div>
        );
      })}
    </>
  );
}
