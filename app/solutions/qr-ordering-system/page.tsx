'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  QrCode, Sparkles, CheckCircle2, ShieldCheck, HelpCircle, 
  ArrowRight, Phone, Clock, FileText, Check, Cpu, Building2, 
  Users, Layers, AlertCircle, Play, Smartphone, ChefHat, Bell, 
  Settings, CreditCard, Languages, Compass, FileSpreadsheet, MessageSquare
} from 'lucide-react';

export default function QROrderingSystemPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    whatsapp: '',
    email: '',
    outletCount: '1',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState<number | null>(null);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://chishtysmartsolutions.com/'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Solutions',
        'item': 'https://chishtysmartsolutions.com/solutions'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'QR Ordering Solutions',
        'item': 'https://chishtysmartsolutions.com/solutions/qr-ordering-system'
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'QR Ordering Solutions',
    'description': 'Contactless high-definition digital menu and table-side ordering system. Integrates directly with kitchen display monitors (KDS) and point-of-sale registers.',
    'provider': {
      '@type': 'Organization',
      'name': 'Chishty Smart Solutions',
      'url': 'https://chishtysmartsolutions.com'
    },
    'areaServed': 'Worldwide'
  };

  const faqItems = [
    {
      question: 'Do customers need to download an application to scan and order?',
      answer: 'Absolutely not. Our QR Dining system runs on modern browser technology. Guests simply open their smartphone camera app, scan the tableside QR, and are instantly redirected to your gorgeous web-based digital menu without installing anything.'
    },
    {
      question: 'How do the waiters know which table placed an order?',
      answer: 'Each physical table in your restaurant is printed with a uniquely serialized QR code. When scanned, our backend maps the customer’s active browser token directly with that specific table number (e.g. Table 14). Orders and Waiter Call alerts are labeled automatically.'
    },
    {
      question: 'Can we edit menus or change prices dynamically during holidays?',
      answer: 'Yes. Menu modifications, item toggles, pricing tier configurations, and holiday discount banners update across all table QR codes instantly with a single click inside your master POS administrative desk.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketId(Math.floor(Math.random() * 90000) + 10000);
    setSubmitted(true);
  };

  return (
    <div className="bg-white" id="qr-ordering-system-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full border border-[#FF6B00]/20">
                Contactless Dining Tech
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                Contactless <span className="text-[#FF6B00]">QR Ordering</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Empower diners to scan, view menus in high-definition, place orders straight to kitchen chefs, call waiters, and pay securely without server delays.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#inquiry-form"
                  className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold text-center px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/20 transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Deploy QR Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923006392025?text=Hi,%20I%20want%20to%20integrate%20the%20QR%20Ordering%20system%20for%20my%20restaurant."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-center px-8 py-4 rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span>Chat with Specialist</span>
                </a>
              </div>
            </div>

            {/* Hero Right Mockup: Smartphone Menu view next to live table status */}
            <div className="lg:col-span-6" id="qr-hero-mockup-wrapper">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FF6B00] to-[#FF8C39] opacity-25 blur-lg" aria-hidden="true"></div>
                <div className="relative bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl text-xs text-gray-300 font-mono">
                  {/* Mockup Header */}
                  <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-[10px] text-gray-500 ml-2">CHISHTY_QR_MENU_v2.0</span>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-bold">
                      GUEST VIEW
                    </span>
                  </div>

                  {/* Split Dashboard layout */}
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
                    {/* Left side: Smartphone menu display emulator */}
                    <div className="md:col-span-6 p-4 border-r border-white/5 bg-[#141414] flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="text-[10px] font-bold text-white border-b border-white/5 pb-1 flex justify-between">
                          <span>📍 TABLE 08</span>
                          <span className="text-orange-500">ENG / AR</span>
                        </div>
                        
                        {/* Pizza Item detail */}
                        <div className="bg-white/5 p-2 rounded border border-white/5 space-y-1">
                          <p className="text-white font-bold font-sans text-xs">Fajita Supreme Pizza</p>
                          <p className="text-[9px] text-gray-500">Grilled chicken, onions, extra cheese, classic thin crust.</p>
                          <div className="flex justify-between items-center pt-1">
                            <span className="text-orange-400 font-bold font-sans">Rs. 1,450</span>
                            <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-[9px] font-bold font-sans cursor-pointer">+ ADD</span>
                          </div>
                        </div>

                        {/* Drinks item */}
                        <div className="bg-white/5 p-2 rounded border border-white/5 space-y-1">
                          <p className="text-white font-bold font-sans text-xs">Mint Margarita Refresh</p>
                          <div className="flex justify-between items-center pt-1">
                            <span className="text-orange-400 font-bold font-sans">Rs. 380</span>
                            <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-[9px] font-bold font-sans cursor-pointer">+ ADD</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-emerald-600 text-center text-white py-2 rounded-lg font-bold font-sans cursor-pointer">
                        PLACE ORDER (Rs. 1,830)
                      </div>
                    </div>

                    {/* Right side: Kitchen Display feedback */}
                    <div className="md:col-span-6 p-4 space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="text-white font-bold">KITCHEN TERMINAL</span>
                        <span className="text-emerald-500 text-[8px] font-bold animate-pulse">● FEED ONLINE</span>
                      </div>

                      <div className="space-y-2">
                        <div className="bg-white/5 p-2.5 rounded-lg border border-white/5 text-[9px]">
                          <p className="text-[#FF6B00] font-bold font-sans text-[10px]">NEW: T-08 (1m ago)</p>
                          <div className="text-gray-300 space-y-1 mt-1 font-sans">
                            <p>1x Fajita Supreme Pizza</p>
                            <p>1x Mint Margarita Refresh</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE FEATURES SECTION */}
      <section className="py-24 bg-white border-b border-gray-100" id="qr-features-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Full Channel Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Interactive Digital Dining Features
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ditch slow manual waiters and dirty plastic menus. Give your guests an eye-safe, blazing fast interface to browse, call, track, and settle their dining bills in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'High-Definition Digital Menu',
                description: 'Display stunning food item photos, specify raw allergen warnings, insert custom chef suggestions, and configure pricing modifiers.',
                icon: <Smartphone className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Direct Table Ordering Integration',
                description: 'Each table has a unique printed QR code. Scanned orders sync with exact seating coordinates, sending tickets directly to the kitchen display (KDS).',
                icon: <QrCode className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Instant Waiter Call Alert',
                description: 'Guests can click a "Call Waiter" or "Request Water" button on their phone. POS register alerts physical servers immediately with table IDs.',
                icon: <Bell className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Secure Online Table Payments',
                description: 'Diners pay instantly on the browser screen. Connect local wallets (Easypaisa, JazzCash) or secure card processors directly to close table bills.',
                icon: <CreditCard className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Fully Custom Brand Designs',
                description: 'Incorporate your exact cafe colors, logo headers, font sizes, custom backgrounds, and brand banners with zero software branding overlays.',
                icon: <Settings className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Multi-Language Support (Eng / Ar)',
                description: 'Diners can switch between English, Urdu, or Arabic interfaces in one click, translating item descriptions instantly to ease order barriers.',
                icon: <Languages className="w-6 h-6 text-[#FF6B00]" />
              }
            ].map((feat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-[#FF6B00]/10 rounded-2xl w-fit text-[#FF6B00]">
                    {feat.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg">{feat.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{feat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS USE CASES */}
      <section className="py-20 lg:py-24 bg-gray-50 border-b border-gray-100" id="use-cases-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Sectors We Empower
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Tailored Layouts For Hospitality
            </h2>
            <p className="text-gray-500 text-sm">
              We configure the interface behavior to align with your service style.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Premium Fine Dining Hotels',
                role: 'DIGITAL LOOKBOOKS',
                desc: 'Utilized as a luxury look-up menu. Guests view courses in high definition, track raw allergen components, and call servers manually to discuss wine and meat cuts.',
                benefit: 'Enhances luxury aesthetic and builds menu confidence.'
              },
              {
                title: 'High-Volume Cafes & Bistros',
                role: 'TABLESIDE QUICK COVERS',
                desc: 'Diners scan, place orders directly, and make advance payments via mobile wallets. Food tickets feed instantly to the bar barista with zero delays.',
                benefit: 'Accelerates seating table turn times by 35%.'
              },
              {
                title: 'Quick Service Food Courts (QSR)',
                role: 'COUNTER-LESS CHECKOUTS',
                desc: 'Patrons scan QR codes displayed on standing poster boards, order from multiple vendors on a single portal, and receive queue pickup buzzer alerts.',
                benefit: 'Completely eliminates long cashier check queues.'
              }
            ].map((uc, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 space-y-6 shadow-sm hover:shadow-md transition-all">
                <span className="text-[10px] font-mono font-extrabold text-[#FF6B00] bg-[#FF6B00]/5 px-2.5 py-1 rounded-full border border-[#FF6B00]/10 uppercase">
                  {uc.role}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{uc.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{uc.desc}</p>
                <div className="pt-4 border-t border-gray-50 text-xs text-[#FF6B00] font-bold flex items-center gap-1.5">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{uc.benefit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. METRICS / BENEFITS SECTION */}
      <section className="py-24 bg-white border-b border-gray-100" id="benefits-metrics-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <span className="text-[#FF6B00] font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5" /> Restaurant Business Performance
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-none">
                Boost Sales Metrics And Settle Tables Faster
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                By allowing customers to add items to their digital plates on their own, our QR system eliminates order delays and drives up average basket size through automated side-dish cross-selling parameters.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150">
                  <div className="text-4xl font-black text-[#FF6B00] font-sans">22%</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">Average Order Increase</div>
                  <p className="text-gray-500 text-[11px] mt-1">Automated dessert & beverage pop-ups prompt guests during checkouts.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150">
                  <div className="text-4xl font-black text-emerald-500 font-sans">3x</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">Faster Waiter Coverages</div>
                  <p className="text-gray-500 text-[11px] mt-1">Waiters only cover dishes and payments, avoiding manual taking tasks.</p>
                </div>
              </div>
            </div>

            {/* Screenshots / Mockups section */}
            <div className="relative" id="qr-sc-mockup">
              <div className="bg-[#1C1C1C] rounded-3xl p-6 border border-white/10 shadow-2xl relative">
                <span className="absolute top-4 left-4 bg-[#FF6B00]/20 border border-[#FF6B00]/30 px-2 py-0.5 rounded text-[8px] font-mono text-[#FF6B00] font-bold uppercase">
                  Production Terminal
                </span>
                <div className="mt-6 bg-[#121212] rounded-2xl p-4 font-mono text-[11px] text-gray-400 space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-white font-bold">QR DATABASE ENGINE: LIVE_SYNC</span>
                    <span className="text-gray-500 text-[9px]">PING_OK</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-orange-400"># Mapping serialized QR keys to table matrix...</p>
                    <p className="text-white">- Table 01 (Key: CSS_QR_T01) → Active</p>
                    <p className="text-white">- Table 02 (Key: CSS_QR_T02) → Active</p>
                    <p className="text-white">- Table 03 (Key: CSS_QR_T03) → Active</p>
                    <p className="text-emerald-500">⚡ Webhook Live: Redirecting menu calls directly to local KDS monitors</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="qr-timeline-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Operation Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              The 4-Step QR Guest Experience
            </h2>
            <p className="text-gray-500 text-sm">
              Frictionless, beautiful, and completely instant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Scan QR Code',
                desc: 'Guests sit at their table and scan the custom high-contrast QR plate with their phone camera.'
              },
              {
                step: '02',
                title: 'Browse & Modify',
                desc: 'The beautiful digital menu loads in 0.4s. Guests select items, add modifiers, or leave custom chef requests.'
              },
              {
                step: '03',
                title: 'Instant KDS Feed',
                desc: 'With a single checkout click, the order spits out on the designated kitchen display monitor in real-time.'
              },
              {
                step: '04',
                title: 'Flexible Pay',
                desc: 'When finished, guests can call servers for cash settlement, or clear payments online instantly.'
              }
            ].map((proc, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-sans font-black text-[#FF6B00]/20 absolute top-4 right-6">{proc.step}</div>
                <div className="space-y-3 pt-6">
                  <h3 className="text-gray-900 font-bold text-base sm:text-lg">{proc.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ DATABASE */}
      <section className="py-24 bg-white border-b border-gray-100" id="qr-faq-sec">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Faq Database
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              QR Ordering Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 border border-gray-150 rounded-2xl overflow-hidden shadow-sm transition-all"
                id={`faq-card-${idx}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-extrabold text-sm sm:text-base text-gray-900">{faq.question}</span>
                  <HelpCircle className={`w-5 h-5 text-[#FF6B00] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-gray-100 bg-white"
                    >
                      <p className="p-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. INTEGRATED CONTACT FORM */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="inquiry-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-150 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/5 rounded-full blur-2xl"></div>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" id="qr-inquiry-form-element">
                <div className="text-center space-y-2 mb-8">
                  <span className="text-[#FF6B00] text-xs font-mono font-extrabold uppercase tracking-widest block">LAUNCH QR PLATFORM</span>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Deploy Contactless Dining Menu</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">Submit your outlet scale. Our systems engineer will deploy a live custom-styled test menu link in 1 hour.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="e.g., Hamad Waheed"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="companyName">Restaurant/Cafe Name</label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      placeholder="e.g., Savour Food Cafe"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="whatsapp">WhatsApp Phone Number</label>
                    <input
                      type="tel"
                      name="whatsapp"
                      id="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                      placeholder="e.g., +92 300 6392025"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="e.g., hospitality@brand.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="outletCount">Total Outlets / Physical Branches</label>
                  <select
                    name="outletCount"
                    id="outletCount"
                    value={formData.outletCount}
                    onChange={(e) => setFormData({...formData, outletCount: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                  >
                    <option value="1">1 Single Fine Dining Outlet</option>
                    <option value="2-5">2 to 5 Local Branches</option>
                    <option value="5+">5+ National Chain Warehouses</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="message">List any specific POS hardware or custom menu requirements</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="We use thermal printers, need English and Urdu support..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="qr-submit-btn"
                  className="w-full bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#FF6B00]/20 transition-all text-xs uppercase tracking-wider"
                >
                  Schedule QR Setup Deployment
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6 relative z-10" id="qr-submit-success">
                <div className="p-4 bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">QR Deployment Ticket Created!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Your setup ticket code is <strong>#CSS-QR-{ticketId}</strong>. Our senior frontend developers will build a mockup dining web link using your branding parameters and ping you in 1 hour.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#FF6B00] hover:underline"
                  >
                    ← Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 8. RELATED SOLUTIONS */}
      <section className="py-24 bg-white border-t border-gray-100" id="related-solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Explore More Integrations
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Related Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/solutions/whatsapp-business-api"
              className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-extrabold text-[#FF6B00] bg-[#FF6B00]/5 px-2.5 py-1 rounded-full border border-[#FF6B00]/10 uppercase">
                  META CHANNELS
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors">WhatsApp Business API</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Automated transaction alerts, PDF bills, payment reminders, and interactive chatbots straight to messaging.</p>
              </div>
              <div className="pt-6 text-xs text-[#FF6B00] font-bold flex items-center space-x-1.5">
                <span>View Solution Parameters</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/solutions/payment-gateway-integration"
              className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-extrabold text-[#FF6B00] bg-[#FF6B00]/5 px-2.5 py-1 rounded-full border border-[#FF6B00]/10 uppercase">
                  FINTECH SECURED
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors">Payment Gateway Integration</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Secure online gateways, mobile wallets, and physical card reader ledgers linked flawlessly.</p>
              </div>
              <div className="pt-6 text-xs text-[#FF6B00] font-bold flex items-center space-x-1.5">
                <span>View Solution Parameters</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
