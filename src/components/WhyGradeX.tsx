"use client";

import { motion } from "framer-motion";

export default function WhyGradeX() {
  return (
    <section id="about" className="w-full bg-[#071019] text-white py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Statement */}
        <div className="flex flex-col gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]"
          >
            Safer kitchens.<br/>
            <span className="text-gray-500">Stronger businesses.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-md leading-relaxed mt-4"
          >
            We partner with restaurants, hotels, clubs, and facility managers to ensure commercial kitchens operate safely and efficiently, without disruption.
          </motion.p>
        </div>

        {/* Right: Photography & Stats */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative"
        >
          {/* Main Kitchen Image */}
          <div className="w-full aspect-[4/3] bg-gray-800 rounded-2xl overflow-hidden relative shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=1200" 
              alt="Commercial Kitchen"
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071019] to-transparent"></div>
          </div>
          
          {/* Overlay Stats Block */}
          <div className="absolute -bottom-8 md:-bottom-12 -left-4 md:-left-12 bg-white text-[#0A1016] p-6 md:p-8 rounded-xl shadow-xl flex flex-col md:flex-row gap-8">
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black tracking-tight text-brand-blue">WA WIDE</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">Service Coverage</span>
            </div>
            
            <div className="hidden md:block w-[1px] bg-gray-200"></div>
            
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black tracking-tight text-brand-blue">24/7</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">Emergency Response</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
