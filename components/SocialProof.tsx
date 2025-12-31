"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Activity, Cpu, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
const MotionImage = motion(Image);

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: string;
  image: string;
  id: string;
}

const testimonials: Testimonial[] = [
  {
    id: "XP_001",
    name: 'Harshith Sai Tunuguntla',
    role: 'Founder',
    company: 'STORIES AT SCALE',
    rating: '5.0',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFn4R1C2f_1L0Qenfy1mzZpmpPyTetzjNhA&s',
    content: "Redlix transformed our digital presence. Their engineering precision and dedication are unmatched. They built a revenue engine.",
  },
  {
    id: "XP_002",
    name: 'Jashwanth Sonti',
    role: 'Founder',
    company: 'FORGE DIGITAL',
    rating: '5.0',
    image: 'https://media.licdn.com/dms/image/v2/D5603AQE4zgldVYCrKA/profile-displayphoto-scale_200_200/B56ZiypuSeHMAY-/0/1755343940973?e=2147483647&v=beta&t=46ZY5zEDWtYXC0i_5qNvwXSrJhU8bUpY3TQ6_YHf-8U',
    content: "Working with Redlix was a game-changer for our infrastructure. Professional, reliable, and results-driven. Their strategy is miles ahead.",
  },
  {
    id: "XP_003",
    name: 'Dhanush Reddy Marivada',
    role: 'Founder',
    company: 'DHASHA MEDIA',
    rating: '4.9',
    image: 'https://dhanushh12.netlify.app/lovable-uploads/8840dc96-84cb-4c04-8605-2a74f585b88b.png',
    content: "The best technical partner we've had. They handle complex technical infrastructure and high-end design with equal mastery.",
  },
];


 const logos = ['NSS CMRIT', 'HSGA CMRIT', 'FORGE DIGITAL', 'STORIES AT SCALE', 'DHASHA MEDIA'];

export default function PerfectAlignedTestimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const AUTOPLAY_TIME = 5000;

  const paginate = useCallback((newDirection: number) => {
    if (!testimonials.length) return;
    setDirection(newDirection);
    setCurrent((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!testimonials.length) return;
    const timer = setInterval(() => paginate(1), AUTOPLAY_TIME);
    return () => clearInterval(timer);
  }, [paginate]);

  if (!testimonials || testimonials.length === 0) return null;
  const active = testimonials[current];

  // SHARED GEOMETRY (Top-left start point of the slant)
  const SLANT_X = "20%"; 

  return (
    <section className="py-16 bg-white selection:bg-[#ff0000] selection:text-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-[#ff0000]" />
            <h2 className="text-3xl font-black text-black tracking-tighter uppercase">
              CLIENT <span className="text-[#ff0000]">INTEL.</span>
            </h2>
          </div>

          <div className="relative overflow-hidden w-full md:w-1/2 h-6 flex items-center">
             <div className="flex animate-marquee whitespace-nowrap gap-10 items-center">
                {[...logos, ...logos].map((logo, i) => (
                  <span key={i} className="text-[9px] font-black tracking-[0.3em] text-gray-300 uppercase italic">
                    {logo}
                  </span>
                ))}
             </div>
             <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
          </div>
        </div>

        {/* TESTIMONIAL DECK */}
        <div className="relative">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="relative w-full bg-gray-50 border border-gray-100 overflow-hidden"
            >
              {/* SLIM TOP PROGRESS TIMER */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gray-100 z-20">
                <motion.div 
                  key={`timer-${current}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: AUTOPLAY_TIME / 1000, ease: "linear" }}
                  className="h-full bg-[#ff0000]"
                />
              </div>

              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* LEFT: AUTHOR INFO */}
                  <div className="lg:col-span-3 border-l-2 border-[#ff0000] pl-6 py-2">
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-3 h-3 fill-[#ff0000] text-[#ff0000]" />
                      <span className="text-[10px] font-black text-black tracking-widest uppercase">Verified Score</span>
                    </div>
                    <h4 className="text-2xl font-black text-black uppercase tracking-tighter leading-none mb-1">
                      {active.name}
                    </h4>
                    <p className="text-[10px] text-[#ff0000] font-bold uppercase tracking-widest">
                      {active.role} <span className="text-gray-400">@</span> {active.company}
                    </p>
                  </div>

                  {/* CENTER: QUOTE */}
                  <div className="lg:col-span-5 relative">
                    <Quote className="text-[#ff0000]/10 w-12 h-12 absolute -top-6 -left-6" />
                    <p className="text-xl md:text-2xl font-bold text-black leading-tight tracking-tight italic relative z-10">
                      &ldquo;{active.content}&rdquo;
                    </p>
                  </div>

                  {/* RIGHT: PERFECTLY ALIGNED IMAGE MODULE */}
                  <div className="lg:col-span-4 flex justify-center lg:justify-end">
                    <div className="relative w-56 h-64 group">
                      
                      {/* 1. THE RED SEPARATOR LINE (Aligned via Clip-Path) */}
                      {/* This ensures the line is exactly at the edge of the image slant */}
                      <div 
                        className="absolute inset-0 bg-[#ff0000] z-30 pointer-events-none"
                        style={{ 
                          clipPath: `polygon(${SLANT_X} 0, calc(${SLANT_X} + 2.5px) 0, 2.5px 100%, 0 100%)` 
                        }}
                      />

                      {/* 2. ARCHITECTURAL L-BRACKETS */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 border-t-2 border-r-2 border-gray-200 z-20 group-hover:border-[#ff0000] transition-colors" />
                      <div className="absolute -bottom-2 -left-2 w-10 h-10 border-b-2 border-l-2 border-gray-200 z-20 group-hover:border-[#ff0000] transition-colors" />

                      {/* 3. SLANTED IMAGE CONTAINER */}
                      <div 
                        className="relative w-full h-full bg-black overflow-hidden shadow-2xl"
                        style={{ clipPath: `polygon(${SLANT_X} 0, 100% 0, 100% 100%, 0% 100%)` }}
                      >
                         <MotionImage
                           key={active.image}
                           initial={{ scale: 1.2, filter: 'grayscale(100%)' }}
                           animate={{ scale: 1.05, filter: 'grayscale(0%)' }}
                           transition={{ duration: 1 }}
                           src={active.image}
                           alt={active.name}
                           fill
                           sizes="(min-width: 1024px) 224px, 224px"
                           className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                         />

                         {/* Scanning HUD Effect */}
                         <motion.div 
                           animate={{ y: [-100, 400] }}
                           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                           className="absolute top-0 left-0 w-full h-[1px] bg-[#ff0000]/30 z-30"
                         />
                         
                         {/* Serial Tag */}
                         <div className="absolute bottom-4 right-4 text-right">
                            <span className="block text-[7px] font-black text-white/40 uppercase tracking-widest mb-1">Node Reference</span>
                            <span className="block text-[10px] font-black text-white uppercase tracking-tighter italic">{active.id}</span>
                         </div>
                      </div>

                      {/* 4. VERIFIED BADGE */}
                      <div className="absolute -top-4 -left-6 bg-black text-white px-3 py-1 flex items-center gap-2 border border-white/10 shadow-xl z-40">
                         <ShieldCheck className="text-[#ff0000] w-3 h-3" />
                         <span className="text-[8px] font-black uppercase tracking-[0.2em]">Verified_ID</span>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

              {/* SLIM CONTROL BAR */}
              <div className="flex items-center justify-between bg-white border-t border-gray-100 p-4 px-8">
                <div className="flex items-center gap-6">
                  <div className="flex gap-px bg-gray-100 p-px">
                    <button onClick={() => paginate(-1)} className="w-10 h-10 bg-white flex items-center justify-center hover:bg-[#ff0000] hover:text-white transition-all active:scale-90 border border-gray-100">
                      <ChevronLeft size={16} />
                    </button>
                    <button onClick={() => paginate(1)} className="w-10 h-10 bg-white flex items-center justify-center hover:bg-[#ff0000] hover:text-white transition-all active:scale-90 border border-gray-100">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-black tracking-tighter">0{current + 1}</span>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">/ 0{testimonials.length}</span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-6">
                  <div className="flex items-center gap-2 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    <Activity size={12} className="text-[#ff0000] animate-pulse" />
                    <span>Real-time Validation</span>
                  </div>
                  <div className="h-4 w-px bg-gray-100" />
                  <div className="flex items-center gap-2 text-[9px] font-black text-black uppercase tracking-widest">
                     <Cpu size={12} className="text-gray-400" />
                     <span>Integrity Secured</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
