"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const blocks = [
  {
    title: "PUBLIC LIABILITY & WORKCOVER",
    desc: "Comprehensive public liability and workers compensation insurance for total site peace of mind."
  },
  {
    title: "WHS COMPLIANT & SWMS",
    desc: "Rigorous safe work practices, risk assessments, and site-specific Safe Work Method Statements."
  },
  {
    title: "FOOD-SAFE PRACTICES",
    desc: "Utilising approved, food-safe cleaning compounds designed specifically for commercial kitchen environments."
  },
  {
    title: "CONTINUOUS IMPROVEMENT",
    desc: "Procedures designed around recognised industry standards with ongoing quality inspections."
  }
];

export default function TrustCompliance() {
  return (
    <section id="compliance" className="w-full bg-white py-24 md:py-32 relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16 text-center md:text-left">
        
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A1016]"
          >
            Fully compliant.<br/>Fully documented.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 leading-relaxed mx-auto md:mx-0"
          >
            We operate with a strong focus on ISO-level standards, safety, hygiene, compliance and quality control documentation.
          </motion.p>
        </div>

        {/* 4 Proof Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {blocks.map((block, i) => (
            <motion.div 
              key={block.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4 p-8 bg-[#F5F7F8] rounded-xl border border-gray-100"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                <CheckCircle size={20} className="text-brand-blue" />
              </div>
              <h3 className="text-[11px] font-bold tracking-widest text-[#0A1016] uppercase mt-2 leading-relaxed">
                {block.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {block.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
