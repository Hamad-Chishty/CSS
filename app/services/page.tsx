'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Cpu, Monitor, Sparkles, Layers, CheckCircle2, MessageSquare, 
  Terminal, Shield, FileText, ArrowRight, Zap, RefreshCw, BarChart
} from 'lucide-react';

export default function ServicesPage() {
  
  const servicesList = [
    {
      id: 'custom-dev',
      icon: <Cpu className="w-10 h-10 text-orange-500" />,
      title: 'Custom Software & Desktop Systems',
      tagline: 'High-performance, localized, and ultra-secure enterprise systems.',
      desc: 'When standard SaaS systems fail to align with your operation, our senior architects design, schema-model, and engineer custom systems. We support full desktop software platforms compatible with Windows/macOS/Linux that operate securely on localized server configurations.',
      capabilities: [
        'Custom SQLite, PostgreSQL, and SQL server schemas',
        'C++, C#, and Node.js high-speed compiling',
        'Comprehensive multi-terminal localized synchronization',
        'Full compatibility with POS weighing scales & thermal printing hardware',
        'Automated local transaction replication with redundancy'
      ],
      sla: 'SLA Support: 24/7/365 On-site & Cloud monitoring availability.'
    },
    {
      id: 'web-mobile',
      icon: <Monitor className="w-10 h-10 text-orange-500" />,
      title: 'Web Apps & Native Mobile Architectures',
      tagline: 'Lightning-fast cloud web apps and optimized iOS/Android packages.',
      desc: 'We engineer dynamic, secure, and fully responsive platforms. Our React and Next.js systems operate with optimized Lighthouse scores and perfect mobile responsive viewport sizing. We compile lightweight mobile packages for iOS and Android, keeping your team and customers connected.',
      capabilities: [
        'Single Page Applications (SPAs) & server-rendered layouts',
        'Cross-platform Flutter & React Native compiling',
        'Secure API Gateway setups with custom OAuth frameworks',
        'Advanced push notification servers and client channels',
        'Offline-first app storage caches (IndexedDB / SQLite)'
      ],
      sla: '99.99% Guaranteed Cloud API service levels.'
    },
    {
      id: 'ai-solutions',
      icon: <Sparkles className="w-10 h-10 text-orange-500" />,
      title: 'AI Architectures & Workflow Automation',
      tagline: 'Integrate logical LLMs and automated conversational agents.',
      desc: 'Introduce cognitive data sorting and intelligent bots directly into your existing software. We specialize in Gemini API integration, auto-categorizing daily sales data, automating customer ticket responses, and configuring WhatsApp corporate automated loops.',
      capabilities: [
        'Gemini LLM semantic content pipelines',
        'Custom corporate CRM workflow automation',
        'Official WhatsApp Business API bulk-alert channels',
        'Predictive stock replenishment forecasting engines',
        'Automatic customer invoice extraction & OCR models'
      ],
      sla: 'High-speed model execution with failover API pathways.'
    },
    {
      id: 'seo-branding',
      icon: <Layers className="w-10 h-10 text-orange-500" />,
      title: 'Technical SEO, Brand Identity & UI/UX Design',
      tagline: 'Exquisite, high-converting interfaces and top search result positions.',
      desc: 'Craft is our primary metric. Our award-winning UI/UX division maps professional user behaviors, creating gorgeous brand logos, luxury print-ready collateral, and pixel-perfect layouts. We back this with technical search auditing to place your brand above regional and global competitors.',
      capabilities: [
        'High-fidelity Figma structural wireframing',
        'Modern brand kits, vector logos, and color architectures',
        'Core Web Vitals performance tuning (95+ Lighthouse scoring)',
        'Strategic local SEO keyword mapping & sitemap schemas',
        'A/B testing for Conversion Rate Optimization (CRO)'
      ],
      sla: 'Complete visual asset export and keyword positioning guarantees.'
    }
  ];

  return (
    <div id="services-page-root" className="bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            Technical Capabilities
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            World-Class Software Engineering
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            From high-speed localized desktop modules to enterprise AI automation. We design, deploy, and support systems that scale business values.
          </p>
        </div>
      </section>

      {/* Services Listings */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {servicesList.map((srv, idx) => (
          <div 
            key={srv.id} 
            id={srv.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-center ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Column */}
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`} id={`srv-visual-${srv.id}`}>
              <div className="bg-gray-50 border border-gray-150 rounded-3xl p-8 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4 bg-white rounded-2xl w-16 h-16 flex items-center justify-center shadow-sm border border-gray-100 mb-6">
                  {srv.icon}
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400">
                    <span>SLA STANDARD</span>
                    <span className="text-emerald-500 font-bold">100% EXCELLENCE</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed bg-white p-4 rounded-xl border border-gray-100/60 font-mono">
                    {srv.sla}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Copy */}
            <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-1' : ''}`} id={`srv-content-${srv.id}`}>
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00] font-mono">
                  SERVICE: 0{idx + 1}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {srv.title}
                </h2>
                <p className="text-base text-gray-500 italic font-medium">
                  &ldquo;{srv.tagline}&rdquo;
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {srv.desc}
                </p>

                <div className="space-y-3 pt-2">
                  {srv.capabilities.map((cap, cidx) => (
                    <div key={cidx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs sm:text-sm font-medium">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link
                    id={`srv-btn-demo-${srv.id}`}
                    href={`/contact?service=${srv.id}`}
                    className="bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-black/5 text-center transition-colors"
                  >
                    Discuss System Architecture
                  </Link>
                  <a
                    id={`srv-btn-wa-${srv.id}`}
                    href={`https://wa.me/923006392025?text=Hi,%20I%20want%20to%20discuss%20your%20${encodeURIComponent(srv.title)}%20services`}
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

      {/* SLA Commitment */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1C1C1C] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider font-mono">
                  Agency Commitment
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                  Our 100% Quality & SLA Support Guarantee
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  Every system compiled by Chishty Smart Solutions comes standard with on-site staff training, automated secure server synchronization, robust error telemetry tracking, and direct access to senior developers.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  id="services-sla-cta"
                  href="/contact"
                  className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-[#FF6B00]/20 transition-all flex items-center space-x-2"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
