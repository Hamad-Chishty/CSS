'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, HelpCircle, 
  Send, Laptop, Database, Terminal, Zap, Check, Users, Building2, Briefcase
} from 'lucide-react';

export default function CustomSoftwareDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    projectScope: 'enterprise',
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
        'name': 'Services',
        'item': 'https://chishtysmartsolutions.com/services'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Custom Software Development',
        'item': 'https://chishtysmartsolutions.com/services/custom-software-development'
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Custom Software & Desktop System Development',
    'description': 'Senior-architected bespoke software engineering. We design custom schemas, compile localized applications (Windows/macOS/Linux), and provide secure terminal synchronization.',
    'provider': {
      '@type': 'Organization',
      'name': 'Chishty Smart Solutions',
      'url': 'https://chishtysmartsolutions.com'
    },
    'areaServed': 'Worldwide',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Custom Software Engineering',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Custom Database & ERP Schemas'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Localized Desktop Application Development'
          }
        }
      ]
    }
  };

  const faqItems = [
    {
      question: 'Can the custom software operate if our internet is disconnected?',
      answer: 'Yes. We build using offline-first replication models. Terminals run on locally compiled database instances (SQLite or localized PostgreSQL engines) and auto-replicate back and forth once connectivity is restored, ensuring zero operational downtime.'
    },
    {
      question: 'Do you support integration with legacy POS scales and thermal hardware?',
      answer: 'Absolutely. We code serial/COM port interfaces and low-level drivers directly. Our compiled architectures communicate seamlessly with weighing scales, thermal receipt printers, magnetic swipe modules, and barcode equipment.'
    },
    {
      question: 'How do you handle system security and data replication safeguards?',
      answer: 'We deploy localized transaction ledger syncing with master-to-slave redundancy. Data is encrypted in transit and at rest using AES-256 protocols, backed by hourly automated offline physical clones and optional daily cloud backups.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketId(Math.floor(Math.random() * 90000) + 10000);
    setSubmitted(true);
  };

  return (
    <div className="bg-white font-sans" id="custom-software-dev-page">
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
                Enterprise Engineering
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                Custom Software & <span className="text-[#FF6B00]">Desktop Systems</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                When standard SaaS applications fail to align with your operation, our senior architects design, schema-model, and compile robust offline-first software solutions that run flawlessly across Windows, macOS, and Linux.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#contact-form-sec"
                  className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold text-center px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/20 transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Consult System Architect</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923006392025?text=Hi,%20I%20want%20to%20discuss%20custom%20software%20and%20desktop%20system%20development%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-center px-8 py-4 rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  <span>Chat with Engineer</span>
                </a>
              </div>
            </div>

            {/* Hero Right Mockup: System architecture & Schema visualizer */}
            <div className="lg:col-span-6" id="custom-software-hero-mockup">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FF6B00] to-[#FF8C39] opacity-25 blur-lg" aria-hidden="true"></div>
                <div className="relative bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl text-xs text-gray-300 font-mono">
                  {/* Mockup Header */}
                  <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-[10px] text-gray-500 ml-2">CHISHTY_SCHEMA_ENGINE</span>
                    </div>
                    <span className="bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 px-2 py-0.5 rounded text-[10px] font-bold">
                      SYSTEM ACTIVE
                    </span>
                  </div>

                  {/* Mockup UI Panel */}
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
                    {/* Left: Terminal output */}
                    <div className="md:col-span-7 p-4 border-r border-white/5 space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="text-white font-bold">LOCAL CLUSTER HEALTH</span>
                        <span className="text-gray-500 text-[10px]">OFFLINE SAFE</span>
                      </div>
                      
                      <div className="space-y-2 text-[11px]">
                        <div className="bg-white/5 p-2 rounded border border-white/5 font-mono">
                          <span className="text-[#FF6B00]">root@node-01:~$</span> compilation -build -v<br/>
                          <span className="text-emerald-400">✓ SQLite transaction cache compiled</span><br/>
                          <span className="text-emerald-400">✓ COM4 interface listening (weight logs)</span><br/>
                          <span className="text-emerald-400">✓ High-speed C++ engine initialized</span>
                        </div>
                        <div className="bg-white/5 p-2 rounded border border-white/5 font-mono">
                          <span className="text-[#FF6B00]">root@sync-ledger:~$</span> daemon -sync -check<br/>
                          <span className="text-white">Active replication: 4 terminals connected</span><br/>
                          <span className="text-[#FF6B00]">Replication Latency: 0.02ms</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: DB schemas stats */}
                    <div className="md:col-span-5 p-4 bg-[#141414] flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-white/5">
                          <span className="text-white font-bold">SLA MONITORING</span>
                        </div>
                        <div className="space-y-2 text-[10px] text-gray-400 font-mono">
                          <div className="flex justify-between">
                            <span>OS Support:</span>
                            <span className="text-white">Cross-Platform</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Failover Mode:</span>
                            <span className="text-emerald-500">Auto Local</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Ledger Integrity:</span>
                            <span className="text-white">100% Verified</span>
                          </div>
                          <div className="flex justify-between">
                            <span>SLA Response:</span>
                            <span className="text-[#FF6B00]">&lt;15 Mins</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#FF6B00] text-center text-white py-2 rounded-lg font-bold cursor-pointer hover:bg-orange-600 transition-colors mt-6 font-sans">
                        COMPILED STACK PING
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="py-24 bg-white border-b border-gray-100" id="custom-software-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
                01 / Architectural Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Designed to Execute. Engineered to Last.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Standard out-of-the-box software packages look simple on paper, but they are rarely flexible enough to support your specific, nuanced operational bottlenecks. That is where our custom engineering division steps in.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We develop fast, localized custom software and desktop suites built to bypass the fragility of external web connections. By writing natively compiled code, we maximize execution velocity and system reliability on site.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gray-50 border border-gray-150 rounded-3xl p-6 shadow-sm">
                <Database className="w-10 h-10 text-[#FF6B00] mb-4" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Bespoke Database Schema</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Engineered with PostgreSQL, SQLite, or Microsoft SQL configurations mapped precisely around your operational reporting trees.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-150 rounded-3xl p-6 shadow-sm">
                <Laptop className="w-10 h-10 text-[#FF6B00] mb-4" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Desktop Class Performance</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Smooth user interfaces operating on Windows, macOS, or Linux, executing transactions and logs with sub-millisecond local speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE FEATURES SECTION */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="custom-software-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Engineered Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Technical Core Specifications
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Every deployment is backed by solid hardware integrations and low-level compiling methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'High-Speed Local Databases',
                description: 'Custom SQLite, PostgreSQL, and SQL server schemas mapped around local terminal caches for maximum throughput.',
                icon: <Database className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'High-Performance Compiled Code',
                description: 'C++, C#, and Node.js compilation optimized for local machine CPU registers, eliminating web latency completely.',
                icon: <Terminal className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Multi-Terminal Local Sync',
                description: 'Seamless localized server setups that sync inventory ledger logs and cashier records without cloud dependencies.',
                icon: <Zap className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Hardware Driver Connectivity',
                description: 'Full physical compatibility with weighing scales, automated packaging lines, thermal receipt printers, and barcode scanners.',
                icon: <Laptop className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Automated Local Replication',
                description: 'Master-slave local replication models keep all on-premise hardware stations synchronized in real-time.',
                icon: <Cpu className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Bulletproof Failover Security',
                description: 'Automated local backup protocols combined with encrypted daily remote storage syncs for complete redundancy.',
                icon: <ShieldCheck className="w-6 h-6 text-[#FF6B00]" />
              }
            ].map((feat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-150 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
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

      {/* 4. INDUSTRIES SERVED */}
      <section className="py-24 bg-white border-b border-gray-100" id="custom-software-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Versatile Deployments
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Industries Served Custom Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Retail & Wholesalers',
                desc: 'Localized multi-lane checkout terminals, automatic weight/barcoding systems, and real-time ledger sync.',
                icon: <Building2 className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Manufacturing & Plants',
                desc: 'Weighbridge hardware integrations, raw stock movement ledger logs, and automated supplier billing pipelines.',
                icon: <Cpu className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Healthcare & Pharma',
                desc: 'HIPAA-compliant local patient charts, automated label tracking printers, and secure, offline billing records.',
                icon: <Briefcase className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Logistics & Fleets',
                desc: 'Dynamic scale weighing APIs, terminal-to-terminal offline logs, and automated transport manifesting registers.',
                icon: <Users className="w-6 h-6 text-[#FF6B00]" />
              }
            ].map((ind, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-150 p-6 rounded-3xl space-y-4 hover:bg-white hover:shadow-lg transition-all">
                <div className="p-3 bg-white rounded-2xl w-fit shadow-sm text-[#FF6B00]">
                  {ind.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{ind.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TECHNOLOGY STACK */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="custom-software-tech">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#FF6B00] font-bold uppercase tracking-wider text-xs font-mono">
                Technology Base
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Our Desktop & Systems Tech Stack
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We select technologies that favor structural integrity, compilation speeds, and local hardware connectivity over trends. This ensures longevity and peak execution speeds.
              </p>
            </div>
            <div className="lg:col-span-7 bg-white border border-gray-150 rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-8 text-xs font-mono">
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">LANGUAGES</h4>
                  <p className="text-gray-600">C++ (High speed compiles)</p>
                  <p className="text-gray-600">C# (.NET Core ecosystems)</p>
                  <p className="text-gray-600">TypeScript / Node.js</p>
                  <p className="text-gray-600">Rust (Memory-safe binaries)</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">DATABASES</h4>
                  <p className="text-gray-600">PostgreSQL (Relational)</p>
                  <p className="text-gray-600">SQLite (Offline terminal caches)</p>
                  <p className="text-gray-600">Microsoft SQL Server</p>
                  <p className="text-gray-600">Redis (In-memory queues)</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">FRAMEWORKS</h4>
                  <p className="text-gray-600">Electron (Desktop UI)</p>
                  <p className="text-gray-600">Qt / C++ UI systems</p>
                  <p className="text-gray-600">Windows Forms / WPF</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">INFRASTRUCTURE</h4>
                  <p className="text-gray-600">Docker (Local containers)</p>
                  <p className="text-gray-600">Localized Physical Servers</p>
                  <p className="text-gray-600">AWS Hybrid Cloud Backups</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT PROCESS */}
      <section className="py-24 bg-white border-b border-gray-100" id="custom-software-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              System Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Our Structured Engineering Timeline
            </h2>
            <p className="text-gray-500 text-sm">
              A highly disciplined approach ensures zero regression bugs and seamless hardware sync.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Schema Architecture',
                duration: 'Week 1-2',
                desc: 'We map out your data requirements and design the custom physical database tables and relations.'
              },
              {
                step: '02',
                title: 'Core Engine Compiling',
                duration: 'Week 3-6',
                desc: 'Our engineers write the core logic in C++, C#, or Rust to build the high-speed backend of your terminals.'
              },
              {
                step: '03',
                title: 'Hardware Driver Integration',
                duration: 'Week 7-8',
                desc: 'We synchronize all thermal printers, checkout registers, scale terminals, and barcode peripherals.'
              },
              {
                step: '04',
                title: 'On-Site Run & Go-Live',
                duration: 'Week 9-10',
                desc: 'We verify execution latency on-site, train your operators, and spin up the synchronized physical servers.'
              }
            ].map((proc, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-150 p-6 rounded-3xl relative shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-mono font-black text-[#FF6B00]/20 absolute top-4 right-6">{proc.step}</div>
                <div className="space-y-3 pt-6">
                  <span className="text-[#FF6B00] text-xs font-mono font-bold uppercase">{proc.duration}</span>
                  <h3 className="text-gray-900 font-bold text-base sm:text-lg">{proc.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BENEFITS */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="custom-software-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[#FF6B00] font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-[#FF6B00]" /> High Value Deliverables
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-none">
                Tangible Advantages of Natively Compiled Code
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Why wait on external internet networks or pay hefty recurring per-user SaaS subscription costs? Custom-engineered systems put the control and efficiency back into your local facility.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-2xl border border-gray-150">
                  <div className="text-3xl font-black text-[#FF6B00] font-mono">100%</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">Owned IP Rights</div>
                  <p className="text-gray-500 text-[11px] mt-1">No monthly licensing fees; you own the software codebase outright.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-150">
                  <div className="text-3xl font-black text-[#FF6B00] font-mono">0ms</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">Web Latency</div>
                  <p className="text-gray-500 text-[11px] mt-1">Instant local machine processing speeds for high transaction volumes.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
                <h3 className="text-white font-extrabold text-xl">Compiled Desktop Systems SLA</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Every custom deployment of Chishty Smart Solutions is backed by our technical operational SLA. If on-premise hardware suffers database sync failures or compilation crashes, we maintain dispatch teams to address and verify terminal states instantly.
                </p>
                <div className="border-t border-white/5 pt-4 flex justify-between text-xs text-gray-400 font-mono">
                  <span>SLA INCLUSION</span>
                  <span className="text-[#FF6B00] font-bold">24/7/365 AVAILABILITY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE CHISHTY */}
      <section className="py-24 bg-white border-b border-gray-100" id="why-choose-chishty">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              SLA & Integrity
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Why Choose Chishty Smart Solutions
            </h2>
            <p className="text-gray-500 text-sm">
              We stand apart from marketing-only design agencies by prioritizing hardware control and structural database integrity.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Senior architects direct every line of code',
                desc: 'We do not hand off complicated transactional custom databases to junior engineers. Your core schema structure is designed and signed off by senior system architects with over 10 years of database experience.'
              },
              {
                title: 'Low-level hardware experts',
                desc: 'We carry deep technical knowledge of hardware communications. Whether resolving serial port buffering issues or mapping thermal print templates, we build the bridges natively.'
              },
              {
                title: 'No vendor lock-in or recurring bloat',
                desc: 'Our financial terms are transparent and clean. You pay for the engineering and deployment cycle, and the final compiled platform operates independently without forcing monthly licensing fees on your business.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-4 bg-gray-50 border border-gray-150 p-6 rounded-2xl">
                <CheckCircle2 className="w-6 h-6 text-[#FF6B00] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-bold text-gray-900 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="custom-software-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Common Inquiries
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Frequently Asked Questions
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

      {/* 10. RELATED SERVICES */}
      <section className="py-24 bg-white border-b border-gray-100" id="related-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Expand Your Tech Stack
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Related Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/services/web-mobile-app-development"
              className="bg-gray-50 p-8 rounded-3xl border border-gray-150 hover:shadow-xl hover:bg-white transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-extrabold text-[#FF6B00] bg-[#FF6B00]/5 px-2.5 py-1 rounded-full border border-[#FF6B00]/10 uppercase">
                  CLOUD PORTALS & APPS
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors">Web & Mobile App Development</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Lightning-fast cloud portal networks and native Swift/Kotlin and Flutter assemblies compiled elegantly.</p>
              </div>
              <div className="pt-6 text-xs text-[#FF6B00] font-bold flex items-center space-x-1.5">
                <span>View Service Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/services/ai-business-automation"
              className="bg-gray-50 p-8 rounded-3xl border border-gray-150 hover:shadow-xl hover:bg-white transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-extrabold text-[#FF6B00] bg-[#FF6B00]/5 px-2.5 py-1 rounded-full border border-[#FF6B00]/10 uppercase">
                  INTELLIGENT LLMs
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors">AI & Business Automation</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">Inject Gemini intelligence pipelines, WhatsApp bulk CRM agents, and automated data OCR into your workflow.</p>
              </div>
              <div className="pt-6 text-xs text-[#FF6B00] font-bold flex items-center space-x-1.5">
                <span>View Service Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 11. STRONG CTA SECTION (SLA COMMITMENT REUSED) */}
      <section className="bg-gray-50 py-24 border-t border-gray-100" id="strong-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1C1C1C] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider font-mono">
                  Agency Commitment
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Our 100% Quality & Local SLA Guarantee
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  Every customized suite deployed by Chishty Smart Solutions is backed by physical configuration setups, rigorous offline replication tests, and direct round-the-clock lines to our senior software architects.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="#contact-form-sec"
                  className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-[#FF6B00]/20 transition-all flex items-center space-x-2"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. INTEGRATED CONTACT FORM */}
      <section className="py-24 bg-white border-b border-gray-100" id="contact-form-sec">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 border border-gray-150 rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF6B00]/5 rounded-full blur-2xl"></div>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" id="custom-software-form-element">
                <div className="text-center space-y-2 mb-8">
                  <span className="text-[#FF6B00] text-xs font-mono font-extrabold uppercase tracking-widest block">SYSTEM BLUEPRINT</span>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Initiate System Customization</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">Submit your system blueprints. Our technical engineer will evaluate your database and COM hardware integrations.</p>
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
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="projectScope">Operational Scope</label>
                  <select
                    name="projectScope"
                    id="projectScope"
                    value={formData.projectScope}
                    onChange={(e) => setFormData({...formData, projectScope: e.target.value})}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                  >
                    <option value="enterprise">Multi-Terminal Local Synchronized Network</option>
                    <option value="standalone">Single Local Terminal POS/Desktop app</option>
                    <option value="cloud-hybrid">Cloud-Hybrid Synchronization Setup</option>
                    <option value="hardware-specific">Custom Physical Hardware & Driver Setup</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="message">Describe your current POS or database bottleneck</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe how your current system handles operations, and your specific synchronization or scaling objectives..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="custom-software-submit-btn"
                  className="w-full bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#FF6B00]/20 transition-all text-xs uppercase tracking-wider"
                >
                  Schedule Technical Architectural Call
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6 relative z-10" id="custom-software-submit-success">
                <div className="p-4 bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Blueprint Ticket Received!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Your structural inquiry ticket is <strong>#CSS-SYS-{ticketId}</strong>. Our senior hardware and database architect will review your comments and contact you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#FF6B00] hover:underline"
                  >
                    ← Submit Another Blueprint
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 13. WHATSAPP CTA */}
      <section className="py-12 bg-gray-50 border-t border-gray-150 text-center" id="whatsapp-quick-cta">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="font-bold text-gray-900 text-base">Prefer instant messaging?</h4>
            <p className="text-gray-500 text-xs sm:text-sm">Connect with our systems coordinator over WhatsApp directly.</p>
          </div>
          <a
            href="https://wa.me/923006392025?text=Hi,%20I%20want%20to%20discuss%20custom%20software%20and%20desktop%20system%20development%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#25D366] hover:bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all flex items-center justify-center space-x-2 text-sm shadow-md"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>Consult via WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  );
}
