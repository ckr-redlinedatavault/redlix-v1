"use client";

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Globe, Zap } from 'lucide-react';

const heroImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80";
const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind', 'PostgreSQL'];
const clientAvatars = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFn4R1C2f_1L0Qenfy1mzZpmpPyTetzjNhA&s",

  "https://dhanushh12.netlify.app/lovable-uploads/8840dc96-84cb-4c04-8605-2a74f585b88b.png"
];

export default function CompactStaticSlantHero() {
  const { scrollY } = useScroll();
  
  // Subtle parallax
  const yText = useTransform(scrollY, [0, 500], [0, 60]);
  const yImage = useTransform(scrollY, [0, 500], [0, -30]);
  const ySlant = useTransform(scrollY, [0, 500], [0, -15]);

  return (
    <section className="relative flex items-center pt-24 md:pt-32 lg:pt-36 pb-12 overflow-hidden bg-white selection:bg-[#ff0000] selection:text-white border-b border-gray-50">
      
      {/* 1. BACKGROUND WATERMARK */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div 
          style={{ y: yText, opacity: 0.02 }}
          className="absolute top-10 -left-10 text-[18vw] font-black tracking-tighter text-black select-none italic leading-none"
        >
          ENGINEER
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* 2. TEXT CONTENT */}
          <div className="lg:col-span-7 relative z-30 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <div className="flex items-center gap-2 px-2 py-0.5 bg-black text-white text-[9px] font-black uppercase tracking-[0.2em]">
                <Zap size={10} className="text-[#ff0000] fill-[#ff0000]" />
                Available Now
              </div>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <Globe size={10} /> Working Globally
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-[1.1] tracking-tight mb-6"
            >
              Build <span className="text-[#ff0000]">faster</span>.<br />
              Scale with confidence.
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <p className="text-base sm:text-lg text-gray-500 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
                We design and engineer <span className="text-black font-semibold underline decoration-[#ff0000]/30 decoration-2 underline-offset-4">high-performance digital products</span> for forward-thinking brands and startups.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-black text-white overflow-hidden transition-all shadow-lg w-full sm:w-auto"
                >
                  <div className="absolute inset-0 w-0 bg-[#ff0000] transition-all duration-400 ease-out group-hover:w-full" />
                  <span className="relative z-10 flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em]">
                    Start your project <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                
                <div className="flex items-center gap-3 pl-2">
                  <div className="flex -space-x-2">
                    {clientAvatars.map((src, i) => (
                      <img 
                        key={i} 
                        src={src} 
                        alt="Testimonial client"
                        className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm" 
                      />
                    ))}
                  </div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">
                    Trusted by <span className="text-black">50+ founders</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 3. THE RED SLANT IMAGE SECTION */}
          <div className="hidden lg:block lg:col-span-5 relative h-[380px] lg:h-[480px]">
            
            {/* The Background Red Slant (Structural) */}
            <motion.div 
              style={{ 
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
                y: ySlant 
              }}
              className="absolute inset-0 bg-[#ff0000] translate-x-3 translate-y-3 z-10 opacity-100"
            />

            {/* The Image Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ 
                clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
                y: yImage 
              }}
              className="relative w-full h-full bg-gray-100 overflow-hidden group z-20 shadow-2xl"
            >
              <motion.img 
                src={heroImage} 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                alt="Development" 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              
              {/* Corner Label */}
              <div className="absolute top-6 right-6 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-black tracking-widest uppercase">
                Product v2.0
              </div>
            </motion.div>

            {/* Accent Line */}
            <div 
              className="absolute top-0 w-[1.5px] h-full bg-[#ff0000] z-30 hidden lg:block shadow-[0_0_15px_rgba(255,0,0,0.5)]"
              style={{ left: '15.2%', transform: 'skewX(-9deg)', transformOrigin: 'top' }}
            />
          </div> 
        </div>

        {/* 4. TECH STACK TICKER */}
        <div className="mt-12 lg:mt-16 pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-[0.2em]">Technology Stack</span>
           </div>
           
           <div className="flex flex-wrap justify-center gap-x-10 gap-y-2">
             {techStack.map((tech) => (
               <span key={tech} className="text-[11px] font-bold text-gray-300 hover:text-black transition-colors cursor-default">
                 {tech}
               </span>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
}
