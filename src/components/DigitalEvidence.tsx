"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileText, Camera, BarChart } from "lucide-react";

export default function DigitalEvidence() {
  return (
    <section id="evidence" className="w-full bg-[#050A10] py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left: Copy */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="text-xs font-bold tracking-[0.2em] text-brand-cyan uppercase drop-shadow-[0_0_8px_rgba(0,229,255,0.3)]">
            Digital Evidence & Reporting
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.1]">
            See the results.<br/>Prove the difference.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mt-4">
            Every clean includes objective measurements using the <span className="font-bold text-white">Teinnova Grasmeter</span> (digital grease thickness gauge), photographic evidence, and live video so clients have complete, verifiable documentation.
          </p>

          <div className="flex flex-col gap-4 mt-6">
            {[
              { icon: BarChart, text: "Digital grease measurement records (Microns)" },
              { icon: Camera, text: "Before-and-after photographic evidence" },
              { icon: FileText, text: "Comprehensive compliance documentation" },
              { icon: CheckCircle, text: "Recommendations for future maintenance" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 glass-card p-4 rounded-lg shadow-sm border border-white/5"
              >
                <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-brand-cyan" />
                </div>
                <span className="font-semibold text-white text-sm">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Report UI Presentation */}
        <div className="w-full lg:w-1/2">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full glass-card rounded-xl shadow-[0_0_30px_rgba(0,229,255,0.05)] border border-white/10 overflow-hidden relative"
          >
            {/* Header */}
            <div className="border-b border-white/5 p-6 flex justify-between items-center glass-panel">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Service Report #4092</span>
                <span className="text-lg font-bold text-white">Compliance Certificate</span>
              </div>
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 border border-green-500/30">
                <CheckCircle size={12} /> Verified
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col gap-6">
              
              {/* Measurements */}
              <div className="glass-panel p-4 rounded-lg flex justify-between items-center border border-white/5">
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Grease Thickness (Grasmeter)</span>
                  <div className="flex items-end gap-2 mt-1">
                    <span className="text-3xl font-black text-white line-through opacity-40">120µm</span>
                    <span className="text-3xl font-black text-brand-cyan drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">15µm</span>
                  </div>
                </div>
                <div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center shadow-sm">
                  <BarChart className="text-brand-cyan" size={20} />
                </div>
              </div>

              {/* Photos */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Before</span>
                  <div className="w-full aspect-[4/3] bg-[#050A10] rounded-md overflow-hidden relative border border-white/5">
                    <img src="https://images.unsplash.com/photo-1590496839352-87002bdfad5d?auto=format&fit=crop&q=80&w=400" className="object-cover w-full h-full grayscale opacity-70" alt="Before" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-brand-cyan uppercase tracking-wider">After</span>
                  <div className="w-full aspect-[4/3] bg-[#050A10] rounded-md overflow-hidden relative border border-white/5">
                    <img src="https://images.unsplash.com/photo-1590496839352-87002bdfad5d?auto=format&fit=crop&q=80&w=400" className="object-cover w-full h-full" alt="After" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
