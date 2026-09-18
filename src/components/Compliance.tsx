import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck } from 'lucide-react';

const COMPLIANCE_ITEMS = [
  { title: 'Public Liability Insurance', tag: 'VERIFIED' },
  { title: 'Workers Compensation Insurance', tag: 'ACTIVE' },
  { title: 'Food-safe cleaning practices', tag: 'STANDARD' },
  { title: 'WHS compliance', tag: 'MANDATORY' },
  { title: 'Safe work practices', tag: 'STANDARD' },
  { title: 'SWMS (Safe Work Method Statements)', tag: 'DOCUMENTED' },
  { title: 'Site-specific safety procedures where required', tag: 'ENFORCED' },
  { title: 'Quality inspections', tag: 'ROUTINE' },
  { title: 'Service records', tag: 'ARCHIVED' },
  { title: 'Continuous improvement', tag: 'ONGOING' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const Compliance = () => {
  return (
    <section className="relative w-full bg-background py-32 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-blue-900/10 via-background to-background" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-[100px] -translate-y-1/2 -translate-x-1/2 z-0" />
      
      <div className="container relative z-10">

        {/* Editorial Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 mb-6">
             <ShieldCheck className="w-4 h-4 text-primary" />
             <p className="tech-label !text-primary !mb-0 tracking-widest">COMPLIANCE & WHS</p>
          </div>
          <h2 className="display leading-tight text-gradient max-w-4xl">
            FULLY DOCUMENTED.<br />
            BUILT FOR COMPLIANCE.
          </h2>
        </motion.div>

        {/* Legal Ledger Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 glass-panel p-8 md:p-12"
        >
          {COMPLIANCE_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex justify-between items-center p-6 rounded-2xl bg-surfaceHover/30 border border-white/5 hover:border-white/10 hover:bg-surfaceHover/80 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-background border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                   <FileCheck className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-gray-300 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
              </div>
              <span className="font-mono text-xs md:text-sm text-gray-500 group-hover:text-primaryGlow transition-colors tracking-widest shrink-0 ml-4 px-3 py-1 bg-background rounded-full border border-white/5">
                {item.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Standard Disclaimer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10 flex justify-between items-start flex-col md:flex-row gap-6"
        >
          <p className="font-mono text-sm text-gray-400 max-w-2xl leading-relaxed">
            Grade X maintains strict adherence to occupational health and safety standards. All insurance certificates, SWMS, and site-specific risk assessments are securely documented and available upon request prior to commencement of works.
          </p>
          <div className="font-mono text-xs text-primaryGlow/70 shrink-0 border border-primary/20 px-4 py-2 rounded-full bg-primary/5">
            [OPERATIONAL REGISTRY OPEN]
          </div>
        </motion.div>

      </div>
    </section>
  );
};
