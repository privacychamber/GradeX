import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Search, Droplets, Wind } from 'lucide-react';
import { StaggeredText } from './StaggeredText';

export const Technology = () => {
  return (
    <section className="relative w-full bg-background pt-32 pb-32">
      
      <div className="container px-6 relative z-10">
        <div className="mb-16">
          <div className="inline-block relative">
             <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
             <h2 className="display-sm text-gradient relative z-10 drop-shadow-2xl">A DIFFERENT WAY INSIDE.</h2>
          </div>
          <StaggeredText 
            text="Our proprietary robotic platform is the only one of its kind operating in Western Australia, providing verified results where manual cleaning fails."
            className="body text-gray-400 mt-6 max-w-xl text-lg" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Bento Card 1: Main Feature (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-surface/50 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-colors p-8 md:p-12 min-h-[400px] flex flex-col justify-end"
          >
             <div className="absolute inset-0 bg-gradient-radial from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             {/* Background Image with Parallax */}
             <div className="absolute inset-0 right-0 w-3/4 ml-auto h-full overflow-hidden opacity-40 mix-blend-screen pointer-events-none">
                <img src="/assets/images/robot2.jpg" alt="Robot" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale contrast-150" />
                <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
             </div>

             <div className="relative z-10 w-full max-w-md">
                <div className="p-3 bg-primary/20 rounded-xl w-max mb-6 border border-primary/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-shadow">
                   <Bot className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h2 mb-4 text-white">Precision Engineered</h3>
                <p className="body text-gray-300">
                  A highly maneuverable, ruggedized chassis designed specifically to navigate the extreme confines and tight angles of commercial ductwork safely.
                </p>
             </div>
          </motion.div>

          {/* Bento Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-surface/50 backdrop-blur-md border border-white/10 hover:border-secondary/50 transition-colors p-8 min-h-[400px] flex flex-col justify-between"
          >
             <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="relative z-10">
                <div className="p-3 bg-secondary/20 rounded-xl w-max mb-6 border border-secondary/30 group-hover:shadow-[0_0_20px_rgba(5,150,105,0.4)] transition-shadow">
                   <Search className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="h2 mb-4 text-white">Full Visibility</h3>
                <p className="body text-gray-300">
                  High-definition camera arrays and intense LED lighting pierce the darkness, identifying every risk point.
                </p>
             </div>
          </motion.div>

          {/* Bento Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-surface/50 backdrop-blur-md border border-white/10 hover:border-emerald-400/50 transition-colors p-8 min-h-[400px] flex flex-col justify-between"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="relative z-10 mt-auto">
                <div className="p-3 bg-emerald-400/20 rounded-xl w-max mb-6 border border-emerald-400/30 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.4)] transition-shadow">
                   <Droplets className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="h2 mb-4 text-white">Targeted Eradication</h3>
                <p className="body text-gray-300">
                  Specialized mechanical brush action and high-pressure dispersal systems strip heavy grease deposits.
                </p>
             </div>
          </motion.div>

          {/* Bento Card 4 (Spans 2 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-surface/50 backdrop-blur-md border border-white/10 hover:border-primary/50 transition-colors p-8 md:p-12 min-h-[400px] flex flex-col md:flex-row items-center gap-8"
          >
             <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="relative z-10 flex-1">
                <div className="p-3 bg-primary/20 rounded-xl w-max mb-6 border border-primary/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-shadow">
                   <Wind className="w-8 h-8 text-primary" />
                </div>
                <h3 className="h2 mb-4 text-white">Comprehensive Coverage</h3>
                <p className="body text-gray-300">
                  Reaching vertical risers, horizontal runs, and complex bends that traditional manual cleaning simply cannot access.
                </p>
             </div>

             <div className="relative z-10 w-full md:w-1/3 flex justify-center">
                {/* Decorative element mimicking the bento grid visuals */}
                <div className="relative w-48 h-48 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                   <div className="w-32 h-32 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center animate-pulse">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.6)]">
                         <span className="text-background font-bold">100%</span>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
