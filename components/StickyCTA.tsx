'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ChevronRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function StickyCTA() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the sticky CTA after scrolling down 400px
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const [dismissed, setDismissed] = useState(false);

  if (!mounted || dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="sticky-demo-cta"
          initial={{ opacity: 0, x: -50, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -50, y: 10 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-6 z-50 hidden md:flex items-center gap-4 bg-black/90 backdrop-blur-md border border-white/10 text-white pl-4 pr-3 py-3 rounded-2xl shadow-2xl max-w-sm pointer-events-auto"
        >
          {/* Close button */}
          <button
            id="sticky-cta-close"
            onClick={() => setDismissed(true)}
            className="absolute -top-1.5 -right-1.5 bg-[#1C1C1C] border border-white/10 hover:border-white/20 text-gray-400 hover:text-white p-1 rounded-full shadow-lg transition-colors focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none"
            aria-label="Dismiss Live Demo offer"
          >
            <X className="w-3 h-3" />
          </button>

          {/* Icon */}
          <div className="w-10 h-10 bg-[#FF6B00]/10 border border-[#FF6B00]/20 rounded-xl flex items-center justify-center text-[#FF6B00] shrink-0" aria-hidden="true">
            <Calendar className="w-5 h-5 animate-pulse" />
          </div>

          {/* Text copy */}
          <div className="min-w-0 pr-2">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-ping" aria-hidden="true"></span>
              <span className="text-[10px] font-black tracking-widest text-[#FF6B00] uppercase font-mono">Live Demo Slots Open</span>
            </div>
            <h4 className="text-xs font-bold text-white tracking-tight mt-0.5 line-clamp-1">
              Explore Chishty POS Billing Suite
            </h4>
            <p className="text-[10px] text-gray-400 leading-relaxed line-clamp-1">
              Screen-share with Senior Frontend Architect
            </p>
          </div>

          {/* Action button */}
          <Link
            id="sticky-cta-action"
            href="/contact?demo=true"
            className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-extrabold text-xs px-3.5 py-2.5 rounded-xl flex items-center space-x-1 shadow-lg shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/30 transition-all shrink-0 focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
          >
            <span>Book Now</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
