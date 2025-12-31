"use client";

import { motion } from 'framer-motion';

export default function ScrollingBar({ 
  items = [
    'Enterprise Grade',
    'Certified',
    'Scalable',
    'SEO Optimized',
    'AI Powered',
    'Global Security',
    '24/7 Support',
  ],
  speed = 30
}) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative w-full border-y-2 border-black bg-black py-4 overflow-hidden">
      <div className="flex w-max items-center">
        <motion.div 
          className="flex items-center gap-12 pr-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: speed, repeat: Infinity }}
        >
          {duplicatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-12 whitespace-nowrap group">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-white hover:text-[#ff0000] transition-colors cursor-default">
                {item}
              </span>
              <span className="text-[#ff0000] text-xl font-black">/</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}