'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Check, CheckCircle2, HelpCircle, MessageSquare, Shield, 
  Sparkles, Zap, ChevronRight, Landmark, Info
} from 'lucide-react';

export default function PricingPage() {
  
  const pricingTiers = [
    {
      name: 'Standard POS License',
      price: 'Contact Us',
      desc: 'Optimized for individual restaurants, cafes, pharmacies, and retail boutiques.',
      badge: 'Popular',
      ctaText: 'Get Standard Quote',
      features: [
        'Single Terminal billing license',
        'Offline-First local database fail-safe',
        'Universal thermal receipt printer compatibility',
        'Standard batch stock depletion & alerts',
        'End-of-day revenue reports on WhatsApp',
        'On-site installation & staff training'
      ]
    },
    {
      name: 'Multi-Branch Pro License',
      price: 'Contact Us',
      desc: 'Formulated for growing restaurant chains, supermarkets, and apparel networks.',
      badge: 'Chains Choice',
      ctaText: 'Get Multi-Branch Quote',
      features: [
        'Unlimited branch checkout terminals',
        'Central cloud synchronization dashboard',
        'Centralized item catalog distribution',
        'Advanced warehouse-to-warehouse stock transit logs',
        'Official Meta WhatsApp Business API alert dispatch',
        'Weekly audit reports & security permission matrices',
        'Dedicated SLA engineer priority channel'
      ]
    },
    {
      name: 'Custom Enterprise Suite',
      price: 'Bespoke',
      desc: 'For massive corporate divisions requiring tailored database structures, integrations, or custom desktop builds.',
      badge: 'Enterprise Only',
      ctaText: 'Consult Chief Developer',
      features: [
        'Bespoke database schema designing & coding',
        'Custom desktop packages (C++/Rust/C# compilation)',
        'Biometric device integration & custom payroll systems',
        'Localized SQL Server synchronization setups',
        'Complete systems source code transparency availability',
        'Dedicated Technical Account Manager (TAM)',
        '24/7/365 Custom SLA guarantee'
      ]
    }
  ];

  return (
    <div id="pricing-page-root" className="bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            Transparent Pricing
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Tailored Licensing, Clear Return
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Select the standard POS licensing structure for quick deployment, or collaborate on a fully tailored enterprise architecture built around your exact workflow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="pricing-cards-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, idx) => (
            <div 
              key={idx}
              className={`bg-gray-50 border rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:bg-white transition-all ${
                tier.badge === 'Chains Choice' 
                  ? 'border-[#FF6B00] lg:scale-105 relative bg-white' 
                  : 'border-gray-150'
              }`}
              id={`pricing-card-${idx}`}
            >
              {tier.badge === 'Chains Choice' && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                  {tier.badge}
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
                    {tier.name}
                  </h2>
                  <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <div className="py-4 border-y border-gray-100">
                  <span className="text-4xl font-black text-gray-900 font-mono tracking-tight block">
                    {tier.price}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold block mt-1">Flat Rate / Bespoke Agreements</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider font-mono">
                    What’s Included:
                  </h3>
                  {tier.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-start space-x-2.5">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs sm:text-sm font-medium">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-8 border-t border-gray-100">
                <a
                  id={`pricing-action-${idx}`}
                  href={`https://wa.me/923006392025?text=Hello,%20I%20want%20to%20get%20a%20pricing%20quote%20for%20the%20${encodeURIComponent(tier.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full font-bold text-sm py-4 px-4 rounded-xl text-center flex items-center justify-center space-x-2 transition-all ${
                    tier.badge === 'Chains Choice'
                      ? 'bg-[#FF6B00] hover:bg-[#FF8C39] text-white shadow-lg shadow-[#FF6B00]/20'
                      : 'bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{tier.ctaText}</span>
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
