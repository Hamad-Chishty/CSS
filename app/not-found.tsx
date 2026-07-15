'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, HelpCircle, CornerDownLeft, MessageSquare } from 'lucide-react';

export default function NotFound() {
  return (
    <div id="notfound-page-root" className="bg-[#1C1C1C] text-white min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Atmosphere glowing radial rings */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-xl mx-auto px-4 text-center space-y-8 relative z-10">
        <div className="space-y-4">
          <span className="text-8xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#FF6B00] to-[#FF8C39]">
            404
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            System Routing Outage
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-sm mx-auto">
            The database page address you requested does not exist in our system catalog. Let’s synchronize back to safety.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 max-w-xs mx-auto">
          <Link
            id="notfound-home-cta"
            href="/"
            className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-1.5"
          >
            <CornerDownLeft className="w-4 h-4" />
            <span>Sync to Homepage</span>
          </Link>
          <a
            id="notfound-wa-cta"
            href="https://wa.me/923006392025"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-xl text-center flex items-center justify-center space-x-1.5 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#FF6B00]" />
            <span>Consult Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
