import React from 'react';
import { motion } from 'framer-motion';

const STAGES = [
  {
    id: 'INSPECT',
    title: 'INSPECT',
    color: 'text-primary',
    bgColor: 'bg-primary',
    borderColor: 'border-primary',
    steps: [
      { num: '01', text: 'Site inspection and assessment' }
    ]
  },
  {
    id: 'MEASURE',
    title: 'MEASURE',
    color: 'text-secondary',
    bgColor: 'bg-secondary',
    borderColor: 'border-secondary',
    steps: [
      { num: '02', text: 'Grease thickness measurement and documentation' }
    ]
  },
  {
    id: 'CLEAN',
    title: 'CLEAN',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400',
    borderColor: 'border-blue-400',
    steps: [
      { num: '03', text: 'Preparation and protection of the work area' },
      { num: '04', text: 'Interior steam washing and deep cleaning of the kitchen exhaust system' },
      { num: '05', text: 'Canopy, ductwork, and accessible exhaust component cleaning' }
    ]
  },
  {
    id: 'VERIFY',
    title: 'VERIFY',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400',
    borderColor: 'border-purple-400',
    steps: [
      { num: '06', text: 'Final inspection and quality control' },
      { num: '07', text: 'Post-cleaning grease measurement' },
      { num: '08', text: 'Detailed reporting and client documentation' }
    ]
  }
];

export const Process = () => {
  return (
    <section id="process" className="relative w-full bg-surface py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full mix-blend-screen filter blur-[150px] -translate-y-1/2 -translate-x-1/2 z-0" />

      <div className="container px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="mb-24 max-w-2xl">
          <p className="tech-label text-primary mb-4">OUR METHODOLOGY</p>
          <h2 className="display-sm leading-tight text-white mb-6">
            EIGHT STEPS.<br/>
            NOTHING SKIPPED.
          </h2>
          <p className="body text-gray-400 text-lg">
            We operate on a strict, repeatable methodology. From the initial measurement to the final compliance report, every step is designed to guarantee fire safety and verifiable cleanliness.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          
          {/* Continuous Vertical Line */}
          <div className="absolute left-[27px] md:left-[39px] top-0 bottom-0 w-0.5 bg-white/5" />

          <div className="flex flex-col gap-16">
            {STAGES.map((stage, sIndex) => (
              <div key={stage.id} className="relative flex flex-col md:flex-row gap-8 md:gap-16">
                
                {/* Stage Header (Mobile & Desktop) */}
                <div className="md:w-48 shrink-0 flex items-start gap-6 md:gap-8 relative z-10">
                  <div className={`w-14 h-14 md:w-20 md:h-20 rounded-2xl bg-background flex items-center justify-center border-2 shadow-lg ${stage.borderColor} shrink-0`}>
                    <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${stage.bgColor} animate-pulse`} />
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-bold tracking-widest mt-3 md:mt-5 ${stage.color}`}>
                    {stage.title}
                  </h3>
                </div>

                {/* Steps List */}
                <div className="flex-1 flex flex-col gap-6 pt-2 md:pt-6 pl-20 md:pl-0">
                  {stage.steps.map((step, iIndex) => (
                    <motion.div 
                      key={step.num}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.5, delay: iIndex * 0.1 }}
                      className="glass-panel p-6 rounded-xl flex gap-6 items-start hover:bg-white/5 transition-colors border border-white/5 hover:border-white/10"
                    >
                      <span className={`text-xl font-mono font-bold mt-0.5 shrink-0 ${stage.color}`}>{step.num} //</span>
                      <p className="text-lg text-gray-300 font-medium leading-relaxed">
                        {step.text}
                      </p>
                    </motion.div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

