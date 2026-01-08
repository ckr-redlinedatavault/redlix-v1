"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Mail, Phone, MapPin, Globe, Clock, 
  Activity, Terminal, ArrowUpRight, Zap 
} from 'lucide-react';

export default function CompactContactPage() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white selection:bg-[#ff0000] selection:text-white">
      <Navbar />
      
      {/* --- SECTION 1: COMPACT HERO --- */}
      <section className="relative pt-32 pb-12 border-b border-gray-100">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[#ff0000]" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">Inquiry Protocol</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-black leading-[0.9] tracking-tighter uppercase">
                LET&apos;S <span className="text-[#ff0000]">SCALE.</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-6 border-l border-gray-100 pl-8 py-2">
               <div className="flex items-center gap-2">
                 <Activity size={14} className="text-[#ff0000] animate-pulse" />
                 <span className="text-[11px] font-black text-black">{time} GMT</span>
               </div>
               <div className="h-4 w-px bg-gray-200" />
               <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Global Status: Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: COMMUNICATION TERMINAL --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* FORM SIDE (Minimalist Lines) */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-10 text-black">
                <Terminal size={16} />
                <h2 className="text-xs font-black uppercase tracking-[0.3em]">Communication Intake</h2>
              </div>

              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="relative group">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1 transition-colors group-focus-within:text-[#ff0000]">Operator Name</label>
                    <input 
                      type="text" 
                      placeholder="Enter full name" 
                      className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#ff0000] outline-none font-bold text-black transition-all placeholder:text-gray-200 text-sm" 
                    />
                  </div>
                  <div className="relative group">
                    <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1 transition-colors group-focus-within:text-[#ff0000]">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="name@domain.com" 
                      className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#ff0000] outline-none font-bold text-black transition-all placeholder:text-gray-200 text-sm" 
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1 transition-colors group-focus-within:text-[#ff0000]">Company / Organization</label>
                  <input 
                    type="text" 
                    placeholder="Where are you building?" 
                    className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#ff0000] outline-none font-bold text-black transition-all placeholder:text-gray-200 text-sm" 
                  />
                </div>

                <div className="relative group">
                  <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1 transition-colors group-focus-within:text-[#ff0000]">Project Intel</label>
                  <textarea 
                    rows={3} 
                    placeholder="Tell us about your technical goals..." 
                    className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#ff0000] outline-none font-medium text-black transition-all resize-none placeholder:text-gray-200 text-sm" 
                  />
                </div>

                <button type="submit" className="group relative bg-black text-white px-10 py-4 overflow-hidden transition-all duration-300">
                  <div className="absolute inset-0 w-0 bg-[#ff0000] transition-all duration-500 group-hover:w-full" />
                  <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-4">
                    Initialize Uplink <ArrowUpRight size={14} />
                  </span>
                </button>
              </form>
            </div>

            {/* INFO SIDE (Industrial Nodes) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="p-8 bg-gray-50 border border-gray-100">
                <h3 className="text-[9px] font-black text-[#ff0000] uppercase tracking-[0.4em] mb-8">Direct Access</h3>
                
                <div className="space-y-6">
                  {[
                    { label: 'Primary Mail', val: 'support.ckrdatapoint@gmail.com', icon: Mail },
                    { label: 'Voice Line', val: '+91 6304889509', icon: Phone },
                    { label: 'Base Ops', val: 'Global / HYD', icon: MapPin },
                  ].map((node, i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <div className="w-8 h-8 border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-white transition-all">
                        <node.icon size={14} className="text-black group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-0.5">{node.label}</div>
                        <div className="text-sm font-bold text-black tracking-tight">{node.val}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-black text-white group overflow-hidden">
                <div className="flex items-center gap-2 mb-4">
                  <Globe size={14} className="text-[#ff0000]" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#ff0000]">Availability</span>
                </div>
                <p className="text-xs text-white font-medium leading-relaxed opacity-80">
                  We are currently accepting new high-impact projects for Q1 2026. Responses guaranteed within 24 hours.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[9px] font-black uppercase tracking-widest">
                   <Zap size={10} fill="#ff0000" stroke="#ff0000" />
                   <span>System Load: Optimized</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: STATUS FOOTER BAR --- */}
      <section className="bg-gray-50 py-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 opacity-60">
             {['ISO 27001 SECURE', 'GLOBAL NETWORK', 'ENCRYPTED UPLINK'].map((text, i) => (
               <div key={i} className="flex items-center gap-2">
                 <div className="w-1 h-1 bg-[#ff0000]" />
                 <span className="text-[9px] font-black text-black uppercase tracking-widest">{text}</span>
               </div>
             ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
