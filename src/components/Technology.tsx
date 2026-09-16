import React, { useEffect, useRef } from 'react';
import { PerformanceCanvas } from '../3d/components/PerformanceCanvas';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TechnologyScene } from '../3d/scenes/TechnologyScene';
import { scrollState } from '../store/scrollState';

gsap.registerPlugin(ScrollTrigger);

export const Technology = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Section refs for GSAP fading
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // ScrollTrigger to update global scroll state for the 3D scene
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        scrollState.techProgress = self.progress;
      },
    });

    // Helper for fading text sections in/out based on scroll regions
    const sections = [text1Ref, text2Ref, text3Ref, text4Ref];
    
    sections.forEach((ref, index) => {
      if (!ref.current) return;
      const startTrigger = `${index * 25}% top`; // e.g. 0%, 25%, 50%, 75%
      const endTrigger = `${(index + 1) * 25}% top`; // e.g. 25%, 50%, 75%, 100%
      
      gsap.fromTo(ref.current, 
        { autoAlpha: 0, y: 20 },
        { 
          autoAlpha: 1, 
          y: 0, 
          duration: 0.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: startTrigger,
            end: endTrigger,
            toggleActions: "play reverse play reverse",
          }
        }
      );
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    // 400vh for 4 distinct sections
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#0A0D14]">
      
      {/* Sticky Fullscreen Wrapper */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col pointer-events-none">
        
        {/* Header (Always visible) */}
        <div className="absolute top-12 left-0 w-full px-6 md:px-12 lg:px-24 z-20">
          <h2 className="display-lg text-[var(--color-text-primary)]">A DIFFERENT WAY INSIDE.</h2>
        </div>

        {/* Dynamic Text Overlay Zones */}
        <div className="absolute inset-0 z-10 flex items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-sm pointer-events-auto mt-32">
            
            {/* 01 PLATFORM */}
            <div ref={text1Ref} className="absolute">
              <p className="tech-label text-[var(--color-accent-blue)] mb-2">01 // ROBOTIC PLATFORM</p>
              <h3 className="h2 mb-4">Precision Engineered</h3>
              <p className="body text-gray-400">
                A highly maneuverable, ruggedized chassis designed specifically to navigate the extreme confines and tight angles of commercial ductwork.
              </p>
            </div>

            {/* 02 INSPECTION */}
            <div ref={text2Ref} className="absolute invisible">
              <p className="tech-label text-[var(--color-accent-blue)] mb-2">02 // INSPECTION</p>
              <h3 className="h2 mb-4">Full Visibility</h3>
              <p className="body text-gray-400">
                High-definition camera arrays and intense LED lighting pierce the darkness, identifying every risk point with absolute clarity.
              </p>
            </div>

            {/* 03 CLEANING */}
            <div ref={text3Ref} className="absolute invisible">
              <p className="tech-label text-[var(--color-accent-blue)] mb-2">03 // CLEANING</p>
              <h3 className="h2 mb-4">Targeted Eradication</h3>
              <p className="body text-gray-400">
                Specialized mechanical brush action and high-pressure dispersal systems strip heavy grease deposits back to bare metal.
              </p>
            </div>

            {/* 04 EXHAUST */}
            <div ref={text4Ref} className="absolute invisible">
              <p className="tech-label text-[var(--color-accent-blue)] mb-2">04 // EXHAUST SYSTEM</p>
              <h3 className="h2 mb-4">Comprehensive Coverage</h3>
              <p className="body text-gray-400">
                Reaching vertical risers, horizontal runs, and complex bends that traditional manual cleaning simply cannot access.
              </p>
            </div>

          </div>
        </div>

        {/* Dedicated Interactive 3D Canvas */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto">
          <PerformanceCanvas 
            shadows
            camera={{ position: [4, 2, 5], fov: 45 }}
          >
            <TechnologyScene />
          </PerformanceCanvas>
        </div>

      </div>
    </section>
  );
};
