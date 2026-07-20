'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  MessageSquare, Shield, QrCode, ArrowRight, Sparkles, CheckCircle2 
} from 'lucide-react';

export default function SolutionsPage() {
  const hubs = [
    {
      href: '/solutions/whatsapp-business-api',
      title: 'WhatsApp Business API',
      description: 'Automate transaction alerts, PDF bills, payment reminders, and interactive AI customer chat loops directly on the world’s most popular messaging channel.',
      icon: <MessageSquare className="w-8 h-8 text-[#25D366]" />,
      benefits: ['Official Meta API Verification', 'Instant PDF Bill Dispatching', 'Two-Way Live Customer Support Chat'],
      badge: 'Bestseller'
    },
    {
      href: '/solutions/qr-ordering-system',
      title: 'QR Ordering Solutions',
      description: 'Ditch physical menus. Power contactless tableside ordering, digital waiter calls, and immediate food department integrations with zero guest app installations.',
      icon: <QrCode className="w-8 h-8 text-[#FF6B00]" />,
      benefits: ['Frictionless Scanning Interface', 'Instant KDS Desk Synchronization', 'Splits & Table Mapping Systems'],
      badge: 'Hospitality-Specialized'
    },
    {
      href: '/solutions/payment-gateway-integration',
      title: 'Payment Gateway Integration',
      description: 'Synchronize physical bank terminals, mobile wallets, and global credit card networks with local ledger systems to secure transactions.',
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      benefits: ['Easypaisa & JazzCash Wallets', 'Stripe, PayPal, and Visa Systems', 'PCI-DSS Compliant Security'],
      badge: 'Enterprise-Grade'
    }
  ];

  return (
    <div id="solutions-hub-root" className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            INTEGRATED PLATFORMS
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl mx-auto">
            Technical Solutions For Hyper-Scaling Brands
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Ditch separate manual systems. We build official API links directly into your point-of-sale registers and financial ledgers to synchronize your business operations.
          </p>
        </div>
      </section>

      {/* Grid of Dedicated Solutions */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
            SELECT A SOLUTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
            Dedicated Technical Channels
          </h2>
          <p className="text-gray-500 text-sm">
            Click on any integration below to discover complete developer parameters, system mockups, structural benefits, and real-time operational workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hubs.map((hub, idx) => (
            <div 
              key={idx}
              className="bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden"
              id={`hub-card-${idx}`}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF6B00]/5 to-transparent rounded-full opacity-50 group-hover:scale-150 transition-transform"></div>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="p-4 bg-gray-50 border border-gray-100 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                    {hub.icon}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/5 px-2.5 py-1 rounded-full border border-[#FF6B00]/10">
                    {hub.badge}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors flex items-center gap-1">
                    {hub.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                    {hub.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-gray-100">
                  {hub.benefits.map((ben, bidx) => (
                    <div key={bidx} className="flex items-center space-x-2 text-xs text-gray-700 font-semibold">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href={hub.href}
                  className="w-full bg-[#1C1C1C] hover:bg-black text-white font-bold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-black/5 hover:shadow-black/15 transition-all"
                >
                  <span>Explore Parameters</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Solutions Quote Section */}
      <section className="bg-gray-50 py-20 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          <div className="p-2.5 bg-[#FF6B00]/10 rounded-full w-fit mx-auto text-[#FF6B00]">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Need a Bespoke Integration Not Listed?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our specialized frontend architects and backend engineers integrate custom hardware systems, government compliance portals (like FBR), localized courier networks, and custom enterprise databases.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/20 transition-all text-sm items-center space-x-2"
            >
              <span>Request Custom API Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
