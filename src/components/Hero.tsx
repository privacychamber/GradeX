import React, { useEffect, useRef } from 'react';
import { PerformanceCanvas } from '../3d/components/PerformanceCanvas';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroScene } from '../3d/scenes/HeroScene';
import { scrollState } from '../store/scrollState';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textContainerRef.current) return;

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        scrollState.progress = self.progress;
      },
    });

    gsap.to(textContainerRef.current, {
      opacity: 0,
      y: -100,
      filter: 'blur(10px)',
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '50% top',
        scrub: true,
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-background overflow-hidden">
      
      {/* Background Noise & Glow */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-blue-900/20 via-background to-background" />
      <div className="absolute inset-0 z-0 opacity-30 bg-grid" />
      
      {/* Animated Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob z-0" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0" />

      {/* Fixed Fullscreen Canvas */}
      <div className="fixed inset-0 w-full h-screen z-0 pointer-events-none mix-blend-screen opacity-80">
        <PerformanceCanvas 
          shadows
          camera={{ position: [0, 0, 8], fov: 45 }}
        >
          <HeroScene />
        </PerformanceCanvas>
      </div>

      {/* Sticky DOM Overlay */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-center items-center z-10 pointer-events-none">
        {/* Gradient fade to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/90" />
        
        <div className="container relative z-10 flex flex-col items-center text-center px-4" ref={textContainerRef}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-glow" />
            <span className="text-xs font-mono font-bold tracking-widest text-gray-300">WESTERN AUSTRALIA</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="display-lg mb-6 text-gradient"
          >
            PRECISION.<br/>
            <span className="text-gradient-blue">TECHNOLOGY.</span><br/>
            COMPLIANCE.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="body max-w-2xl mb-12 text-gray-400 text-lg md:text-xl"
          >
            Advanced equipment and proven methodology for professional commercial kitchen exhaust cleaning. We don't just clean; we verify.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 items-center pointer-events-auto"
          >
            <button className="gx-button group">
              <span>REQUEST A QUOTE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </button>
            <button className="gx-button-outline group">
              <span>EXPLORE TECHNOLOGY <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" /></span>
            </button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
