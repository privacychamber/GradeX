"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FileText, Camera, Video, BarChart } from "lucide-react";

const evidenceItems = [
  { icon: <Camera size={18} />, label: "BEFORE PHOTOS" },
  { icon: <Camera size={18} />, label: "AFTER PHOTOS" },
  { icon: <BarChart size={18} />, label: "GREASE THICKNESS" },
  { icon: <Video size={18} />, label: "VIDEO RECORDING" },
  { icon: <FileText size={18} />, label: "SERVICE REPORT" },
  { icon: <CheckCircle2 size={18} />, label: "COMPLIANCE DOCUMENTATION" },
];

export default function DigitalEvidence() {
  return (
    <section id="evidence" className="w-full bg-white py-24 md:py-32 relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Text */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A1016]"
          >
            See the results.<br/>Prove the difference.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-md leading-relaxed"
          >
            Every clean includes objective measurements, photographic evidence and live video so you have complete documentation for compliance.
          </motion.p>
        </div>

        {/* Right Report UI */}
        <div className="lg:col-span-7 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            className="w-full bg-[#F8FAFC] rounded-2xl border border-gray-200 shadow-xl overflow-hidden p-6 md:p-8 flex flex-col gap-8"
            style={{ perspective: "1000px" }}
          >
            {/* Report Header */}
            <div className="flex justify-between items-start border-b border-gray-200 pb-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">INSPECTION REPORT</span>
                <h3 className="text-2xl font-bold text-[#0A1016]">Post-Service Verification</h3>
              </div>
              <div className="text-right flex flex-col gap-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">ID: GX-8842-A</span>
                <span className="text-xs font-mono text-gray-600">SEP 15, 2026</span>
              </div>
            </div>

            {/* Report Body (Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {evidenceItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i * 0.1) }}
                  className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-lg shadow-sm"
                >
                  <div className="w-8 h-8 rounded bg-blue-50 text-brand-blue flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-700">{item.label}</span>
                  <div className="ml-auto w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-green-600" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Simulated Photo Grid */}
            <div className="grid grid-cols-3 gap-2 mt-2">
              <div className="aspect-square bg-gray-200 rounded animate-pulse"></div>
              <div className="aspect-square bg-gray-200 rounded animate-pulse" style={{ animationDelay: "150ms" }}></div>
              <div className="aspect-square bg-gray-200 rounded animate-pulse" style={{ animationDelay: "300ms" }}></div>
            </div>
            
          </motion.div>
        </div>

      </div>
    </section>
  );
}
