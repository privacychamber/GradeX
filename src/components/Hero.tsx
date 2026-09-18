import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Zap, AlertTriangle } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-background overflow-hidden pt-24 lg:pt-32">
      
      {/* Background Noise & Glow */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-blue-900/10 via-background to-background" />
      <div className="absolute inset-0 z-0 opacity-20 bg-grid" />
      
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob z-0" />

      {/* Main Hero Content */}
      <div className="container relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24">
        
        {/* Left Column: Text */}
        <div className="w-full lg:w-1/2 pt-12 lg:pt-0 pb-16 lg:pb-0 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="tech-label !text-gray-400 !mb-0 tracking-[0.2em] text-sm uppercase">Western Australia's</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black leading-[0.95] text-white tracking-tight mb-8"
          >
            ROBOTIC<br/>
            EXHAUST<br/>
            CLEANING<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">SPECIALISTS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="body max-w-md text-gray-400 text-lg md:text-xl font-medium mb-10 leading-relaxed"
          >
            Cleaner ducts. Safer kitchens.<br/>
            Full compliance. Every time.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <a href="#contact" className="gx-button px-8 py-4 w-full sm:w-auto flex justify-center text-sm font-bold tracking-widest">
              REQUEST A QUOTE
            </a>
            <a href="#technology" className="px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-3 text-white hover:text-primary transition-colors font-bold text-sm tracking-widest group">
              <div className="w-10 h-10 rounded-full border border-white/20 group-hover:border-primary/50 flex items-center justify-center bg-white/5 transition-colors">
                <Play className="w-4 h-4 ml-1" />
              </div>
              WATCH THE ROBOT
            </a>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end mt-8 lg:mt-0"
        >
          {/* Subtle glow behind robot */}
          <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent filter blur-[80px]" />
          <motion.img 
            animate={{ 
              y: [0, -20, 0],
              rotateZ: [0, 2, -1, 0],
              rotateY: [0, 5, -5, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            src="/assets/images/robot2.jpg" 
            alt="Grade X Robotic Cleaning Technology" 
            className="w-full max-w-[800px] h-auto object-contain relative z-10 scale-110 lg:scale-125 lg:translate-x-12 mix-blend-screen"
            style={{ 
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
              perspective: "1000px",
              transformStyle: "preserve-3d"
            }}
          />
        </motion.div>
      </div>

      {/* Trust & Stats Bar (Bottom) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-20 w-full mt-auto"
      >
        {/* Top dividing line */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="bg-surface/50 backdrop-blur-md">
          <div className="container px-6 lg:px-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 md:py-8 text-center md:text-left divide-x divide-white/5">
              
              <div className="flex flex-col items-center md:items-start px-4">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Technology</span>
                </div>
                <span className="text-sm font-bold text-gray-300">WA'S ONLY ROBOTIC SYSTEM</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start px-4">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Compliance</span>
                </div>
                <span className="text-sm font-bold text-gray-300">100% CERTIFIED & INSURED</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start px-4">
                <div className="flex items-center gap-2 mb-2">
                  <Play className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Evidence</span>
                </div>
                <span className="text-sm font-bold text-gray-300">LIVE VIDEO VERIFICATION</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start px-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4 text-secondary" />
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">Support</span>
                </div>
                <span className="text-sm font-bold text-gray-300">EMERGENCY RESPONSE</span>
              </div>

            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};
