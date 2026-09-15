"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Camera, Activity, ShieldCheck } from "lucide-react";
import HeroCanvas from "./canvas/HeroCanvas";

export default function Hero() {
  const { scrollY } = useScroll();
  const hudY = useTransform(scrollY, [0, 500], [0, -50]);

  return (
    <section id="hero-section" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-midnight">
      {/* 3D Environment Background */}
      <HeroCanvas />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-brand-cyan text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-4">
              Western Australia&apos;s Robotic Exhaust Specialists
            </p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] text-white">
              PRECISION.<br />
              TECHNOLOGY.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-blue text-glow">
                COMPLIANCE.
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Advanced robotic technology for cleaner, safer and fully documented
            commercial kitchen exhaust systems.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-sm font-semibold tracking-wide hover:bg-blue-600 transition-all shadow-[0_0_20px_var(--color-brand-blue-glow)]">
              REQUEST A QUOTE
              <ArrowRight size={18} />
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/20 text-white rounded-sm font-semibold tracking-wide hover:bg-white/5 transition-all">
              <Play size={18} />
              EXPLORE THE TECHNOLOGY
            </button>
          </motion.div>
        </div>

        {/* Right Content - Robot & HUD */}
        <motion.div
          className="relative h-[500px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Placeholder for the Robot Image - We keep a subtle overlay frame if desired, or remove it since the 3D robot is there */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             {/* Invisible placeholder for layout constraints */}
          </div>

          {/* Floating Glass HUD */}
          <motion.div
            className="absolute top-10 right-0 glass-dark p-4 rounded-sm border border-brand-cyan/30 flex flex-col gap-3 min-w-[200px]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            style={{ y: hudY }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-brand-cyan flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                LIVE INSPECTION
              </span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-mono">GREASE THICKNESS</span>
              <span className="text-2xl font-mono text-white">184 <span className="text-sm text-gray-500">μm</span></span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-mono">AFTER CLEAN</span>
              <span className="text-xl font-mono text-brand-cyan">21 <span className="text-sm opacity-70">μm</span></span>
            </div>

            <div className="flex flex-col gap-2 mt-2 pt-2 border-t border-white/10">
               <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                 <Camera size={12} className="text-brand-cyan" /> CAMERA CONNECTED
               </div>
               <div className="flex items-center gap-2 text-xs font-mono text-gray-300">
                 <Activity size={12} className="text-brand-cyan" /> SYSTEM ACTIVE
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
