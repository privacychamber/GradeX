"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const steps = [
    { num: "01", title: "SITE INSPECTION" },
    { num: "02", title: "GREASE MEASUREMENT" },
    { num: "03", title: "PREPARATION" },
    { num: "04", title: "INTERIOR STEAM WASH" },
    { num: "05", title: "CANOPY CLEANING" },
    { num: "06", title: "FINAL INSPECTION" },
    { num: "07", title: "POST MEASUREMENT" },
    { num: "08", title: "REPORTING" },
  ];

  return (
    <section id="methodology" className="py-32 bg-brand-midnight text-white relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-cyan text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-4">
              THE CLEANING PROCESS
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              A SMARTER CLEAN. <br />
              <span className="text-gray-500">STEP BY STEP.</span>
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-sm text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            OUR PROCESS
            <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Progress Line */}
          <div className="absolute top-[40%] left-0 w-full h-[1px] bg-white/10 -z-10"></div>
          
          <motion.div 
            className="absolute top-[40%] left-0 h-[1px] bg-brand-cyan shadow-[0_0_10px_var(--color-brand-cyan)] -z-10"
            style={{ scaleX: scrollYProgress, originX: 0 }}
          ></motion.div>

          {/* Steps Carousel / Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-4 group"
              >
                {/* Visual Thumbnail Placeholder */}
                <div className="w-full aspect-video bg-brand-dark rounded-sm border border-white/5 overflow-hidden relative group-hover:border-brand-cyan/50 transition-colors">
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
                  {/* Play icon for video placeholder */}
                  {index % 2 === 0 && (
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan transition-colors">
                          <Play size={10} className="ml-0.5 text-white/70 group-hover:text-brand-cyan" fill="currentColor" />
                       </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col">
                  <span className="text-2xl font-light text-brand-cyan mb-1 font-mono">{step.num}</span>
                  <span className="text-xs font-semibold tracking-wide text-gray-300 leading-tight">
                    {step.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
