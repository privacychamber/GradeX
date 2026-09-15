"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, FileText, Activity, CheckCircle2, X } from "lucide-react";

function ComplianceCard({ card, idx }: { card: any, idx: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ layout: { duration: 0.4, type: "spring", bounce: 0.2 }, opacity: { duration: 0.5, delay: idx * 0.1 } }}
      onClick={() => setIsOpen(!isOpen)}
      className={`glass-light rounded-xl border border-gray-200 shadow-xl flex flex-col items-center justify-center text-center gap-4 cursor-pointer overflow-hidden transition-all duration-300 ${isOpen ? 'col-span-2 row-span-2 p-8 bg-white z-10' : 'p-8 hover:-translate-y-2'}`}
    >
      <motion.div layout className="text-brand-blue mb-2">
        {card.icon}
      </motion.div>
      <motion.div layout className="flex flex-col">
        <span className="font-bold text-xl tracking-tight">{card.title}</span>
        <span className="text-xs font-mono text-gray-500 tracking-widest">{card.subtitle}</span>
      </motion.div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 text-left"
          >
            <p className="text-sm text-gray-600 mb-2 font-light text-center">{card.details}</p>
            {card.docs.map((doc: string, i: number) => (
              <motion.div 
                key={doc}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-md border border-gray-100"
              >
                <div className="relative">
                  <CheckCircle2 size={16} className="text-green-500/30" />
                  <motion.div 
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: 1 }} 
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                    className="absolute inset-0 text-green-500"
                  >
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <motion.polyline points="20 6 9 17 4 12" />
                     </svg>
                  </motion.div>
                </div>
                <span className="text-xs font-semibold text-gray-700">{doc}</span>
              </motion.div>
            ))}
            <button className="mt-4 mx-auto w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Compliance() {
  const cards = [
    { 
      title: "AS/NZS", 
      subtitle: "COMPLIANT", 
      icon: <ShieldCheck size={32} />,
      details: "Full compliance with Australian Standards for commercial kitchen exhaust systems.",
      docs: ["Certificate of Compliance [PLACEHOLDER]", "Detailed Service Record"]
    },
    { 
      title: "WHS", 
      subtitle: "FOCUSED", 
      icon: <Activity size={32} />,
      details: "Strict adherence to workplace health and safety protocols on every job.",
      docs: ["Risk Assessments", "SWMS Documentation", "Site-specific safety procedures"]
    },
    { 
      title: "FOOD-SAFE", 
      subtitle: "PRACTICES", 
      icon: <CheckCircle2 size={32} />,
      details: "Chemicals and procedures approved for commercial food preparation environments.",
      docs: ["Food-safe cleaning certification", "Ongoing quality inspections"]
    },
    { 
      title: "FULLY", 
      subtitle: "INSURED", 
      icon: <FileText size={32} />,
      details: "Comprehensive coverage for complete peace of mind.",
      docs: ["Public Liability Insurance [PLACEHOLDER]", "Workers Compensation [PLACEHOLDER]"]
    },
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
            <ComplianceCard key={idx} card={card} idx={idx} />
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
