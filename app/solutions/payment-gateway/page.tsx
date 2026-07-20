'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CreditCard, ShieldCheck, HelpCircle, ArrowRight, Check, 
  Coins, Lock, Landmark, RefreshCw, KeyRound, Receipt, 
  Zap, Cpu, Sparkles, ShieldAlert, FileText, CheckCircle2
} from 'lucide-react';

export default function PaymentGatewayPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    whatsapp: '',
    email: '',
    gatewayType: 'all',
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
        'item': 'https://chishtysmartsolutions.com/solutions/payment-gateway'
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Payment Gateway Integration',
    'description': 'PCI-DSS secure payment gateway integrations. Connect credit cards, localized mobile wallets, and physical merchant terminals with ledger systems.',
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
    <div className="bg-white min-h-screen text-gray-900" id="payment-gateway-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <span className="inline-flex items-center space-x-2 text-xs font-semibold text-orange-500 uppercase tracking-wider bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
                <Lock className="w-4 h-4 text-orange-500" />
                <span>PCI-DSS Secured Stack</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                Payment <span className="text-orange-500">Gateway</span> Integration
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Power your website checkout and point-of-sale registers with instant local and global payment settlements. Complete, reliable transaction synchronization.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#inquiry-form"
                  className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-extrabold text-center px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/25 transition-all duration-300 flex items-center justify-center space-x-2 text-sm uppercase tracking-wider"
                >
                  <span>Connect Gateways</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923006392025?text=Hi,%20I%20want%20to%20integrate%20Easypaisa/Visa%20gateways%20with%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/20 text-white font-extrabold text-center px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 text-sm uppercase tracking-wider"
                >
                  <Cpu className="w-4 h-4 text-orange-400" />
                  <span>Request API Access</span>
                </a>
              </div>
            </div>

            {/* Hero Right Interactive Mockup */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-[320px]">
                <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-orange-500 to-[#FF8C39] opacity-30 blur-xl" aria-hidden="true"></div>
                <div className="relative bg-[#1A1A1A] rounded-[38px] border-4 border-white/10 overflow-hidden shadow-2xl p-3">
                  <div className="bg-[#121212] rounded-[28px] overflow-hidden min-h-[440px] flex flex-col justify-between p-4">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-3">
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] text-gray-400 font-mono">E2E_TUNNEL_ESTABLISHED</span>
                      </div>
                      <span className="text-[8px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded font-mono font-bold">AES_256</span>
                    </div>

                    {/* Encrypted handshake screen */}
                    <div className="my-6 space-y-4">
                      <div className="bg-white/5 p-3.5 rounded-xl border border-white/5 space-y-2">
                        <div className="text-[9px] text-gray-400 font-mono">ENCRYPTION HANDSHAKE</div>
                        <div className="text-xs text-gray-200 font-mono space-y-1">
                          <p className="text-orange-400 font-bold"># Initializing HBL/Alfa API...</p>
                          <p className="text-gray-300">✓ Token key exchange OK</p>
                          <p className="text-emerald-400">✓ 200 SUCCESS - Auth Tokenized</p>
                        </div>
                      </div>

                      <div className="bg-[#FF6B00]/10 p-3.5 rounded-xl border border-[#FF6B00]/20 space-y-1 text-center">
                        <div className="text-[9px] text-[#FF6B00] font-mono uppercase tracking-widest">Transaction Verified</div>
                        <div className="text-white font-extrabold text-lg">Rs. 18,450.00</div>
                        <div className="text-[9px] text-gray-400">Settled to General Ledger</div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="bg-emerald-600 text-white text-center py-3 rounded-xl font-bold text-xs uppercase tracking-wider font-sans cursor-pointer hover:bg-emerald-700 transition-colors">
                      Secure Ledger Sync
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SUPPORTED GATEWAYS */}
      <section className="py-24 bg-white border-b border-gray-100" id="supported-gateways">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full">
              Global & Local Channels
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Supported Payment Gateways
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We sync with the leading global credit processors and Pakistan’s premier localized mobile wallet systems. Discover the absolute best integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Stripe', type: 'Global Card Processor', desc: 'Accept credit card payments worldwide. Perfect for international SaaS, digital checkouts, and clean billing workflows.', icon: <CreditCard className="w-6 h-6 text-orange-500" /> },
              { name: 'PayPal', type: 'International E-Wallet', desc: 'Secure worldwide transfers. Ideal for international buyers and frictionless subscription invoicing layers.', icon: <RefreshCw className="w-6 h-6 text-orange-500" /> },
              { name: 'PayFast', type: 'Local Card Gateway', desc: 'Pakistan’s top payment gateway linking credit, debit, and direct bank transfers flawlessly.', icon: <Zap className="w-6 h-6 text-orange-500" /> },
              { name: 'JazzCash', type: 'Pakistan Mobile Wallet', desc: 'Instant USSD pushes and mobile wallet billing. High availability for quick checkout overlays.', icon: <Coins className="w-6 h-6 text-orange-500" /> },
              { name: 'EasyPaisa', type: 'Pakistan Mobile Wallet', desc: 'Pakistan’s dominant consumer wallet. Settle bills instantly via phone number and secure OTP verification.', icon: <Coins className="w-6 h-6 text-orange-500" /> },
              { name: 'HBL', type: 'Bank Merchant Gateway', desc: 'Official Habib Bank Limited secure integration. Enterprise scale for large retail and hotel networks.', icon: <Landmark className="w-6 h-6 text-orange-500" /> },
              { name: 'Meezan Bank', type: 'Islamic Banking Portal', desc: 'Meezan secure payment routing. Certified Shariah-compliant digital checkout handshakes.', icon: <Landmark className="w-6 h-6 text-orange-500" /> },
              { name: 'Custom SDK Integration', type: 'Enterprise Custom', desc: 'Proprietary custom financial ledger mappings matching your exact accounting framework.', icon: <Cpu className="w-6 h-6 text-orange-500" /> }
            ].map((gw, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-150 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-orange-500/10 rounded-2xl w-fit text-orange-500">
                    {gw.icon}
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-orange-500 font-extrabold uppercase tracking-widest block">{gw.type}</span>
                    <h3 className="text-gray-900 font-black text-lg">{gw.name}</h3>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">{gw.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SECURITY SECTION */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="security">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-6">
              <span className="text-orange-500 text-xs font-bold uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full w-fit flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-orange-500" />
                <span>PCI-DSS Level 1 Compliant</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-none">
                Bank-Grade Transaction Encryption Security
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                Card fraud is a major threat. Our integrations leverage strict host-side tokenization, which means card details are encrypted instantly on the customer browser and never hit your local databases or POS hard drives. Complete legal protection.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { title: 'RSA-4096 Keys', desc: 'Secure asymmetric cryptographic tokens shield the connection.' },
                  { title: 'Zero Card Caching', desc: 'No customer credit records are ever stored on physical hard drives.' }
                ].map((sec, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-150 space-y-1">
                    <h4 className="font-bold text-gray-900 text-sm">{sec.title}</h4>
                    <p className="text-gray-500 text-xs font-light">{sec.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-white/10 text-white space-y-6">
              <div className="flex items-center space-x-2 border-b border-white/5 pb-4">
                <ShieldAlert className="w-5 h-5 text-orange-500" />
                <span className="text-xs font-bold font-mono tracking-wider">COMPLIANCE_SHIELD_ACTIVE</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                By routing credit card payloads through sandboxed framing, your business is 100% exempted from heavy compliance penalty audits.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Secure Tokenization Handshakes',
                  'SSL/TLS 1.3 Transport Encryptions',
                  'No local database credit storage compliance'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-medium text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FLOW DIAGRAM SECTION */}
      <section className="py-24 bg-white border-b border-gray-100" id="flow-diagram">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full">
              Operation Flow
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              The Payment Transaction Flow Diagram
            </h2>
            <p className="text-gray-500 text-sm">
              Discover how payments traverse securely from checkout screens to your physical corporate bank ledgers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Checkout Trigger',
                desc: 'Customer completes cart purchases or hits card swiping machines at your restaurant POS terminal.'
              },
              {
                step: '02',
                title: 'Secure Encryption',
                desc: 'Card or wallet payload is encrypted in fractions of a second using asymmetric RSA tokens.'
              },
              {
                step: '03',
                title: 'Bank Verification',
                desc: 'Payment processors communicate directly with bank databases to verify balances and approve transfers.'
              },
              {
                step: '04',
                title: 'Ledger Settle',
                desc: 'Webhook triggers return 200 SUCCESS. POS registers close bills and update accounting journals instantly.'
              }
            ].map((flow, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-3xl border border-gray-150 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-sans font-black text-orange-500/15 absolute top-4 right-6">{flow.step}</div>
                <div className="space-y-3 pt-6">
                  <h3 className="text-gray-900 font-bold text-base sm:text-lg">{flow.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">{flow.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BENEFITS SECTION */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full">
              Metric Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Reconcile Multiple Sales Channels Seamlessly
            </h2>
            <p className="text-gray-500 text-sm">
              Lower cash handling overheads and improve transaction accuracy instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '100% Reconciliation Accuracy', desc: 'Every payment matches with a serialized, unique transaction ID on the general ledger, reducing end-of-month audit burdens.', metric: '100%' },
              { title: '0.2s Webhook Latency', desc: 'Secure payments update central warehouse inventories instantly across your physical and digital outlets.', metric: '0.2s' },
              { title: 'Zero Manual Entry Slips', desc: 'Cashiers do not type payment totals manually, eliminating billing mismatch errors on POS counters entirely.', metric: '0 Errors' }
            ].map((ben, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-150 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="text-4xl font-black text-orange-500 font-sans">{ben.metric}</div>
                  <h3 className="text-gray-900 font-bold text-lg">{ben.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">{ben.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section className="py-24 bg-white border-b border-gray-100" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full">
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
                  <HelpCircle className={`w-5 h-5 text-orange-500 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
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

      {/* 7. CTA SECTION (CONTACT FORM) */}
      <section className="py-24 bg-gray-50" id="inquiry-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-150 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl"></div>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" id="payment-inquiry-form-element">
                <div className="text-center space-y-2 mb-8">
                  <span className="text-orange-500 text-xs font-mono font-extrabold uppercase tracking-widest block">MERCHANT CONNECT</span>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Request Gateway Integration</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">Submit your payment requirements. Our security setup engineer will verify and map your requirements.</p>
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
                      placeholder="e.g., billing@brand.com"
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
                    <option value="all">Comprehensive Multi-Gateway Sync (Visa/EP/JC)</option>
                    <option value="wallets-only">Pakistan Mobile Wallets Only (Easypaisa/JazzCash)</option>
                    <option value="pos-terminals">Physical Bank Credit Card POS Terminals</option>
                    <option value="international">Global Payment Channels (Stripe/PayPal/Visa)</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="message">List any specific POS hardware or bank compliance requirements</label>
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
                  className="w-full bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-extrabold py-4 rounded-xl shadow-lg shadow-[#FF6B00]/25 transition-all duration-300 text-xs uppercase tracking-wider"
                >
                  Schedule Setup Call
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6 relative z-10" id="payment-submit-success">
                <div className="p-4 bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Fintech Request Ticket Created!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Your setup ticket code is <strong>#CSS-PAY-{ticketId}</strong>. Our senior merchant configuration engineers will verify your parameters and call you in 1 hour.
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

    </div>
  );
}
