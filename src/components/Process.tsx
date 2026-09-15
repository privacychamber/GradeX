"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "INSPECT",
    desc: "Live camera inspection identifies buildup and problem areas.",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "02",
    title: "CLEAN",
    desc: "High-pressure robotic cleaning removes grease and contaminants.",
    img: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "03",
    title: "VERIFY",
    desc: "Post-cleaning measurements ensure the job is done right.",
    img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=800"
  },
  {
    num: "04",
    title: "REPORT",
    desc: "Full photographic and video reports document the work.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  }
];

export default function Process() {
  return (
    <section id="process" className="w-full bg-[#071019] py-24 md:py-32 relative text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Advanced cleaning.<br/>Step by step.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-md leading-relaxed"
          >
            A smarter, safer and more efficient way to clean commercial kitchen exhaust systems.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-[120px] left-0 w-full h-[1px] bg-white/10 z-0"></div>

          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex flex-col gap-6 relative z-10"
            >
              {/* Image Thumbnail */}
              <div className="w-full aspect-[4/3] rounded-lg overflow-hidden bg-white/5 border border-white/10 relative group">
                <img 
                  src={step.img} 
                  alt={step.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071019]/80 to-transparent"></div>
              </div>

              {/* Node / Number */}
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center text-xs font-bold shrink-0 shadow-[0_0_15px_rgba(10,83,228,0.3)]">
                  {step.num}
                </div>
                <div className="h-[1px] flex-1 bg-white/10 lg:hidden"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold tracking-wide">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed pr-4">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
