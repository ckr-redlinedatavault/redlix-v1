"use client";

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Globe, Smartphone, Cloud, Layers, ArrowUpRight, Cpu, 
  Share2, HardDrive, Zap
} from 'lucide-react';
import Link from 'next/link';

const capabilities = [
  {
    id: "01",
    title: 'Enterprise Web',
    label: 'Core Architecture',
    description: 'We engineer high-performance web platforms built for global velocity. Prioritizing military-grade security and modular scalability.',
    icon: Globe,
    specs: ["Next.js", "Microservices", "SEO-Core"],
    stats: { performance: "99/100", stack: "Go/Node" }
  },
  {
    id: "02",
    title: 'Mobile Logic',
    label: 'Native Experience',
    description: 'Fluid, high-retention mobile experiences for iOS and Android. Native-performance apps with hardware-level optimizations.',
    icon: Smartphone,
    specs: ["Biometric", "Offline Sync", "React Native"],
    stats: { runtime: "Native", engine: "V8" }
  },
  {
    id: "03",
    title: 'Cloud Systems',
    label: 'Scalable Infra',
    description: 'Zero-downtime environments using IaC protocols. Resilient AWS/Azure systems built for massive traffic surges.',
    icon: Cloud,
    specs: ["Terraform", "K8s", "Auto-Scale"],
    stats: { uptime: "99.99%", latency: "<15ms" }
  },
  {
    id: "04",
    title: 'Visual Logic',
    label: 'UX Strategy',
    description: 'Turning user psychology into high-conversion interfaces. Bold, intuitive products built on Atomic Design Systems.',
    icon: Layers,
    specs: ["Figma", "Atomic Design", "A/B Ready"],
    stats: { tool: "Figma", focus: "Conversion" }
  }
];

const stackLayers = [
  { name: 'Interface', tools: ['Next.js', 'TS', 'Tailwind'], icon: <Share2 size={14}/> },
  { name: 'Engine', tools: ['Node.js', 'Go', 'Postgres'], icon: <Cpu size={14}/> },
  { name: 'Cloud', tools: ['Docker', 'AWS', 'Terraform'], icon: <HardDrive size={14}/> }
];

// Tech Logos Data 
const techLogos = [
  { 
    name: "AWS", 
    url: "https://images.seeklogo.com/logo-png/31/1/amazon-web-services-aws-logo-png_seeklogo-319188.png" 
  },
  { 
    name: "Vercel", 
    url: "https://cdn.simpleicons.org/vercel/000000" 
  },
  { 
    name: "GitHub", 
    url: "https://cdn.simpleicons.org/github/181717" 
  },
  { 
    name: "Next.js", 
    url: "https://cdn.simpleicons.org/nextdotjs/000000" 
  },
  { 
    name: "React", 
    url: "https://cdn.simpleicons.org/react/61DAFB" 
  },
  { 
    name: "TypeScript", 
    url: "https://cdn.simpleicons.org/typescript/3178C6" 
  },
  { 
    name: "Node.js", 
    url: "https://cdn.simpleicons.org/nodedotjs/339933" 
  },
  { 
    name: "PostgreSQL", 
    url: "https://cdn.simpleicons.org/postgresql/4169E1" 
  },
  { 
    name: "Docker", 
    url: "https://cdn.simpleicons.org/docker/2496ED" 
  },
  { 
    name: "Terraform", 
    url: "https://cdn.simpleicons.org/terraform/7B42BC" 
  },
  { 
    name: "Tailwind CSS", 
    url: "https://cdn.simpleicons.org/tailwindcss/06B6D4" 
  },
  { 
    name: "Python", 
    url: "https://cdn.simpleicons.org/python/3776AB" 
  }
];

export default function CompactCapabilities() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#ff0000] selection:text-white">
      <Navbar />
      
      {/* --- HERO --- */}
      <section className="relative pt-32 pb-12">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:30px_30px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-[#ff0000]" />
              <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">Engineering Dossier</span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-black text-black leading-[0.9] tracking-tighter uppercase mb-6">
              SYSTEM <span className="text-[#ff0000]">SOLUTIONS.</span>
            </h1>
            <p className="text-lg text-gray-700 font-bold uppercase tracking-widest max-w-xl">
              High-stakes software engineered as a <span className="text-[#ff0000]">competitive edge.</span>
            </p>
          </div>
        </div>
      </section>

      {/* --- LOGO TICKER (HIGH VISIBILITY) --- */}
      <div className="py-14 border-y border-gray-100 overflow-hidden bg-white">
        <motion.div 
          className="flex whitespace-nowrap items-center"
          animate={{ x: [0, "-50%"] }} 
          transition={{ 
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35, 
              ease: "linear",
            }
          }}
        >
          {/* Duplicating the array for infinite scroll */}
          {[...techLogos, ...techLogos].map((tech, i) => (
            <div key={i} className="flex flex-col items-center justify-center mx-12 min-w-[120px] group">
              <img 
                src={tech.url} 
                alt={tech.name} 
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-125"
                loading="eager"
              />
              <span className="mt-3 text-[9px] font-black text-black/40 uppercase tracking-widest group-hover:text-black transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- CAPABILITIES: BENTO GRID --- */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-gray-50 border border-gray-100 p-8 hover:border-[#ff0000] transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-10">
                  <div className="w-10 h-10 bg-black text-white flex items-center justify-center group-hover:bg-[#ff0000] transition-colors">
                    <item.icon size={20} />
                  </div>
                  <span className="text-[10px] font-black text-gray-300 uppercase italic">ID_{item.id}</span>
                </div>

                <div className="mb-8">
                  <span className="text-[9px] font-black text-[#ff0000] uppercase tracking-[0.3em] mb-2 block">{item.label}</span>
                  <h3 className="text-2xl font-black text-black uppercase tracking-tighter mb-4">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">{item.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Tech Stack</div>
                    <div className="flex flex-wrap gap-1">
                      {item.specs.map(s => (
                        <span key={s} className="text-[9px] font-bold text-black bg-white border border-gray-200 px-1.5 py-0.5">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col justify-end text-right">
                    {Object.entries(item.stats).slice(0, 1).map(([key, val]) => (
                      <div key={key}>
                        <div className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{key}</div>
                        <div className="text-lg font-black text-black uppercase">{val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- THE ENGINE --- */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={14} className="text-[#ff0000]" />
                <span className="text-[10px] font-black text-[#ff0000] uppercase tracking-[0.4em]">Core Stack</span>
              </div>
              <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-6">THE ENGINE.</h2>
              <p className="text-gray-400 text-sm font-medium leading-relaxed">Tier-1 technologies vetted for global velocity.</p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {stackLayers.map((layer, i) => (
                <div key={i} className="p-6 bg-white/5 border border-white/10 hover:border-[#ff0000] transition-all">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[#ff0000]">{layer.icon}</span>
                    <span className="text-[9px] font-black text-white uppercase tracking-widest">{layer.name}</span>
                  </div>
                  <div className="space-y-1">
                    {layer.tools.map(tool => (
                      <div key={tool} className="text-[10px] font-bold text-gray-400 uppercase">{tool}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}