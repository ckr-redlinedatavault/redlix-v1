"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Layers, 
  Briefcase, 
  Settings,
  ArrowUpRight,
  Plus,
  MoveRight
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';
interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlight: string;
}

const services: Service[] = [
  { id: '01', title: 'Web Systems', description: 'Fast, secure, and powerful web platforms built for high-scale performance.', icon: Globe, highlight: 'Performance' },
  { id: '02', title: 'Mobile Logic', description: 'Professional iOS and Android apps designed for retention and speed.', icon: Smartphone, highlight: 'Experience' },
  { id: '03', title: 'Cloud Scale', description: 'Infrastructure that grows with you, ensuring zero downtime.', icon: Cloud, highlight: 'Infrastructure' },
  { id: '04', title: 'Modern Design', description: 'Clean interfaces that turn complex data into intuitive user journeys.', icon: Layers, highlight: 'Visuals' },
  { id: '05', title: 'Tech Strategy', description: 'Expert guidance on stack selection and digital transformation.', icon: Briefcase, highlight: 'Consulting' },
  { id: '06', title: 'Precision Support', description: 'Managed systems and 24/7 maintenance for seamless operations.', icon: Settings, highlight: 'Reliability' },
];

export default function Services() {
  return (
    <section className="py-16 bg-white dark:bg-[#050505] selection:bg-[#ff0000] selection:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* REFINED HEADER */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12 border-l-2 border-[#ff0000] pl-6">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-2"
            >
              <span className="text-[9px] uppercase tracking-[0.4em] font-black text-[#ff0000]">Production Capabilities</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-black dark:text-white tracking-tighter leading-none"
            >
              WHAT WE <span className="text-gray-300 dark:text-white/10 italic">SOLVE.</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[11px] text-gray-500 max-w-[280px] font-bold uppercase tracking-wider leading-relaxed"
          >
            Engineering <span className="text-black dark:text-white underline decoration-[#ff0000] decoration-1 underline-offset-4">competitive advantages</span> through technical precision.
          </motion.p>
        </div>

        {/* COMPACT TECHNICAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 dark:bg-white/5 border border-gray-200 dark:border-white/5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-8 bg-white dark:bg-[#050505] overflow-hidden transition-all duration-500"
            >
              {/* Background HUD Grid */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] dark:group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none" 
                   style={{ backgroundImage: `radial-gradient(#ff0000 1px, transparent 0)`, backgroundSize: '15px 15px' }} />
              
              {/* Card Header */}
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-black/5 dark:text-white/5 group-hover:text-[#ff0000]/20 transition-colors duration-500 leading-none mb-1">
                    {service.id}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[7px] font-black text-gray-400 uppercase tracking-widest">Operational</span>
                  </div>
                </div>
                <div className="w-10 h-10 flex items-center justify-center border border-gray-100 dark:border-white/10 group-hover:border-[#ff0000] group-hover:bg-[#ff0000] transition-all duration-500">
                  <service.icon className="w-4 h-4 text-black dark:text-white group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Content Block */}
              <div className="relative z-10">
                <h3 className="text-xl font-black text-black dark:text-white mb-2 uppercase tracking-tight flex items-center gap-2">
                  {service.title}
                  <Plus className="w-2.5 h-2.5 text-[#ff0000] opacity-0 group-hover:opacity-100 transition-all duration-500" />
                </h3>
                <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed font-medium mb-6">
                  {service.description}
                </p>
                
                {/* Technical Label Section */}
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/5 pt-5">
                  <span className="text-[8px] font-black text-black dark:text-white uppercase tracking-[0.3em]">
                    Core_{service.highlight}
                  </span>
                  <div className="flex items-center gap-1 text-[8px] font-black text-[#ff0000] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-1 group-hover:translate-x-0">
                    Initialize <MoveRight size={10} />
                  </div>
                </div>
              </div>

              {/* Decorative Corner Brackets */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-transparent group-hover:border-[#ff0000]/20 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-transparent group-hover:border-[#ff0000]/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* SLIM ACTION BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="/capabilities"
            className="mt-10 flex flex-col sm:flex-row items-center justify-between p-6 bg-black dark:bg-white group cursor-pointer relative overflow-hidden"
          >
            <div className="relative z-10">
              <h4 className="text-xl font-black text-white dark:text-black tracking-tighter uppercase leading-none">
                Ready to scale <br />your <span className="text-[#ff0000]">Vision?</span>
              </h4>
            </div>

            <div className="relative z-10 flex items-center gap-4 mt-4 sm:mt-0">
              <div className="hidden md:flex flex-col items-end text-white/30 dark:text-black/30">
                <span className="text-[7px] font-black uppercase tracking-widest leading-none">Protocol: 04</span>
                <span className="text-[7px] font-black uppercase tracking-widest mt-1 leading-none">System: Active</span>
              </div>
              <div className="px-6 py-3 bg-[#ff0000] text-white text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-3 group-hover:bg-white group-hover:text-[#ff0000] transition-all duration-500 shadow-xl">
                View All Systems <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
