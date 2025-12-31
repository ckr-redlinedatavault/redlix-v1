"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Shield, Scale, Zap, Lock, ArrowUpRight, 
  Activity, ShieldCheck, Cpu, Terminal, Globe 
} from 'lucide-react';
import Link from 'next/link';

const enterpriseFeatures = [
  {
    id: "ENT-01",
    title: 'Enterprise Security',
    label: 'Mission Critical',
    description: 'Bank-level security with AES-256 encryption and SOC 2 Type II compliance standards for high-stakes software.',
    icon: Shield,
    specs: ['SOC 2', 'Encryption', 'Audits'],
  },
  {
    id: "ENT-02",
    title: 'Elastic Scale',
    label: 'Performance Layer',
    description: 'Built for millions of concurrent users with automated load balancing and global CDN integration.',
    icon: Scale,
    specs: ['Auto-scaling', 'CDN', '99.9% SLA'],
  },
  {
    id: "ENT-03",
    title: 'High Performance',
    label: 'Engine Logic',
    description: 'Ultra-low latency database architectures and advanced caching strategies for lightning-fast response times.',
    icon: Zap,
    specs: ['Caching', 'Optimization', 'Analytics'],
  },
  {
    id: "ENT-04",
    title: 'Governance',
    label: 'Compliance',
    description: 'Strict adherence to GDPR, HIPAA, and industry-specific regulatory protocols with complete audit logging.',
    icon: Lock,
    specs: ['GDPR', 'HIPAA', 'Audit Logs'],
  },
];

export default function EnterprisePage() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <main className="min-h-screen bg-white selection:bg-[#ff0000] selection:text-white">
      <Navbar />
      
      {/* --- SECTION 1: BLUEPRINT HERO --- */}
      <section className="relative pt-32 pb-12 border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:30px_30px]" />
          <motion.div style={{ y: yBg }} className="absolute top-10 left-0 text-[18vw] font-black text-black select-none italic tracking-tighter leading-none">
            ENTERPRISE
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-light text-[#ff0000]">|</span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">Tier-1 Systems Architecture</span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-black text-black leading-[0.9] tracking-tighter uppercase mb-6">
                GLOBAL <span className="text-[#ff0000]">SCALE.</span>
              </h1>
              <p className="text-base text-gray-700 font-medium leading-relaxed border-l-2 border-[#ff0000] pl-6 max-w-xl">
                We engineer high-performance digital infrastructure for organizations that demand zero downtime, total security, and global horizontal scalability.
              </p>
            </div>
            
            <div className="flex flex-col items-end gap-1 pb-2 text-right">
               <div className="flex items-center gap-2 text-[9px] font-black text-[#ff0000] tracking-widest uppercase mb-1">
                  <Activity size={12} className="animate-pulse" /> Live Status: Online
               </div>
               <div className="text-sm font-black text-black uppercase tracking-tighter">
                  Hyderabad Base
               </div>
               <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  17.3850° N, 78.4867° E
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: SYSTEM MODULES GRID --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
            {enterpriseFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white hover:bg-gray-50 transition-all duration-300 overflow-hidden"
              >
                {/* ID Tag & Status */}
                <div className="flex justify-between items-start mb-10">
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center group-hover:bg-[#ff0000] transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-black text-gray-300 uppercase italic block leading-none mb-1">ID_{item.id}</span>
                    <div className="flex items-center justify-end gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Active_Protocol</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <span className="text-[8px] font-black text-[#ff0000] uppercase tracking-widest mb-1 block">{item.label}</span>
                  <h3 className="text-xl font-black text-black uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Specs Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                  {item.specs.map((s, i) => (
                    <span key={i} className="text-[9px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 border border-gray-100 group-hover:border-[#ff0000]/20 group-hover:text-black transition-colors">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff0000] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: ENTERPRISE CTA BAR --- */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-black p-8 md:p-12 relative overflow-hidden group flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Visual Grid Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:20px_20px]" />
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-32 bg-white/5 skew-x-12"
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none mb-2">
                READY TO <span className="text-[#ff0000]">SCALE?</span>
              </h2>
              <div className="flex items-center gap-3">
                <ShieldCheck size={14} className="text-[#ff0000]" />
                <p className="text-white font-black uppercase tracking-[0.2em] text-[9px]">Authorized Engineering Partner 2025</p>
              </div>
            </div>
            
            <Link 
              href="/contact" 
              className="relative z-10 px-8 py-4 bg-[#ff0000] text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 shadow-xl"
            >
              Initialize Contact <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}