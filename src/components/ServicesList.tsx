import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

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
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToCategory = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full bg-background py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full mix-blend-screen filter blur-[150px] z-0" />

      <div className="container px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 border-b border-white/10 pb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-6">
             <p className="tech-label !text-primary !mb-0 tracking-widest">COMPLETE SERVICES</p>
          </div>
          <h2 className="display-sm leading-tight text-gradient">
            BEYOND THE EXHAUST.
          </h2>
          <p className="body text-gray-400 mt-6 max-w-xl text-lg">
            Grade X applies the same rigorous, compliance-driven methodology to every aspect of your commercial environment.
          </p>
          
        </motion.div>

        {/* Split Screen Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sticky Left Navigation (Desktop) */}
          <div className="hidden lg:block w-1/3 shrink-0">
            <div className="sticky top-32 flex flex-col gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`text-left text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300 py-3 rounded-xl px-4 ${
                    activeCategory === cat.id 
                      ? 'text-primary bg-primary/10 border border-primary/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]' 
                      : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          {/* Scrolling Right Content */}
          <div className="w-full lg:w-2/3 flex flex-col gap-32">
            {CATEGORIES.map((cat, index) => (
              <article 
                key={cat.id} 
                id={cat.id}
                ref={(el) => { sectionRefs.current[index] = el; }}
                className="scroll-mt-32"
              >
                {/* Mobile Category Header */}
                <h3 className="lg:hidden tech-label text-primary mb-8 border-b border-white/10 pb-4">
                  {cat.title}
                </h3>
                
                <div className="flex flex-col gap-4">
                  {cat.services.map((service, sIndex) => (
                    <motion.div 
                      key={sIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.5, delay: sIndex * 0.1 }}
                      className="group glass-card overflow-hidden relative cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-full group-hover:translate-x-full" />
                      
                      <div className="flex justify-between items-center gap-8 relative z-10">
                        <div>
                          <h4 className="text-xl md:text-2xl font-bold text-gray-200 mb-2 group-hover:text-white transition-colors flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:shadow-[0_0_10px_rgba(59,130,246,1)] transition-all" />
                            {service.title}
                          </h4>
                          <p className="body text-gray-400/80 max-w-md pl-4">
                            {service.desc}
                          </p>
                        </div>
                        
                        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">
                           <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
