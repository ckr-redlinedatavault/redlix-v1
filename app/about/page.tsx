"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Code, Target, Award, Users, ArrowUpRight, 
  Activity, Globe, ShieldCheck, Zap, Terminal, Cpu
} from 'lucide-react';
import Link from 'next/link';

const values = [
  {
    id: "ARCH-01",
    title: 'Technical Excellence',
    label: 'Standard',
    description: 'We maintain the highest standards in code quality. Every line is vetted for performance and maintainability.',
    icon: Code,
  },
  {
    id: "ARCH-02",
    title: 'Precision Strategy',
    label: 'Alignment',
    description: 'Business goals drive our technical decisions. We build systems that function as competitive advantages.',
    icon: Target,
  },
  {
    id: "ARCH-03",
    title: 'Modern Stack',
    label: 'Evolution',
    description: 'Utilizing micro-frontends and serverless logic to ensure your system stays ahead of the technical curve.',
    icon: Zap,
  },
  {
    id: "ARCH-04",
    title: 'Deep Sync',
    label: 'Integration',
    description: 'We function as an elite extension of your team. High-transparency communication is our baseline.',
    icon: Users,
  },
];

const stats = [
  { label: 'Deployments', value: '12', icon: Cpu },
  { label: 'Global Partners', value: '5', icon: Globe },
  { label: 'Engineering Talent', value: '10', icon: Users },
  { label: 'Reliability', value: '100%', icon: ShieldCheck },
];

export default function AboutPage() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <main className="min-h-screen bg-white selection:bg-[#ff0000] selection:text-white">
      <Navbar />
      
      {/* --- SECTION 1: COMPACT HERO --- */}
      <section className="relative pt-32 pb-12 border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:30px_30px]" />
          <motion.div style={{ y: yBg }} className="absolute top-10 left-0 text-[18vw] font-black text-black select-none italic tracking-tighter">
            ARCHITECT
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-light text-[#ff0000]">|</span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">Engineering Manifesto</span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-black text-black leading-[0.9] tracking-tighter uppercase mb-6">
                BUILT FOR <br /><span className="text-[#ff0000]">SCALE.</span>
              </h1>
              <p className="text-base text-gray-700 font-medium leading-relaxed border-l-2 border-[#ff0000] pl-6 max-w-xl">
                Redlix is a Hyderabad-based technical laboratory. We transform complex business challenges into elegant, high-performance software designed to stand the test of time.
              </p>
            </div>
            
            <div className="flex flex-col items-end gap-1 pb-2 text-right">
               <div className="flex items-center gap-2 text-[9px] font-black text-[#ff0000] tracking-widest uppercase mb-1">
                  <Activity size={12} className="animate-pulse" /> Live Status: Online
               </div>
               <div className="text-sm font-black text-black uppercase tracking-tighter">
                  Hyderabad, India
               </div>
               <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  17.3850° N, 78.4867° E
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE REGISTRY (TIGHT STATS) --- */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border-x border-gray-200">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white py-8 px-6 group transition-colors hover:bg-gray-50">
                <stat.icon className="w-4 h-4 text-[#ff0000] mb-3" />
                <div className="text-3xl font-black text-black tracking-tighter leading-none mb-1">{stat.value}</div>
                <div className="text-[8px] font-black text-gray-400 uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: CORE OPERATING PRINCIPLES --- */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
             <Terminal size={16} className="text-[#ff0000]" />
             <h2 className="text-[9px] font-black text-black uppercase tracking-[0.4em]">Core Operating Principles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-gray-50 border border-gray-100 hover:border-[#ff0000] transition-all duration-300"
              >
                <div className="absolute top-6 right-6 text-4xl font-black text-gray-100 group-hover:text-[#ff0000]/5 transition-colors pointer-events-none">
                  {value.id.split('-')[1]}
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center bg-black text-white group-hover:bg-[#ff0000] transition-colors">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[8px] font-black text-[#ff0000] uppercase tracking-widest">{value.label}</span>
                    <h3 className="text-xl font-black text-black uppercase tracking-tight leading-none">
                      {value.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 font-medium leading-relaxed max-w-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: SLIM DEPLOYMENT BAR --- */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#ff0000] p-8 md:p-12 relative overflow-hidden group flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            {/* Minimal Grid Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:20px_20px]" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none mb-2">
                READY TO <span className="text-black">DEPLOY?</span>
              </h2>
              <p className="text-black font-black uppercase tracking-[0.2em] text-[9px] bg-white inline-block px-2 py-0.5">
                Active in Hyderabad & Worldwide
              </p>
            </div>
            
            <Link 
              href="/contact" 
              className="relative z-10 px-8 py-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 shadow-xl"
            >
              Start Project <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}