"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section id="case-studies" className="w-full bg-white py-24 md:py-32 relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-16">
        
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0A1016]">
              Grease hides where you can't see it.
            </h2>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Accumulated grease and contaminants create severe fire hazards deep within commercial exhaust systems.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4 md:text-right md:items-end"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-blue">
              We see it.<br/>We clean it.
            </h2>
            <p className="text-gray-600 max-w-md leading-relaxed">
              Our robotic system reaches deep into exhaust structures and delivers measurable, documented results.
            </p>
          </motion.div>
        </div>

        {/* Interactive Slider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-gray-200 rounded-xl overflow-hidden cursor-ew-resize shadow-lg"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={(e) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* AFTER Image (Background) */}
          <div className="absolute inset-0 w-full h-full">
            {/* Using a placeholder for pristine steel */}
            <img 
              src="https://images.unsplash.com/photo-1590496839352-87002bdfad5d?auto=format&fit=crop&q=80&w=2000" 
              alt="Clean Exhaust"
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur px-4 py-2 rounded text-xs font-bold tracking-widest uppercase">
              After
            </div>
          </div>

          {/* BEFORE Image (Foreground Clipped) */}
          <div 
            className="absolute inset-0 w-full h-full border-r-2 border-white"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            {/* Using a placeholder for dirty/industrial area */}
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=2000" 
              alt="Dirty Exhaust"
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded text-xs font-bold tracking-widest uppercase">
              Before
            </div>
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center pointer-events-auto">
              <MoveHorizontal size={20} className="text-gray-900" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
