"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ShieldCheck, Globe, Layout, Cpu } from 'lucide-react';

export default function CreativeRedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '/services' },
    { name: 'Architecture', href: '/about' },
    { name: 'Enterprise', href: '/enterprise' },
    { name: 'Global', href: '/global' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 selection:bg-black selection:text-white ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      {/* BACKGROUND BAR WITH SCANNING EFFECT */}
      <div className={`absolute inset-0 bg-[#ff0000] transition-all duration-500 overflow-hidden ${scrolled ? 'shadow-2xl' : ''}`}>
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        
        {/* The "Scanning" Light Line */}
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          
          {/* 1. BRAND LOGO - Magnetic Breathing Effect */}
          <Link href="/" className="relative group flex items-center gap-2">
             <motion.div 
               animate={{ opacity: [1, 0.5, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-[3px] h-8 bg-white" 
             />
             <span 
               style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
               className="text-2xl font-black tracking-tighter text-white uppercase flex items-center"
             >
               Redlix<span className="text-black group-hover:text-white transition-colors duration-500">.</span>
             </span>
          </Link>

          {/* 2. CENTER PIECE - Live System Status (Creative Detail) */}
          <div className="hidden xl:flex items-center gap-4 px-4 py-1.5 border border-white/20 rounded-full bg-black/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/80">System: Operational</span>
          </div>

          {/* 3. DESKTOP NAV - Bracket Hover Logic */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 hover:text-white transition-all relative group"
              >
                <span className="absolute left-2 opacity-0 group-hover:opacity-100 group-hover:-left-1 transition-all duration-300 text-black">[</span>
                {link.name}
                <span className="absolute right-2 opacity-0 group-hover:opacity-100 group-hover:-right-1 transition-all duration-300 text-black">]</span>
              </Link>
            ))}
          </div>

          {/* 4. ACTION SECTION */}
          <div className="hidden lg:flex items-center gap-4">
            {/* CLIENT WINDOW - Glass Outline */}
            <Link
              href="/client-window"
              className="px-5 py-2.5 border border-white/30 text-white text-[9px] font-black uppercase tracking-[0.2em] backdrop-blur-md hover:bg-white hover:text-[#ff0000] transition-all duration-500 flex items-center gap-2 group"
            >
              <Layout size={12} className="group-hover:rotate-12 transition-transform" />
              Client Window
            </Link>

            {/* CONSULTATION - High Impact Solid */}
            <Link
              href="/contact"
              className="relative px-6 py-2.5 bg-black text-white text-[9px] font-black uppercase tracking-[0.2em] overflow-hidden group shadow-xl"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 group-hover:text-black flex items-center gap-2">
                Consultation
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* 5. MOBILE TOGGLE */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white bg-black/10 rounded-full"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 6. MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[110] bg-[#ff0000] md:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-20">
               <div className="flex items-center gap-2">
                  <div className="w-[3px] h-8 bg-white" />
                  <span className="text-2xl font-black tracking-tighter text-white uppercase">Redlix<span className="text-black">.</span></span>
               </div>
               <button onClick={() => setIsMenuOpen(false)} className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full text-white"><X size={28} /></button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-6xl font-black text-white/40 hover:text-white transition-all tracking-tighter uppercase italic block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto space-y-4">
               <div className="flex items-center gap-2 text-white/50 text-[10px] font-bold uppercase tracking-widest mb-4">
                 <Cpu size={14} />
                 <span>Terminal V2.4.0 Live</span>
               </div>
               <Link
                href="/client-window"
                className="w-full flex justify-center items-center border border-white/30 text-white p-5 font-black uppercase tracking-widest text-xs"
                onClick={() => setIsMenuOpen(false)}
              >
                Client Window
              </Link>
              <Link
                href="/contact"
                className="w-full flex justify-between items-center bg-black text-white p-6 font-black uppercase tracking-widest text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Start A Project <ArrowRight size={24} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}