'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  MessageSquare, Shield, QrCode, CheckCircle2, ArrowRight, 
  ChevronRight, RefreshCw, Send, Lock, Eye, Play, Sparkles
} from 'lucide-react';

export default function SolutionsPage() {
  
  const solutions = [
    {
      id: 'whatsapp-integration',
      icon: <MessageSquare className="w-10 h-10 text-[#25D366]" />,
      title: 'WhatsApp Business API Integration',
      tagline: 'Automate transaction alerts, payment notifications, and interactive bots.',
      desc: 'Our POS and ERP engines connect directly with the official Meta WhatsApp Business API. Trigger real-time PDFs of invoices, dispatch alerts, payment links, and low-stock alerts straight to your clients’ WhatsApp accounts.',
      specs: [
        'Automated receipt PDF generation & dispatch upon billing',
        'Interactive AI chat bots for basic customer order status',
        'Custom template workflows with strict Meta approval support',
        'Bulk marketing campaigns with full user list safety controls',
        'Two-way staff chat synchronization with CRM databases'
      ],
      ctaText: 'Integrate WhatsApp Corporate Channel'
    },
    {
      id: 'payment-gateways',
      icon: <Shield className="w-10 h-10 text-orange-500" />,
      title: 'Local & Global Payment Gateway Integration',
      tagline: 'Secure, encrypted card, wallet, and bank transfer syncs.',
      desc: 'Connect physical credit card readers, online checkout carts, and banking transfers with your system ledgers. We synchronize local payment networks with your daily bookkeeping, preventing employee manual entry errors.',
      specs: [
        'PCI-DSS compliant encrypted payment loops',
        'Synchronized local wallets (Easypaisa, JazzCash, HBL, UBL)',
        'Global integration pathways (Stripe, PayPal, Checkout.com)',
        'Direct connection with standard physical bank credit card swipes',
        'Automated ledger double-entry posting upon payment clearance'
      ],
      ctaText: 'Configure Payment Sync'
    },
    {
      id: 'qr-ordering',
      icon: <QrCode className="w-10 h-10 text-[#FF6B00]" />,
      title: 'QR Code Dynamic Ordering Solutions',
      tagline: 'Contactless, beautiful digital dining menus and immediate billings.',
      desc: 'Specially engineered for premium hospitality structures. Guests scan table-side QR codes to access high-definition digital menus with rich allergen and chef note displays. Orders sync directly to kitchen monitors without staff intervention.',
      specs: [
        'Frictionless QR scanning with zero app downloads required',
        'Real-time chef modifier selection and ingredient controls',
        'Immediate kitchen printing (KDS) upon order completion',
        'Integrated split-bill calculator & checkout portals',
        'Automated table availability maps on parent POS'
      ],
      ctaText: 'Deploy QR Dining Solutions'
    }
  ];

  return (
    <div id="solutions-page-root" className="bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            Technical Integrations
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Seamless Digital Integrations
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Eliminate double-handling of data. We wire specialized API channels directly into your central billing ledger and customer dashboard.
          </p>
        </div>
      </section>

      {/* Solutions Listings */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {solutions.map((sol, idx) => (
          <div 
            key={sol.id} 
            id={sol.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Panel */}
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`} id={`sol-visual-${sol.id}`}>
              <div className="bg-gray-50 border border-gray-150 rounded-3xl p-8 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4 bg-white rounded-2xl w-16 h-16 flex items-center justify-center shadow-sm border border-gray-100 mb-6">
                  {sol.icon}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>STATUS</span>
                    <span className="text-emerald-500 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span> META-VERIFIED API
                    </span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-gray-100/60 flex items-center justify-between">
                    <span className="text-xs font-mono text-gray-500">Latency Threshold</span>
                    <span className="text-xs font-mono font-bold text-gray-900">&lt; 120ms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Copy */}
            <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-1' : ''}`} id={`sol-content-${sol.id}`}>
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] font-mono">
                  SOLUTION: 0{idx + 1}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {sol.title}
                </h2>
                <p className="text-base text-gray-500 italic font-medium">
                  &ldquo;{sol.tagline}&rdquo;
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {sol.desc}
                </p>

                <div className="space-y-3 pt-2">
                  {sol.specs.map((spec, sidx) => (
                    <div key={sidx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs sm:text-sm font-medium leading-tight">
                        {spec}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link
                    id={`sol-btn-demo-${sol.id}`}
                    href={`/contact?solution=${sol.id}`}
                    className="bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg text-center transition-colors"
                  >
                    {sol.ctaText}
                  </Link>
                  <a
                    id={`sol-btn-wa-${sol.id}`}
                    href={`https://wa.me/923006392025?text=Hi,%20I%20am%20interested%20in%20your%20${encodeURIComponent(sol.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 font-semibold text-sm px-6 py-3.5 rounded-xl text-center flex items-center justify-center space-x-1.5 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#FF6B00]" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

    </div>
  );
}
