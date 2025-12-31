"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Building2, Globe, Activity, ShieldAlert, Cpu, 
  ArrowRight, Zap, CheckCircle2, Terminal 
} from 'lucide-react';
import Link from 'next/link';

const clients = [
  {
    id: "DEPL_01",
    name: 'NSS CMRIT',
    industry: 'Education',
    project: 'Management Ecosystem',
    gains: ['Digital-First', 'Ops Optimization'],
    tech: "Enterprise Cloud"
  },
  {
    id: "DEPL_02",
    name: 'FORGE DIGITAL',
    industry: 'Technology',
    project: 'Enterprise Solutions',
    gains: ['Scalable Architecture', 'Modern Stack'],
    tech: "Microservices"
  },
  {
    id: "DEPL_03",
    name: 'SIYA JEWELS',
    industry: 'E-Commerce',
    project: 'High-Conversion Store',
    gains: ['UX Refinement', 'Mobile Optimized'],
    tech: "E-Com Core"
  },
  {
    id: "DEPL_04",
    name: 'STORIES AT SCALE',
    industry: 'Media',
    project: 'Distribution Platform',
    gains: ['Global Reach', 'Scale Mastery'],
    tech: "Auto-Scale"
  },
  {
    id: "DEPL_05",
    name: 'HSGA CMRIT',
    industry: 'Education',
    project: 'Academic Portal',
    gains: ['Improved Access', 'Better Org'],
    tech: "Portal Engine"
  },
  {
    id: "DEPL_06",
    name: 'DHASHA MEDIA',
    industry: 'Marketing',
    project: 'Digital Platform',
    gains: ['Brand Visibility', 'Lead Gen'],
    tech: "Brand Core"
  }
];

export default function CompactCreativePortfolio() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#ff0000] selection:text-white">
      <Navbar />
      
      {/* --- COMPACT HERO --- */}
      <section className="relative pt-32 pb-12 border-b border-gray-100">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[#ff0000]" />
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-400">Portfolio // Archive</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-black tracking-tighter uppercase leading-[0.9]">
                PROVEN <br /><span className="text-[#ff0000]">IMPACT.</span>
              </h1>
            </div>
            
            <div className="flex items-center gap-8 border-l border-gray-100 pl-8 py-2">
               <div>
                  <div className="text-2xl font-black text-black leading-none">150+</div>
                  <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">Global Nodes</div>
               </div>
               <div>
                  <div className="text-2xl font-black text-black leading-none">100%</div>
                  <div className="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">Success Rate</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TIGHT BENTO GRID --- */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-gray-50 border border-gray-100 p-8 hover:border-[#ff0000] transition-all duration-300"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-10 h-10 bg-black flex items-center justify-center group-hover:bg-[#ff0000] transition-colors">
                    <Cpu size={18} className="text-white" />
                  </div>
                  <span className="text-[9px] font-black text-gray-300 group-hover:text-[#ff0000] transition-colors uppercase tracking-widest">{client.id}</span>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <span className="text-[9px] font-black text-[#ff0000] uppercase tracking-widest mb-1 block">{client.industry}</span>
                  <h3 className="text-2xl font-black text-black tracking-tighter uppercase mb-2 group-hover:translate-x-1 transition-transform">{client.name}</h3>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-tight leading-tight">{client.project}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {client.gains.map((gain, i) => (
                    <span key={i} className="px-2 py-1 bg-white border border-gray-200 text-[8px] font-black uppercase text-gray-400">
                      {gain}
                    </span>
                  ))}
                </div>

                {/* Footer Link */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-200/50">
                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em]">{client.tech}</span>
                  <ArrowRight size={14} className="text-gray-300 group-hover:text-[#ff0000] group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- COMPACT PRIORITY CTA --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="bg-[#ff0000] p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
          {/* Background Text Overlay */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/5 font-black text-8xl select-none pointer-events-none">SUPPORT</div>
          
          <div className="relative z-10 flex items-center gap-6">
            <div className="w-16 h-16 bg-black flex items-center justify-center shrink-0">
              <ShieldAlert size={32} className="text-white animate-pulse" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
                CRITICAL <br /><span className="text-black">ASSISTANCE?</span>
              </h2>
              <p className="text-[10px] font-bold text-white/80 uppercase tracking-widest mt-2">Existing partners priority hotline</p>
            </div>
          </div>

          <Link href="/raise-a-ticket" className="relative z-10 bg-black text-white px-8 py-4 font-black uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center gap-3">
            Raise A Ticket <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}