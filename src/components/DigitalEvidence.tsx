import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Camera, Video, Ruler } from 'lucide-react';

export const DigitalEvidence = () => {
  return (
    <section id="evidence" className="relative w-full py-32 bg-background overflow-hidden border-t border-white/10">
      
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full mix-blend-screen filter blur-[120px] translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="container px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 mb-8">
               <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
               <p className="tech-label !text-secondary !mb-0 tracking-widest">DIGITAL EVIDENCE & REPORTING</p>
            </div>
            
            <h2 className="display-sm leading-tight text-white mb-6">
              DON'T JUST CLEAN IT.<br/>
              <span className="text-secondary">PROVE IT.</span>
            </h2>
            
            <p className="body text-gray-300 text-lg mb-8">
              True compliance requires verification. We provide objective, undeniable proof that your systems have been returned to a safe, bare-metal state, protecting you from liability and ensuring your insurance remains valid.
            </p>

            <ul className="flex flex-col gap-6">
              <li className="flex gap-4 items-start">
                <div className="mt-1 w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0 border border-white/10">
                  <Ruler className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Digital Grease Thickness Gauge</h4>
                  <p className="text-gray-400">Electronic Grasmeter probe provides instant, real-time micron readings before and after service. We don't guess; we measure.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0 border border-white/10">
                  <Video className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Live Video Feeds</h4>
                  <p className="text-gray-400">Our robotic platforms stream live video during the clean itself, ensuring no section of the duct is missed.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="mt-1 w-10 h-10 rounded-lg bg-surface flex items-center justify-center shrink-0 border border-white/10">
                  <Camera className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Photographic Evidence</h4>
                  <p className="text-gray-400">High-definition before and after photography supplied with every completed job.</p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Right Side: Document Visual */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-xl mx-auto"
          >
            <div className="bg-white text-black p-8 shadow-2xl relative border border-gray-300 rounded-lg overflow-hidden transform rotate-2">
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none transform -rotate-45">
                <span className="text-9xl font-bold font-mono tracking-widest">GRADE X</span>
              </div>

              <div className="border-b-2 border-black pb-4 mb-6 flex justify-between items-end">
                <div>
                  <h3 className="font-bold text-2xl tracking-tight leading-none mb-1">COMPLIANCE REPORT</h3>
                  <p className="font-mono text-xs text-gray-500">ID: GX-WA-8409</p>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg tracking-widest">GRADE X</div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold border-b border-gray-300 pb-1 mb-3 text-sm tracking-wider">GREASE THICKNESS (GRASMETER)</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 border border-red-200">
                    <span className="text-[10px] font-bold text-red-600 block mb-1">BEFORE (CRITICAL)</span>
                    <span className="text-2xl font-mono font-bold text-red-600">4.2mm</span>
                  </div>
                  <div className="bg-blue-50 p-4 border border-blue-200">
                    <span className="text-[10px] font-bold text-blue-600 block mb-1">AFTER (BARE METAL)</span>
                    <span className="text-2xl font-mono font-bold text-blue-600">0.0mm</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold border-b border-gray-300 pb-1 mb-3 text-sm tracking-wider">PHOTOGRAPHIC EVIDENCE</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <span className="font-mono text-[10px] text-gray-500">PRE-CLEAN SCAN</span>
                  </div>
                  <div className="aspect-video bg-gray-200 flex items-center justify-center relative">
                    <span className="font-mono text-[10px] text-gray-500">POST-CLEAN VERIFICATION</span>
                    <div className="absolute top-1 right-1 bg-blue-600 text-white text-[8px] px-1 font-bold rounded-sm">VERIFIED</div>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-6 border-t-2 border-black flex justify-between items-end">
                <div className="font-mono text-[10px] text-gray-500 flex items-center gap-2">
                  <FileText className="w-3 h-3" />
                  AS 1851-2012 COMPLIANT
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] text-gray-500 mb-1">INSPECTOR SIGNATURE</p>
                  <div className="w-32 h-6 border-b border-black"></div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

