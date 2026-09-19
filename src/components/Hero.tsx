import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Zap, AlertTriangle } from 'lucide-react';
import { MagneticWrapper } from './MagneticButton';
import { AnimatedCounter } from './AnimatedCounter';
import { FloatingParticles } from './FloatingParticles';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-background overflow-hidden pt-24 lg:pt-32">
      
      {/* Background Noise & Glow */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-primary/10 via-background to-background" />
      <div className="absolute inset-0 z-0 opacity-20 bg-grid" />
      
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob z-0" />
      
      <FloatingParticles />

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
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
              <Zap className="w-4 h-4 text-primary" />
              <span className="tech-label !text-primary !mb-0 tracking-[0.2em] text-xs">A Cleaner Tomorrow</span>
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black leading-[0.95] text-white tracking-tight mb-8"
          >
            Clean World.<br/>
            <span className="text-gradient-primary">Better Future.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="body max-w-md text-gray-400 text-lg md:text-xl font-medium mb-10 leading-relaxed"
          >
            We turn toxic grease into a cleaner tomorrow.<br/>
            Safe. Smart. Sustainable.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 items-center mb-12"
          >
            <MagneticWrapper>
              <a href="#contact" className="gx-button px-8 py-4 w-full sm:w-auto flex justify-center text-sm font-bold tracking-widest text-background">
                Explore Solutions <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </MagneticWrapper>
            <MagneticWrapper>
              <a href="#technology" className="px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-3 text-white hover:text-primary transition-colors font-bold text-sm tracking-widest group bg-white/5 rounded-full border border-white/10 hover:border-primary/50">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                  <Play className="w-4 h-4 ml-1" />
                </div>
                Watch Video
              </a>
            </MagneticWrapper>
          </motion.div>

          {/* Floating Bento Stats (Left Side) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-6 p-6 rounded-3xl bg-surface/50 backdrop-blur-xl border border-white/5 shadow-2xl max-w-md"
          >
             <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                   <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-black text-white"><AnimatedCounter value={250} suffix="K+" /></span>
                <span className="text-xs text-gray-400 font-medium">Tons Cleaned</span>
             </div>
             <div className="w-px bg-white/10" />
             <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-3">
                   <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-xl font-black text-white"><AnimatedCounter value={120} suffix="+" /></span>
                <span className="text-xs text-gray-400 font-medium">Communities</span>
             </div>
             <div className="w-px bg-white/10" />
             <div className="flex flex-col items-center flex-1">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-3">
                   <ShieldCheck className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-xl font-black text-white"><AnimatedCounter value={98} suffix="%" /></span>
                <span className="text-xs text-gray-400 font-medium">Safe Process</span>
             </div>
          </motion.div>
        </div>

        {/* Right Column: Image & Floating Elements */}
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
            className="w-full max-w-[700px] h-auto object-contain relative z-10 scale-110 lg:scale-125 lg:translate-x-12 mix-blend-screen"
            style={{ 
              filter: "drop-shadow(0 30px 60px rgba(59,130,246,0.25))",
              perspective: "1000px",
              transformStyle: "preserve-3d"
            }}
          />

          {/* Floating Eco Badge (Right side) */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-4 md:right-12 top-1/2 -translate-y-1/2 p-6 rounded-3xl bg-surface/80 backdrop-blur-xl border border-white/5 shadow-2xl z-20 flex flex-col items-center"
          >
             <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-4 border border-primary/30">
                <span className="text-2xl text-primary font-bold">✓</span>
             </div>
             <span className="text-sm font-bold text-white mb-1">Eco Friendly</span>
             <span className="text-xs text-gray-400 text-center">Sustainable<br/>by design</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust & Stats Bar (Bottom) - Redesigned */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-20 w-full mt-auto pb-8"
      >
        <div className="container px-6 lg:px-24">
          <div className="bg-surface/50 backdrop-blur-xl border border-white/5 rounded-3xl py-6 px-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-4 border-r border-white/10 pr-6 shrink-0">
               <span className="text-xs font-bold text-gray-500 uppercase">Trusted by<br/><span className="text-gray-300">Leading Partners</span></span>
            </div>
            
            <div className="flex items-center justify-around flex-1 gap-4 opacity-70 grayscale">
               <span className="text-sm font-bold flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-gray-500/20 flex items-center justify-center">O</div> CleanEarth</span>
               <span className="text-sm font-bold flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-gray-500/20 flex items-center justify-center">🍃</div> GreenFuture</span>
               <span className="text-sm font-bold flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-gray-500/20 flex items-center justify-center">🛡️</div> SafePlanet</span>
            </div>

            <div className="shrink-0 pl-6 border-l border-white/10">
               <a href="#" className="text-xs font-bold bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full transition-colors">See All Partners</a>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};
