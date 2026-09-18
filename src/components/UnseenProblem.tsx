import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';

export const UnseenProblem = () => {
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

      {/* Visual Slider / Side-by-Side Area */}
      <div className="w-full relative flex flex-col md:flex-row border-y border-white/10" style={{ perspective: "1000px" }}>
        
        {/* BEFORE Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[600px] relative group cursor-crosshair border-b md:border-b-0 md:border-r border-white/10 overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Mock background pattern for 'dirty' duct */}
          <div className="absolute inset-0 bg-[#1c1208] opacity-90 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-radial from-[#38200a]/60 to-transparent" />
          <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
          
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 transform-gpu group-hover:-translate-y-2 transition-transform duration-500" style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-5xl md:text-6xl lg:text-[80px] font-black text-white/90 leading-none tracking-tight transform-gpu" style={{ transform: "translateZ(50px)" }}>
              FROM<br/>
              THIS
            </h3>
            
            <div className="flex items-center gap-3 transform-gpu" style={{ transform: "translateZ(20px)" }}>
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-bold tracking-widest text-secondary uppercase">Before: Extreme Fire Risk</span>
            </div>
          </div>
        </motion.div>

        {/* Divider UI Element (Circle in middle) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex w-16 h-16 rounded-full bg-surface border border-white/20 items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-ew-resize">
           <div className="flex items-center text-white/50">
             <ChevronLeft className="w-5 h-5" />
             <ChevronRight className="w-5 h-5 -ml-2" />
           </div>
        </div>

        {/* AFTER Side */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-[50vh] min-h-[400px] md:h-[60vh] md:min-h-[600px] relative group cursor-crosshair overflow-hidden"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Mock background pattern for 'clean' duct */}
          <div className="absolute inset-0 bg-slate-900 opacity-90 group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-radial from-primary/30 to-transparent mix-blend-screen" />
          <div className="absolute inset-0 bg-grid opacity-10 mix-blend-overlay" />
          
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 items-start md:items-end text-left md:text-right transform-gpu group-hover:-translate-y-2 transition-transform duration-500" style={{ transform: "translateZ(30px)" }}>
            <h3 className="text-5xl md:text-6xl lg:text-[80px] font-black text-white leading-none tracking-tight transform-gpu" style={{ transform: "translateZ(50px)" }}>
              TO<br/>
              THIS
            </h3>
            
            <div className="flex items-center gap-3 transform-gpu" style={{ transform: "translateZ(20px)" }}>
              <span className="text-sm font-bold tracking-widest text-primary uppercase">After: Certified Clean</span>
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,1)]" />
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
};

