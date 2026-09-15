"use client";

import { useRef, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Methodology() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const steps = [
    { num: "01", title: "SITE INSPECTION" },
    { num: "02", title: "GREASE MEASUREMENT" },
    { num: "03", title: "PREPARATION" },
    { num: "04", title: "INTERIOR STEAM WASH" },
    { num: "05", title: "CANOPY CLEANING" },
    { num: "06", title: "FINAL INSPECTION" },
    { num: "07", title: "POST MEASUREMENT" },
    { num: "08", title: "REPORTING" },
  ];

  useEffect(() => {
    if (!containerRef.current || !scrollWrapperRef.current || !progressBarRef.current) return;

    const ctx = gsap.context(() => {
      // Pin the methodology section and scroll the contents horizontally
      const scrollWidth = scrollWrapperRef.current!.scrollWidth - window.innerWidth + 100;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollWidth}`,
          scrub: 1,
          pin: true,
        }
      });

      // Move the container horizontally
      tl.to(scrollWrapperRef.current, {
        x: -scrollWidth,
        ease: "none",
      }, 0);

      // Grow the progress bar matching the horizontal scroll
      tl.to(progressBarRef.current, {
        scaleX: 1,
        ease: "none",
      }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="methodology" className="bg-brand-midnight text-white relative h-screen flex flex-col justify-center overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full mb-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <p className="text-brand-cyan text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-4">
              THE CLEANING PROCESS
            </p>
            <h2 className="text-5xl md:text-6xl font-display font-bold tracking-tighter leading-tight text-balance">
              A SMARTER CLEAN. <br />
              <span className="text-gray-500">STEP BY STEP.</span>
            </h2>
          </div>

          <button
            className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-sm text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            OUR PROCESS
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Horizontal Timeline Wrapper */}
      <div className="relative pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2))]">
        {/* Progress Line Background */}
        <div className="absolute top-[40%] left-0 w-[200vw] h-[1px] bg-white/10 -z-10"></div>
        
        {/* Active Progress Line */}
        <div 
          ref={progressBarRef}
          className="absolute top-[40%] left-0 w-[200vw] h-[1px] bg-brand-cyan shadow-[0_0_10px_var(--color-brand-cyan)] -z-10 origin-left scale-x-0"
        ></div>

        {/* Steps Container */}
        <div ref={scrollWrapperRef} className="flex gap-12 w-max pr-32">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className="flex flex-col gap-6 group w-[320px] shrink-0"
            >
              {/* Visual Thumbnail Placeholder */}
              <div className="w-full aspect-video bg-brand-dark rounded-sm border border-white/5 overflow-hidden relative group-hover:border-brand-cyan/50 transition-colors">
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"></div>
                {/* Play icon for video placeholder */}
                {index % 2 === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:bg-brand-cyan/20 group-hover:border-brand-cyan transition-colors">
                        <Play size={10} className="ml-0.5 text-white/70 group-hover:text-brand-cyan" fill="currentColor" />
                     </div>
                  </div>
                )}
              </div>

              <div className="flex flex-col">
                <span className="text-3xl font-light text-brand-cyan mb-2 font-mono drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]">{step.num}</span>
                <span className="text-sm font-semibold tracking-wider text-gray-200 leading-tight">
                  {step.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
