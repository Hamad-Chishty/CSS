'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  CheckCircle2, ArrowUpRight, MessageSquare, Briefcase, 
  ChevronRight, Sparkles, ShoppingBag, Database, Layout, Eye, Shield
} from 'lucide-react';

export default function PortfolioPage() {
  
  const caseStudies = [
    {
      title: 'BakeWay Premium POS & Inventory Network',
      industry: 'Bakery & Sweets Chain',
      desc: 'Re-engineered payment routes and consolidated live ingredients depleting rules across 14 separate kitchen outlets.',
      metricValue: '+34%',
      metricLabel: 'Checkout Velocity Increase',
      specs: ['Offline-First SQLite sync databases', 'Automated purchase notifications', 'Hardware weighing scale connection', 'Daily sales ledger audits']
    },
    {
      title: 'AeroPOS Global Retail Network',
      industry: 'Multi-Branch Garments & Apparel',
      desc: 'Standardized inventory catalogs for 25 separate branches, syncing stock depletion speeds and regional credit ledgers.',
      metricValue: '25+',
      metricLabel: 'Warehouses Synchronized',
      specs: ['Central barcode catalog matrices', 'Staff role permission panels', 'Khata credit ledger database', 'Dynamic bulk receipt printing']
    },
    {
      title: 'PharmaCare Central Cloud Sync',
      industry: 'Pharmacy & Drug Chain',
      desc: 'Formulated batch serial indexing and automated early warnings for pharmaceutical expiries, saving millions in stock loss.',
      metricValue: '100%',
      metricLabel: 'Expiry Auditing Compliance',
      specs: ['Drug batch serial matching databases', 'Supplier credit transaction ledgers', 'Biometric employee clock-ins', 'Meta WhatsApp API receipts']
    },
    {
      title: 'The Grand Bistro Contactless QR Hub',
      industry: 'Hospitality & Dining',
      desc: 'Deployed interactive dining table map states and dynamic contactless menu ordering, boosting table turnovers by 22%.',
      metricValue: '-40%',
      metricLabel: 'Customer Wait Times',
      specs: ['No-app QR dining menus', 'Dynamic kitchen monitor feeds', 'Split-billing calculator matrices', 'JazzCash & Card checkout options']
    }
  ];

  return (
    <div id="portfolio-page-root" className="bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            Technical Portfolio
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Proven Systems, Pristine Scale
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Deconstruct how our enterprise POS and custom ERP systems operate inside active, high-volume retail hubs and hospitality locations.
          </p>
        </div>
      </section>

      {/* Roster list of projects */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="portfolio-list-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {caseStudies.map((study, idx) => (
            <div 
              key={idx}
              className="group bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Header metrics */}
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#FF6B00] uppercase tracking-wider block">
                      {study.industry}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight mt-1 group-hover:text-[#FF6B00] transition-colors">
                      {study.title}
                    </h2>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-black text-[#FF6B00] font-mono block">
                      {study.metricValue}
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase block">
                      {study.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Main Graphic Placeholder Card */}
                <div className="aspect-video bg-gray-100/50 border border-gray-150 rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/5 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-[#1C1C1C]/80 text-white px-3 py-1 rounded-full text-[10px] font-mono">
                    STATUS: ACTIVE SYSTEM
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {study.desc}
                </p>

                {/* Spec List */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  {study.specs.map((spec, sidx) => (
                    <div key={sidx} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span className="text-gray-700 text-xs font-medium">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action buttons */}
              <div className="pt-8 flex items-center justify-between border-t border-gray-100 mt-8">
                <Link 
                  href="/case-studies"
                  className="text-sm font-bold text-gray-900 hover:text-[#FF6B00] inline-flex items-center group/link"
                >
                  <span>Read Complete Case Study</span>
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-all" />
                </Link>
                <a
                  id={`portfolio-wa-${idx}`}
                  href={`https://wa.me/923006392025?text=Hi,%20I%20am%20interested%20in%20the%20${encodeURIComponent(study.title)}%20setup`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white hover:bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center text-[#FF6B00] transition-colors"
                  aria-label="Ask on WhatsApp"
                >
                  <MessageSquare className="w-5 h-5" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
