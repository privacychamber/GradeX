import React from 'react';
import { PerformanceCanvas } from '../3d/components/PerformanceCanvas';
import { HeroScene } from '../3d/scenes/HeroScene';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, ShieldCheck, Award, HardHat } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col pt-32 pb-16 bg-background overflow-hidden">
      
      {/* Background Noise & Glow */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-blue-900/20 via-background to-background" />
      <div className="absolute inset-0 z-0 opacity-30 bg-grid" />
      
      {/* Animated Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob z-0" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-2000 z-0" />

      {/* Ambient 3D Canvas Background */}
      <div className="absolute inset-0 w-full h-full z-0 mix-blend-screen opacity-60 pointer-events-none">
        <PerformanceCanvas 
          shadows
          camera={{ position: [0, 0, 8], fov: 45 }}
        >
          <HeroScene />
        </PerformanceCanvas>
      </div>

      {/* Hero Content */}
      <div className="container relative z-10 flex-1 flex flex-col justify-center items-center text-center px-4 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-glow" />
          <span className="text-xs font-mono font-bold tracking-widest text-primary">WESTERN AUSTRALIA</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="display-lg mb-6 text-gradient"
        >
          PRECISION.<br/>
          <span className="text-gradient-blue">TECHNOLOGY.</span><br/>
          COMPLIANCE.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="body max-w-2xl mb-12 text-gray-300 text-lg md:text-xl font-medium"
        >
          Advanced equipment and proven methodology for professional commercial kitchen exhaust cleaning. We don't just clean; we verify.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a href="#contact" className="gx-button group px-8 py-4">
            <span>REQUEST A QUOTE <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
          </a>
          <a href="#services" className="gx-button-outline group px-8 py-4">
            <span>EXPLORE SERVICES <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" /></span>
          </a>
        </motion.div>
      </div>

      {/* Trust Badges Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container relative z-10 mt-auto pt-16 px-4"
      >
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-8">
          <div className="flex items-center gap-3 text-gray-400">
            <HardHat className="w-6 h-6 text-primary" />
            <span className="text-sm font-bold tracking-wider uppercase">WA's Only Robotic System</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <span className="text-sm font-bold tracking-wider uppercase">Fully Insured & Compliant</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Award className="w-6 h-6 text-primary" />
            <span className="text-sm font-bold tracking-wider uppercase">Digital Verification</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
};
