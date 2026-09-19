import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bot, Video, FileCheck } from 'lucide-react';

const STEPS = [
  {
    num: '01',
    title: 'Inspect & Assess',
    desc: 'Detailed site inspection, risk assessment, and precise grease thickness measurements using our proprietary Grasmeter.',
    icon: <Search className="w-8 h-8 text-navy" />
  },
  {
    num: '02',
    title: 'Deploy Robot',
    desc: 'Deployment of specialized remote cleaning units into the ductwork, utilizing high-pressure steam to eradicate buildup.',
    icon: <Bot className="w-8 h-8 text-navy" />
  },
  {
    num: '03',
    title: 'Live Video Verification',
    desc: 'Real-time monitoring and visual confirmation as the system strips carbonized grease back to bare metal.',
    icon: <Video className="w-8 h-8 text-navy" />
  },
  {
    num: '04',
    title: 'Compliance Report',
    desc: 'Delivery of a comprehensive operational report, including before/after evidence and necessary certification.',
    icon: <FileCheck className="w-8 h-8 text-navy" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const Process = () => {
  return (
    <section id="process" className="relative w-full bg-warm-white py-24 md:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full mix-blend-screen filter blur-[150px] -translate-y-1/2 -translate-x-1/2 z-0 pointer-events-none" />

      <div className="container px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="mb-20 text-center flex flex-col items-center">
          <p className="tech-label text-primary tracking-[0.2em] mb-4">OUR PROCESS</p>
          <h2 className="display-sm leading-tight text-navy max-w-3xl">
            TECHNOLOGY DRIVEN. TRUSTED RESULTS.
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {STEPS.map((step, idx) => (
            <motion.div 
              key={step.num}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center group cursor-pointer p-6 rounded-3xl hover:bg-navy/5 border border-transparent hover:border-navy/10"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative mb-8 transform-gpu" style={{ transform: "translateZ(30px)" }}>
                <div className="w-24 h-24 rounded-[2rem] bg-muted-grey border border-navy/10 flex items-center justify-center relative z-10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] group-hover:rotate-6">
                  {step.icon}
                </div>
                <div className="absolute -inset-4 bg-primary/20 filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </div>
              
              <h3 className="text-4xl font-black text-navy/20 mb-4 group-hover:text-primary transition-colors transform-gpu" style={{ transform: "translateZ(20px)" }}>
                {step.num}
              </h3>
              
              <h4 className="text-xl font-bold text-navy mb-3 transform-gpu" style={{ transform: "translateZ(25px)" }}>
                {step.title}
              </h4>
              
              <p className="text-sm text-dark-grey leading-relaxed max-w-xs transform-gpu" style={{ transform: "translateZ(10px)" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

