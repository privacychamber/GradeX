import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const UnseenProblem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dirtyLayerRef = useRef<HTMLDivElement>(null);
  const cleanLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !dirtyLayerRef.current || !cleanLayerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.5,
      },
    });

    tl.fromTo(
      dirtyLayerRef.current,
      { clipPath: 'inset(0 0 100% 0)' },
      { clipPath: 'inset(0 0 0% 0)', ease: 'none' }
    );

    tl.to({}, { duration: 0.2 });

    tl.fromTo(
      cleanLayerRef.current,
      { clipPath: 'inset(0 100% 0 0)' },
      { clipPath: 'inset(0 0% 0 0)', ease: 'none' }
    );
    
    tl.to({}, { duration: 0.2 });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh] bg-background">
      
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Editorial Text Overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center">
          <div className="container grid grid-cols-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-span-8 lg:col-span-6 glass-panel p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full mix-blend-screen filter blur-[80px] -translate-y-1/2 translate-x-1/2" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                  <ShieldAlert className="w-5 h-5 text-secondary" />
                </div>
                <p className="tech-label !text-secondary !mb-0 tracking-widest">
                  THE HIDDEN RISK
                </p>
              </div>
              
              <h2 className="display-sm mb-6 text-gradient leading-[1.1]">
                THE PROBLEM IS WHERE YOU CAN'T SEE IT.
              </h2>
              
              <p className="body text-gray-300 text-lg">
                Out of sight means out of mind. Accumulated grease inside complex ductwork creates extreme fire risks that generic surface cleaning misses. 
              </p>
            </motion.div>
          </div>
        </div>

        {/* Visual Layers */}
        <div className="absolute inset-0 z-0 w-full h-full">
          
          {/* Base Layer: Exterior */}
          <div className="absolute inset-0 w-full h-full bg-surface flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-surfaceHover to-background opacity-80" />
            <div className="text-center opacity-30 z-10">
              <div className="tech-label text-xl mb-2">Pristine Exterior</div>
              <div className="font-mono text-sm">(Base Layer)</div>
            </div>
          </div>

          {/* Layer 2: Accumulated Grease */}
          <div 
            ref={dirtyLayerRef}
            className="absolute inset-0 w-full h-full bg-[#1c1208] flex items-center justify-center border-b-[1px] border-secondary/50"
            style={{ clipPath: 'inset(0 0 100% 0)' }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-[#38200a]/40 to-transparent" />
            <div className="text-center opacity-70 z-10">
              <div className="tech-label text-xl text-secondary mb-2">Accumulated Grease Inside</div>
              <div className="font-mono text-sm text-secondary/70">(Hidden Danger)</div>
            </div>
          </div>

          {/* Layer 3: Restored / Bare Metal */}
          <div 
            ref={cleanLayerRef}
            className="absolute inset-0 w-full h-full bg-slate-900 flex items-center justify-center border-r-[1px] border-primary/50"
            style={{ clipPath: 'inset(0 100% 0 0)' }}
          >
             <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent mix-blend-screen" />
            <div className="text-center opacity-90 z-10">
              <div className="tech-label text-xl text-primaryGlow mb-2 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]">Restored to Bare Metal</div>
              <div className="font-mono text-sm text-primaryGlow/70">(Grade X Cleaned)</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
