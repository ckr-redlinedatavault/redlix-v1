"use client";

import { motion } from 'framer-motion';
import { ShieldCheck, Activity } from 'lucide-react';

interface ClientCompaniesProps {
  companies?: string[];
  speed?: number;
}

const defaultCompanies = [
  'NSS CMRIT', 'HSGA CMRIT', 'FORGE DIGITAL TECHNOLOGIES', 'STORIES AT SCALE', 'SIYA JEWELS','DHASHA MEDIA'
  
];

export default function ClientCompanies({ 
  companies = defaultCompanies,
  speed = 30 
}: ClientCompaniesProps) {
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="relative py-6 bg-black overflow-hidden border-y border-white/10 selection:bg-[#ff0000] selection:text-white">
      
      {/* 1. TECHNICAL GRID (Ultra-subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* COMPACT TOP ROW: MNC STATUS INDICATORS */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 px-2 py-0.5 border border-[#ff0000]/30 bg-[#ff0000]/5">
               <ShieldCheck className="w-3 h-3 text-[#ff0000]" />
               <span className="text-[8px] uppercase tracking-[0.3em] font-black text-[#ff0000]">Verified Partners</span>
            </div>
            <span className="hidden sm:block h-[1px] w-8 bg-white/10" />
            <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-500">
              Global Scale <span className="text-white">Validated</span>
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-red-600 animate-pulse" />
            <span className="text-[8px] font-black uppercase tracking-widest text-gray-600">Live Infrastructure</span>
          </div>
        </div>

        {/* COMPACT TICKER: THE WHITE KNOCKOUT */}
        <div className="relative w-full overflow-hidden border-y border-white/5 py-4">
          {/* Obsidian Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="flex w-max items-center">
            <motion.div 
              className="flex items-center gap-16 pr-16"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: speed, repeat: Infinity }}
            >
              {duplicatedCompanies.map((company, index) => (
                <div key={index} className="flex items-center gap-16 whitespace-nowrap group">
                  {/* High-Contrast Typography */}
                  <span className="text-xl md:text-3xl font-black text-white/20 group-hover:text-[#ff0000] transition-all duration-500 cursor-default uppercase tracking-tighter">
                    {company}
                  </span>
                  
                  {/* Technical Separator */}
                  <div className="flex flex-col gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
                    <div className="h-1 w-1 bg-[#ff0000]" />
                    <div className="h-1 w-1 bg-white" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff0000]/20 to-transparent" />
    </section>
  );
}