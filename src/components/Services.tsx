"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "ROBOTIC EXHAUST CLEANING",
    desc: "Our core service. Precision robotic cleaning reaching deep into exhaust systems for a total clean.",
  },
  {
    title: "CANOPY & FILTER CLEANING",
    desc: "Complete degreasing and sanitisation of commercial extraction canopies and baffle filters.",
  },
  {
    title: "DUCTWORK CLEANING",
    desc: "Comprehensive cleaning of general commercial and industrial HVAC ductwork.",
  },
  {
    title: "GENERAL COMMERCIAL CLEANING",
    desc: "Ongoing commercial cleaning and facility maintenance for hospitality and enterprise clients.",
  }
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#F5F7F8] py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A1016]"
          >
            Complete commercial<br/>kitchen solutions.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 leading-relaxed"
          >
            From kitchen exhaust cleaning to broader commercial cleaning, Grade X supports hospitality, facilities and commercial sites across WA.
          </motion.p>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden mb-2 relative">
                 <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/10 transition-colors duration-300"></div>
                 {/* Temporary generic background pattern */}
                 <div className="w-full h-full opacity-20 bg-[radial-gradient(#0A1016_1px,transparent_1px)] [background-size:16px_16px]"></div>
              </div>
              
              <h3 className="text-sm font-bold tracking-widest text-[#0A1016] uppercase leading-tight">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-200">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue flex items-center gap-2 group-hover:gap-4 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
