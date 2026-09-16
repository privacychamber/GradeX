import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProofSystem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Text Refs
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);

  // Visual Refs
  const visualContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Use gsap.matchMedia to respect prefers-reduced-motion
    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Timeline for the visual morphing (Right side)
      const visualTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, // Smooth scrub
        }
      });

      // Initial state: Video is visible, others hidden
      gsap.set(videoRef.current, { autoAlpha: 1, scale: 1 });
      gsap.set(measureRef.current, { autoAlpha: 0, scale: 1.1 });
      gsap.set(reportRef.current, { autoAlpha: 0, y: 50, scale: 0.9 });

      // Step 1: Transition from SEE to MEASURE
      visualTl
        .to(videoRef.current, { filter: 'brightness(0.5)', duration: 1 })
        .to(measureRef.current, { autoAlpha: 1, scale: 1, duration: 1 }, "<")
        
        // --- NUMERIC TRANSITION (MEASURE) ---
        // Animate the measurement value mechanically from 0 to 4.2
        .to({ val: 0 }, { 
          val: 4.2, 
          duration: 1, 
          ease: "none", 
          onUpdate: function() {
            const el = document.getElementById('measure-val');
            if(el) el.innerText = this.targets()[0].val.toFixed(1) + 'mm';
          } 
        }, "<")

        // Hold state
        .to({}, { duration: 0.5 })
        // Step 2: Transition from MEASURE to PROVE
        .to([videoRef.current, measureRef.current], { autoAlpha: 0, scale: 0.9, duration: 1 })
        .to(reportRef.current, { autoAlpha: 1, y: 0, scale: 1, duration: 1 }, "<")
        // Hold state at the end
        .to({}, { duration: 1 });

      return () => {
        visualTl.kill();
      };
    });

    // Fallback for prefers-reduced-motion (snap to final state)
    mm.add("(prefers-reduced-motion: reduce)", () => {
       gsap.set(videoRef.current, { autoAlpha: 0 });
       gsap.set(measureRef.current, { autoAlpha: 0 });
       gsap.set(reportRef.current, { autoAlpha: 1, y: 0, scale: 1 });
       const el = document.getElementById('measure-val');
       if(el) el.innerText = '4.2mm';
    });

    return () => mm.revert();
  }, []);

  return (
    // 400vh creates enough scroll depth for the 3 distinct phases
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[var(--color-primary-base)]">
      
      {/* Sticky wrapper for the whole viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Side: Scrolling Text 
            We allow this side to naturally scroll by making the text blocks spaced out over 400vh
            Wait, instead of native scroll, let's use GSAP or just spaced absolute blocks.
            The simplest way to sync text with sticky visuals is absolute positioning based on vh.
        */}
        <div className="w-full lg:w-1/2 h-full relative pointer-events-none">
          {/* We use a container that scrolls natively by inheriting the 400vh height */}
          {/* Actually, it's better to just put the text in the absolute flow of the 400vh container 
              and leave the sticky part for the visuals only. */}
        </div>

      </div>

      {/* The actual scrolling content for the text. Placed outside the sticky div so it scrolls natively */}
      <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full pointer-events-none flex flex-col z-20">
        {/* SEE IT */}
        <div className="h-screen flex items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-md pointer-events-auto">
            <h2 className="display-lg text-[var(--color-text-primary)] mb-4">CLEANING IS ONLY HALF THE JOB.</h2>
            <p className="tech-label text-[var(--color-accent-blue)] mb-2">01 // SEE IT</p>
            <h3 className="h1 mb-4">Live Video Access</h3>
            <p className="body text-gray-400">
              High-definition robotic inspection provides real-time visibility into the deepest sections of your exhaust system. You see what we see.
            </p>
          </div>
        </div>

        {/* MEASURE IT */}
        <div className="h-screen flex items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-md pointer-events-auto">
            <p className="tech-label text-[var(--color-accent-gold)] mb-2">02 // MEASURE IT</p>
            <h3 className="h1 mb-4">Objective Data</h3>
            <p className="body text-gray-400">
              We precisely map grease thickness across the entire duct network. This isn't guesswork; it's a verifiable data-driven assessment.
            </p>
          </div>
        </div>

        {/* PROVE IT */}
        <div className="h-screen flex items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-md pointer-events-auto">
            <p className="tech-label text-white mb-2">03 // PROVE IT</p>
            <h3 className="h1 mb-4">Operational Reporting</h3>
            <p className="body text-gray-400">
              You receive a rigid, compliance-ready operational document containing all photographic evidence, measurements, and certification.
            </p>
          </div>
        </div>
      </div>

      {/* The Sticky Visual Stage */}
      <div className="sticky bottom-0 w-full lg:w-1/2 lg:ml-auto h-screen z-10 p-6 md:p-12 lg:p-24 flex items-center justify-center">
        <div ref={visualContainerRef} className="relative w-full max-w-2xl aspect-[4/3] lg:aspect-square flex items-center justify-center">
          
          {/* Visual 1: SEE IT (Live Video Placeholder) */}
          <div ref={videoRef} className="absolute inset-0 bg-[#050A10] border border-[var(--color-border)] rounded-sm overflow-hidden flex flex-col">
            <div className="w-full h-8 bg-[#111520] border-b border-[var(--color-border)] flex items-center px-4 justify-between">
              <span className="text-[10px] text-red-500 font-mono flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                REC // ROBOT CAM 01
              </span>
              <span className="text-[10px] text-gray-500 font-mono">1080P / 60FPS</span>
            </div>
            <div className="flex-1 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590496839352-87002bdfad5d?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 grayscale mix-blend-screen"></div>
              {/* Target reticle */}
              <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Visual 2: MEASURE IT (HUD Overlay) */}
          <div ref={measureRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-full h-full p-8 flex flex-col justify-end">
              <div className="w-full border-t border-[var(--color-accent-gold)] relative">
                <div className="absolute -top-3 right-0 bg-[var(--color-primary-base)] px-2">
                  <span className="tech-label text-[var(--color-accent-gold)]">DEPTH: <span id="measure-val">[PLACEHOLDER]</span></span>
                </div>
                {/* Simulated topo lines */}
                <svg className="w-full h-32 opacity-30 mt-2" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,50 Q25,10 50,50 T100,50" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.5" />
                  <path d="M0,60 Q25,20 50,60 T100,60" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.5" />
                  <path d="M0,70 Q25,30 50,70 T100,70" fill="none" stroke="var(--color-accent-gold)" strokeWidth="0.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* Visual 3: PROVE IT (Operational Report PDF mockup) */}
          <div ref={reportRef} className="absolute inset-0 bg-white text-black p-8 shadow-2xl flex flex-col transform rotate-1">
            <div className="w-full border-b-2 border-black pb-4 mb-6 flex justify-between items-end">
              <div>
                <h4 className="font-bold text-2xl tracking-tight">OPERATIONAL REPORT</h4>
                <p className="font-mono text-xs text-gray-500 mt-1">DOC ID: [PLACEHOLDER_49201]</p>
              </div>
              <div className="text-right">
                <div className="font-bold">GRADE X</div>
                <p className="font-mono text-xs">ISO CERTIFIED</p>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-gray-100 aspect-video flex items-center justify-center border border-gray-300">
                <span className="font-mono text-xs text-gray-400">PRE-CLEAN PHOTO</span>
              </div>
              <div className="flex-1 bg-gray-100 aspect-video flex items-center justify-center border border-gray-300">
                <span className="font-mono text-xs text-gray-400">POST-CLEAN PHOTO</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm font-mono mb-auto">
              <div className="border-t border-gray-200 pt-2">
                <span className="text-gray-500">INITIAL DEPTH:</span><br/>
                <strong>4.2mm</strong>
              </div>
              <div className="border-t border-gray-200 pt-2">
                <span className="text-gray-500">FINAL DEPTH:</span><br/>
                <strong>0.0mm (BARE METAL)</strong>
              </div>
            </div>

            <div className="border-t-2 border-black pt-4 mt-6">
              <p className="font-mono text-xs text-gray-500">INSPECTOR SIGNATURE</p>
              <div className="w-32 h-8 border-b border-gray-300 mt-4"></div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
