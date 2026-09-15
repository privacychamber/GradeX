"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function ServiceArea() {
  return (
    <section className="py-32 bg-brand-midnight text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-cyan via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-cyan text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-4">
              WESTERN AUSTRALIA
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
              BUILT FOR <br />
              <span className="text-gray-500">WESTERN AUSTRALIA.</span>
            </h2>
          </motion.div>

          <motion.ul
            className="flex flex-col gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <li className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center border border-white/10 text-brand-cyan">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">PERTH METROPOLITAN</span>
                <span className="text-sm text-gray-400 font-light">Rapid response across the metro area.</span>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full glass-dark flex items-center justify-center border border-white/10 text-brand-blue">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">WA WIDE SERVICE</span>
                <span className="text-sm text-gray-400 font-light">Available for major commercial projects statewide.</span>
              </div>
            </li>
          </motion.ul>
        </div>

        <motion.div
          className="relative h-[400px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Abstract WA Map Placeholder */}
          <div className="relative w-full max-w-[300px] aspect-[3/4] opacity-80">
            {/* Outline representation */}
            <svg viewBox="0 0 100 150" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]" fill="none" stroke="currentColor" strokeWidth="0.5">
              <path 
                d="M10,20 Q40,10 50,30 T80,40 T90,90 T60,140 T20,130 T10,80 Z" 
                className="text-white/20 fill-white/5" 
              />
            </svg>
            
            {/* Perth Glowing Indicator */}
            <div className="absolute top-[65%] left-[20%] flex items-center justify-center group cursor-pointer">
              <div className="w-3 h-3 bg-brand-cyan rounded-full absolute shadow-[0_0_15px_var(--color-brand-cyan)] z-10"></div>
              <div className="w-8 h-8 border border-brand-cyan rounded-full absolute animate-ping opacity-70"></div>
              
              <div className="absolute left-6 glass-dark px-3 py-1 rounded text-[10px] font-mono tracking-widest text-white border border-brand-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                PERTH HQ
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
