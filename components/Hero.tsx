"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Zap } from 'lucide-react';

// Single image reference
const heroImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80";

// Tech stack details
const techStack = ['REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS', 'TAILWIND', 'POSTGRESQL'];

// Trusted Client Avatars
const clientAvatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
];

export default function CompactStaticSlantHero() {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 80]);
  const yImage = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-white selection:bg-[#ff0000] selection:text-white border-b border-gray-100">
      
      {/* 1. BACKGROUND WATERMARK */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:32px_32px]" />
        
        <motion.div 
          style={{ y: yText, opacity: 0.02 }}
          className="absolute top-10 -left-10 text-[18vw] font-black tracking-tighter text-black select-none italic"
        >
          ENGINEER
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 2. TEXT CONTENT (Left 7 Columns) */}
          <div className="lg:col-span-7 relative z-20">
            {/* Status Badge */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-2 py-0.5 bg-black text-white text-[8px] font-black uppercase tracking-[0.3em]">
                < Zap size={10} className="text-[#ff0000]" />
                Ready to build
              </div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                <Globe size={10} /> Working Globally
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-black text-black leading-[0.85] tracking-tighter mb-6"
            >
              BETTER APPS<span className="text-[#ff0000]">.</span> <br />
              <span className="text-[#ff0000]">FASTER</span> GROWTH<span className="text-[#ff0000]">.</span>
            </motion.h1>

            <div className="flex flex-col gap-8">
              <p className="text-lg text-gray-500 font-medium max-w-md leading-snug">
                We build <span className="text-black">custom software and websites</span> that are fast, reliable, and easy for your customers to use.
              </p>

              <div className="flex items-center gap-6">
                <Link
                  href="/contact"
                  className="group relative px-10 py-5 bg-black text-white overflow-hidden transition-all shadow-xl"
                >
                  <div className="absolute inset-0 w-0 bg-[#ff0000] transition-all duration-300 group-hover:w-full" />
                  <span className="relative z-10 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em]">
                    Start a project <ArrowRight size={16} />
                  </span>
                </Link>
                
                <div className="hidden sm:flex items-center gap-3 border-l border-gray-100 pl-6">
                  <div className="flex -space-x-2">
                    {clientAvatars.map((src, i) => (
                      <img 
                        key={i} 
                        src={src} 
                        alt="Client"
                        className="w-7 h-7 rounded-full object-cover border-2 border-white ring-1 ring-gray-100" 
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">
                    Trusted by <br /><span className="text-black">50+ clients</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3. SLANTING IMAGE (Right 5 Columns) */}
          <div className="lg:col-span-5 relative h-[400px] lg:h-[500px] mt-8 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ 
                clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
                y: yImage 
              }}
              className="relative w-full h-full bg-gray-100 overflow-hidden group shadow-2xl"
            >
              <motion.img 
                src={heroImage} 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1.05 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                alt="Development Showcase" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              <div className="absolute top-6 right-6 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-black tracking-widest uppercase z-10">
                Phase: V2.0.4
              </div>
            </motion.div>

            <div 
              className="absolute top-0 w-[2px] h-full bg-[#ff0000] z-30 hidden lg:block"
              style={{ 
                left: '20%', 
                transform: 'skewX(-11deg)', 
                transformOrigin: 'top' 
              }}
            />
          </div>
        </div>

        {/* 4. TECH STACK TICKER */}
        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Core Technology Stack</span>
           </div>
           <div className="flex flex-wrap justify-center gap-8 grayscale opacity-30 hover:opacity-100 transition-all duration-500">
             {techStack.map((tech) => (
               <span key={tech} className="text-[10px] font-black tracking-tighter text-black italic">{tech}</span>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}