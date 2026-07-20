'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  QrCode, Sparkles, CheckCircle2, HelpCircle, 
  ArrowRight, Check, Smartphone, ChefHat, Bell, 
  Settings, Languages, Compass, Info,
  UtensilsCrossed, Coffee, Flame, Store, Hotel, Trophy, Eye, Zap, Layers, RefreshCw
} from 'lucide-react';

export default function QROrderingSystemPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSegment, setActiveSegment] = useState<'fine-dining' | 'cafe' | 'fast-food' | 'food-court' | 'hotel'>('fine-dining');
  const [formData, setFormData] = useState({
    fullName: '',
    restaurantName: '',
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
    <div className="bg-white min-h-screen text-gray-900" id="qr-ordering-system-page">
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
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <span className="inline-flex items-center space-x-2 text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-4 py-2 rounded-full border border-[#FF6B00]/20">
                <Sparkles className="w-4 h-4 text-[#FF6B00]" />
                <span>Contactless Dining Technology</span>
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                Contactless <span className="text-[#FF6B00]">QR Ordering</span> Solutions
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Empower diners to scan, view menus in stunning high-definition, place orders straight to kitchen chefs, call waiters, and settle bills instantly without delay.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href="#inquiry-form"
                  className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-extrabold text-center px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/25 transition-all duration-300 flex items-center justify-center space-x-2 text-sm uppercase tracking-wider"
                >
                  <span>Deploy QR Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923006392025?text=Hi,%20I%20want%20to%20integrate%20the%20QR%20Ordering%20system%20for%20my%20restaurant."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/20 text-white font-extrabold text-center px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 text-sm uppercase tracking-wider"
                >
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                  <span>Request Custom Demo</span>
                </a>
              </div>
            </div>

            {/* Hero Right Interactive Mockup */}
            <div className="lg:col-span-5" id="qr-hero-mockup-wrapper">
              <div className="relative mx-auto max-w-[320px]">
                <div className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-[#FF6B00] to-[#FF8C39] opacity-30 blur-xl" aria-hidden="true"></div>
                <div className="relative bg-[#1A1A1A] rounded-[38px] border-4 border-white/10 overflow-hidden shadow-2xl p-3">
                  {/* Speaker & Camera notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-28 bg-[#1A1A1A] rounded-b-2xl z-20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                  </div>

                  <div className="bg-[#121212] rounded-[28px] overflow-hidden min-h-[460px] flex flex-col justify-between">
                    {/* Guest Menu Header */}
                    <div className="bg-[#1C1C1C] px-4 pt-6 pb-3 border-b border-white/5 text-center">
                      <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono">
                        <span className="text-[#FF6B00] font-bold">📍 TABLE 12</span>
                        <span className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold uppercase text-[8px]">CSS QR_v2.5</span>
                      </div>
                      <h3 className="text-white font-black text-sm mt-1 font-sans">Le Bistro de Chic</h3>
                    </div>

                    {/* Scrollable menu content */}
                    <div className="p-4 space-y-3 flex-grow overflow-y-auto text-xs">
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Chef Specials</div>
                      
                      {/* Dish Item */}
                      <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 space-y-1">
                        <div className="flex justify-between">
                          <p className="text-white font-bold font-sans">Premium Angus Burger</p>
                          <span className="text-[#FF6B00] font-black font-sans">Rs. 1,650</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-light leading-tight">Caramelized onions, sharp cheddar, artisan bun.</p>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-[8px] bg-[#FF6B00]/10 text-[#FF6B00] px-1.5 py-0.5 rounded font-mono">ALLERGEN: GLUTEN</span>
                          <span className="bg-[#FF6B00] text-white px-2 py-1 rounded text-[9px] font-extrabold font-sans cursor-pointer">+ Add to Plate</span>
                        </div>
                      </div>

                      {/* Dish Item 2 */}
                      <div className="bg-white/5 p-2.5 rounded-xl border border-white/5 space-y-1">
                        <div className="flex justify-between">
                          <p className="text-white font-bold font-sans">Truffle Parmesan Fries</p>
                          <span className="text-[#FF6B00] font-black font-sans">Rs. 680</span>
                        </div>
                        <p className="text-[10px] text-gray-400 font-light leading-tight">Shaved summer truffles, organic herbs.</p>
                        <div className="flex justify-between items-center pt-2">
                          <span className="text-[8px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded font-mono">POPULAR</span>
                          <span className="bg-[#FF6B00] text-white px-2 py-1 rounded text-[9px] font-extrabold font-sans cursor-pointer">+ Add to Plate</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Floating Bar */}
                    <div className="p-3 bg-[#1C1C1C] border-t border-white/5 flex items-center justify-between">
                      <div>
                        <div className="text-[9px] text-gray-400">Total Plate</div>
                        <div className="text-white font-extrabold text-sm font-sans">Rs. 2,330</div>
                      </div>
                      <button className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-colors">
                        Send to Chef
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. RESTAURANT WORKFLOW SECTION */}
      <section className="py-24 bg-white border-b border-gray-100" id="restaurant-workflow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Automated Operations
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              The Back-of-House Restaurant Workflow
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Experience seamless coordination between table interactions and kitchen prep queues. No lag, no missed tickets.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Instant Kitchen Routing',
                desc: 'When a diner hits submit, the system skips manual server registers. Orders route directly to designated hot and cold kitchen display monitors (KDS) based on specific categories.',
                icon: <ChefHat className="w-8 h-8 text-[#FF6B00]" />
              },
              {
                step: '02',
                title: 'Real-Time Waitstaff Alerts',
                desc: 'Guests can call servers, request water, or ask for physical checkbooks directly on their screens. Waitstaff watches the central POS screen light up with the precise table number instantly.',
                icon: <Bell className="w-8 h-8 text-[#FF6B00]" />
              },
              {
                step: '03',
                title: 'Direct POS Synchronization',
                desc: 'Every scanned order is logged on the central administrator ledger. Bills are updated dynamically in real-time to maintain absolute transaction transparency and prevent checkout bottlenecks.',
                icon: <Settings className="w-8 h-8 text-[#FF6B00]" />
              }
            ].map((work, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative overflow-hidden flex flex-col justify-between group hover:border-[#FF6B00]/30 transition-all duration-300">
                <div className="text-6xl font-black text-[#FF6B00]/5 absolute top-4 right-6 group-hover:text-[#FF6B00]/10 transition-colors">{work.step}</div>
                <div className="space-y-4 relative z-10 pt-4">
                  <div className="p-4 bg-white rounded-2xl w-fit text-[#FF6B00] shadow-sm">
                    {work.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-xl">{work.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">{work.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CUSTOMER SCAN JOURNEY */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="customer-scan-journey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full w-fit block">
                Frictionless UX
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-none">
                The Frictionless 4-Step Customer Scan Journey
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                Give your customers the ultimate self-ordering convenience. They scan, choose, track, and clear checks straight from their physical smartphone browser. No app install, zero registration gates.
              </p>

              <div className="space-y-4 pt-4">
                {[
                  { step: '1', title: 'Point & Scan', detail: 'Open camera app, focus on table-top serialized QR sticker.' },
                  { step: '2', title: 'Browse HD Digital Menu', detail: 'Explore seasonal courses, filter allergens, choose modifiers.' },
                  { step: '3', title: 'Submit directly to KDS', detail: 'Diners place order, sending high-fidelity tickets to chefs.' },
                  { step: '4', title: 'Instant Bill View', detail: 'Check real-time items on plate, request cash or card settlement.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3.5">
                    <span className="w-6 h-6 bg-[#FF6B00] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#FF6B00]/10 rounded-full blur-[60px] pointer-events-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
                <div className="relative z-10 text-white space-y-6">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center space-x-2">
                      <QrCode className="w-5 h-5 text-[#FF6B00]" />
                      <span className="text-xs font-bold font-mono tracking-wider">SECURE_DINE_WEBAPP</span>
                    </div>
                    <span className="bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 px-2 py-0.5 rounded text-[10px] font-mono">0.4s LOAD_TIME</span>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-[#121212] p-4 rounded-2xl border border-white/5 text-xs space-y-2">
                      <div className="text-[10px] text-gray-400 font-mono">BROWSER STATUS</div>
                      <p className="text-gray-200">✨ Successfully verified Serial Key: <span className="text-emerald-400 font-mono">CSS_QR_T12_DEB7</span></p>
                      <p className="text-gray-400">Locked to seating area: <span className="text-white">Table 12 (Main Terrace)</span></p>
                    </div>

                    <div className="bg-[#121212] p-4 rounded-2xl border border-white/5 text-xs space-y-2">
                      <div className="text-[10px] text-gray-400 font-mono">ACTIVE SESSIONS</div>
                      <div className="flex justify-between text-gray-300">
                        <span>Active Diners at Table:</span>
                        <span className="text-[#FF6B00] font-bold">4 Players</span>
                      </div>
                      <p className="text-gray-500 text-[10px]">Coordinated cart synchronization allows guests at the same table to view, edit, and add to a single unified order list instantly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. QR MENU SECTION */}
      <section className="py-24 bg-white border-b border-gray-100" id="qr-menu">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Digital Masterpiece
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              High-Definition Digital Menus
            </h2>
            <p className="text-gray-500 text-sm">
              Captivate your customers with beautiful pictures, pricing tiers, and interactive language toggles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Stunning HD Photography',
                desc: 'Upload premium, eye-safe photos of dishes to excite tastebuds. High-fidelity layouts present colors beautifully.',
                icon: <Eye className="w-5 h-5" />
              },
              {
                title: 'Allergen & Diet Tags',
                desc: 'Label items with dietary filters (Vegan, Gluten-Free, Keto, Nut-Free) to prevent order mistakes and keep guests safe.',
                icon: <Info className="w-5 h-5" />
              },
              {
                title: 'Urdu & Arabic Translation',
                desc: 'Diners can swap languages with a single tap. All descriptions translate instantly to remove language barriers.',
                icon: <Languages className="w-5 h-5" />
              },
              {
                title: 'Dynamic Modifier Config',
                desc: 'Configure modifiers easily—add double cheese, select cook temp (Medium Rare), or swap sides in single-click sliders.',
                icon: <Layers className="w-5 h-5" />
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-150 flex flex-col justify-between hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="p-3 bg-[#FF6B00]/10 text-[#FF6B00] rounded-xl w-fit">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-9. SECTORS / SEGMENTS (Fine Dining, Cafe, Fast Food, Food Court, Hotel) */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="segments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Sectors We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Custom QR Configurations For Every Food Format
            </h2>
            <p className="text-gray-500 text-sm">
              Select your business vertical to discover specialized system configurations.
            </p>

            {/* Segment Selector Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {[
                { id: 'fine-dining', label: 'Fine Dining', icon: <UtensilsCrossed className="w-4 h-4" /> },
                { id: 'cafe', label: 'Cafe & Bistro', icon: <Coffee className="w-4 h-4" /> },
                { id: 'fast-food', label: 'Fast Food', icon: <Flame className="w-4 h-4" /> },
                { id: 'food-court', label: 'Food Court', icon: <Store className="w-4 h-4" /> },
                { id: 'hotel', label: 'Hotel & Lounge', icon: <Hotel className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSegment(tab.id as any)}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                    activeSegment === tab.id 
                      ? 'bg-[#FF6B00] text-white border-[#FF6B00] shadow-md shadow-[#FF6B00]/15' 
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Segment Content Display */}
          <div className="bg-white border border-gray-150 rounded-3xl p-8 lg:p-12 shadow-sm min-h-[300px]">
            <AnimatePresence mode="wait">
              {activeSegment === 'fine-dining' && (
                <motion.div
                  key="fine-dining"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-[#FF6B00] text-xs font-mono font-extrabold uppercase bg-[#FF6B00]/5 px-2.5 py-1 rounded">PREMIUM LOOKBOOKS</span>
                    <h3 className="text-2xl font-black text-gray-900 leading-tight">Elevate Luxury Fine Dining Atmosphere</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      Do not ruin your table aesthetic with plastic sheets. Our Fine Dining layout acts as a gorgeous luxury lookbook. Customers view beautiful wine catalogs, raw ingredient details, and complex chef stories, then optionally call servers to complete verbal ordering.
                    </p>
                    <ul className="space-y-2 text-xs font-medium text-gray-700">
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Premium sommelier pairing suggestions</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Detailed raw ingredient sourcing descriptions</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Discrete tableside waitstaff call buttons</span></li>
                    </ul>
                  </div>
                  <div className="lg:col-span-5 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between h-48">
                    <span className="text-gray-400 font-mono text-[9px]">METRIC DRIVER</span>
                    <h4 className="text-4xl font-black text-[#FF6B00] font-sans">22%</h4>
                    <p className="text-xs text-gray-600 font-bold">Increase in vintage bottle sales via digital suggestions.</p>
                  </div>
                </motion.div>
              )}

              {activeSegment === 'cafe' && (
                <motion.div
                  key="cafe"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-[#FF6B00] text-xs font-mono font-extrabold uppercase bg-[#FF6B00]/5 px-2.5 py-1 rounded">QUICK TURN COVERS</span>
                    <h3 className="text-2xl font-black text-gray-900 leading-tight">Accelerate Seating Table Turn Times</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      High-volume cafes live on speed. Diners scan table QR codes, order espresso or croissants instantly, and checkout seamlessly. Baristas receive immediate coffee tickets on their bar monitor within milliseconds.
                    </p>
                    <ul className="space-y-2 text-xs font-medium text-gray-700">
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Smart barista station ticket routing</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Automated pastry and espresso milk modifier upsells</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>35% reduction in physical server walk times</span></li>
                    </ul>
                  </div>
                  <div className="lg:col-span-5 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between h-48">
                    <span className="text-gray-400 font-mono text-[9px]">METRIC DRIVER</span>
                    <h4 className="text-4xl font-black text-[#FF6B00] font-sans">35%</h4>
                    <p className="text-xs text-gray-600 font-bold">Faster table turn-around times recorded during weekend mornings.</p>
                  </div>
                </motion.div>
              )}

              {activeSegment === 'fast-food' && (
                <motion.div
                  key="fast-food"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-[#FF6B00] text-xs font-mono font-extrabold uppercase bg-[#FF6B00]/5 px-2.5 py-1 rounded">SELF-ORDERING CORES</span>
                    <h3 className="text-2xl font-black text-gray-900 leading-tight">Maximize Basket Sizes via Smart Combo Upsells</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      Prompt your diners with burgers, extra cheese slices, sweet dessert cookies, and drink upsells automatically. Our fast food QR system streamlines self-ordering with powerful automated sales parameters.
                    </p>
                    <ul className="space-y-2 text-xs font-medium text-gray-700">
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Frictionless burger customization sliders</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Aggressive meal add-on and drink modifiers</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Direct dispatch integration for self-pickup screens</span></li>
                    </ul>
                  </div>
                  <div className="lg:col-span-5 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between h-48">
                    <span className="text-gray-400 font-mono text-[9px]">METRIC DRIVER</span>
                    <h4 className="text-4xl font-black text-[#FF6B00] font-sans">+25%</h4>
                    <p className="text-xs text-gray-600 font-bold">Increase in dessert order volume driven by smart checkout popup alerts.</p>
                  </div>
                </motion.div>
              )}

              {activeSegment === 'food-court' && (
                <motion.div
                  key="food-court"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-[#FF6B00] text-xs font-mono font-extrabold uppercase bg-[#FF6B00]/5 px-2.5 py-1 rounded">COUNTER-LESS QUEUES</span>
                    <h3 className="text-2xl font-black text-gray-900 leading-tight">Order from Multiple Stalls in One Central Cart</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      Let patrons scan QR posters on court tables, browse dishes from all nearby food vendors on a single portal, and check out once. Orders route automatically to each specific kitchen station.
                    </p>
                    <ul className="space-y-2 text-xs font-medium text-gray-700">
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Consolidated checkout mapping to separate vendors</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Automated buzzer/SMS pick-up alerts for customers</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Complete elimination of physical cashier center queues</span></li>
                    </ul>
                  </div>
                  <div className="lg:col-span-5 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between h-48">
                    <span className="text-gray-400 font-mono text-[9px]">METRIC DRIVER</span>
                    <h4 className="text-4xl font-black text-[#FF6B00] font-sans">0 min</h4>
                    <p className="text-xs text-gray-600 font-bold">Wait time at cashier counters, freeing floor footprints for extra tables.</p>
                  </div>
                </motion.div>
              )}

              {activeSegment === 'hotel' && (
                <motion.div
                  key="hotel"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <span className="text-[#FF6B00] text-xs font-mono font-extrabold uppercase bg-[#FF6B00]/5 px-2.5 py-1 rounded">ROOM & POOLSIDE CORES</span>
                    <h3 className="text-2xl font-black text-gray-900 leading-tight">Premium Room Service and Pool-side Dining</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-light">
                      Guests scan in-room bedside QR plaques or poolside lounge chairs. Dishes and custom requests are sent directly to the pantry. No telephone call wait times, zero misheard menu details.
                    </p>
                    <ul className="space-y-2 text-xs font-medium text-gray-700">
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Sidesteps busy hotel telephone line bottlenecks</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Poolside or lobby area coordinate tracking</span></li>
                      <li className="flex items-center space-x-2"><Check className="w-4 h-4 text-[#FF6B00]" /> <span>Seamless room bill charge routing integrations</span></li>
                    </ul>
                  </div>
                  <div className="lg:col-span-5 bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col justify-between h-48">
                    <span className="text-gray-400 font-mono text-[9px]">METRIC DRIVER</span>
                    <h4 className="text-4xl font-black text-[#FF6B00] font-sans">100%</h4>
                    <p className="text-xs text-gray-600 font-bold">Accuracy in room numbers, protecting servers from delivery errors.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 10. BENEFITS SECTION */}
      <section className="py-24 bg-white border-b border-gray-100" id="benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <span className="text-[#FF6B00] font-extrabold uppercase tracking-wider text-xs flex items-center gap-1.5 bg-[#FF6B00]/10 px-3 py-1.5 rounded-full w-fit">
                <Trophy className="w-4 h-4 text-[#FF6B00]" /> Ultimate Profit Accelerator
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-none">
                Boost Profitability and Save Operational Expenses
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                By allowing guests to orchestrate their own ordering timelines, our contactless QR system drives higher average basket sizes through automated upsells while optimizing physical waiter coverage.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 space-y-2">
                  <div className="text-3xl font-black text-[#FF6B00] font-sans">+22%</div>
                  <h4 className="font-bold text-gray-900 text-sm">Basket Size Increase</h4>
                  <p className="text-gray-500 text-xs">Descriptive HD menus and automatic dessert prompts convince guests during checkout.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-150 space-y-2">
                  <div className="text-3xl font-black text-emerald-500 font-sans">-40%</div>
                  <h4 className="font-bold text-gray-900 text-sm">Menu Printing Costs</h4>
                  <p className="text-gray-500 text-xs">Change menu lists, pricing tiers, and dish catalogs instantly without printing paper menus again.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { title: 'Zero App Installs Required', desc: 'Runs directly in standard phone web browsers (Safari, Chrome) within 0.4s. No barriers, absolute safety.' },
                { title: 'Eliminate Long Waiter Delays', desc: 'Diners submit dishes as soon as they sit down. No more waving hands to catch busy waitstaff attention.' },
                { title: 'Reduce Cashier Count Errors', desc: 'All billing values sync directly with your master POS administrator panel, preventing manual input slips.' }
              ].map((ben, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#FF6B00]/25 transition-colors">
                  <div className="p-2 bg-[#FF6B00]/10 rounded-xl text-[#FF6B00] shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">{ben.title}</h4>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed font-light">{ben.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 11. SCREENSHOTS SECTION */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="screenshots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              System Interface
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Chishty QR Dining Interface Preview
            </h2>
            <p className="text-gray-500 text-sm">
              Take a closer look at the high-fidelity UI that your restaurant guests will enjoy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'High-Definition Item View',
                type: 'MOBILE CUSTOMER APP',
                desc: 'Clean, large photographs are combined with customizable modifier options, price indicators, and allergen warnings.',
                badge: 'HD Display'
              },
              {
                title: 'Live Shared Table Cart',
                type: 'COLLABORATIVE DINING',
                desc: 'Guests at Table 8 can see what their friends are ordering on a single screen. Cart synchs in real-time under 50ms.',
                badge: 'E2E Sync'
              },
              {
                title: 'Kitchen Display (KDS) Screen',
                type: 'BACK-OF-HOUSE TERMINAL',
                desc: 'Hot and cold chefs receive immediate ticket slips labeled with precise table numbers and special cooking notes.',
                badge: 'Live KDS'
              }
            ].map((sc, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-gray-150 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div className="space-y-4">
                  <div className="bg-[#1C1C1C] rounded-2xl h-44 flex items-center justify-center text-white relative overflow-hidden font-mono text-[10px]">
                    <div className="absolute top-3 left-3 bg-[#FF6B00]/20 border border-[#FF6B00]/30 px-2 py-0.5 rounded text-[8px] font-bold text-[#FF6B00] uppercase tracking-wider">
                      {sc.badge}
                    </div>
                    
                    {idx === 0 && (
                      <div className="text-center space-y-2 p-4">
                        <p className="text-gray-400"># DISH_VIEW_LOADER</p>
                        <p className="text-white font-sans font-bold text-xs">Chicken Tikka Pizza Supreme</p>
                        <p className="text-[#FF6B00] font-sans font-black text-xs">Rs. 1,590</p>
                      </div>
                    )}

                    {idx === 1 && (
                      <div className="text-center space-y-2 p-4 w-full">
                        <p className="text-gray-400"># SYNCED_TABLE_CART (Table 08)</p>
                        <div className="space-y-1 text-gray-300 font-sans max-w-[180px] mx-auto text-left">
                          <p className="flex justify-between"><span>Hamad: Beef Burger</span> <span className="text-[#FF6B00]">✓ Ready</span></p>
                          <p className="flex justify-between"><span>Zainab: Soda Lemon</span> <span className="text-[#FF6B00]">✓ Ready</span></p>
                        </div>
                      </div>
                    )}

                    {idx === 2 && (
                      <div className="text-center space-y-2 p-4">
                        <p className="text-gray-400"># KDS_TICKET_FEED</p>
                        <p className="text-emerald-400">NEW: TABLE 12 (Cooking time: 0m)</p>
                        <p className="text-white font-sans text-[9px]">1x Sizzling Fajita Platter (No Onions)</p>
                      </div>
                    )}

                  </div>
                  <span className="text-[10px] font-mono font-extrabold text-[#FF6B00] bg-[#FF6B00]/5 px-2.5 py-1 rounded-full border border-[#FF6B00]/10 uppercase tracking-widest w-fit block">
                    {sc.type}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{sc.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">{sc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ DATABASE */}
      <section className="py-24 bg-white border-b border-gray-100" id="faq">
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

      {/* 13. CTA SECTION (CONTACT FORM) */}
      <section className="py-24 bg-gray-50" id="inquiry-form">
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
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="restaurantName">Restaurant/Cafe Name</label>
                    <input
                      type="text"
                      name="restaurantName"
                      id="restaurantName"
                      required
                      value={formData.restaurantName}
                      onChange={(e) => setFormData({...formData, restaurantName: e.target.value})}
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
                    <option value="5+">5+ National Chain Outlets</option>
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
                  className="w-full bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-extrabold py-4 rounded-xl shadow-lg shadow-[#FF6B00]/25 transition-all duration-300 text-xs uppercase tracking-wider"
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
                  Thank you, <strong>{formData.fullName}</strong>. Your setup ticket code is <strong>#CSS-QR-{ticketId}</strong>. Our senior frontend developers will build a mockup dining web link using your branding parameters and contact you in 1 hour.
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
