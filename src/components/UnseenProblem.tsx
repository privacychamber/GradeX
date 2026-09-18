import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Flame, EyeOff, ArrowRight } from 'lucide-react';

export const UnseenProblem = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-surface overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full mix-blend-screen filter blur-[120px] -translate-y-1/2 translate-x-1/3" />
      
      <div className="container px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                <ShieldAlert className="w-5 h-5 text-secondary" />
              </div>
              <p className="tech-label !text-secondary !mb-0 tracking-widest">
                THE HIDDEN RISK
              </p>
            </div>
            
            <h2 className="display-sm mb-6 text-white leading-[1.1]">
              THE PROBLEM IS WHERE <span className="text-secondary">YOU CAN'T SEE IT.</span>
            </h2>
            
            <p className="body text-gray-300 text-lg mb-8">
              Out of sight means out of mind. Accumulated grease inside complex ductwork creates extreme fire risks that generic surface cleaning misses. For facility managers and QSR operators, what you can't see is your biggest liability.
            </p>
            
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/30">
                  <Flame className="w-3 h-3 text-red-500" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Severe Fire Hazard</h4>
                  <p className="text-sm text-gray-400">Grease build-up is highly flammable. A single spark can ignite the entire exhaust system.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                  <EyeOff className="w-3 h-3 text-primary" />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Inaccessible to Manual Cleaning</h4>
                  <p className="text-sm text-gray-400">Traditional cleaners only reach arms-length. The deepest risks remain untouched.</p>
                </div>
              </li>
            </ul>
          </motion.div>
          
          {/* Visual Bento Box (Interactive) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="col-span-2 glass-panel p-8 relative overflow-hidden h-[250px] flex flex-col justify-end group cursor-crosshair border border-white/5 hover:border-secondary/30 transition-colors"
            >
               <div className="absolute inset-0 bg-[#1c1208] opacity-80 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-radial from-[#38200a]/40 to-transparent" />
               <div className="relative z-10 flex justify-between items-end">
                 <div>
                   <div className="tech-label text-secondary mb-2 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                     BEFORE
                   </div>
                   <h3 className="text-xl font-bold text-white">Accumulated Grease Inside</h3>
                   <p className="text-sm text-gray-400 mt-2 max-w-sm group-hover:text-gray-300 transition-colors">The hidden danger inside your ducts.</p>
                 </div>
                 <div className="w-10 h-10 rounded-full border border-secondary/20 flex items-center justify-center text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0 bg-secondary/10">
                   <ArrowRight className="w-4 h-4" />
                 </div>
               </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="col-span-2 glass-panel p-8 relative overflow-hidden h-[250px] flex flex-col justify-end group cursor-crosshair border border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all"
            >
               <div className="absolute inset-0 bg-slate-900 opacity-90 group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent mix-blend-screen opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
               <div className="relative z-10 flex justify-between items-end">
                 <div>
                   <div className="tech-label text-primary mb-2 flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,1)]" />
                     AFTER (GRADE X)
                   </div>
                   <h3 className="text-xl font-bold text-white">Restored to Bare Metal</h3>
                   <p className="text-sm text-gray-400 mt-2 max-w-sm group-hover:text-gray-200 transition-colors">Verified clean, entirely mitigating the fire risk.</p>
                 </div>
                 <div className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary transition-all duration-300 translate-x-4 group-hover:translate-x-0 bg-primary/20">
                   <ArrowRight className="w-4 h-4" />
                 </div>
               </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

