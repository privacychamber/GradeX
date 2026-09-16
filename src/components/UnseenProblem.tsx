import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const UnseenProblem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dirtyLayerRef = useRef<HTMLDivElement>(null);
  const cleanLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !dirtyLayerRef.current || !cleanLayerRef.current) return;

    // Timeline to control the wiping animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5, // Slight smoothing
      },
    });

    // We start with the exterior (base layer) fully visible.
    // 1. Wipe in the "Dirty" layer from top to bottom
    tl.fromTo(
      dirtyLayerRef.current,
      { clipPath: 'inset(0 0 100% 0)' },
      { clipPath: 'inset(0 0 0% 0)', ease: 'none' }
    );

    // 2. Pause slightly so the user sees the dirty state
    tl.to({}, { duration: 0.2 });

    // 3. Wipe in the "Cleaned/Restored" layer from left to right
    tl.fromTo(
      cleanLayerRef.current,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', ease: 'none' }
    );
    
    // 4. Pause slightly at the end
    tl.to({}, { duration: 0.2 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-[var(--color-primary-base)]">
      
      {/* Sticky Container holds the visuals and text while scrolling through the 300vh */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Editorial Text Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center">
          <div className="container grid-editorial">
            <div className="col-span-12 md:col-span-6 lg:col-span-5 bg-[var(--color-primary-base)]/80 backdrop-blur-sm p-8 rounded-sm border border-[var(--color-border)]">
              <p className="tech-label text-[var(--color-accent-gold)] mb-4">
                02 // THE HIDDEN RISK
              </p>
              <h2 className="display mb-6 leading-tight">
                THE PROBLEM IS WHERE YOU CAN'T SEE IT.
              </h2>
              <p className="body text-gray-300">
                Out of sight means out of mind. Accumulated grease inside complex ductwork creates extreme fire risks that generic surface cleaning misses. 
              </p>
            </div>
          </div>
        </div>

        {/* Visual Layers for the Before/After/Restored masking */}
        <div className="absolute inset-0 z-0 w-full h-full">
          
          {/* Base Layer: Exterior / Clean Looking (Placeholder) */}
          <div className="absolute inset-0 w-full h-full bg-[#1A1F2E] flex items-center justify-center">
            {/* Replace with <img src="/assets/duct-exterior.jpg" className="object-cover w-full h-full" /> */}
            <div className="text-center opacity-30">
              <div className="tech-label text-xl mb-2">Pristine Exterior</div>
              <div className="font-mono text-sm">(Base Layer)</div>
            </div>
          </div>

          {/* Layer 2: Accumulated Grease (Wipes down) */}
          <div 
            ref={dirtyLayerRef}
            className="absolute inset-0 w-full h-full bg-[#2A1E12] flex items-center justify-center border-b-2 border-[var(--color-accent-gold)]"
            style={{ clipPath: 'inset(0 0 100% 0)' }}
          >
            {/* Replace with <img src="/assets/duct-greasy.jpg" className="object-cover w-full h-full opacity-80 mix-blend-multiply" /> */}
            <div className="text-center opacity-50">
              <div className="tech-label text-xl text-[var(--color-accent-gold)] mb-2">Accumulated Grease Inside</div>
              <div className="font-mono text-sm text-[var(--color-accent-gold)]">(Hidden Danger)</div>
            </div>
          </div>

          {/* Layer 3: Restored / Bare Metal (Wipes right) */}
          <div 
            ref={cleanLayerRef}
            className="absolute inset-0 w-full h-full bg-[#E2E8F0] flex items-center justify-center border-r-2 border-[var(--color-accent-blue)]"
            style={{ clipPath: 'inset(0 100% 0 0)' }}
          >
            {/* Replace with <img src="/assets/duct-restored.jpg" className="object-cover w-full h-full mix-blend-luminosity opacity-90" /> */}
            <div className="text-center opacity-80">
              <div className="tech-label text-xl text-[var(--color-accent-blue)] mb-2">Restored to Bare Metal</div>
              <div className="font-mono text-sm text-[var(--color-accent-blue)]">(Grade X Cleaned)</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
