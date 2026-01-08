"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, AppWindow } from 'lucide-react'; // Swapped Globe for AppWindow

export default function CleanRedNavbar() {
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
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-0' : 'py-2'
      }`}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#FF0000]">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        <div className={`flex justify-between items-center transition-all duration-500 ${
          scrolled ? 'h-12' : 'h-14'
        }`}>
          
          {/* 1. BRAND */}
          <Link href="/" className="flex items-center gap-2 group">
             <span className="text-xl font-black tracking-tighter text-white uppercase italic">
               REDLIX<span className="text-black">.</span>
             </span>
          </Link>

          {/* 2. DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors relative"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* 3. ACTION SECTION */}
          <div className="hidden lg:flex items-center gap-0">
            {/* NEW: Client Window Button */}
            <Link
              href="/client-window"
              className="h-8 px-4 text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 border border-transparent hover:border-white/20 transition-all"
            >
              <AppWindow size={14} />
              Client Window
            </Link>

            <Link
              href="/contact"
              className="h-9 px-6 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] flex items-center group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          {/* MOBILE TOGGLE - Two Lines instead of Three */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-8 h-8 flex flex-col items-end justify-center gap-1.5 text-white group"
            >
              {isMenuOpen ? (
                <X size={24} />
              ) : (
                <>
                  <span className="w-6 h-[2px] bg-white transition-all group-hover:w-4" />
                  <span className="w-4 h-[2px] bg-white transition-all group-hover:w-6" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[110] bg-white md:hidden flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-gray-100">
               <span className="text-xl font-black text-[#FF0000] italic uppercase">Redlix.</span>
               <button onClick={() => setIsMenuOpen(false)} className="text-black"><X size={28} /></button>
            </div>

            <div className="flex flex-col p-10 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-4xl font-black text-black hover:text-[#FF0000] transition-colors uppercase italic"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {/* Added Client Window to Mobile Menu too */}
              <Link
                href="/client-portal"
                className="text-xl font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <AppWindow size={18} />
                Client Window
              </Link>
            </div>
            
            <div className="mt-auto p-10">
              <Link
                href="/contact"
                className="w-full bg-[#FF0000] text-white p-6 font-black uppercase tracking-widest text-center block"
                onClick={() => setIsMenuOpen(false)}
              >
                Start A Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
