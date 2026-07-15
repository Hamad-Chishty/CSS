'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  ArrowRight, MessageSquare, Shield, CheckCircle2, Cpu, Sparkles, 
  ChevronRight, Play, Users, BarChart3, Database, Layers, 
  Smartphone, Monitor, Zap, HelpCircle
} from 'lucide-react';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Parallax state for the upgraded hero section
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [salesCounter, setSalesCounter] = useState(842910);

  React.useEffect(() => {
    // Increment the sales counter slightly over time to show live synchronization simulation
    const interval = setInterval(() => {
      setSalesCounter(prev => prev + Math.floor(Math.random() * 150) + 50);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window === 'undefined') return;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = (e.clientX - width / 2) / 35;
    const y = (e.clientY - height / 2) / 35;
    setMousePos({ x, y });
  };

  const stats = [
    { value: '5,000+', label: 'Stores Standardized' },
    { value: '$450M+', label: 'Yearly Volume Managed' },
    { value: '99.99%', label: 'Cloud API Uptime' },
    { value: '14+', label: 'Countries Supported' }
  ];

  const trustedBrands = [
    'LuxeRetail Co.', 'BakeWay Premium', 'PharmaCare Network', 'UrbanGrocer', 'The Grand Bistro', 'Apex Logistics'
  ];

  const coreProducts = [
    {
      title: 'Restaurant & Cafe POS',
      description: 'Engineered for fast-paced dining. Includes dynamic QR menus, kitchen display systems (KDS), and split-bill payments.',
      badge: 'Popular',
      link: '/products#pos-restaurant'
    },
    {
      title: 'Retail & Grocery POS',
      description: 'Advanced barcode matrix, real-time inventory synchronization, vendor purchase order automation, and customer loyalty.',
      badge: 'Enterprise',
      link: '/products#pos-retail'
    },
    {
      title: 'Pharmacy POS',
      description: 'Features drug expiration alerts, batch number tracking, prescription database matching, and drug interaction warnings.',
      badge: 'Specialized',
      link: '/products#pos-pharmacy'
    },
    {
      title: 'ERP & Inventory Management',
      description: 'Consolidate multiple warehouses, financial charts, purchase cycles, and real-time ledger accounting into a single portal.',
      badge: 'Full Suite',
      link: '/products#erp-accounting'
    }
  ];

  const coreServices = [
    {
      icon: <Cpu className="w-6 h-6 text-orange-500" />,
      title: 'Custom Software Development',
      desc: 'Bespoke systems modeled around your specific workflow, built to optimize overhead and remove operational bottlenecks.'
    },
    {
      icon: <Monitor className="w-6 h-6 text-orange-500" />,
      title: 'Web & Mobile Applications',
      desc: 'Stunning cross-platform iOS & Android apps paired with responsive web frontends featuring fast loading speeds.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-orange-500" />,
      title: 'AI & Business Automation',
      desc: 'Introduce cognitive data models, custom CRM pipelines, and WhatsApp notification agents directly into your daily loops.'
    },
    {
      icon: <Layers className="w-6 h-6 text-orange-500" />,
      title: 'Digital Marketing & SEO',
      desc: 'Establish rank supremacy with customized technical auditing, strategic content optimization, and performance campaigns.'
    }
  ];

  const processSteps = [
    { step: '01', title: 'Consultation & Schema Architecture', desc: 'We analyze your current operations, bottleneck matrices, and output requirements to design a tailored system blueprint.' },
    { step: '02', title: 'High-Fidelity Interface Prototyping', desc: 'Our senior designers construct modern, high-contrast mockups representing the exact user journey for your team.' },
    { step: '03', title: 'Enterprise-Grade Development', desc: 'We engineer using standard-compliant clean architectures, integrating ultra-fast state managers, redundant databases, and strict API structures.' },
    { step: '04', title: 'Deployment, Training & Dedicated SLA', desc: 'We assist with data importing, train your staff on-site, and provide 24/7 dedicated system monitoring and support.' }
  ];

  const portfolioPreviews = [
    {
      title: 'BakeWay Premium POS Suite',
      type: 'Bakery Chain POS & Inventory',
      desc: 'Re-engineered payment pathways and automated daily ingredient level depletion checks across 14 separate locations.',
      metric: '+34% Operating Speed'
    },
    {
      title: 'Apex Global Logistics ERP',
      type: 'Bespoke Corporate ERP Platform',
      desc: 'Integrated real-time package delivery tracking, custom payroll, vehicle routing, and client billing portals.',
      metric: '-22% Administrative Hours'
    }
  ];

  const testimonials = [
    {
      quote: "Chishty Smart Solutions completely revolutionized how we handle billing and ingredients depletion across our bakery chain. The speed of their POS is unmatched.",
      author: "Zainab Malik",
      role: "Operations Director, BakeWay Premium",
      image: "https://picsum.photos/seed/zainab/100/100"
    },
    {
      quote: "The custom logistics ERP developed by their team cut down our reporting cycle by half. Their technical leadership and post-launch support have been exceptional.",
      author: "Haris Mahmood",
      role: "CEO, Apex Global Logistics",
      image: "https://picsum.photos/seed/haris/100/100"
    }
  ];

  const faqs = [
    { q: 'How long does a complete POS or Custom ERP implementation take?', a: 'Standard POS configurations (Restaurant, Retail, Pharmacy) can be deployed within 3 to 7 business days, including hardware calibration. Large custom ERP and system integrations typically scale from 4 to 12 weeks depending on specific workflow requirements.' },
    { q: 'Can the POS operate offline if my internet connection fails?', a: 'Yes. Our POS architectures feature robust local synchronization engines. If your connection drops, all billing and transaction logs are stored locally on your desktop or device, and automatically synchronize with your cloud server once internet access is restored.' },
    { q: 'Do you provide on-site hardware training and data migration support?', a: 'Absolutely. We handle data migration from your legacy sheets or old software, configure compatible receipt printers, barcode scanners, and scales, and provide complete hands-on training to your supervisors and staff to ensure a seamless transition.' },
    { q: 'Are there any hidden recurring fees or transaction commissions?', a: 'No hidden fees. We believe in transparency. We offer flat-rate pricing structures for standard POS modules and one-off development packages for custom software. Any cloud hosting or maintenance support SLA options are detailed upfront.' }
  ];

  return (
    <div id="home-page-root" className="overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section 
        id="hero-section" 
        onMouseMove={handleMouseMove}
        className="relative bg-[#0F0F0F] pt-24 pb-20 lg:pt-36 lg:pb-32 text-white overflow-hidden border-b border-white/5"
      >
        {/* Animated fluid gradient background blobs */}
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.2, 0.15],
            x: [0, 10, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF6B00]/15 rounded-full blur-[100px] pointer-events-none"
        />
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Sales Copy */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-8" 
              id="hero-copy-col"
            >
              <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#FF6B00] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Next-Gen Enterprise Architectures</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
                Standardize Your Business With <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#FF8C39]">World-Class POS</span> & Custom Software
              </h1>
              
              <p className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
                Empower your restaurant, retail outlet, pharmacy, or enterprise with high-performance billing systems, advanced real-time inventory management, custom web apps, and automated digital ecosystems. Designed by Chishty Smart Solutions.
              </p>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="shrink-0">
                  <Link 
                    id="hero-demo-cta"
                    href="/contact?demo=true" 
                    className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/30 transition-all text-center flex items-center justify-center space-x-2 w-full sm:w-auto"
                  >
                    <span>Request Live Demo</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="shrink-0">
                  <a 
                    id="hero-wa-cta"
                    href="https://wa.me/923006392025" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl text-base font-bold transition-all text-center flex items-center justify-center space-x-2 w-full sm:w-auto"
                  >
                    <MessageSquare className="w-5 h-5 text-[#FF6B00]" />
                    <span>Consult via WhatsApp</span>
                  </a>
                </motion.div>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 text-xs text-gray-400 border-t border-white/5" id="hero-trust-badges">
                <span className="flex items-center space-x-1.5">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span>Licensed Enterprise Systems</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
                  <span>Local & Cloud Backup Redundancy</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span>Free Staff Training Included</span>
                </span>
              </div>
            </motion.div>

            {/* Interactive Dashboard / Mockup Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.2, ease: "easeOut" }}
              style={{ x: mousePos.x, y: mousePos.y }}
              className="lg:col-span-5 relative" 
              id="hero-vector-col"
            >
              {/* Outer decorative neon frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00]/40 to-transparent rounded-3xl blur-xl opacity-40 -z-10"></div>
              
              <div className="w-full aspect-square max-w-[480px] mx-auto bg-gradient-to-tr from-[#1A1A1A] to-[#262626] border border-white/10 rounded-3xl p-1 relative shadow-2xl overflow-hidden group">
                
                {/* Floating Micro-SaaS software cards */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 -left-6 bg-[#121212]/95 border border-white/10 p-3 rounded-xl shadow-2xl z-20 flex items-center space-x-2 max-w-[180px] pointer-events-none"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-gray-300">Sync: 14 Nodes</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-16 -right-6 bg-[#121212]/95 border border-white/10 p-3 rounded-xl shadow-2xl z-20 flex items-center space-x-2 max-w-[200px] pointer-events-none"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
                  <span className="text-[10px] font-mono text-gray-300">Offline SQLite: Connected</span>
                </motion.div>

                <div className="w-full h-full bg-[#121212]/80 backdrop-blur-md rounded-[22px] p-6 flex flex-col justify-between text-white">
                  
                  {/* Mock Dashboard Header */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                      <span className="ml-2 bg-white/5 border border-white/10 rounded px-2.5 py-0.5 text-[9px] text-gray-400 font-mono">chishtysmartsolutions.com</span>
                    </div>
                    <span className="text-[9px] bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/20 px-2.5 py-1 rounded-full font-bold uppercase tracking-wider animate-pulse">
                      Live Sales Feed
                    </span>
                  </div>

                  {/* Mock Chart Area */}
                  <div className="my-6 space-y-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-gray-400 block font-semibold uppercase tracking-wider font-mono">Total Revenue (Daily)</span>
                        <span className="text-2xl sm:text-3xl font-black font-mono text-white">
                          PKR {salesCounter.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">+18.4%</span>
                    </div>

                    {/* Faux grid lines & bar with nice animation */}
                    <div className="h-28 flex items-end justify-between gap-2 pt-4 bg-white/5 rounded-xl p-3 border border-white/10">
                      <div className="w-full bg-[#FF6B00]/20 rounded-t-md h-[40%] hover:bg-[#FF6B00]/40 transition-colors"></div>
                      <div className="w-full bg-[#FF6B00]/30 rounded-t-md h-[65%] hover:bg-[#FF6B00]/50 transition-colors"></div>
                      <div className="w-full bg-[#FF6B00]/40 rounded-t-md h-[55%] hover:bg-[#FF6B00]/60 transition-colors"></div>
                      <div className="w-full bg-[#FF6B00]/60 rounded-t-md h-[85%] hover:bg-[#FF6B00]/80 transition-colors"></div>
                      <motion.div 
                        animate={{ height: ["100%", "92%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full bg-[#FF6B00] rounded-t-md h-[100%] shadow-lg shadow-[#FF6B00]/40"
                      />
                    </div>
                  </div>

                  {/* Interactive Status List */}
                  <div className="space-y-2 border-t border-white/5 pt-4">
                    <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                      <span>Sync Server Status</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1.5 font-mono">
                        <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span> SECURE-SSL
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs font-medium text-gray-400">
                      <span>Active Terminals</span>
                      <span className="text-[#FF6B00] font-mono font-bold">100% SLA STABLE</span>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. TRUSTED BY LOGOS PLACEHOLDER */}
      <section id="trusted-by" className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-150 px-3 py-1 rounded-full text-xs font-semibold text-gray-500 uppercase tracking-widest font-mono">
              <span>NDA Compliance Shield</span>
            </div>
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest">
              Client Privacy Shield
            </p>
            <p className="text-gray-500 text-xs leading-relaxed max-w-xl mx-auto">
              Our active restaurant, pharmacy, and retail deployments are protected under NDA compliance protocols. Client references, verified brand case studies, and live terminal demonstrations can be provided on request to qualified directors.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS BENTO GRID */}
      <section id="products-section" className="py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="products-header">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              SaaS Products
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Enterprise POS & Core Management Software
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Explore our range of purpose-built POS applications and enterprise backbones, fully optimized for lightning-fast billing, security, and real-time operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="products-grid">
            {coreProducts.map((prod) => (
              <div 
                key={prod.title}
                className="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-gray-200 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs bg-gray-100 text-gray-700 font-bold px-3 py-1 rounded-full uppercase">
                      {prod.badge}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#FF6B00] group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#FF6B00] transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {prod.description}
                  </p>
                </div>
                <Link 
                  href={prod.link}
                  className="text-sm font-semibold text-[#FF6B00] hover:text-[#FF8C39] flex items-center"
                >
                  <span>Explore Product Capabilities</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              id="view-all-products-link"
              href="/products" 
              className="inline-flex items-center space-x-1.5 text-sm font-bold text-gray-900 hover:text-[#FF6B00] transition-colors"
            >
              <span>View All 12+ Specialized Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. SERVICES SHOWCASE */}
      <section id="services-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4" id="services-header">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Agency Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Bespoke Software Engineering & Automation
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              When standard POS or SaaS templates do not fit, our elite agency developers craft high-performance architectures tailored exactly to your brand goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="services-grid">
            {coreServices.map((srv) => (
              <div 
                key={srv.title}
                className="p-6 rounded-2xl bg-gray-50/50 hover:bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="p-3 bg-white border border-gray-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6 shadow-sm">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{srv.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              id="view-all-services-link"
              href="/services" 
              className="bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white px-8 py-3.5 rounded-xl text-sm font-bold shadow-lg transition-colors inline-block"
            >
              Explore Dedicated Services
            </Link>
          </div>

        </div>
      </section>

      {/* 5. DYNAMIC INDUSTRIES COMPONENT */}
      <section id="industries-section" className="py-24 bg-[#1C1C1C] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-6" id="industries-copy-col">
              <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full inline-block">
                Tailored Verticals
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Designed to Dominate Your Niche
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                We design specific database schemas, payment pipelines, and inventory workflows for over 20 separate industries.
              </p>
              <Link 
                id="view-industries-cta"
                href="/industries" 
                className="text-sm font-bold text-[#FF6B00] hover:text-[#FF8C39] inline-flex items-center group"
              >
                <span>View all Industries We Serve</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-all" />
              </Link>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4" id="industries-grid">
              {[
                'Restaurant & Cafes', 'Pharma & Biotech', 'Mega Groceries', 
                'Luxury Bakeries', 'Five-Star Hotels', 'Hardware Stores', 
                'Apparel & Fashion', 'Electronics Outlets', 'Manufacturing'
              ].map((ind, idx) => (
                <div 
                  key={idx}
                  className="bg-white/5 border border-white/10 hover:border-[#FF6B00]/30 hover:bg-white/10 p-5 rounded-xl transition-all"
                >
                  <h3 className="text-sm font-bold text-white mb-1">{ind}</h3>
                  <span className="text-xs text-gray-500">Optimized Solutions</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 6. OUR METHODOLOGY & TIMELINE */}
      <section id="process-section" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4" id="process-header">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              SLA Delivery Model
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              How We Engineer High-Impact Platforms
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our systematic digital engineering framework ensures zero system friction, rapid team boarding, and resilient cloud architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative" id="process-timeline">
            {processSteps.map((step, idx) => (
              <div key={idx} className="space-y-6 relative group">
                <div className="text-5xl font-black text-gray-100 group-hover:text-[#FF6B00]/15 transition-colors font-mono">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. REAL-TIME STATS PANEL PLACEHOLDER */}
      <section id="stats-section" className="py-20 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs font-bold text-[#FF6B00] uppercase tracking-widest font-mono">Verified Performance Metrics</p>
          <p className="text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
            Chishty Smart Solutions is compiling verified deployment metrics, including transaction success ratios, processing uptime SLA, and localized store onboarding statistics. Live audit proofs are available through our chief developer.
          </p>
        </div>
      </section>

      {/* 8. PORTFOLIO PREVIEW PLACEHOLDER */}
      <section id="portfolio-preview" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-150 rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-sm">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full inline-block">
              Case Study Directories
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Active Installation Portfolio
            </h2>
            <div className="py-4 border-y border-gray-100/80 my-4">
              <span className="text-base font-bold text-gray-400 uppercase tracking-widest font-mono block">
                Commercial Deployments Under Review
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
              Our bespoke software setups for bakeries, logistics hubs, and pharmacy networks operate on private corporate server clusters. Inquire on WhatsApp to consult our chief architect and review active demo environments matching your specific workflow.
            </p>
            <div className="pt-4">
              <Link 
                id="portfolio-placeholder-cta"
                href="/contact" 
                className="bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white px-6 py-3 rounded-xl text-sm font-bold transition-all inline-flex items-center space-x-1.5"
              >
                <span>Inquire About Portfolios</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CLIENT TESTIMONIALS PLACEHOLDER */}
      <section id="testimonials-section" className="py-24 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-sm">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Client Feedback
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
              Operator Verification
            </h2>
            <div className="py-4 border-y border-gray-100/80 my-4">
              <span className="text-base font-bold text-gray-400 uppercase tracking-widest font-mono block">
                Verified Client Endorsements
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto">
              Testimonials, reviews, and operator satisfaction scores undergo verified legal audits to guarantee absolute truthfulness without mock fabrication. Verified supervisor references can be supplied on demand for large commercial integrations.
            </p>
          </div>
        </div>
      </section>

      {/* 10. FAQS */}
      <section id="faq-section" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16 space-y-4" id="faq-header">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              System Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Frequently Asked Support FAQ
            </h2>
          </div>

          <div className="space-y-4" id="faq-accordion-container">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border border-gray-100 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50/50 font-semibold text-gray-900 text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  <span className="ml-4 flex-shrink-0 text-[#FF6B00]">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="p-5 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              id="view-faq-preview-cta"
              href="/faq" 
              className="text-sm font-bold text-[#FF6B00] hover:text-[#FF8C39] transition-colors"
            >
              Still Have Technical Questions? View Extended FAQ Directory
            </Link>
          </div>

        </div>
      </section>

      {/* 11. FINAL CONVERSION CTA */}
      <section id="final-cta-section" className="py-24 bg-gradient-to-t from-[#121212] to-[#1C1C1C] text-white relative">
        <div className="absolute inset-0 bg-[#FF6B00]/5 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Standardize Your Operations to an International Level?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto font-normal">
            Discuss your system blueprints with our Senior Frontend Architect and Creative Director. Standardize your retail network, cafe billing system, or custom enterprise CRM.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link
              id="final-cta-demo-btn"
              href="/contact?demo=true"
              className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/30 transition-all w-full sm:w-auto"
            >
              Schedule Platform Demo
            </Link>
            <a
              id="final-cta-wa-btn"
              href="https://wa.me/923006392025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-base font-bold transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <MessageSquare className="w-5 h-5 text-[#FF6B00]" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
          <p className="text-xs text-gray-500 font-medium">
            No obligation. Free blueprint architecture analysis. WhatsApp response time &lt; 5 minutes.
          </p>
        </div>
      </section>

    </div>
  );
}
