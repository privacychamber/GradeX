import React, { useEffect, useRef } from 'react';
import { PerformanceCanvas } from '../3d/components/PerformanceCanvas';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TechnologyScene } from '../3d/scenes/TechnologyScene';
import { scrollState } from '../store/scrollState';

gsap.registerPlugin(ScrollTrigger);

export const Technology = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const text4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        scrollState.techProgress = self.progress;
      },
    });

    const sections = [text1Ref, text2Ref, text3Ref, text4Ref];
    
    sections.forEach((ref, index) => {
      if (!ref.current) return;
      const startTrigger = `${index * 25}% top`; 
      const endTrigger = `${(index + 1) * 25}% top`; 
      
      gsap.fromTo(ref.current, 
        { autoAlpha: 0, x: -30, filter: 'blur(10px)' },
        { 
          autoAlpha: 1, 
          x: 0, 
          filter: 'blur(0px)',
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
    <section ref={containerRef} className="relative w-full h-[400vh] bg-background">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col pointer-events-none">
        
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent z-10 w-1/2" />

        {/* Header */}
        <div className="absolute top-20 left-0 w-full px-6 md:px-12 lg:px-24 z-20">
          <div className="inline-block relative">
             <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
             <h2 className="display-sm text-gradient relative z-10 drop-shadow-2xl">A DIFFERENT WAY INSIDE.</h2>
          </div>
        </div>

        {/* Dynamic Text Overlay Zones */}
        <div className="absolute inset-0 z-20 flex items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-md pointer-events-auto mt-32 relative h-[300px] w-full">
            
            {/* 01 PLATFORM */}
            <div ref={text1Ref} className="absolute inset-0 glass-panel p-8 rounded-2xl border-l-4 border-l-primary h-fit shadow-[0_10px_40px_rgba(59,130,246,0.15)]">
              <p className="tech-label text-primary mb-3">01 // ROBOTIC PLATFORM</p>
              <h3 className="h2 mb-4 text-white">Precision Engineered</h3>
              <p className="body text-gray-300">
                A highly maneuverable, ruggedized chassis designed specifically to navigate the extreme confines and tight angles of commercial ductwork.
              </p>
            </div>

            {/* 02 INSPECTION */}
            <div ref={text2Ref} className="absolute inset-0 glass-panel p-8 rounded-2xl border-l-4 border-l-secondary h-fit invisible shadow-[0_10px_40px_rgba(245,158,11,0.1)]">
              <p className="tech-label text-secondary mb-3">02 // INSPECTION</p>
              <h3 className="h2 mb-4 text-white">Full Visibility</h3>
              <p className="body text-gray-300">
                High-definition camera arrays and intense LED lighting pierce the darkness, identifying every risk point with absolute clarity.
              </p>
            </div>

            {/* 03 CLEANING */}
            <div ref={text3Ref} className="absolute inset-0 glass-panel p-8 rounded-2xl border-l-4 border-l-blue-400 h-fit invisible shadow-[0_10px_40px_rgba(96,165,250,0.15)]">
              <p className="tech-label text-blue-400 mb-3">03 // CLEANING</p>
              <h3 className="h2 mb-4 text-white">Targeted Eradication</h3>
              <p className="body text-gray-300">
                Specialized mechanical brush action and high-pressure dispersal systems strip heavy grease deposits back to bare metal.
              </p>
            </div>

            {/* 04 EXHAUST */}
            <div ref={text4Ref} className="absolute inset-0 glass-panel p-8 rounded-2xl border-l-4 border-l-purple-500 h-fit invisible shadow-[0_10px_40px_rgba(168,85,247,0.15)]">
              <p className="tech-label text-purple-400 mb-3">04 // EXHAUST SYSTEM</p>
              <h3 className="h2 mb-4 text-white">Comprehensive Coverage</h3>
              <p className="body text-gray-300">
                Reaching vertical risers, horizontal runs, and complex bends that traditional manual cleaning simply cannot access.
              </p>
            </div>

          </div>
        </div>

        {/* Dedicated Interactive 3D Canvas */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-auto mix-blend-screen opacity-90">
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
