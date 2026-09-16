"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const processStages = [
  {
    num: "01",
    title: "INSPECT & MEASURE",
    desc: "We begin every job with precise, objective measurements.",
    image: "https://images.unsplash.com/photo-1590496839352-87002bdfad5d?auto=format&fit=crop&q=80&w=1200",
    steps: [
      "1. Site inspection and assessment",
      "2. Grease thickness measurement and documentation"
    ]
  },
  {
    num: "02",
    title: "CLEAN & EXTRACT",
    desc: "Advanced robotic and steam technology for a deeper clean.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=1200",
    steps: [
      "3. Preparation and protection of the work area",
      "4. Interior steam washing and deep cleaning",
      "5. Canopy, ductwork, and accessible component cleaning"
    ]
  },
  {
    num: "03",
    title: "VERIFY RESULTS",
    desc: "We don't guess. We verify the reduction in grease thickness.",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200",
    steps: [
      "6. Final inspection and quality control",
      "7. Post-cleaning grease measurement"
    ]
  },
  {
    num: "04",
    title: "REPORT & COMPLY",
    desc: "Complete documentation for your compliance requirements.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
    steps: [
      "8. Detailed reporting and client documentation"
    ]
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} id="process" className="w-full bg-[#050A10] text-white relative">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Background Image Track */}
        <div className="absolute inset-0 w-[400vw] h-full flex pointer-events-none">
          {processStages.map((stage, i) => {
            const bgOpacityMap = [
              { in: [0, 0.25, 1], out: [1, 0, 0] },
              { in: [0, 0.25, 0.5, 1], out: [0, 1, 0, 0] },
              { in: [0, 0.25, 0.5, 0.75, 1], out: [0, 0, 1, 0, 0] },
              { in: [0, 0.5, 0.75, 1], out: [0, 0, 1, 1] }
            ][i];
            
            const scaleMap = [
              { in: [0, 0.25, 1], out: [1.05, 1, 1] },
              { in: [0, 0.25, 0.5, 1], out: [1.05, 1.05, 1, 1] },
              { in: [0, 0.5, 0.75, 1], out: [1.05, 1.05, 1, 1] },
              { in: [0, 0.75, 1], out: [1.05, 1.05, 1] }
            ][i];
                
            const opacity = useTransform(scrollYProgress, bgOpacityMap.in, bgOpacityMap.out);
            const scale = useTransform(scrollYProgress, scaleMap.in, scaleMap.out);

            return (
              <motion.div 
                key={stage.num}
                className="absolute inset-0 w-full h-full"
                style={{ opacity }}
              >
                <motion.img 
                  src={stage.image}
                  alt={stage.title}
                  style={{ scale }}
                  className="w-full h-full object-cover opacity-30"
                />
              </motion.div>
            );
          })}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050A10] via-[#050A10]/80 to-transparent w-[100vw]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          
          {/* Left: Section Title */}
          <div className="w-full md:w-1/3 flex flex-col gap-4 shrink-0">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
              Advanced cleaning.<br/>
              <span className="text-brand-cyan">Step by step.</span>
            </h2>
            <p className="text-gray-400">
              Our verifiable 8-step methodology guarantees a deeper clean and complete compliance documentation.
            </p>
          </div>

          {/* Right: Stages Content */}
          <div className="w-full md:w-2/3 h-[50vh] relative">
            {processStages.map((stage, i) => {
              const yMap = [
                { in: [0, 0.25, 1], out: [0, -100, -100] },
                { in: [0, 0.25, 0.5, 1], out: [100, 0, -100, -100] },
                { in: [0, 0.25, 0.5, 0.75, 1], out: [100, 100, 0, -100, -100] },
                { in: [0, 0.5, 0.75, 1], out: [100, 100, 0, 0] }
              ][i];
              
              const textOpacityMap = [
                { in: [0, 0.125, 1], out: [1, 0, 0] },
                { in: [0, 0.125, 0.25, 0.375, 1], out: [0, 0, 1, 0, 0] },
                { in: [0, 0.375, 0.5, 0.625, 1], out: [0, 0, 1, 0, 0] },
                { in: [0, 0.625, 0.75, 1], out: [0, 0, 1, 1] }
              ][i];
                  
              const y = useTransform(scrollYProgress, yMap.in, yMap.out);
              const opacity = useTransform(scrollYProgress, textOpacityMap.in, textOpacityMap.out);

              return (
                <motion.div 
                  key={stage.num}
                  className="absolute inset-0 flex flex-col justify-center gap-6"
                  style={{ y, opacity }}
                >
                  <span className="text-brand-cyan font-mono text-xl tracking-widest">{stage.num}</span>
                  <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight">{stage.title}</h3>
                  <p className="text-gray-300 text-lg max-w-md leading-relaxed">
                    {stage.desc}
                  </p>
                  
                  {/* Detailed 8-step methodology injection */}
                  <div className="mt-4 flex flex-col gap-2 border-l-2 border-brand-blue/30 pl-4">
                    {stage.steps.map(step => (
                      <span key={step} className="text-sm font-mono text-gray-400 uppercase tracking-wide">
                        {step}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
        
        {/* Progress Bar */}
        <div className="absolute bottom-12 left-0 w-full px-6 md:px-12">
          <div className="max-w-7xl mx-auto h-[2px] bg-white/10 relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-brand-cyan"
              style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
            />
          </div>
        </div>

      </div>

      {/* Spacer to allow scrolling */}
      <div className="h-[400vh]"></div>
    </section>
  );
}
