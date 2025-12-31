"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Zap, Clock, Users, ShieldCheck, ArrowUpRight, 
  Activity, Terminal, Cpu, Smartphone, HeartHandshake
} from 'lucide-react';
import Link from 'next/link';

const operationFeatures = [
  {
    id: "OPS-01",
    title: 'Personalized Support',
    label: 'Direct Sync',
    description: 'We speak your language and work in your time zone. No middle-men, just direct access to our engineering team.',
    icon: HeartHandshake,
    specs: ['Same Time-Zone', 'Local Language', 'Direct Line'],
  },
  {
    id: "OPS-02",
    title: 'Rapid Deployment',
    label: 'Velocity Layer',
    description: 'Our streamlined local operations allow us to move from concept to deployment 2x faster than large overseas agencies.',
    icon: Zap,
    specs: ['Sprint Ready', 'Agile Flow', 'On-site Support'],
  },
  {
    id: "OPS-03",
    title: 'MNC-Grade Code',
    label: 'Standard',
    description: 'We bring international engineering standards to the local market, ensuring your software is world-class from day one.',
    icon: Cpu,
    specs: ['Clean Code', 'Scalable Architecture', 'Tier-1 Tech'],
  },
  {
    id: "OPS-04",
    title: 'Local Compliance',
    label: 'Legal Logic',
    description: 'Complete understanding of Indian business regulations and tax requirements (GST), making integrations seamless.',
    icon: ShieldCheck,
    specs: ['GST Ready', 'Local Laws', 'Secure Data'],
  },
];

const metrics = [
  { name: 'Uptime Score', val: '99.9%' },
  { name: 'Success Rate', val: '100%' },
  { name: 'Active Users', val: '10k+' },
  { name: 'Tech Stack', val: 'Modern' },
  { name: 'Base Node', val: 'HYD_01' },
];

export default function OperationsPage() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <main className="min-h-screen bg-white selection:bg-[#ff0000] selection:text-white">
      <Navbar />
      
      {/* --- SECTION 1: BLUEPRINT HERO --- */}
      <section className="relative pt-32 pb-12 border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#000,#000_1px,transparent_1px),linear-gradient(to_bottom,#000,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
          <motion.div style={{ y: yBg }} className="absolute top-10 left-0 text-[18vw] font-black text-black select-none italic tracking-tighter leading-none uppercase">
            OPERATIONS
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-light text-[#ff0000]">|</span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">Operational Standards // 2025</span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-black text-black leading-[0.9] tracking-tighter uppercase mb-6">
                HYDERABAD <span className="text-[#ff0000]">CORE.</span>
              </h1>
              <p className="text-base text-gray-700 font-medium leading-relaxed border-l-2 border-[#ff0000] pl-6 max-w-xl">
                We bridge the gap between local business understanding and MNC-grade technical execution. Based in Hyderabad, we build powerful software that helps your business dominate.
              </p>
            </div>
            
            <div className="flex flex-col items-end gap-1 pb-2 text-right">
               <div className="flex items-center gap-2 text-[9px] font-black text-[#ff0000] tracking-widest uppercase mb-1">
                  <Activity size={12} className="animate-pulse" /> Live Support: Active
               </div>
               <div className="text-sm font-black text-black uppercase tracking-tighter">
                  HQ: Hyderabad, India
               </div>
               <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                  17.3850° N, 78.4867° E
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: SYSTEM REGISTRY (METRICS) --- */}
      <section className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-gray-200 border-x border-gray-200">
            {metrics.map((item, index) => (
              <div key={index} className="bg-white py-8 px-6 group transition-colors hover:bg-gray-50">
                <div className="text-3xl font-black text-black tracking-tighter leading-none mb-1">{item.val}</div>
                <div className="text-[8px] font-black text-[#ff0000] uppercase tracking-widest">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: OPERATIONS GRID --- */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
             <Terminal size={16} className="text-[#ff0000]" />
             <h2 className="text-[9px] font-black text-black uppercase tracking-[0.4em]">Service Execution Parameters</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {operationFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-gray-50 border border-gray-100 hover:border-[#ff0000] transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center group-hover:bg-[#ff0000] transition-colors">
                    <item.icon size={20} />
                  </div>
                  <span className="text-[10px] font-black text-gray-300 uppercase italic">TAG_{item.id}</span>
                </div>

                <div className="mb-8">
                  <span className="text-[8px] font-black text-[#ff0000] uppercase tracking-widest mb-1 block">{item.label}</span>
                  <h3 className="text-xl font-black text-black uppercase tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-100">
                  {item.specs.map((s, i) => (
                    <span key={i} className="text-[9px] font-bold text-gray-400 uppercase tracking-widest bg-white px-2 py-1 border border-gray-100 group-hover:border-[#ff0000]/20 group-hover:text-black transition-colors">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: HYDERABAD ACTION BAR --- */}
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
            
            <div className="relative z-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none mb-2">
                READY TO <span className="text-black">DOMINATE?</span>
              </h2>
              <div className="flex items-center justify-center md:justify-start gap-3">
                <ShieldCheck size={14} className="text-black" />
                <p className="text-white font-black uppercase tracking-[0.2em] text-[9px]">Local Partnership. World-Class Quality.</p>
              </div>
            </div>
            
            <Link 
              href="/contact" 
              className="relative z-10 px-8 py-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 shadow-xl"
            >
              Consult an Engineer <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}