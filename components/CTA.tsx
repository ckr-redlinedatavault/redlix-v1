"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Zap, Target } from 'lucide-react';

export default function CreativeCTA() {
  return (
    <section className="relative py-12 bg-white dark:bg-[#050505] overflow-hidden group">
      {/* THE RED RIBBON - This is the core "Creative" element */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="absolute inset-y-0 right-0 w-full lg:w-[70%] bg-[#ff0000] origin-right"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          {/* LEFT SIDE: TEXT CONTENT (Minimal Height) */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="px-2 py-1 bg-black text-white text-[8px] font-black uppercase tracking-widest">
                Phase 04
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                Execution Layer
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-black dark:text-white tracking-tighter leading-none mb-2">
              LET&apos;S BUILD <br /> 
              <span className="text-gray-300 dark:text-white/20 italic group-hover:text-white transition-colors duration-500">
                THE FUTURE.
              </span>
            </h2>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium max-w-sm leading-relaxed">
              Transforming complex challenges into <span className="text-black dark:text-white">engineered advantages.</span>
            </p>
          </div>

          {/* RIGHT SIDE: ACTION MODULES */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-0 h-full">
            
            {/* Action 1: Primary */}
            <Link href="/contact" className="group/btn relative overflow-hidden bg-black px-10 py-12 flex flex-col justify-between min-w-[240px] transition-transform hover:-translate-y-1">
              <Zap className="w-5 h-5 text-[#ff0000] mb-8" />
              <div>
                <span className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Inquiry</span>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-white uppercase tracking-tighter">Start Project</span>
                  <ArrowUpRight className="w-5 h-5 text-white group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </div>
              </div>
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#ff0000] opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </Link>

            {/* Action 2: Secondary */}
            <Link href="/capabilities" className="group/btn relative overflow-hidden bg-white px-10 py-12 flex flex-col justify-between min-w-[240px] border border-gray-100 transition-transform hover:-translate-y-1 shadow-2xl lg:shadow-none">
              <Target className="w-5 h-5 text-black mb-8" />
              <div>
                <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Capabilities</span>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-black uppercase tracking-tighter">View Stack</span>
                  <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover/btn:text-[#ff0000] transition-colors" />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* BACKGROUND DECORATION - Massive Outlined Text */}
      <div className="absolute bottom-[-20%] left-[-5%] text-[15vw] font-black text-gray-50 dark:text-white/[0.02] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter">
        REDLIX ENGINEERING
      </div>

      {/* SYSTEM COORDINATES - Detail */}
      <div className="absolute top-4 right-4 hidden lg:flex items-center gap-6 text-[8px] font-bold text-white/40 tracking-[0.4em] uppercase">
        <span>LAT: 40.7128</span>
        <span>LNG: -74.0060</span>
        <div className="w-12 h-[1px] bg-white/20" />
      </div>
    </section>
  );
}
