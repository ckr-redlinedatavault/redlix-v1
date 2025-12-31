"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  ShieldAlert, 
  FileText, 
  Server, 
  Bug, 
  Settings, 
  ArrowRight, 
  Activity, 
  Terminal, 
  ArrowUpRight, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Loader2, 
  RefreshCw,
  Clock,
  Hash
} from 'lucide-react';

export default function TicketTerminalPage() {
  const [time, setTime] = useState("");
  const [ticketId, setTicketId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    subject: '',
    description: '',
    type: 'support'
  });

  // 1. Generate Ticket ID and Clock on Mount
  useEffect(() => {
    const generateId = () => {
      const num = Math.floor(1000 + Math.random() * 9000);
      setTicketId(`RX-${num}-LT`);
    };
    
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    };

    generateId();
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const ticketTypes = [
    { value: 'bug', label: 'Bug Report', icon: Bug, code: 'ERR_LOG' },
    { value: 'feature', label: 'Feature', icon: FileText, code: 'REQ_NEW' },
    { value: 'support', label: 'Technical', icon: Settings, code: 'SYS_HLP' },
    { value: 'server', label: 'Infrastructure', icon: Server, code: 'SRV_OPS' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white selection:bg-[#ff0000] selection:text-white overflow-hidden">
      <Navbar />
      
      {/* --- SECTION 1: BLUEPRINT HERO --- */}
      <section className="relative pt-32 pb-12 border-b border-gray-100">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:40px_40px]" />
          <motion.div className="absolute top-10 left-0 text-[18vw] font-black text-black select-none italic tracking-tighter leading-none">
            SUPPORT
          </motion.div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-light text-[#ff0000]">|</span>
                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-500">Node Dispatch Center</span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-black text-black leading-[0.9] tracking-tighter uppercase mb-6">
                INTAKE <span className="text-[#ff0000]">TERMINAL.</span>
              </h1>
            </div>
            
            <div className="flex flex-col items-end gap-1 pb-2 text-right">
               <div className="flex items-center gap-2 text-[9px] font-black text-[#ff0000] tracking-widest uppercase mb-1">
                  <Activity size={12} className="animate-pulse" /> Uplink: Established
               </div>
               <div className="text-2xl font-black text-black tracking-tighter">{time || "00:00:00"}</div>
               <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">GMT +00:00</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE INTAKE TERMINAL --- */}
      <section className="py-16 bg-white relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-50 border border-gray-100 shadow-sm overflow-hidden min-h-[550px] flex flex-col">
            
            {/* Header Status Strip with LIVE TICKET ID */}
            <div className="bg-black p-4 flex justify-between items-center shrink-0">
               <div className="flex items-center gap-6">
                 <div className="flex items-center gap-2">
                   <Terminal size={14} className="text-[#ff0000]" />
                   <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">
                     {isSubmitted ? "Uplink_Complete" : "Intake_Active"}
                   </span>
                 </div>
                 {/* LIVE ID DISPLAY DURING FILLING */}
                 <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10">
                    <Hash size={10} className="text-[#ff0000]" />
                    <span className="text-[10px] font-mono text-white/80 font-bold">{ticketId}</span>
                 </div>
               </div>

               <div className="flex gap-4 items-center">
                 <div className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${isSubmitted ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
                    <span className="text-[8px] font-black text-white/40 uppercase">{isSubmitted ? 'Verified' : 'Pending'}</span>
                 </div>
                 <div className="w-px h-3 bg-white/10" />
                 <div className="text-[8px] font-black text-[#ff0000] uppercase tracking-widest">Dev_v2.0.4</div>
               </div>
            </div>

            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="ticket-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-8 md:p-12 space-y-12" 
                    onSubmit={handleSubmit}
                  >
                    {/* Visual Metadata Panel inside Form */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                       <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10">
                          <div className="space-y-1 group">
                            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Operator Name</label>
                            <input required name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Enter full name" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#ff0000] outline-none font-bold text-black transition-all placeholder:text-gray-200" />
                          </div>
                          <div className="space-y-1 group">
                            <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Company ID</label>
                            <input required name="company" value={formData.company} onChange={handleInputChange} type="text" placeholder="Entity name" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#ff0000] outline-none font-bold text-black transition-all placeholder:text-gray-200" />
                          </div>
                       </div>

                       {/* SESSION SIDEBAR */}
                       <div className="bg-white border border-gray-100 p-4 flex flex-col justify-between">
                          <div>
                            <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Active_Session_ID</span>
                            <div className="text-xl font-mono font-black text-black mt-1">{ticketId}</div>
                          </div>
                          <div className="pt-4 border-t border-gray-50 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                             <span className="text-[8px] font-black uppercase text-gray-500">Tracking Enabled</span>
                          </div>
                       </div>
                    </div>

                    <div>
                      <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-6">Execution Module</label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {ticketTypes.map((type) => (
                          <button key={type.value} type="button" onClick={() => setFormData({...formData, type: type.value})} className={`p-6 border-2 flex flex-col items-center gap-3 transition-all ${formData.type === type.value ? 'border-[#ff0000] bg-white shadow-xl -translate-y-1' : 'border-gray-100 bg-white/50 opacity-60 hover:opacity-100'}`}>
                            <type.icon size={18} className={formData.type === type.value ? 'text-[#ff0000]' : 'text-black'} />
                            <div className="text-center">
                              <div className="text-[9px] font-black text-black uppercase">{type.label}</div>
                              <div className="text-[7px] font-bold text-[#ff0000] tracking-widest">{type.code}</div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-8">
                      <div className="space-y-1 group">
                        <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Issue Subject</label>
                        <input required name="subject" value={formData.subject} onChange={handleInputChange} type="text" placeholder="Summary of technical obstacle" className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#ff0000] outline-none font-bold text-black transition-all placeholder:text-gray-200" />
                      </div>
                      <div className="space-y-1 group">
                        <label className="text-[9px] font-black text-gray-400 uppercase tracking-widest block">Full Description</label>
                        <textarea required name="description" value={formData.description} onChange={handleInputChange} rows={3} placeholder="Logs or specific behavior..." className="w-full bg-transparent border-b border-gray-200 py-2 focus:border-[#ff0000] outline-none font-medium text-black transition-all resize-none placeholder:text-gray-200" />
                      </div>
                    </div>

                    <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                      <div className="flex items-center gap-6">
                         <div className="flex items-center gap-2">
                            <ShieldAlert size={16} className="text-[#ff0000]" />
                            <span className="text-[9px] font-black text-black uppercase tracking-widest">Priority Sync Active</span>
                         </div>
                      </div>

                      <button disabled={isSubmitting} type="submit" className="group relative bg-black text-white px-12 py-5 overflow-hidden transition-all min-w-[200px] flex justify-center items-center shadow-2xl">
                        {isSubmitting ? (
                          <Loader2 className="w-5 h-5 animate-spin text-[#ff0000]" />
                        ) : (
                          <>
                            <div className="absolute inset-0 w-0 bg-[#ff0000] transition-all duration-500 group-hover:w-full" />
                            <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-4">
                              Commit Ticket <ArrowUpRight size={16} />
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  /* --- SUCCESS VIEW --- */
                  <motion.div 
                    key="success-view"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 p-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-20 h-20 bg-black flex items-center justify-center mb-8 relative">
                       <CheckCircle2 className="text-green-500 w-10 h-10" />
                       <div className="absolute inset-0 border border-[#ff0000] animate-ping opacity-20" />
                    </div>
                    
                    <h2 className="text-4xl font-black text-black uppercase tracking-tighter mb-4">
                      Packet <span className="text-[#ff0000]">Received.</span>
                    </h2>
                    
                    <div className="bg-white border border-gray-200 p-6 max-w-sm w-full mb-8 shadow-sm">
                       <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-2">Final ID Confirmation</div>
                       <div className="text-2xl font-mono font-black text-black">{ticketId}</div>
                       <div className="h-px bg-gray-100 my-4" />
                       <p className="text-[11px] text-gray-500 font-bold uppercase leading-relaxed">
                         Transmission routed to Hyderabad Engineering Node. Estimated resolution window: 24 Hours.
                       </p>
                    </div>

                    <button 
                      onClick={() => {
                        const num = Math.floor(1000 + Math.random() * 9000);
                        setTicketId(`RX-${num}-LT`);
                        setIsSubmitted(false);
                      }}
                      className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-[#ff0000] hover:text-black transition-colors"
                    >
                      <RefreshCw size={14} /> Reset Terminal
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: SYSTEM INTEGRITY BAR --- */}
      <section className="bg-gray-50 py-10 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60">
             {[
               { label: 'Uptime Protocol', val: '99.9%', icon: Activity },
               { label: 'Latency Node', val: '< 14ms', icon: Cpu },
               { label: 'Encrypted Link', val: 'Active', icon: Layers },
               { label: 'Base Region', val: 'India', icon: Globe }
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-3">
                 <item.icon size={14} className="text-[#ff0000]" />
                 <div className="flex flex-col">
                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">{item.label}</span>
                    <span className="text-sm font-black text-black leading-none">{item.val}</span>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Minimalist Globe Helper
function Globe({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}