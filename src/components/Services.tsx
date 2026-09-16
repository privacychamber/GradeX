"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const serviceCategories = [
  {
    title: "KITCHEN EXHAUST & HYGIENE",
    image: "https://images.unsplash.com/photo-1590496839352-87002bdfad5d?auto=format&fit=crop&q=80&w=800",
    services: [
      "Kitchen Exhaust Cleaning",
      "Canopy Cleaning",
      "Robotic Exhaust Cleaning Technology",
      "Steam Cleaning",
      "Kitchen Equipment Hygiene"
    ]
  },
  {
    title: "KITCHEN EQUIPMENT CLEANING",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800",
    services: [
      "Grill Recovery",
      "Fryer Vat Boil-Outs",
      "Shake Machine Cleaning",
      "Cool Room Cleaning",
      "Nightly Kitchen Maintenance",
      "Monthly Kitchen Deep Cleaning"
    ]
  },
  {
    title: "LOBBY & FRONT-OF-HOUSE",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    services: [
      "Lobby Cleaning",
      "Monthly Lobby Deep Cleaning",
      "Play Place Cleaning"
    ]
  },
  {
    title: "EXTERIOR & GENERAL",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    services: [
      "Floor Detailing & Scrubbing",
      "Exterior High-Pressure Washing",
      "Building & Drive-Thru Pressure Cleaning",
      "Window Cleaning",
      "Line Marking",
      "General Commercial Cleaning",
      "Hygiene & Sanitation Services"
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#071019] py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase drop-shadow-[0_0_8px_rgba(0,229,255,0.3)]"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Complete commercial hygiene solutions.
          </motion.h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col group cursor-pointer hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] hover:border-brand-cyan/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6 relative bg-[#050A10] border border-white/5">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-brand-cyan/10 group-hover:bg-transparent transition-colors duration-500 mix-blend-overlay"></div>
              </div>
              
              {/* Content */}
              <h3 className="text-sm font-bold tracking-widest text-white uppercase mb-4 flex items-center justify-between">
                {category.title}
                <ArrowRight size={14} className="text-brand-cyan opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              
              <ul className="flex flex-col gap-3">
                {category.services.map((service) => (
                  <li key={service} className="text-sm text-gray-400 hover:text-brand-cyan transition-colors flex items-start gap-2">
                    <span className="text-brand-cyan/50 mt-0.5">•</span>
                    {service}
                  </li>
                ))}
              </ul>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
