'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CreditCard, Shield, Sparkles, CheckCircle2, ShieldCheck, HelpCircle, 
  ArrowRight, Phone, Clock, FileText, Check, Cpu, Building2, 
  Users, Layers, AlertCircle, Play, Laptop, Smartphone, Mail,
  Coins, Landmark, Lock, RefreshCw, KeyRound, Receipt, MessageSquare
} from 'lucide-react';

export default function PaymentGatewayIntegrationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    whatsapp: '',
    email: '',
    gatewayType: 'multi-gateway',
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
        'name': 'Payment Gateway Integration',
        'item': 'https://chishtysmartsolutions.com/solutions/payment-gateway-integration'
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Payment Gateway Integration',
    'description': 'PCI-DSS secure payment gateway synchronizations. Connect Visa, Mastercard, Easypaisa, JazzCash, and physical bank terminals directly with POS ledger records.',
    'provider': {
      '@type': 'Organization',
      'name': 'Chishty Smart Solutions',
      'url': 'https://chishtysmartsolutions.com'
    },
    'areaServed': 'Worldwide'
  };

  const faqItems = [
    {
      question: 'Do you provide the merchant accounts, or do we need our own commercial bank papers?',
      answer: 'We provide integration and SDK development parameters. You will need a registered commercial bank account and company registration papers. We then coordinate with official gateway providers (such as Alfalah, HBL, Stripe, or Easypaisa) to configure secure merchant credentials on your behalf.'
    },
    {
      question: 'What is PCI-DSS compliance and why is it important for our POS registers?',
      answer: 'PCI-DSS (Payment Card Industry Data Security Standard) ensures card details are fully encrypted during transit. Our integrations use secure tokenization, which means card details never hit your local databases or POS hard drives, keeping you completely shielded from compliance penalties and security leaks.'
    },
    {
      question: 'Can we accept localized mobile wallet transfers like Easypaisa or JazzCash on our web carts?',
      answer: 'Yes. We specialize in localized mobile wallet integrations. Customers enter their wallet phone number, receive a secure push OTP notification or USSD prompt on their mobile screen, and complete the transfer in under 3 seconds.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketId(Math.floor(Math.random() * 90000) + 10000);
    setSubmitted(true);
  };

  return (
    <div className="bg-white" id="payment-gateway-integration-page">
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
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="text-xs font-semibold text-orange-500 uppercase tracking-wider bg-orange-500/10 px-3.5 py-1.5 rounded-full border border-orange-500/20">
                Fintech Security Stack
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                Payment <span className="text-orange-500">Gateway Sync</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Synchronize card terminals, mobile wallets (Easypaisa, JazzCash), and global credit networks with your core ledger systems to secure payments.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#inquiry-form"
                  className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold text-center px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/20 transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Connect Merchant APIs</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923006392025?text=Hi,%20I%20want%20to%20integrate%20Easypaisa/Visa%20gateways%20with%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-center px-8 py-4 rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  <MessageSquare className="w-5 h-5 text-[#FF6B00]" />
                  <span>Chat with Developer</span>
                </a>
              </div>
            </div>

            {/* Hero Right Mockup: Encrypted Gateway handshake emulator */}
            <div className="lg:col-span-6" id="payment-hero-mockup-wrapper">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500 to-[#FF8C39] opacity-25 blur-lg" aria-hidden="true"></div>
                <div className="relative bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl text-xs text-gray-300 font-mono">
                  {/* Mockup Header */}
                  <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-[10px] text-gray-500 ml-2">PCI_GATEWAY_SECURE_V3</span>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-bold">
                      AES-256 E2EE
                    </span>
                  </div>

                  {/* Payment terminal view */}
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
                    {/* Left: Interactive billing ledger sync */}
                    <div className="md:col-span-7 p-4 border-r border-white/5 space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="text-white font-bold">PENDING SETTLEMENTS</span>
                        <span className="text-gray-500 text-[10px]">LEDGER_MUTEX</span>
                      </div>
                      
                      <div className="space-y-3 font-sans">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                          <div>
                            <p className="text-white font-bold text-xs">Easypaisa Wallet Push</p>
                            <p className="text-[10px] text-gray-500">Tx: #EP-49812-C</p>
                          </div>
                          <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded text-[10px] font-bold font-mono">
                            SETTLED ✓
                          </span>
                        </div>

                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex justify-between items-center">
                          <div>
                            <p className="text-white font-bold text-xs">Visa / Credit Card</p>
                            <p className="text-[10px] text-gray-500">Tx: #VS-39481-S</p>
                          </div>
                          <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-1 rounded text-[10px] font-bold font-mono">
                            SETTLED ✓
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Security Parameters log */}
                    <div className="md:col-span-5 p-4 bg-[#141414] flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-white/5">
                          <span className="text-white font-bold">SEC_COMPLIANCE</span>
                        </div>
                        <div className="space-y-2 text-[10px] text-gray-400 font-mono">
                          <div className="flex justify-between">
                            <span>Compliance:</span>
                            <span className="text-emerald-500 font-bold">PCI-DSS L1</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Key Type:</span>
                            <span className="text-white">RSA-4096</span>
                          </div>
                          <div className="flex justify-between">
                            <span>E2E Token:</span>
                            <span className="text-white">tok_7e9a8f</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-500 text-center text-white py-2 rounded-lg font-bold cursor-pointer hover:bg-orange-600 transition-colors mt-6 font-sans text-[11px]">
                        RUN HANDSHAKE TEST
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
      <section className="py-24 bg-white border-b border-gray-100" id="payment-features-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Full Channel Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              High-Performance Fintech Parameters
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We eliminate manual credit reconciliation. Enable direct digital card triggers, push notifications on mobile wallets, and immediate banking transaction feedback loops.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Multi-Payment Gateway Support',
                description: 'Synchronize global card networks (Visa, Mastercard, UnionPay) to complete client orders in single checkout frames.',
                icon: <CreditCard className="w-6 h-6 text-orange-500" />
              },
              {
                title: 'Localized Mobile Wallets',
                description: 'Enable immediate, hassle-free pushes on Pakistan’s leading wallets (Easypaisa, JazzCash, Upaisa) to lower barriers.',
                icon: <Coins className="w-6 h-6 text-orange-500" />
              },
              {
                title: 'PCI-DSS Compliant Security',
                description: 'Zero card caching. All transfers leverage direct secure endpoint tokenizations, ensuring strict legal compliance.',
                icon: <Lock className="w-6 h-6 text-orange-500" />
              },
              {
                title: 'Sandbox Testing Environment',
                description: 'We supply high-fidelity API sandbox modules to test billing queues, edge-case network errors, and refund responses safely.',
                icon: <KeyRound className="w-6 h-6 text-orange-500" />
              },
              {
                title: 'Physical POS Card Terminals',
                description: 'We code direct connection SDKs mapping high-end physical bank card swiping machines with cashier desk register interfaces.',
                icon: <Smartphone className="w-6 h-6 text-orange-500" />
              },
              {
                title: 'Automated Settlement Reports',
                description: 'Close financial days with automated, beautifully mapped PDF balance spreadsheets outlining net, gross, and fee expenses.',
                icon: <Receipt className="w-6 h-6 text-orange-500" />
              }
            ].map((feat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-orange-500/10 rounded-2xl w-fit text-orange-500">
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
              Aesthetic Financial Setups
            </h2>
            <p className="text-gray-500 text-sm">
              We sync payment layers to streamline accounting workflows across branches.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'High-Volume Cash Registers',
                role: 'RETAIL & GROCERY CHAINS',
                desc: 'Cashiers key in the sale. The credit card swiper lights up automatically. Once the card is swiped and cleared, the register closes the bill instantly without manual typing.',
                benefit: 'Completely eliminates manual entry errors and mismatching balances.'
              },
              {
                title: 'Corporate ERP Subscriptions',
                role: 'ENTERPRISE B2B SYSTEMS',
                desc: 'Configure auto-recurring monthly credit or mobile wallet deductions. Distribute corporate outstanding bills and settle invoice receipts via email or SMS web triggers.',
                benefit: 'Increases payment collection recovery by 45%.'
              },
              {
                title: 'Fine Dining QR Tables',
                role: 'HOSPITALITY PLACES',
                desc: 'Diners scan table QR codes, pick Fajitas or margaritas, and settle table checks using native banking apps right on their phone screen.',
                benefit: 'Allows waitstaff to focus solely on serving warm courses.'
              }
            ].map((uc, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 space-y-6 shadow-sm hover:shadow-md transition-all">
                <span className="text-[10px] font-mono font-extrabold text-[#FF6B00] bg-[#FF6B00]/5 px-2.5 py-1 rounded-full border border-[#FF6B00]/10 uppercase">
                  {uc.role}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{uc.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{uc.desc}</p>
                <div className="pt-4 border-t border-gray-50 text-xs text-orange-500 font-bold flex items-center gap-1.5">
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
              <span className="text-orange-500 font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-orange-500" /> Enterprise Financial Health
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-none">
                Reconcile Multiple Sales Channels Securely
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                By integrating your merchant pipelines directly into your central inventory and accounting software, we provide a unified source of financial truth, reducing end-of-month manual audit labor.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150">
                  <div className="text-4xl font-black text-[#FF6B00] font-sans">100%</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">Audit Reconciliation</div>
                  <p className="text-gray-500 text-[11px] mt-1">Every transaction maps with a specific, encrypted unique ID.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150">
                  <div className="text-4xl font-black text-emerald-500 font-sans">0.2s</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">SLA Webhook Latency</div>
                  <p className="text-gray-500 text-[11px] mt-1">Payments immediately update inventory balances across systems.</p>
                </div>
              </div>
            </div>

            {/* Screenshots / Mockups section */}
            <div className="relative" id="payment-sc-mockup">
              <div className="bg-[#1C1C1C] rounded-3xl p-6 border border-white/10 shadow-2xl relative">
                <span className="absolute top-4 left-4 bg-orange-500/20 border border-orange-500/30 px-2 py-0.5 rounded text-[8px] font-mono text-orange-500 font-bold uppercase">
                  Encryption Handshake
                </span>
                <div className="mt-6 bg-[#121212] rounded-2xl p-4 font-mono text-[11px] text-gray-400 space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-white font-bold">SECURE_TUNNEL: ALFA_HBL_SYNC</span>
                    <span className="text-gray-500 text-[9px]">AES_GCM_v2</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-orange-400"># Setting up transaction secure payload...</p>
                    <p className="text-white">- Key: df8e_39a1_81fa</p>
                    <p className="text-white">- Decrypted: [REDACTED]</p>
                    <p className="text-white">- Handshake response code: 200 SUCCESS</p>
                    <p className="text-emerald-500">⚡ Database state update: Order marked PAID, inventory updated.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="payment-timeline-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Operation Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              The 4-Step Settlement Process
            </h2>
            <p className="text-gray-500 text-sm">
              Complete secure financial integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Credential Verification',
                desc: 'We coordinate with your commercial bank and gateway merchants to set up official merchant APIs.'
              },
              {
                step: '02',
                title: 'Secure SDK Hook',
                desc: 'We integrate official transaction webhooks into your website checkout or desktop register code.'
              },
              {
                step: '03',
                title: 'Tokenization Config',
                desc: 'All credit details are routed via encrypted frames to shield customer records from physical leaks.'
              },
              {
                step: '04',
                title: 'Instant Settlements',
                desc: 'Settle daily transactions with single-click PDF ledger reports updating banking records automatically.'
              }
            ].map((proc, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-sans font-black text-orange-500/20 absolute top-4 right-6">{proc.step}</div>
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
      <section className="py-24 bg-white border-b border-gray-100" id="payment-faq-sec">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Faq Database
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Payment Gateway Frequently Asked Questions
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
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" id="payment-inquiry-form-element">
                <div className="text-center space-y-2 mb-8">
                  <span className="text-[#FF6B00] text-xs font-mono font-extrabold uppercase tracking-widest block">MERCHANT CONNECT</span>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Request Gateway Integration</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">Submit your payment requirements. Our security setup engineer will schedule a call in 1 hour.</p>
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
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="companyName">Company Name</label>
                    <input
                      type="text"
                      name="companyName"
                      id="companyName"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      placeholder="e.g., Al-Makkah Distributors"
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
                      placeholder="e.g., finance@company.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="gatewayType">Primary Target Gateway</label>
                  <select
                    name="gatewayType"
                    id="gatewayType"
                    value={formData.gatewayType}
                    onChange={(e) => setFormData({...formData, gatewayType: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                  >
                    <option value="multi-gateway">Comprehensive Multi-Gateway Sync (Visa/EP/JC)</option>
                    <option value="wallets-only">Pakistan Mobile Wallets Only (Easypaisa/JazzCash)</option>
                    <option value="pos-terminals">Physical Bank Credit Card POS Terminals</option>
                    <option value="international">Global Payment Channels (Stripe/PayPal/Visa)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="message">Briefly list your target transaction volumes or compliance limits</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="We handle ~500 retail invoices daily, using HBL/Alfalah merchant channels..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="payment-submit-btn"
                  className="w-full bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#FF6B00]/20 transition-all text-xs uppercase tracking-wider"
                >
                  Schedule Fintech Setup Call
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6 relative z-10" id="payment-submit-success">
                <div className="p-4 bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Fintech Request Ticket Created!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Your setup ticket code is <strong>#CSS-PAY-{ticketId}</strong>. Our senior merchant configuration engineers will verify your parameters with gateway partner standards and call you in 1 hour.
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
              href="/solutions/qr-ordering-system"
              className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-extrabold text-[#FF6B00] bg-[#FF6B00]/5 px-2.5 py-1 rounded-full border border-[#FF6B00]/10 uppercase">
                  HOSPITALITY SPECIFIC
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors">QR Ordering Solutions</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Dynamic table menus and immediate food ticket synchronizations with zero app install needed.</p>
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
