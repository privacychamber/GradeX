"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="contact" className="w-full bg-[#050A10] relative text-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1590496839352-87002bdfad5d?auto=format&fit=crop&q=80&w=2000" 
          alt="Commercial Kitchen"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050A10] via-[#050A10]/80 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-48 relative z-10 flex flex-col items-center text-center gap-8">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Cleaner kitchens.<br/>
            Safer operations.<br/>
            <span className="text-brand-cyan">Better evidence.</span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-xl leading-relaxed mb-10">
            Partner with WA's robotic exhaust cleaning specialists and experience the difference technology makes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button className="btn-uiverse w-full sm:w-auto flex justify-center items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#071019] bg-brand-cyan px-8 py-4 rounded">
              BOOK INSPECTION
              <ArrowRight className="w-4 h-4" />
            </button>
            <a href="tel:0430360162" className="w-full sm:w-auto flex justify-center items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-white bg-white/10 hover:bg-white/20 backdrop-blur px-8 py-4 rounded-md transition-colors border border-white/10">
              <Phone size={16} /> 0430 360 162
            </a>
          </div>
          
          <span className="text-xs font-mono text-gray-500 mt-8 tracking-widest uppercase">
            Emergency response available 24/7.
          </span>
        </motion.div>

      </div>
    </section>
  );
}
