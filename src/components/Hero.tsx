import React, { useEffect, useRef } from 'react';
import { PerformanceCanvas } from '../3d/components/PerformanceCanvas';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroScene } from '../3d/scenes/HeroScene';
import { scrollState } from '../store/scrollState';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textContainerRef.current) return;

    // ScrollTrigger to update the global scroll progress for Three.js
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        scrollState.progress = self.progress;
      },
    });

    // GSAP animation for the text overlay (fades out as we go deep into the duct)
    gsap.to(textContainerRef.current, {
      opacity: 0,
      y: -50,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '50% top', // fade out halfway through the scroll
        scrub: true,
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    // The container is 300vh to allow for a long scroll sequence
    <section ref={containerRef} className="relative w-full h-[300vh] bg-[var(--color-primary-base)]">
      
      {/* Fixed Fullscreen Canvas */}
      <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none">
        <PerformanceCanvas 
          shadows
          camera={{ position: [0, 0, 8], fov: 45 }}
        >
          <HeroScene />
        </PerformanceCanvas>
      </div>

      {/* Sticky DOM Overlay */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center z-10 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-black/80">
        <div className="container grid-editorial" ref={textContainerRef}>
          <div className="col-span-12 lg:col-span-8 lg:col-start-2">
            
            <p className="tech-label text-[var(--color-accent-gold)] mb-6 drop-shadow-md">
              WESTERN AUSTRALIA <br/> COMMERCIAL KITCHEN EXHAUST
            </p>
            
            <h1 className="display-lg mb-8 leading-[1.05] text-gradient">
              PRECISION.<br/>
              TECHNOLOGY.<br/>
              COMPLIANCE.
            </h1>
            
            <p className="body max-w-lg mb-12 text-white/90 drop-shadow-md">
              Advanced equipment and proven methodology for professional commercial kitchen exhaust cleaning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pointer-events-auto">
              <button className="gx-button group">
                <span>REQUEST A QUOTE <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></span>
              </button>
              <button className="gx-button-outline group">
                <span>EXPLORE THE TECHNOLOGY <span className="group-hover:translate-y-1 transition-transform">&darr;</span></span>
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
