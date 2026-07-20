'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, Send, CheckCircle2, ShieldCheck, HelpCircle, 
  ArrowRight, Phone, Clock, FileText, Check, Cpu, Sparkles, 
  Building2, Users, Layers, AlertCircle, Play, Laptop, Smartphone, Mail
} from 'lucide-react';

export default function WhatsAppBusinessAPIPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    whatsapp: '',
    email: '',
    usageType: 'notifications',
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
        'name': 'WhatsApp Business API Integration',
        'item': 'https://chishtysmartsolutions.com/solutions/whatsapp-business-api'
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'WhatsApp Business API Integration',
    'description': 'Official Meta API channel synchronization. Automatically dispatch invoices, order status, low stock warnings, and interactive AI chatbot loops directly from your POS or ERP system.',
    'provider': {
      '@type': 'Organization',
      'name': 'Chishty Smart Solutions',
      'url': 'https://chishtysmartsolutions.com'
    },
    'areaServed': 'Worldwide',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'WhatsApp Business Integration Packages',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Meta API Verification & Setup'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Automated Notification Workflows'
          }
        }
      ]
    }
  };

  const faqItems = [
    {
      question: 'What are the charges for sending WhatsApp notifications using the official API?',
      answer: 'Meta charges per-conversation fees based on 24-hour windows. These conversations are divided into Utility (delivery updates, billing), Authentication (OTPs), and Marketing (broadcast campaigns). We configure your system using Meta’s exact utility tariffs so you get the lowest rates with maximum delivery guarantees.'
    },
    {
      question: 'Will our phone number be blocked by Meta if we broadcast messages?',
      answer: 'No. Because we integrate using the official Meta Cloud API, we register pre-approved message templates. By adhering to official opt-in layouts and avoiding unauthorized scraping tools, your phone number receives an official green tick verification and is fully safeguarded against blocking.'
    },
    {
      question: 'Can our staff chat with clients on WhatsApp from the same central number?',
      answer: 'Yes. Our platform features a two-way CRM Shared Inbox. While automated bots handle incoming FAQ inquiries, your sales or support staff can log in to a unified dashboard to respond manually to active customers from the same number.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketId(Math.floor(Math.random() * 90000) + 10000);
    setSubmitted(true);
  };

  return (
    <div className="bg-white" id="whatsapp-integration-page">
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
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="text-xs font-semibold text-[#25D366] uppercase tracking-wider bg-[#25D366]/10 px-3.5 py-1.5 rounded-full border border-[#25D366]/20">
                Official Meta Integration
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                WhatsApp Business <span className="text-[#25D366]">API Solutions</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connect official Meta pipelines directly to your POS or ERP system. Dispatch PDF receipts, automated delivery alerts, and interactive customer workflows under 0.5s.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#inquiry-form"
                  className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold text-center px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/20 transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Request API Connection</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923006392025?text=Hi,%20I%20want%20to%20integrate%20the%20official%20WhatsApp%20Business%20API%20with%20my%20POS/ERP."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-center px-8 py-4 rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  <span>Chat with Engineer</span>
                </a>
              </div>
            </div>

            {/* Hero Right Mockup: Interactive WhatsApp dashboard */}
            <div className="lg:col-span-6" id="whatsapp-hero-mockup-wrapper">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#25D366] to-[#128C7E] opacity-25 blur-lg" aria-hidden="true"></div>
                <div className="relative bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl text-xs text-gray-300 font-mono">
                  {/* Mockup Header */}
                  <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-[10px] text-gray-500 ml-2">META_WHATSAPP_BROADCASTER</span>
                    </div>
                    <span className="bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 px-2 py-0.5 rounded text-[10px] font-bold">
                      API LIVE
                    </span>
                  </div>

                  {/* Mockup UI Panel */}
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
                    {/* Left: Chat stream */}
                    <div className="md:col-span-7 p-4 border-r border-white/5 space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="text-white font-bold">ACTIVE PIPELINE BROADCASTS</span>
                        <span className="text-gray-500 text-[10px]">VERIFIED CHANNEL</span>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                          <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                            <span>To: +92 300 1234567</span>
                            <span className="text-[#25D366] font-bold">DELIVERED</span>
                          </div>
                          <p className="text-white font-sans text-[11px] leading-relaxed">
                            Dear Customer, your order <strong>#CSS-9481</strong> is confirmed! Your invoice PDF has been attached. 📄
                          </p>
                        </div>

                        <div className="bg-white/5 p-2.5 rounded-lg border border-white/5">
                          <div className="flex justify-between text-[10px] text-gray-400 mb-1">
                            <span>To: +92 321 9876543</span>
                            <span className="text-[#25D366] font-bold font-mono">READ ✓✓</span>
                          </div>
                          <p className="text-white font-sans text-[11px] leading-relaxed">
                            Hi Bilal, your delivery driver is on the way with your food order. Track route: 📍 <em>link.gps</em>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right: API Logs */}
                    <div className="md:col-span-5 p-4 bg-[#141414] flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-white/5">
                          <span className="text-white font-bold">REAL-TIME TELEMETRY</span>
                        </div>
                        <div className="space-y-2 text-[10px] text-gray-400 font-mono">
                          <div className="flex justify-between">
                            <span>Status:</span>
                            <span className="text-emerald-500">Connected</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Webhook Latency:</span>
                            <span className="text-white">82ms</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Queue Size:</span>
                            <span className="text-white">0 pending</span>
                          </div>
                          <div className="flex justify-between">
                            <span>API Version:</span>
                            <span className="text-white">v19.0 (Meta Cloud)</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#25D366] text-center text-white py-2 rounded-lg font-bold cursor-pointer hover:bg-emerald-600 transition-colors mt-6 font-sans">
                        TEST WEBHOOK PING
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
      <section className="py-24 bg-white border-b border-gray-100" id="whatsapp-features-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Full Channel Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Complete Automated WhatsApp Capabilities
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We eliminate manual customer contact. Leverage official Meta APIs to distribute files, coordinate campaigns, and automate customer pipelines with zero friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Automated Order Notifications',
                description: 'Instantly dispatch fully personalized text messages once orders are registered on your POS counter or web shopping cart.',
                icon: <Send className="w-6 h-6 text-[#25D366]" />
              },
              {
                title: 'Instant Order Status Updates',
                description: 'Keep guests updated automatically. Send real-time alerts as orders move from preparing, to cargo packing, and active delivery transit.',
                icon: <Clock className="w-6 h-6 text-[#25D366]" />
              },
              {
                title: '24/7 AI Customer Support Chat',
                description: 'Automate answers to repetitive questions (timing, branches, payment modes) with lightweight, instant interactive chatbot flows.',
                icon: <MessageSquare className="w-6 h-6 text-[#25D366]" />
              },
              {
                title: 'High-Conversion Marketing Campaigns',
                description: 'Trigger targeted promotion announcements, coupon discount codes, and celebratory birthday rewards to opted-in users safely.',
                icon: <Sparkles className="w-6 h-6 text-[#25D366]" />
              },
              {
                title: 'Secure Bulk Broadcast Messaging',
                description: 'Broadcast bulk custom product alerts, wholesale pricing rosters, and raw stock arrivals to selected target profiles instantly.',
                icon: <Layers className="w-6 h-6 text-[#25D366]" />
              },
              {
                title: 'Seamless ERP & CRM Integration',
                description: 'Two-way integration maps outgoing messages directly with customer cards inside the central general ledger and CRM profiles.',
                icon: <Users className="w-6 h-6 text-[#25D366]" />
              }
            ].map((feat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-[#25D366]/10 rounded-2xl w-fit text-[#25D366]">
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
              Real-World Workflows
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Where Our Integration Dominates
            </h2>
            <p className="text-gray-500 text-sm">
              Different industries require specialized communication pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'POS Automated PDF Billing',
                role: 'RETAIL & GROCERY OUTLETS',
                desc: 'Cashiers scan barcodes on the POS. The printer spits the thermal receipt, and simultaneously, the customer receives a high-definition PDF voucher of the transaction on their WhatsApp.',
                benefit: 'Reduces thermal paper waste by 40% and logs digital history.'
              },
              {
                title: 'Kitchen & Dispatch Alerts',
                role: 'HOTELS & RESTAURANTS',
                desc: 'Guests complete QR menus or online checkout orders. The system auto-dispatches precise prep milestones and triggers SMS-to-WhatsApp delivery links once drivers depart.',
                benefit: 'Drastically lowers delivery inquiry telephone calls.'
              },
              {
                title: 'Wholesale & Enterprise Ledgers',
                role: 'ERP & LOGISTICS BRANDS',
                desc: 'Bulk ledger entries, supplier outstanding debt balances, or dispatch shipment invoices generate auto-pushed summaries directly to clients on WhatsApp.',
                benefit: 'Accelerates accounts receivable cash clearance by 35%.'
              }
            ].map((uc, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 space-y-6 shadow-sm hover:shadow-md transition-all">
                <span className="text-[10px] font-mono font-extrabold text-[#FF6B00] bg-[#FF6B00]/5 px-2.5 py-1 rounded-full border border-[#FF6B00]/10 uppercase">
                  {uc.role}
                </span>
                <h3 className="text-xl font-bold text-gray-900">{uc.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{uc.desc}</p>
                <div className="pt-4 border-t border-gray-50 text-xs text-[#25D366] font-bold flex items-center gap-1.5">
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
              <span className="text-[#25D366] font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-[#25D366]" /> Unmatched Channel Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-none">
                Why Official WhatsApp Beats Traditional SMS & Email
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Standard SMS campaigns feature low click-through rates and high carrier fees. Email digests go straight into spam folders. Official WhatsApp Business API guarantees direct attention with rich media assets and reliable read statistics.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150">
                  <div className="text-4xl font-black text-[#FF6B00] font-sans">98%</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">Open Rate Guarantee</div>
                  <p className="text-gray-500 text-[11px] mt-1">Almost all WhatsApp messages are read inside 3 minutes.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150">
                  <div className="text-4xl font-black text-[#25D366] font-sans">4.5x</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">Higher CTR Rates</div>
                  <p className="text-gray-500 text-[11px] mt-1">Better customer response to promo links and menu choices.</p>
                </div>
              </div>
            </div>

            {/* Screenshots / Mockups section */}
            <div className="relative" id="whatsapp-sc-mockup">
              <div className="bg-[#1C1C1C] rounded-3xl p-6 border border-white/10 shadow-2xl relative">
                <span className="absolute top-4 left-4 bg-[#25D366]/20 border border-[#25D366]/30 px-2 py-0.5 rounded text-[8px] font-mono text-[#25D366] font-bold uppercase">
                  Production Screenshot
                </span>
                <div className="mt-6 bg-[#121212] rounded-2xl p-4 font-mono text-[11px] text-gray-400 space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-white/5">
                    <span className="text-white font-bold">API COMPILER: CONFIG_WORKFLOW</span>
                    <span className="text-gray-500 text-[9px]">API_VER_19</span>
                  </div>
                  <div className="space-y-1">
                    <p className="text-emerald-400"># Initializing Meta API Client...</p>
                    <p className="text-[#FF6B00]">✓ Handshake Completed with Meta Servers (0.04s)</p>
                    <p className="text-white">✓ Registering Webhook Trigger [BILLING_INVOICE_GENERATE]</p>
                    <p className="text-white">✓ Payload Mapping: customer.phone, invoice.pdf_binary</p>
                    <p className="text-[#25D366]">⚡ Active Broadcast Loop Running flawlessly</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS (PROCESS TIMELINE) */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="whatsapp-timeline-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Deployment Pipeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Our 4-Step Connection Process
            </h2>
            <p className="text-gray-500 text-sm">
              We manage the entire setup pipeline with Meta on your behalf.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Meta Verification',
                desc: 'We assist with Meta Business Manager verification to whitelist your corporate phone number safely.'
              },
              {
                step: '02',
                title: 'Template Approval',
                desc: 'Our copywriters write utility and promotional message templates, submitting them to Meta for quick approval.'
              },
              {
                step: '03',
                title: 'POS/ERP Integration',
                desc: 'We code custom triggers in your Point-of-Sale registers and database webhooks to link with the API.'
              },
              {
                step: '04',
                title: 'Launch & Analytics',
                desc: 'Go live under 24 hours. Track dispatch queues, delivery rates, and customer support chatbot records.'
              }
            ].map((proc, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-sans font-black text-[#25D366]/20 absolute top-4 right-6">{proc.step}</div>
                <div className="space-y-3 pt-6">
                  <h3 className="text-gray-900 font-bold text-base sm:text-lg">{proc.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPARISON MATRIX */}
      <section className="py-24 bg-white border-b border-gray-100" id="feature-comparison">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Parameter Comparison
            </span>
            <h2 className="text-3xl font-black text-gray-900">
              Why Official API vs Regular WhatsApp Business App
            </h2>
          </div>

          <div className="border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-gray-50 text-xs font-bold text-gray-900 border-b border-gray-100">
                  <th className="p-4">CAPABILITY</th>
                  <th className="p-4 text-[#25D366]">OFFICIAL CLOUD API</th>
                  <th className="p-4 text-gray-500">BUSINESS APP (MOBILE)</th>
                </tr>
              </thead>
              <tbody className="text-xs text-gray-600 divide-y divide-gray-100 font-medium">
                {[
                  { feature: 'Automatic POS Triggering', api: 'Unlimited (Sub-0.5s)', app: 'Manual Only' },
                  { feature: 'Green Verified Tick', api: 'Supported (Official)', app: 'Not Supported' },
                  { feature: 'Broadcast Limitations', api: 'Unlimited Recipients', app: '256 Contacts Max' },
                  { feature: 'Anti-Block Safeguard', api: '100% Meta-Compliant', app: 'High Ban Risk for Bulk' },
                  { feature: 'Shared Team Inboxes', api: 'Supported (Multi-Login)', app: 'Single Device Sync' }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50">
                    <td className="p-4 font-bold text-gray-900">{row.feature}</td>
                    <td className="p-4 text-emerald-600 font-bold">{row.api}</td>
                    <td className="p-4 text-gray-500">{row.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="whatsapp-faq-sec">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Faq Database
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              API Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm transition-all"
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
                      className="border-t border-gray-100 bg-gray-50/50"
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

      {/* 8. INTEGRATED CONTACT FORM */}
      <section className="py-24 bg-white border-b border-gray-100" id="inquiry-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-150 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/5 rounded-full blur-2xl"></div>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" id="whatsapp-inquiry-form-element">
                <div className="text-center space-y-2 mb-8">
                  <span className="text-[#FF6B00] text-xs font-mono font-extrabold uppercase tracking-widest block">GET CONNECTED</span>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Request WhatsApp API Integration</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">Submit your detail blueprints. Our meta setup engineer will schedule a call in 1 hour.</p>
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
                      placeholder="e.g., Apex Fine Dining"
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
                      placeholder="e.g., brand@domain.com"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="usageType">Primary Intended Usage</label>
                  <select
                    name="usageType"
                    id="usageType"
                    value={formData.usageType}
                    onChange={(e) => setFormData({...formData, usageType: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                  >
                    <option value="notifications">Automated Order & Billing Notifications</option>
                    <option value="chatbots">Interactive AI Support Chatbots</option>
                    <option value="campaigns">Promotional & Broadcast Campaigns</option>
                    <option value="combined">Comprehensive Multi-Channel Sync</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="message">Briefly describe your existing system structure</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe if you use our POS/ERP, or another external database..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="whatsapp-submit-btn"
                  className="w-full bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#FF6B00]/20 transition-all text-xs uppercase tracking-wider"
                >
                  Schedule API Setup Call
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6 relative z-10" id="whatsapp-submit-success">
                <div className="p-4 bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">API Queue Request Received!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Your request ticket code is <strong>#CSS-API-{ticketId}</strong>. Our Meta Integration Architects have whitelisted your profile and will ping your number inside 1 hour.
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

      {/* 9. RELATED SOLUTIONS */}
      <section className="py-24 bg-gray-50 border-t border-gray-100" id="related-solutions">
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

            <Link
              href="/solutions/payment-gateway"
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
