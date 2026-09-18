import React from 'react';
import { PerformanceCanvas } from '../3d/components/PerformanceCanvas';
import { TechnologyScene } from '../3d/scenes/TechnologyScene';
import { motion } from 'framer-motion';
import { Bot, Search, Droplets, Wind } from 'lucide-react';

export const Technology = () => {
  return (
    <section className="relative w-full bg-background pt-32 pb-32">
      
      <div className="container px-6 relative z-10">
        <div className="mb-16">
          <div className="inline-block relative">
             <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
             <h2 className="display-sm text-gradient relative z-10 drop-shadow-2xl">A DIFFERENT WAY INSIDE.</h2>
          </div>
          <p className="body text-gray-400 mt-6 max-w-xl text-lg">
            Our proprietary robotic platform is the only one of its kind operating in Western Australia, providing verified results where manual cleaning fails.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative">
          
          {/* Scrolling Text Cards */}
          <div className="flex flex-col gap-8">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="glass-panel p-8 rounded-2xl border-l-4 border-l-primary shadow-[0_10px_40px_rgba(59,130,246,0.15)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg"><Bot className="w-6 h-6 text-primary" /></div>
                <p className="tech-label text-primary !mb-0">01 // ROBOTIC PLATFORM</p>
              </div>
              <h3 className="h2 mb-4 text-white">Precision Engineered</h3>
              <p className="body text-gray-300">
                A highly maneuverable, ruggedized chassis designed specifically to navigate the extreme confines and tight angles of commercial ductwork.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="glass-panel p-8 rounded-2xl border-l-4 border-l-secondary shadow-[0_10px_40px_rgba(245,158,11,0.1)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary/20 rounded-lg"><Search className="w-6 h-6 text-secondary" /></div>
                <p className="tech-label text-secondary !mb-0">02 // INSPECTION</p>
              </div>
              <h3 className="h2 mb-4 text-white">Full Visibility</h3>
              <p className="body text-gray-300">
                High-definition camera arrays and intense LED lighting pierce the darkness, identifying every risk point with absolute clarity.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="glass-panel p-8 rounded-2xl border-l-4 border-l-blue-400 shadow-[0_10px_40px_rgba(96,165,250,0.15)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-400/20 rounded-lg"><Droplets className="w-6 h-6 text-blue-400" /></div>
                <p className="tech-label text-blue-400 !mb-0">03 // CLEANING</p>
              </div>
              <h3 className="h2 mb-4 text-white">Targeted Eradication</h3>
              <p className="body text-gray-300">
                Specialized mechanical brush action and high-pressure dispersal systems strip heavy grease deposits back to bare metal.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              className="glass-panel p-8 rounded-2xl border-l-4 border-l-purple-500 shadow-[0_10px_40px_rgba(168,85,247,0.15)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg"><Wind className="w-6 h-6 text-purple-400" /></div>
                <p className="tech-label text-purple-400 !mb-0">04 // EXHAUST SYSTEM</p>
              </div>
              <h3 className="h2 mb-4 text-white">Comprehensive Coverage</h3>
              <p className="body text-gray-300">
                Reaching vertical risers, horizontal runs, and complex bends that traditional manual cleaning simply cannot access.
              </p>
            </motion.div>

          </div>

          {/* Sticky 3D Canvas Container */}
          <div className="hidden lg:block h-full relative">
            <div className="sticky top-32 h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 bg-surface/50 shadow-2xl">
               <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent mix-blend-screen" />
               <PerformanceCanvas 
                 shadows
                 camera={{ position: [4, 2, 5], fov: 45 }}
               >
                 <TechnologyScene />
               </PerformanceCanvas>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

