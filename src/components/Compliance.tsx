import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileCheck, ExternalLink } from 'lucide-react';

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
    <section id="compliance" className="relative w-full bg-warm-white py-32 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-muted-grey via-warm-white to-warm-white" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-[100px] -translate-y-1/2 -translate-x-1/2 z-0 pointer-events-none" />
      
      <div className="container relative z-10 px-6 md:px-12 lg:px-24">

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
          <h2 className="display leading-tight text-navy max-w-4xl">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-4"
          style={{ perspective: "1000px" }}
        >
          {COMPLIANCE_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="flex justify-between items-center p-6 rounded-2xl bg-white/80 border border-navy/5 hover:border-primary/50 hover:bg-muted-grey transition-all duration-300 group cursor-pointer shadow-[0_0_0_rgba(212,175,55,0)] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] relative overflow-hidden"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-4 relative z-10 transform-gpu" style={{ transform: "translateZ(20px)" }}>
                <div className="w-10 h-10 rounded-full bg-warm-white border border-navy/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                   <FileCheck className="w-4 h-4 text-dark-grey group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl font-medium text-navy group-hover:text-navy transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="relative z-10 flex items-center gap-3 transform-gpu" style={{ transform: "translateZ(30px)" }}>
                <span className="font-mono text-xs md:text-sm text-dark-grey group-hover:text-primary transition-colors tracking-widest shrink-0 px-3 py-1 bg-warm-white rounded-full border border-navy/5 group-hover:border-primary/30">
                  {item.tag}
                </span>
                <ExternalLink className="w-4 h-4 text-transparent group-hover:text-primary/70 transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Standard Disclaimer */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-navy/10 flex justify-between items-start flex-col md:flex-row gap-6"
        >
          <p className="font-mono text-sm text-dark-grey max-w-2xl leading-relaxed">
            Grade X maintains strict adherence to occupational health and safety standards. All insurance certificates, SWMS, and site-specific risk assessments are securely documented and available upon request prior to commencement of works.
          </p>
          <div className="font-mono text-xs text-primary/70 shrink-0 border border-primary/20 px-4 py-2 rounded-full bg-primary/5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            OPERATIONAL REGISTRY OPEN
          </div>
        </motion.div>

      </div>
    </section>
  );
};
