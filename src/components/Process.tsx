import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    id: 'INSPECT',
    title: 'INSPECT',
    color: 'var(--color-accent-blue)',
    steps: [
      { num: '01', text: 'Site inspection and assessment' }
    ]
  },
  {
    id: 'MEASURE',
    title: 'MEASURE',
    color: 'var(--color-accent-gold)',
    steps: [
      { num: '02', text: 'Grease thickness measurement and documentation' }
    ]
  },
  {
    id: 'CLEAN',
    title: 'CLEAN',
    color: '#F5F6F8', // clean state
    steps: [
      { num: '03', text: 'Preparation and protection of the work area' },
      { num: '04', text: 'Interior steam washing and deep cleaning' },
      { num: '05', text: 'Canopy, ductwork and accessible exhaust component cleaning' }
    ]
  },
  {
    id: 'VERIFY',
    title: 'VERIFY',
    color: 'var(--color-accent-blue)',
    steps: [
      { num: '06', text: 'Final inspection and quality control' },
      { num: '07', text: 'Post-cleaning grease measurement' },
      { num: '08', text: 'Detailed reporting and client documentation' }
    ]
  }
];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const spineFillRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || !spineFillRef.current) return;

    // The central spine "fills up" as we scroll down the entire 400vh container
    // We use 400vh here instead of 800vh because 800vh can feel incredibly long.
    // 400vh gives 100vh per stage, which is plenty of time to read 1-3 steps.
    gsap.fromTo(
      spineFillRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        }
      }
    );

    // Each stage text block fades in and slides slightly when it enters the center
    stageRefs.current.forEach((el, index) => {
      if (!el) return;
      
      const startTrigger = `${index * 25}% center`;
      const endTrigger = `${(index + 1) * 25}% center`;

      gsap.fromTo(el,
        { autoAlpha: 0, x: -30 },
        {
          autoAlpha: 1, 
          x: 0,
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
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    // 400vh provides a cinematic pacing for the 4 core stages
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[var(--color-primary-base)]">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Header (Top Left) */}
        <div className="absolute top-12 left-6 md:left-12 lg:left-24 z-20 pointer-events-none">
          <h2 className="display leading-[1.1]">
            EIGHT STEPS.<br/>
            NOTHING SKIPPED.
          </h2>
        </div>

        {/* The Central Physical Spine (Represents the Duct) */}
        <div className="absolute left-6 md:left-12 lg:left-[30%] top-0 bottom-0 w-1 bg-[var(--color-border)] z-0">
          <div 
            ref={spineFillRef}
            className="w-full h-full bg-[var(--color-accent-blue)] origin-top"
            style={{ transform: 'scaleY(0)' }}
          ></div>
        </div>

        {/* Dynamic Stage Content */}
        <div className="w-full h-full relative z-10 pointer-events-none">
          {STAGES.map((stage, index) => (
            <div 
              key={stage.id}
              ref={el => { stageRefs.current[index] = el; }}
              className="absolute top-1/2 left-6 md:left-12 lg:left-[30%] -translate-y-1/2 flex gap-8 md:gap-16 lg:gap-24 pl-8 md:pl-16 w-full max-w-4xl"
            >
              {/* Left Side: Core Stage Title */}
              <div className="w-48 shrink-0 hidden md:block">
                <h3 className="h1 tracking-wider" style={{ color: stage.color }}>
                  {stage.title}
                </h3>
              </div>

              {/* Right Side: Explicit Steps */}
              <div className="flex flex-col gap-8 flex-1">
                {/* Mobile Title Fallback */}
                <h3 className="h2 tracking-wider md:hidden mb-2" style={{ color: stage.color }}>
                  {stage.title}
                </h3>
                
                {stage.steps.map((step) => (
                  <div key={step.num} className="flex gap-6 items-start">
                    <span className="tech-label text-gray-500 mt-1 shrink-0">{step.num} //</span>
                    <p className="body text-[var(--color-text-primary)]">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
