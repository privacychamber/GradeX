import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'hygiene',
    title: 'KITCHEN EXHAUST & HYGIENE',
    services: [
      { title: 'Kitchen Exhaust Cleaning', desc: 'Comprehensive removal of grease throughout the entire exhaust system.' },
      { title: 'Canopy Cleaning', desc: 'Specialized deep cleaning of the primary extraction hood.' },
      { title: 'Robotic Exhaust Cleaning Technology', desc: 'Deployment of remote units for inaccessible ductwork.' },
      { title: 'Steam Cleaning', desc: 'High-pressure, chemical-free eradication of heavy deposits.' },
      { title: 'Kitchen Equipment Hygiene', desc: 'Sanitization and breakdown of core cooking hardware.' },
    ]
  },
  {
    id: 'equipment',
    title: 'KITCHEN EQUIPMENT CLEANING',
    services: [
      { title: 'Grill Recovery', desc: 'Restoration of heavy-use commercial grills to bare metal.' },
      { title: 'Fryer Vat Boil-Outs', desc: 'Carbon removal and deep sanitation of fryer units.' },
      { title: 'Shake Machine Cleaning', desc: 'Hygienic breakdown and sterilization of dairy equipment.' },
      { title: 'Cool Room Cleaning', desc: 'Mold mitigation and surface sanitation in cold storage.' },
      { title: 'Nightly Kitchen Maintenance', desc: 'Recurring surface-level operational cleaning.' },
      { title: 'Monthly Kitchen Deep Cleaning', desc: 'Rigorous periodic reset of the entire kitchen environment.' },
    ]
  },
  {
    id: 'lobby',
    title: 'LOBBY & FRONT-OF-HOUSE',
    services: [
      { title: 'Lobby Cleaning', desc: 'Daily presentation maintenance for high-traffic dining areas.' },
      { title: 'Monthly Lobby Deep Cleaning', desc: 'Intensive restoration of flooring, upholstery, and fixtures.' },
      { title: 'Play Place Cleaning', desc: 'Sanitization protocols for sensitive children\'s play areas.' },
    ]
  },
  {
    id: 'exterior',
    title: 'EXTERIOR & GENERAL',
    services: [
      { title: 'Floor Detailing & Scrubbing', desc: 'Industrial-grade surfacing recovery.' },
      { title: 'Exterior High-Pressure Washing', desc: 'Removal of environmental buildup from facades and walkways.' },
      { title: 'Building & Drive-Thru Pressure Cleaning', desc: 'Targeted grease and oil removal in high-traffic vehicle lanes.' },
      { title: 'Window Cleaning', desc: 'Streak-free clarity for large commercial glazing.' },
      { title: 'Line Marking', desc: 'Crisp, high-visibility restriping for parking and safety zones.' },
      { title: 'General Commercial Cleaning', desc: 'Scalable janitorial solutions for adjoining operational spaces.' },
    ]
  }
];

export const ServicesList = () => {
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].id);

  const currentCategory = CATEGORIES.find(c => c.id === activeCategory);

  return (
    <section id="services" className="relative w-full bg-background py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full mix-blend-screen filter blur-[150px] z-0 pointer-events-none" />

      <div className="container px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-white/10 pb-12 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-6">
             <p className="tech-label !text-primary !mb-0 tracking-widest">COMPLETE SERVICES</p>
          </div>
          <h2 className="display-sm leading-tight text-gradient">
            BEYOND THE EXHAUST.
          </h2>
          <p className="body text-gray-400 mt-6 max-w-xl text-lg mx-auto md:mx-0">
            Grade X applies the same rigorous, compliance-driven methodology to every aspect of your commercial environment. Explore our full suite of services.
          </p>
        </motion.div>

        {/* Interactive Layout */}
        <div className="flex flex-col xl:flex-row gap-12 relative">
          
          {/* Interactive Tabs */}
          <div className="w-full xl:w-1/3 shrink-0">
            <div className="flex flex-col gap-3">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`relative w-full text-left px-6 py-5 rounded-2xl transition-all duration-300 border flex justify-between items-center group overflow-hidden ${
                      isActive 
                        ? 'bg-surface border-primary/30 shadow-[0_0_30px_rgba(59,130,246,0.15)]' 
                        : 'bg-surface/30 border-white/5 hover:bg-surface/60 hover:border-white/10'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeTab" 
                        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" 
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 text-sm md:text-base font-bold tracking-[0.1em] transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {cat.title}
                    </span>
                    <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-primary text-white' : 'bg-white/5 text-transparent group-hover:bg-white/10 group-hover:text-gray-400'}`}>
                       <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </button>
                );
              })}
            </div>
            
            <div className="mt-12 p-8 glass-panel border-l-4 border-l-secondary rounded-2xl">
               <h3 className="text-white font-bold mb-2">Need a custom scope?</h3>
               <p className="text-sm text-gray-400 mb-6">We build tailored cleaning and maintenance packages for multi-site operators.</p>
               <a href="#contact" className="text-secondary font-bold text-sm tracking-widest hover:text-white transition-colors flex items-center gap-2">
                 REQUEST A QUOTE <ArrowUpRight className="w-4 h-4" />
               </a>
            </div>
          </div>

          {/* Interactive Bento Grid */}
          <div className="w-full xl:w-2/3 min-h-[500px]" style={{ perspective: "1000px" }}>
            <AnimatePresence mode="wait">
              {currentCategory && (
                <motion.div
                  key={currentCategory.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full"
                >
                  {currentCategory.services.map((service, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05, y: -10, rotateX: 5, rotateY: -5 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="glass-card p-8 rounded-2xl flex flex-col justify-between group cursor-pointer border border-white/5 hover:border-primary/50 transition-colors shadow-lg hover:shadow-2xl hover:shadow-primary/20"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="transform-gpu" style={{ transform: "translateZ(30px)" }}>
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                        </div>
                        <h4 className="text-xl font-bold text-white mb-3 leading-tight">{service.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                      </div>
                      <div className="mt-8 flex justify-end transform-gpu" style={{ transform: "translateZ(20px)" }}>
                        <span className="text-xs font-mono tracking-widest text-transparent group-hover:text-primary transition-colors">
                          EXPLORE →
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
