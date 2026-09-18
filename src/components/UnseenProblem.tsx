import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Flame, EyeOff } from 'lucide-react';

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
          
          {/* Visual Bento Box */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 glass-panel p-8 relative overflow-hidden h-[250px] flex flex-col justify-end">
               <div className="absolute inset-0 bg-[#1c1208] opacity-80" />
               <div className="absolute inset-0 bg-gradient-radial from-[#38200a]/40 to-transparent" />
               <div className="relative z-10">
                 <div className="tech-label text-secondary mb-2">BEFORE</div>
                 <h3 className="text-xl font-bold text-white">Accumulated Grease Inside</h3>
                 <p className="text-sm text-gray-400 mt-2">The hidden danger inside your ducts.</p>
               </div>
            </div>
            
            <div className="col-span-2 glass-panel p-8 relative overflow-hidden h-[250px] flex flex-col justify-end border border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
               <div className="absolute inset-0 bg-slate-900 opacity-90" />
               <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent mix-blend-screen" />
               <div className="relative z-10">
                 <div className="tech-label text-primary mb-2">AFTER (GRADE X)</div>
                 <h3 className="text-xl font-bold text-white">Restored to Bare Metal</h3>
                 <p className="text-sm text-gray-400 mt-2">Verified clean, entirely mitigating the fire risk.</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

