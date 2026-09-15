"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Download } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DigitalEvidence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dashboardRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const beforeVideoRef = useRef<HTMLDivElement>(null);
  const afterVideoRef = useRef<HTMLDivElement>(null);
  const measurementRef = useRef<HTMLDivElement>(null);
  const checklistRef = useRef<HTMLDivElement>(null);
  const scanRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "+=500",
          scrub: 1, // Smooth scrolling animation
        }
      });

      // 1. Dashboard frame appears
      tl.fromTo(dashboardRef.current, 
        { opacity: 0, scale: 0.95, rotateX: 10 },
        { opacity: 1, scale: 1, rotateX: 0, duration: 1 }
      );
      
      // 2. Panels slide into place (Left column)
      tl.fromTo(panelRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8 },
        "-=0.5"
      );

      // 3. Before image appears
      tl.fromTo(beforeVideoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "-=0.3"
      );

      // 4. After image appears
      tl.fromTo(afterVideoRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "-=0.2"
      );

      // 5. Measurement interface activates
      tl.fromTo(measurementRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );

      // 6. Video/Scan window activates
      tl.fromTo(scanRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      );

      // 7 & 8. Checklist / Compliance documentation appears
      tl.fromTo(checklistRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="evidence" ref={containerRef} className="py-32 bg-brand-light text-brand-dark relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-steel/30 to-transparent -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-blue text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-4">
              THE REAL EVIDENCE
            </p>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight">
              SEE THE RESULTS. <br />
              <span className="text-gray-400">PROVE THE DIFFERENCE.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-lg font-light"
          >
            Every clean includes objective measurements, full photographic evidence and live video — so you have complete visibility and documentation for compliance.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4"
          >
            <button className="flex items-center gap-2 px-6 py-3 bg-brand-blue text-white rounded-sm font-semibold tracking-wide hover:bg-blue-600 transition-all shadow-lg">
              VIEW A SAMPLE REPORT
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>

        {/* Dashboard Interface */}
        <div className="lg:col-span-7 relative">
          <div
            ref={dashboardRef}
            className="w-full bg-white rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative z-10 perspective-1000"
          >
            {/* Dashboard Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
              <div className="flex items-center gap-3">
                 <div className="text-xl font-bold tracking-tighter text-brand-midnight">
                   GRADE <span className="text-brand-blue">X</span>
                 </div>
                 <div className="h-4 w-[1px] bg-gray-300"></div>
                 <span className="text-xs font-mono text-gray-500">INSPECTION REPORT</span>
              </div>
              <button className="flex items-center gap-2 text-xs font-semibold text-brand-blue bg-brand-blue/10 px-3 py-1.5 rounded-full hover:bg-brand-blue/20 transition-colors">
                <Download size={14} />
                DOWNLOAD PDF
              </button>
            </div>

            {/* Dashboard Body */}
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgwLCAwLCAwLCAwLjAxKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]">
               
               {/* Left Column Data */}
               <div ref={panelRef} className="flex flex-col gap-6">
                 <div>
                   <p className="text-xs text-gray-400 font-mono mb-1">LOCATION</p>
                   <p className="text-sm font-semibold text-brand-dark">[CLIENT LOCATION PLACEHOLDER]</p>
                 </div>
                 <div>
                   <p className="text-xs text-gray-400 font-mono mb-1">DATE</p>
                   <p className="text-sm font-semibold text-brand-dark">[DATE PLACEHOLDER]</p>
                 </div>
                 
                 <div ref={measurementRef} className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
                   <p className="text-[10px] text-gray-500 font-mono mb-2 uppercase">Grease Thickness</p>
                   <div className="flex items-end gap-3">
                     <span className="text-2xl font-mono font-medium text-brand-dark line-through opacity-50">184 μm</span>
                     <ArrowRight size={16} className="text-gray-400 mb-1.5" />
                     <span className="text-3xl font-mono font-bold text-green-600">21 μm</span>
                     <span className="ml-auto bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-widest">
                       Compliant
                     </span>
                   </div>
                 </div>

                 <div ref={checklistRef} className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span className="text-xs font-medium text-gray-600">Video Recording Completed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span className="text-xs font-medium text-gray-600">Before & After Photos Attached</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span className="text-xs font-medium text-gray-600">Compliance Report Generated</span>
                    </div>
                 </div>
               </div>

               {/* Right Column Visuals */}
               <div className="flex flex-col gap-4">
                  {/* Before/After Video Thumbnails */}
                  <div className="grid grid-cols-2 gap-2">
                     <div ref={beforeVideoRef} className="relative aspect-video bg-gray-800 rounded overflow-hidden group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4wNSIgbnVtT2N0YXZlcz0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')]"></div>
                        <span className="absolute bottom-2 left-2 z-20 text-[10px] font-mono text-white/80">BEFORE</span>
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors">
                            <Play size={12} className="text-white ml-0.5" fill="currentColor" />
                          </div>
                        </div>
                     </div>
                     <div ref={afterVideoRef} className="relative aspect-video bg-gray-600 rounded overflow-hidden group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <span className="absolute bottom-2 left-2 z-20 text-[10px] font-mono text-white/80">AFTER</span>
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors">
                            <Play size={12} className="text-white ml-0.5" fill="currentColor" />
                          </div>
                        </div>
                     </div>
                  </div>

                  {/* 3D Scan View Placeholder */}
                  <div ref={scanRef} className="relative h-[160px] bg-gradient-to-br from-brand-midnight to-brand-dark rounded overflow-hidden border border-gray-200">
                     <div className="absolute top-2 left-2 z-10 text-[10px] font-mono text-white/50">3D SCAN VIEW</div>
                     {/* Abstract representation of 3D heat map */}
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[80%] h-[60%] rounded-[50%] blur-xl opacity-60 bg-gradient-to-r from-green-500 via-yellow-400 to-red-500"></div>
                     </div>
                     <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgTCAxMCA1IE0gNSAwIEwgNSAxMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] mix-blend-overlay"></div>
                  </div>
               </div>

            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-cyan/10 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
}
