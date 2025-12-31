"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  ArrowUpRight, 
  Globe, 
  Clock,
  ChevronUp,
  Terminal
} from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerNavigation: FooterSection[] = [
  {
    title: 'Explore',
    links: [
      { name: 'Our Capabilities', href: '/capabilities' },
      { name: 'Our Clients', href: '/client-window' },
      { name: 'About the Team', href: '/about' },
      { name: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Help Center', href: '/support' },
      { name: 'Read our Blog', href: '/blog' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  },
];

export default function CleanWhiteFooter() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: true, 
        hour: '2-digit', 
        minute: '2-digit' 
      }));
    };
    
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white text-black pt-24 pb-10 overflow-hidden border-t border-gray-100 selection:bg-[#ff0000] selection:text-white">
      
      {/* CREATIVE WATERMARK */}
      <div className="absolute top-0 left-0 w-full flex justify-start opacity-[0.03] pointer-events-none select-none">
        <span className="text-[20vw] font-black tracking-tighter leading-none ml-[-2vw]">
          REDLIX
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* BRAND BLOCK */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-8 group cursor-default">
              <span className="text-4xl font-light text-[#ff0000] scale-y-110">|</span>
              <span className="text-2xl font-black text-black uppercase tracking-tighter">
                Redlix<span className="text-[#ff0000]">.</span>
              </span>
            </div>
            
            <p className="text-xl font-bold text-gray-900 max-w-sm leading-tight mb-8 tracking-tight">
              We design and build <span className="text-[#ff0000]">custom software</span> that helps ambitious companies scale faster.
            </p>

            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-black transition-colors">
                <Twitter size={18} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-black transition-colors">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-black transition-colors">
                <Github size={18} />
              </Link>
            </div>
          </div>

          {/* STATUS SECTION */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-black text-[#ff0000] uppercase tracking-[0.3em] mb-8">Status</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-1 bg-gray-50 border border-gray-100 p-4 rounded-sm">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-600 ml-2">
                  Accepting New Projects
                </span>
              </div>
              
              {/* DEVELOPER PORTAL BUTTON */}
              <a 
                href="http://developer1.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-4 border border-black hover:bg-black hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Terminal size={14} className="text-[#ff0000]" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Developer Window</span>
                </div>
                <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {footerNavigation.map((section) => (
              <div key={section.title}>
                <h3 className="text-[10px] font-black text-black uppercase tracking-[0.3em] mb-8">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#ff0000] transition-colors"
                      >
                        <span className="w-0 h-[1px] bg-[#ff0000] group-hover:w-3 transition-all duration-300" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM UTILITY BAR */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-8 order-2 md:order-1">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              © {new Date().getFullYear()} Redlix
            </p>
            <div className="hidden md:flex items-center gap-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <Globe size={12} className="text-[#ff0000]" />
              <span>Global Operations</span>
            </div>
          </div>

          <div className="flex items-center gap-6 order-1 md:order-2">
            <div className="flex items-center gap-2 text-[10px] font-black text-black uppercase tracking-widest">
              <Clock size={12} className="text-[#ff0000]" />
              <span>{time}</span>
            </div>
            <div className="h-3 w-[1px] bg-gray-200" />
            <Link href="/contact" className="group flex items-center gap-1 text-[10px] font-black text-[#ff0000] uppercase tracking-widest">
              Get in touch
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            
            {/* BACK TO TOP BUTTON */}
            <button 
              onClick={scrollToTop}
              className="ml-4 p-2 border border-gray-200 hover:border-[#ff0000] hover:text-[#ff0000] transition-all group rounded-full"
              aria-label="Back to top"
            >
              <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}