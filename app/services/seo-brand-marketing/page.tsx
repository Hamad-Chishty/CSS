'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Layers, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, HelpCircle, 
  Send, Laptop, Sparkles, Check, Users, Building2, Briefcase, FileText, Monitor
} from 'lucide-react';

export default function SEOBrandMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    projectScope: 'seo-marketing',
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
        'name': 'SEO & Brand Marketing',
        'item': 'https://chishtysmartsolutions.com/services/seo-brand-marketing'
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'SEO & Brand Marketing Services',
    'description': 'Technical search audits, Core Web Vitals performance tuning, Figma wireframing, and premium vector brand kits designed to dominate organic placements.',
    'provider': {
      '@type': 'Organization',
      'name': 'Chishty Smart Solutions',
      'url': 'https://chishtysmartsolutions.com'
    },
    'areaServed': 'Worldwide',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Branding & SEO optimization',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Technical SEO Audit & Speed Tuning'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Figma Visual UI/UX & Brand Kit Creation'
          }
        }
      ]
    }
  };

  const faqItems = [
    {
      question: 'How long does it take to see organic results from Technical SEO?',
      answer: 'Structural crawl budget and loading speed updates trigger indexing improvements within 2 to 4 weeks. High-value organic keyword positioning and authority building are long-term strategies that mature over 3 to 6 months.'
    },
    {
      question: 'What exact assets are included in your premium corporate brand kit?',
      answer: 'Our visual designers compile high-fidelity SVG vector files of your corporate logo, typography rules, branding color palettes, corporate slide decks, letterhead vectors, and social media layout kits.'
    },
    {
      question: 'Do you guarantee Page-1 ranking positions on Google?',
      answer: 'We guarantee absolute alignment with Google’s official Search quality guidelines and execute advanced performance techniques, achieving massive growth in organic visibility and local map pack rankings.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketId(Math.floor(Math.random() * 90000) + 10000);
    setSubmitted(true);
  };

  return (
    <div className="bg-white font-sans" id="seo-brand-marketing-page">
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
                Performance Branding
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                SEO & Brand <span className="text-[#FF6B00]">Marketing</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Dominate your competitors on Google search. Pair deep technical speed audits and schema-org markups with luxury visual Figma layouts and modern vector branding assets.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#contact-form-sec"
                  className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold text-center px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/20 transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Request Branding Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923006392025?text=Hi,%20I%20want%20to%20discuss%20SEO%20and%20brand%20marketing%20services%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-center px-8 py-4 rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  <span>Chat with Strategist</span>
                </a>
              </div>
            </div>

            {/* Hero Right Mockup: Technical SEO & Branding log visual */}
            <div className="lg:col-span-6" id="seo-branding-hero-mockup">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FF6B00] to-[#FF8C39] opacity-25 blur-lg" aria-hidden="true"></div>
                <div className="relative bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl text-xs text-gray-300 font-mono">
                  {/* Mockup Header */}
                  <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-[10px] text-gray-500 ml-2">CHISHTY_SEO_AUDITOR</span>
                    </div>
                    <span className="bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 px-2 py-0.5 rounded text-[10px] font-bold">
                      AUDIT ACTIVE
                    </span>
                  </div>

                  {/* Mockup UI Panel */}
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
                    {/* Left: Technical audit scores */}
                    <div className="md:col-span-7 p-4 border-r border-white/5 space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="text-white font-bold">CORE WEB VITALS STATUS</span>
                        <span className="text-gray-500 text-[10px]">LCP / FID SECURE</span>
                      </div>
                      
                      <div className="space-y-3 font-sans">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Monitor className="w-4 h-4 text-emerald-400" />
                            <span className="text-white text-[11px] font-bold">Performance Rate</span>
                          </div>
                          <span className="text-emerald-500 text-xs font-bold font-mono">99%</span>
                        </div>

                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <FileText className="w-4 h-4 text-emerald-400" />
                            <span className="text-white text-[11px] font-bold">Schema Validation</span>
                          </div>
                          <span className="text-emerald-500 text-xs font-bold font-mono">100% OK</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: SEO telemetry */}
                    <div className="md:col-span-5 p-4 bg-[#141414] flex flex-col justify-between font-mono text-[10px]">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-2 border-b border-white/5">
                          <span className="text-white font-bold">KPI TARGETS</span>
                        </div>
                        <div className="space-y-2 text-gray-400">
                          <div className="flex justify-between">
                            <span>Sitemap:</span>
                            <span className="text-white">Active XML</span>
                          </div>
                          <div className="flex justify-between">
                            <span>SEO Rank:</span>
                            <span className="text-emerald-500">Accelerating</span>
                          </div>
                          <div className="flex justify-between">
                            <span>CLS Margin:</span>
                            <span className="text-white">0.01s Perfect</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Visual Design:</span>
                            <span className="text-[#FF6B00]">Custom Figma</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#FF6B00] text-center text-white py-2 rounded-lg font-bold cursor-pointer hover:bg-orange-600 transition-colors mt-6 font-sans">
                        START STRUCTURAL AUDIT
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
      <section className="py-24 bg-white border-b border-gray-100" id="seo-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
                04 / Performance Audits
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Aligning Clean Architecture with High Conversion.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Many modern marketing agencies focus strictly on visual concepts while neglecting structural site speed. At Chishty Smart Solutions, we believe beautiful design and technical search optimization must coexist.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our UI/UX division plans luxury layouts in Figma, compiling lightweight, custom SVG brand assets. Simultaneously, our engineering division optimizes Web Vitals, registers schema markup directories, and accelerates page load times to rank you above competitors.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gray-50 border border-gray-150 rounded-3xl p-6 shadow-sm">
                <Layers className="w-10 h-10 text-[#FF6B00] mb-4" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Technical Search Infrastructure</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Engineered using semantic HTML, structured metadata, schema-org mapping, and XML sitemaps to optimize search spider indexation budgets.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-150 rounded-3xl p-6 shadow-sm">
                <Sparkles className="w-10 h-10 text-[#FF6B00] mb-4" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Corporate Branding Kits</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Beautiful vector logotypes, custom font sets, color palettes, and presentation systems tailored around your corporate values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE FEATURES SECTION */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="seo-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Full Stack Marketing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Technical SEO & Branding Features
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We focus on clean, secure optimization strategies that yield lasting search rankings and premium visual authority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'High-Fidelity Figma Wireframes',
                description: 'We sketch interactive wireframes, active customer paths, and gorgeous layouts before writing a single line of code.',
                icon: <Laptop className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Modern Brand Vector Kits',
                description: 'Stunning brand vectors, custom guidelines, slide decks, and print-ready stationery designed with precision.',
                icon: <Sparkles className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Lighthouse Performance Tuning',
                description: 'We audit Core Web Vitals to guarantee speed metrics under 1 second, keeping search crawlers and clients happy.',
                icon: <CheckCircle2 className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Local SEO Keyword Schemes',
                description: 'Map regional search volumes, configure Schema-org markup directories, and dominate Google local listings.',
                icon: <FileText className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Conversion Rate Audits (CRO)',
                description: 'Identify navigation bottlenecks and adjust button layouts to maximize active customer signups.',
                icon: <Layers className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Backlinking & Authority Marketing',
                description: 'Gain trust with ethical link-acquisition campaigns, optimized sitemaps, and search budget management.',
                icon: <Users className="w-6 h-6 text-[#FF6B00]" />
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
      <section className="py-24 bg-white border-b border-gray-100" id="seo-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Target Sectors
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Industries Served Custom Marketing
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Corporate Enterprises',
                desc: 'Premium brand identity guidelines, luxury presentation systems, and nationwide search dominance.',
                icon: <Building2 className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Tech & SaaS Startups',
                desc: 'High-converting landing pages, interactive SaaS dashboards, and technical product sitemap optimization.',
                icon: <Layers className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Local Retail & Medical',
                desc: 'Local Map listing optimization, Google Business rankings, and neighborhood-specific search terms.',
                icon: <Briefcase className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'E-Commerce Brands',
                desc: 'Custom product schema markers, search description templates, and conversion audits.',
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
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="seo-tech">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#FF6B00] font-bold uppercase tracking-wider text-xs font-mono">
                Technology Base
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Our Search & Brand Design Stack
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We utilize elite search indexes, crawl log software, and custom wireframe tools to keep your site ranking high and loading quickly.
              </p>
            </div>
            <div className="lg:col-span-7 bg-white border border-gray-150 rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-8 text-xs font-mono">
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">BRANDING & DESIGN</h4>
                  <p className="text-gray-600">Figma (UI/UX layout sets)</p>
                  <p className="text-gray-600">Adobe Creative Suite</p>
                  <p className="text-gray-600">Vector SVG illustrations</p>
                  <p className="text-gray-600">Custom Typography kits</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">TECHNICAL SEO</h4>
                  <p className="text-gray-600">Google Search Console</p>
                  <p className="text-gray-600">Screaming Frog Crawlers</p>
                  <p className="text-gray-600">Ahrefs & SEMrush indexing</p>
                  <p className="text-gray-600">Schema.org JSON-LD scripts</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">SPEED OPTIMIZATION</h4>
                  <p className="text-gray-600">Next.js SSR & Static caching</p>
                  <p className="text-gray-600">Tailwind CSS (Zero bloat styles)</p>
                  <p className="text-gray-600">Google Lighthouse suite</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">ANALYTICS & CONVERSIONS</h4>
                  <p className="text-gray-600">Google Analytics 4</p>
                  <p className="text-gray-600">Vercel Speed Insights</p>
                  <p className="text-gray-600">CRO A/B Testing models</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT PROCESS */}
      <section className="py-24 bg-white border-b border-gray-100" id="seo-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Process Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Our 4-Step Strategic Timeline
            </h2>
            <p className="text-gray-500 text-sm">
              We merge deep competitor mapping with technical speed tuning for lasting search performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Competitor & Keyword Audit',
                duration: 'Week 1',
                desc: 'We map competitors backlink budgets, discover search volumes, and outline your target keywords.'
              },
              {
                step: '02',
                title: 'Figma UI/UX & Brand Design',
                duration: 'Week 2-4',
                desc: 'We design custom vector brand logos, corporate stationery, and high-fidelity page wireframes.'
              },
              {
                step: '03',
                title: 'Technical Web Vitals Dev',
                duration: 'Week 5-6',
                desc: 'Our developers code responsive Tailwind pages, register schema structures, and maximize loading speeds.'
              },
              {
                step: '04',
                title: 'Authority Link Marketing',
                duration: 'Continuous',
                desc: 'We manage white-hat backlink campaigns, monitor keyword ranks, and optimize metadata setups.'
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
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="seo-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[#FF6B00] font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-[#FF6B00]" /> Value Proposition
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-none">
                Organic Rankings built on Fast Code
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Google explicitly penalizes slow-loading websites. By combining premium visual assets with highly optimized Next.js structures, we help you secure top placements and lower customer acquisition costs.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-2xl border border-gray-150">
                  <div className="text-3xl font-black text-[#FF6B00] font-mono">3x</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">Conversion Growth</div>
                  <p className="text-gray-500 text-[11px] mt-1">CRO audits adjust layouts to turn search visitors into customers.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-150">
                  <div className="text-3xl font-black text-[#FF6B00] font-mono">100%</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">Google-Compliant</div>
                  <p className="text-gray-500 text-[11px] mt-1">Ethical Technical SEO guarantees structural sitemap health.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
                <h3 className="text-white font-extrabold text-xl">Technical SEO SLA</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Every optimization plan we execute is backed by active performance monitoring. If layout adjustments cause loading delays or layout shifts, our team corrects issues within 24 hours.
                </p>
                <div className="border-t border-white/5 pt-4 flex justify-between text-xs text-gray-400 font-mono">
                  <span>SLA INCLUSION</span>
                  <span className="text-[#FF6B00] font-bold">CORE WEB VITALS SAFEGUARD</span>
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
              We stand apart from marketing-only design agencies by prioritizing actual site speed and clean structural sitemaps over bloated standard templates.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Coding & search optimization intertwined',
                desc: 'We do not just install plugins; we optimize the underlying Next.js code, sitemaps, and database loading queries to minimize server latency.'
              },
              {
                title: 'Premium, bespoke visual style',
                desc: 'We design custom layouts and vector logotypes in Figma, completely avoiding cookie-cutter marketing designs.'
              },
              {
                title: 'ROI-driven search campaigns',
                desc: 'We map out keywords that translate directly to active purchase intent, lowering customer acquisition costs.'
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
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="seo-faq">
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
              More Capabilities
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
                  Our 100% Quality & Core Web Vitals Guarantee
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  Every project optimized by Chishty Smart Solutions is backed by beautiful bespoke Figma sketches, vector design exports, and top-tier page-load speeds.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="#contact-form-sec"
                  className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-[#FF6B00]/20 transition-all flex items-center space-x-2"
                >
                  <span>Build Branding Blueprint</span>
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
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" id="seo-branding-form-element">
                <div className="text-center space-y-2 mb-8">
                  <span className="text-[#FF6B00] text-xs font-mono font-extrabold uppercase tracking-widest block">BRAND BLUEPRINT</span>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Initiate Brand Optimization</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">Submit your visual and search ranking targets. Our marketing coordinator and UI designer will build a tailored search blueprint.</p>
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
                    <option value="seo-marketing">Full Technical SEO & Corporate Branding Kit</option>
                    <option value="branding-only">Figma Layout & Logotype branding only</option>
                    <option value="seo-only">Speed Tuning & Technical Schema SEO only</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="message">Describe your visual and ranking goals</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe target keywords, search terms, and visual designs you want to incorporate..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="seo-branding-submit-btn"
                  className="w-full bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#FF6B00]/20 transition-all text-xs uppercase tracking-wider"
                >
                  Schedule Branding Review Call
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6 relative z-10" id="seo-branding-submit-success">
                <div className="p-4 bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Branding Ticket Received!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Your search optimization ticket is <strong>#CSS-SEO-{ticketId}</strong>. Our UI/UX designer and search marketing lead will review your targets and contact you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#FF6B00] hover:underline"
                  >
                    ← Submit Another Target Blueprint
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
            <p className="text-gray-500 text-xs sm:text-sm">Connect with our branding coordinator over WhatsApp directly.</p>
          </div>
          <a
            href="https://wa.me/923006392025?text=Hi,%20I%20want%20to%20discuss%20SEO%20and%20brand%20marketing%20services%20for%20my%20business."
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
