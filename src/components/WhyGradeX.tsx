"use client";

import { motion } from "framer-motion";

export default function WhyGradeX() {
  const stats = [
    { num: "100+", label: "SITES SERVICED" },
    { num: "24/7", label: "EMERGENCY RESPONSE" },
    { num: "WA", label: "WIDE SERVICE" },
    { num: "ROBOTIC", label: "EXHAUST CLEANING" },
  ];

  return (
    <section className="py-32 bg-brand-midnight text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-cyan text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-4">
              WHY GRADE X
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              TECHNOLOGY <br />
              <span className="text-gray-500">THAT GIVES YOU PROOF.</span>
            </h2>
          </motion.div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col border-l border-white/10 pl-6"
              >
                <span className="text-4xl md:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 mb-2">
                  {stat.num}
                </span>
                <span className="text-xs font-mono tracking-widest text-brand-cyan">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
