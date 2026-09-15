"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Activity, CheckCircle2 } from "lucide-react";

export default function Compliance() {
  const cards = [
    { title: "AS/NZS", subtitle: "COMPLIANT", icon: <ShieldCheck size={32} /> },
    { title: "WHS", subtitle: "FOCUSED", icon: <Activity size={32} /> },
    { title: "FOOD-SAFE", subtitle: "PRACTICES", icon: <CheckCircle2 size={32} /> },
    { title: "FULLY", subtitle: "INSURED", icon: <FileText size={32} /> },
  ];

  const documents = [
    "Risk assessments",
    "SWMS",
    "Site-specific safety procedures",
    "Quality inspections",
    "Service documentation",
  ];

  return (
    <section id="compliance" className="py-32 bg-brand-light text-brand-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brand-blue text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-4">
            COMPLIANCE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            FULLY COMPLIANT. <br />
            <span className="text-gray-400">FULLY DOCUMENTED.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-light p-8 rounded-xl border border-gray-200 shadow-xl flex flex-col items-center justify-center text-center gap-4 hover:-translate-y-2 transition-transform duration-500"
            >
              <div className="text-brand-blue mb-2">{card.icon}</div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight">{card.title}</span>
                <span className="text-xs font-mono text-gray-500 tracking-widest">{card.subtitle}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {documents.map((doc, idx) => (
            <span key={idx} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600 shadow-sm flex items-center gap-2">
              <CheckCircle2 size={12} className="text-brand-cyan" />
              {doc}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
