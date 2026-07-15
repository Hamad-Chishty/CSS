'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  ShoppingBag, CheckCircle2, ChevronRight, MessageSquare, 
  Database, Shield, Sparkles, HardDrive, Cpu, Heart, Landmark, Briefcase, Zap, Flame, RefreshCw
} from 'lucide-react';

export default function ProductsPage() {
  
  const products = [
    {
      id: 'pos-restaurant',
      icon: <ShoppingBag className="w-8 h-8 text-[#FF6B00]" />,
      title: 'Restaurant & Cafe POS Suite',
      badge: 'Bestseller',
      tagline: 'Table orders, digital kitchen feeds, and QR ordering in absolute harmony.',
      desc: 'Formulated to handle high-frequency dinner rushes with ease. Keeps wait staff synchronized with chefs and speeds up table turnover by up to 35%.',
      bullets: [
        'Dynamic visual table map state editor',
        'Direct-to-kitchen printer (KDS) & Android support',
        'Bespoke loyalty management & customer discount mechanics',
        'Contactless digital QR scanning ordering platform',
        'Multi-terminal network billing state engine'
      ]
    },
    {
      id: 'pos-retail',
      icon: <HardDrive className="w-8 h-8 text-[#FF6B00]" />,
      title: 'Retail & Grocery POS System',
      badge: 'Enterprise-Grade',
      tagline: 'Lightning-fast checkout routines with instant multi-store stock audits.',
      desc: 'Capable of indexing up to 200,000 distinct SKU items effortlessly. Automates supplier replenishment, maps shelf space, and reduces queue overheads.',
      bullets: [
        'Frictionless barcode generation & digital scanning interfaces',
        'Real-time multi-branch warehouse synchronization',
        'Automated Purchase Orders (PO) based on min threshold alerts',
        'Integrated dynamic batch-number stock sorting',
        'Customer credit ledger (Khata) & outstanding accounts tracker'
      ]
    },
    {
      id: 'pos-pharmacy',
      icon: <Heart className="w-8 h-8 text-[#FF6B00]" />,
      title: 'Pharmacy & Medical Retail POS',
      badge: 'Compliance Locked',
      tagline: 'Strict batch scheduling, drug compound tracking, and expiration guardrails.',
      desc: 'Maintains meticulous pharmaceutical record safety. Features expiry countdown widgets, medical formula database search, and detailed supplier invoicing.',
      bullets: [
        'Automated early warnings for expiring drug batches',
        'Formula & drug generic substitution matcher',
        'Prescription image uploads and patient profiling',
        'Supplier batch purchase accounting matrix',
        'Locked access controls for narcotics & regulated medicines'
      ]
    },
    {
      id: 'erp-accounting',
      icon: <Landmark className="w-8 h-8 text-[#FF6B00]" />,
      title: 'Enterprise ERP & Financial Ledger',
      badge: 'All-In-One',
      tagline: 'Double-entry audit trails, dynamic fiscal mapping, and cash workflows.',
      desc: 'Centralize multi-tier business layers. Consolidate vendor logs, real-time capital ledgers, asset metrics, taxation, and detailed balance sheets.',
      bullets: [
        'Real-time trial balance, profit & loss statement generators',
        'Sales tax, GST, and custom taxation configurations',
        'Multi-warehouse transit tracking & logistics pipeline logs',
        'Automated bank reconciliation & cash flow forecasting',
        'Enterprise-grade audit logs showing chronological user operations'
      ]
    },
    {
      id: 'hr-payroll',
      icon: <Briefcase className="w-8 h-8 text-[#FF6B00]" />,
      title: 'HR & Automated Payroll Suite',
      badge: 'Workforce Suite',
      tagline: 'Biometric linkups, absolute salary formulas, and staff dashboards.',
      desc: 'Streamline staff coordination. Automatically calculate overtime metrics, track absences, configure custom bonus rules, and generate monthly payslips.',
      bullets: [
        'Compatible with biometric machines & dynamic face-scanners',
        'Bespoke salary structures (allowances, deductions, commissions)',
        'Staff leave management with sequential approval matrices',
        'One-click digital payslip distribution & banking spreadsheets',
        'Detailed performance audits and goal matrices'
      ]
    },
    {
      id: 'crm-custom',
      icon: <Zap className="w-8 h-8 text-[#FF6B00]" />,
      title: 'Desktop Software & Specialized CRM',
      badge: 'Custom Deployed',
      tagline: 'Unrestricted offline capabilities, custom data pipelines, & localized files.',
      desc: 'For environments where connection downtime is unacceptable. Built using optimized C++/Rust frameworks or high-speed localized architectures for flawless execution.',
      bullets: [
        'Secure SQLite/PostgreSQL localized instances for high safety',
        'Custom lead capture workflows and visual deal tracking stages',
        'Automated WhatsApp follow-up schedules and email loops',
        'Bespoke customer profile history panels',
        'Direct desktop API integrations with specialized hardware'
      ]
    }
  ];

  return (
    <div id="products-page-root" className="bg-white">
      
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            Our Software Roster
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Our Specialized POS & ERP Systems
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Engineered to remove friction from daily billing, logistics, and staff operations. Built to out-perform generic SaaS products through custom optimization.
          </p>
          <div className="flex justify-center pt-2">
            <a 
              id="products-hero-cta"
              href="https://wa.me/923006392025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/20 transition-all flex items-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Discuss Your Hardware compatible POS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Roster Listing */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {products.map((prod, idx) => (
          <div 
            key={prod.id} 
            id={prod.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gray-100 pb-20 last:border-0 last:pb-0 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Panel Mockup */}
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`} id={`prod-col-visual-${prod.id}`}>
              <div className="bg-gradient-to-tr from-gray-50 to-gray-100/50 border border-gray-200/60 rounded-3xl p-8 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-4 right-4 bg-white border border-gray-100 px-3 py-1 rounded-full text-[10px] font-bold text-gray-400">
                  CSS ENGINE v4
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100/80 mb-6 flex items-center space-x-4">
                  <div className="p-3 bg-[#FF6B00]/10 rounded-xl">
                    {prod.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{prod.title}</h4>
                    <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-0.5">
                      <RefreshCw className="w-3 h-3 animate-spin" /> Real-time active database
                    </span>
                  </div>
                </div>
                
                {/* Visual metric list */}
                <div className="space-y-3">
                  <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                  <div className="h-2 bg-gray-100 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>

            {/* Content copy */}
            <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-1' : ''}`} id={`prod-col-content-${prod.id}`}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                    {prod.badge}
                  </span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <span className="text-xs text-gray-400 font-medium font-mono">CODE: {prod.id.toUpperCase()}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {prod.title}
                </h2>
                <p className="text-base text-gray-500 italic font-medium">
                  &ldquo;{prod.tagline}&rdquo;
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {prod.desc}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {prod.bullets.map((bullet, bidx) => (
                    <div key={bidx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs sm:text-sm font-medium leading-tight">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link
                    id={`prod-btn-demo-${prod.id}`}
                    href={`/contact?product=${prod.id}`}
                    className="bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-black/5 text-center transition-colors"
                  >
                    Schedule Live Feature Demo
                  </Link>
                  <a
                    id={`prod-btn-wa-${prod.id}`}
                    href={`https://wa.me/923006392025?text=Hello,%20I%20am%20interested%20in%20your%20${encodeURIComponent(prod.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm px-6 py-3 rounded-xl text-center flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#FF6B00]" />
                    <span>Get Pricing on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* Trust Callout */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Need a hardware integration?
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Our systems seamlessly connect with industry-standard barcode printers, receipt thermal paper devices, cash registers, electronic scales, biometric registers, and magnetic card swipes.
          </p>
          <Link
            id="products-hardware-cta"
            href="/contact"
            className="text-sm font-bold text-[#FF6B00] hover:text-[#FF8C39] inline-flex items-center"
          >
            <span>Ask about Hardware compatibility matrix</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

    </div>
  );
}
