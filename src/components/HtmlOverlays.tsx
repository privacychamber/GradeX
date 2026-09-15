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

      // Typography scaling/masking as the camera enters the duct
      gsap.to('.hero-text-container', {
        scale: 1.2,
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: '.hero-text-container',
          start: "top top",
          end: "+=1500", // Fades out slowly as we enter the canopy
          scrub: true
        }
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[600vh] text-white relative z-10 flex flex-col font-sans pointer-events-none">
      
      {/* 
        V4 REBOOT: THE ENTIRE HTML LAYER IS NOW SOLELY THE HERO SEQUENCE.
        All floating HUDs, glass cards, and additional sections have been ripped out 
        to ensure 100% focus on the 3D cinematic scrub.
      */}

      <section className="w-full h-screen sticky top-0 flex flex-col items-center justify-center">
        
        {/* Centered Massive Typography */}
        <div className="hero-text-container flex flex-col items-center text-center mix-blend-difference z-20">
          <div className="overflow-hidden py-1">
            <h1 className="hero-line text-[12vw] md:text-[9vw] font-bold tracking-tighter leading-[0.85] text-white">
              PRECISION.
            </h1>
          </div>
          <div className="overflow-hidden py-1">
            <h1 className="hero-line text-[12vw] md:text-[9vw] font-bold tracking-tighter leading-[0.85] text-white">
              TECHNOLOGY.
            </h1>
          </div>
          <div className="overflow-hidden py-1">
            <h1 className="hero-line text-[12vw] md:text-[9vw] font-bold tracking-tighter leading-[0.85] text-brand-cyan">
              COMPLIANCE.
            </h1>
          </div>
          
          <p className="hero-line mt-8 text-xs md:text-sm font-mono tracking-[0.2em] text-white/50 max-w-lg text-balance">
            ENGINEERED COMMERCIAL EXHAUST REMEDIATION.
          </p>
        </div>
        
        {/* Minimal Scroll Indicator */}
        <div className="absolute bottom-12 flex flex-col items-center gap-4 z-20">
          <span className="text-[9px] font-mono tracking-[0.3em] text-white/50">SCROLL TO EXPLORE</span>
          <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
            <div className="scroll-line absolute top-0 left-0 w-full h-full bg-white origin-top"></div>
          </div>
        </div>
      </section>

    </div>
  );
}
