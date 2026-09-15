"use client";

import { motion } from "framer-motion";
import { ArrowRight, View } from "lucide-react";
import RobotProductCanvas from "./canvas/RobotProductCanvas";

export default function Technology() {
  const callouts = [
    { label: "HIGH-PRESSURE CLEANING", pos: "top-[20%] left-[-5%]" },
    { label: "LIVE CAMERA", pos: "top-[40%] left-[-15%]" },
    { label: "LED LIGHTING", pos: "top-[60%] left-[-5%]" },
    { label: "REMOTE OPERATION", pos: "top-[25%] right-[-10%]" },
    { label: "PRECISION TRACK SYSTEM", pos: "top-[50%] right-[-15%]" },
    { label: "COMPACT ACCESS DESIGN", pos: "top-[75%] right-[-5%]" },
  ];

  return (
    <section id="technology" className="py-32 bg-brand-light text-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-blue text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-4">
              OUR TECHNOLOGY
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              ENGINEERED <br />
              <span className="text-gray-400">FOR REAL RESULTS.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-lg md:text-xl font-light"
          >
            Remote-operated robotic technology combines high-pressure cleaning, live video and precision measurement to deliver a deeper, more consistent clean with minimal disruption.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="flex items-center gap-2 mt-4 px-6 py-3 bg-transparent border-2 border-brand-dark text-brand-dark rounded-sm font-semibold tracking-wide hover:bg-brand-dark hover:text-white transition-all">
              EXPLORE THE TECHNOLOGY
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Robot Visualization */}
        <div className="lg:col-span-7 relative flex items-center justify-center min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-square max-w-[600px] flex items-center justify-center"
          >
            {/* Platform */}
            <div className="absolute bottom-[10%] w-[120%] h-[20%] bg-gradient-to-t from-gray-200 to-white rounded-[100%] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center overflow-hidden">
               {/* Reflections on platform */}
               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 blur-xl"></div>
            </div>

            {/* Interactive 3D Robot Product View */}
            <RobotProductCanvas />

            {/* Technical Callouts */}
            <div className="absolute inset-0 hidden md:block">
              {callouts.map((callout, i) => (
                <motion.div
                  key={callout.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className={`absolute ${callout.pos} flex items-center gap-2`}
                >
                  {callout.pos.includes("left") ? (
                    <>
                      <span className="text-[10px] font-mono font-semibold tracking-widest text-brand-dark whitespace-nowrap bg-white/80 px-2 py-1 rounded shadow-sm border border-gray-100">
                        {callout.label}
                      </span>
                      <div className="w-8 h-[1px] bg-brand-blue"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_var(--color-brand-cyan)]"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_var(--color-brand-cyan)]"></div>
                      <div className="w-8 h-[1px] bg-brand-blue"></div>
                      <span className="text-[10px] font-mono font-semibold tracking-widest text-brand-dark whitespace-nowrap bg-white/80 px-2 py-1 rounded shadow-sm border border-gray-100">
                        {callout.label}
                      </span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>

            {/* 360 View Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute bottom-0 z-20"
            >
              <button className="glass-light text-brand-dark px-6 py-3 rounded-full flex items-center gap-2 font-mono text-xs tracking-widest hover:bg-white transition-colors shadow-lg group">
                <View size={16} className="text-brand-blue group-hover:rotate-180 transition-transform duration-700" />
                360° VIEW
              </button>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
