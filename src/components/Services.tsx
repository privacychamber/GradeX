"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import React, { useRef } from "react";

function ServiceCard({ category, idx }: { category: any, idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative flex flex-col h-full bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-500 cursor-pointer"
    >
      {/* Image Header placeholder */}
      <div className={`h-48 ${category.image} relative overflow-hidden`}>
        <motion.div 
          className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4wNSIgbnVtT2N0YXZlcz0iNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIyMDAlIiBoZWlnaHQ9IjIwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')]"
          style={{ scale: 1.1 }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <h3 className="absolute bottom-4 left-6 right-6 text-white text-xl font-bold tracking-tight transform group-hover:translate-x-2 transition-transform duration-300">
          {category.title}
        </h3>
      </div>
      
      <div className="p-6 flex-grow flex flex-col relative z-10 bg-white">
        <ul className="flex flex-col gap-3 mb-6">
          {category.services.map((service: string) => (
            <li key={service} className="flex items-start gap-2 text-sm text-gray-600">
              <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
              {service}
            </li>
          ))}
        </ul>
        
        <div className="mt-auto w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-brand-blue group-hover:border-brand-blue group-hover:text-white transition-colors self-end transform group-hover:translate-x-2 duration-300">
          <ArrowRight size={18} />
        </div>
      </div>
      
      {/* Glossy reflection on hover */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
    </motion.div>
  );
}

export default function Services() {
  const categories = [
    {
      title: "Kitchen Exhaust & Hygiene",
      image: "bg-gray-800",
      services: [
        "Kitchen Exhaust Cleaning",
        "Canopy Cleaning",
        "Robotic Exhaust Cleaning Technology",
        "Steam Cleaning",
        "Kitchen Equipment Hygiene",
        "Hygiene & Sanitation Services",
      ],
    },
    {
      title: "Kitchen Equipment Cleaning",
      image: "bg-gray-700",
      services: [
        "Grill Recovery",
        "Fryer Vat Boil-Outs",
        "Shake Machine Cleaning",
        "Cool Room Cleaning",
        "Nightly Kitchen Maintenance",
        "Monthly Kitchen Deep Cleaning",
      ],
    },
    {
      title: "Lobby & Front of House",
      image: "bg-gray-800",
      services: [
        "Lobby Cleaning",
        "Monthly Lobby Deep Cleaning",
        "Play Place Floor Detailing",
        "Floor Scrubbing",
      ],
    },
    {
      title: "Exterior & General Commercial",
      image: "bg-gray-700",
      services: [
        "Exterior High-Pressure Washing",
        "Building & Drive-Thru Pressure Cleaning",
        "Window Cleaning",
        "Line Marking",
        "General Commercial Cleaning",
      ],
    },
  ];

  return (
    <section id="services" className="py-32 bg-brand-light text-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-brand-blue text-xs font-mono font-semibold tracking-[0.2em] uppercase mb-4">
              OUR SERVICES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
              COMPLETE COMMERCIAL <br />
              <span className="text-gray-400">KITCHEN SOLUTIONS.</span>
            </h2>
          </motion.div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 text-brand-blue font-semibold hover:text-brand-dark transition-colors"
          >
            VIEW ALL SERVICES
            <ArrowRight size={18} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, idx) => (
            <ServiceCard key={category.title} category={category} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
