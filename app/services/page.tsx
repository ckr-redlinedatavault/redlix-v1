"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Globe, Smartphone, Cloud, Layers, Briefcase, Settings,
  ArrowUpRight, Cpu, Activity, ShieldCheck, Zap, Plus
} from 'lucide-react';
import Link from 'next/link';

const solutions = [
  { id: 'SL-01', title: 'Web Systems', description: 'High-performance web platforms built for global velocity and modular scalability.', icon: Globe, features: ['Next.js', 'Go', 'Microservices'] },
  { id: 'SL-02', title: 'Mobile Logic', description: 'Native-performance iOS and Android applications with hardware-level optimizations.', icon: Smartphone, features: ['React Native', 'Flutter', 'Biometrics'] },
  { id: 'SL-03', title: 'Cloud Scale', description: 'Zero-downtime environments orchestrated via Infrastructure-as-Code (IaC) protocols.', icon: Cloud, features: ['AWS/Azure', 'Terraform', 'K8s'] },
  { id: 'SL-04', title: 'Visual Strategy', description: 'Turning user psychology into high-conversion interfaces through Atomic Design Systems.', icon: Layers, features: ['Figma', 'Prototyping', 'UX Research'] },
  { id: 'SL-05', title: 'Tech Strategy', description: 'Strategic guidance for stack selection and long-term digital architecture planning.', icon: Briefcase, features: ['Stack Audit', 'Roadmapping', 'Consulting'] },
  { id: 'SL-06', title: 'Managed Ops', description: '24/7 technical monitoring and system maintenance for mission-critical operations.', icon: Settings, features: ['Monitoring', 'Security', 'Patches'] },
];

export default function SolutionsPage() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <main className="min-h-screen bg-white selection:bg-[#ff0000] selection:text-white">
      <Navbar />
      
      {/* --- COMPACT HERO SECTION --- */}
      <section className="relative pt-32 pb-12 border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:30px_30px]" />
          <motion.div style={{ y: yBg }} className="absolute top-10 left-0 text-[15vw] font-black text-black select-none italic tracking-tighter leading-none">
            ENGINEERING
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-light text-[#ff0000]">|</span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">Service Capabilities // 2025</span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-black text-black leading-[0.9] tracking-tighter uppercase mb-6">
                SYSTEM <span className="text-[#ff0000]">SOLUTIONS.</span>
              </h1>
              <p className="text-base text-gray-700 font-medium leading-relaxed border-l-2 border-[#ff0000] pl-6 max-w-xl">
                Technical validations of excellence. We build digital backbones for market leaders, transforming complex challenges into engineered advantages.
              </p>
            </div>
            
            <div className="flex flex-col items-end gap-1 pb-2 text-right">
               <div className="flex items-center gap-2 text-[9px] font-black text-[#ff0000] tracking-widest uppercase">
                  <Activity size={12} className="animate-pulse" /> Live Node: HYD_01
               </div>
               <div className="text-sm font-black text-black uppercase tracking-tighter">
                  Hyderabad, India
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SOLUTIONS MODULE GRID --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
            {solutions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white hover:bg-gray-50 transition-all duration-300 overflow-hidden"
              >
                {/* Module Header */}
                <div className="flex justify-between items-start mb-10">
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center group-hover:bg-[#ff0000] transition-colors">
                    <item.icon size={20} />
                  </div>
                  <span className="text-[10px] font-black text-gray-300 uppercase italic">ID_{item.id}</span>
                </div>

                {/* Content */}
                <div className="mb-8">
                  <h3 className="text-xl font-black text-black uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Technical Specs Tags */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                  {item.features.map((f, i) => (
                    <span key={i} className="text-[9px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 border border-gray-100 group-hover:border-[#ff0000]/20 group-hover:text-black transition-colors">
                      {f}
                    </span>
                  ))}
                </div>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#ff0000] group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SLIM DEPLOYMENT BAR (CTA) --- */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#ff0000] p-8 md:p-12 relative overflow-hidden group flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            {/* Visual HUD Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[size:20px_20px]" />
            <motion.div 
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-32 bg-white/10 skew-x-12"
            />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none mb-2">
                READY TO <span className="text-black">DEPLOY?</span>
              </h2>
              <div className="flex items-center gap-3">
                <ShieldCheck size={14} className="text-black" />
                <p className="text-white font-black uppercase tracking-[0.2em] text-[9px]">Maintenance Protocol Active 2025</p>
              </div>
            </div>
            
            <Link 
              href="/contact" 
              className="relative z-10 px-8 py-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 shadow-xl"
            >
              Initialize Build <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}