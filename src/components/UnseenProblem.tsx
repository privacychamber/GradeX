import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const UnseenProblem = () => {
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  return (
    <section className="relative w-full bg-background overflow-hidden">
      
      {/* Header Section */}
      <div className="container px-6 pt-24 pb-12 relative z-20 text-center">
        <p className="tech-label text-primary tracking-[0.2em] mb-4">ROBOTIC EXHAUST CLEANING</p>
        <h2 className="display-sm leading-tight text-white mb-6">
          A CLEANER TOMORROW<br/>
          FOR BUSINESSES TODAY
        </h2>
        <p className="body text-gray-400 max-w-2xl mx-auto text-lg">
          We combine advanced robotics, real-time video, and verifiable results to deliver the highest standard of kitchen exhaust cleaning in WA.
        </p>
      </div>

      {/* Visual Slider Container with 3D Tilt */}
      <div className="container px-6 pb-24">
        <motion.div 
          ref={sliderRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize shadow-2xl border border-white/10"
          style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          {/* AFTER Side (Background) */}
          <div className="absolute inset-0 select-none">
            <img 
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Clean Exhaust Duct" 
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />
            {/* After Label */}
            <div className="absolute top-6 right-6 md:top-12 md:right-12 z-20">
               <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="text-sm font-bold tracking-widest text-primary uppercase">After: Certified Clean</span>
                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,1)]" />
               </div>
            </div>
          </div>

          {/* BEFORE Side (Clipped foreground) */}
          <div 
            className="absolute inset-0 select-none border-r-2 border-white"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Dirty Exhaust Duct" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[50%] contrast-125"
              draggable="false"
            />
            {/* Before Label */}
            <div className="absolute top-6 left-6 md:top-12 md:left-12 z-20">
               <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-sm font-bold tracking-widest text-secondary uppercase">Before: Extreme Fire Risk</span>
               </div>
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 transform -translate-x-1/2"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <ChevronLeft className="w-5 h-5" />
              <ChevronRight className="w-5 h-5 -ml-2" />
            </div>
          </div>

          {/* Glow effect on hover */}
          <div 
            className={`absolute inset-0 pointer-events-none transition-opacity duration-500 bg-gradient-radial from-primary/20 to-transparent mix-blend-screen ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </motion.div>
      </div>

    </section>
  );
};

