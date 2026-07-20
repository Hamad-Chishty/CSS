'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a helpful chat tooltip after 4 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id="wa-floating-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none"
    >
      {/* Interactive Tooltip Card */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            id="wa-tooltip-card"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="pointer-events-auto mb-3 bg-[#1C1C1C] text-white p-4 rounded-2xl shadow-2xl border border-white/10 max-w-[280px] flex flex-col space-y-3 relative"
          >
            <button 
              id="wa-tooltip-close"
              onClick={() => setShowTooltip(false)}
              className="absolute top-2.5 right-2.5 text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none rounded-full p-0.5"
              aria-label="Close message"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full absolute"></span>
              <p className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider">Online Now</p>
            </div>
            <p className="text-sm text-gray-200">
              Need instant assistance with our POS or custom software development? Chat with our specialist!
            </p>
            <a
              id="wa-tooltip-action"
              href="https://wa.me/923006392025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium text-xs py-2 px-3 rounded-xl flex items-center justify-center space-x-1.5 transition-colors self-start focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1C1C] focus-visible:outline-none"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button */}
      <motion.a
        id="wa-floating-btn"
        href="https://wa.me/923006392025"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl flex items-center justify-center relative group transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:outline-none"
        aria-label="Contact us on WhatsApp"
      >
        {/* Soft breathing radial ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
        <MessageSquare className="w-6 h-6 relative z-10" />
      </motion.a>
    </div>
  );
}
