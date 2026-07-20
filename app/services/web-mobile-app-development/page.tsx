'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, HelpCircle, 
  Send, Smartphone, Laptop, Sparkles, Check, Users, Building2, Briefcase
} from 'lucide-react';

export default function WebMobileAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    projectScope: 'web-mobile',
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
        'name': 'Web & Mobile App Development',
        'item': 'https://chishtysmartsolutions.com/services/web-mobile-app-development'
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Web & Mobile App Development',
    'description': 'High-performance Next.js cloud interfaces and natively compiled Flutter/React Native applications with stunning design layouts and Core Web Vitals optimization.',
    'provider': {
      '@type': 'Organization',
      'name': 'Chishty Smart Solutions',
      'url': 'https://chishtysmartsolutions.com'
    },
    'areaServed': 'Worldwide',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Web & Mobile Engineering',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Cloud Portal & Next.js Development'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Flutter & iOS/Android App Development'
          }
        }
      ]
    }
  };

  const faqItems = [
    {
      question: 'Do you compile native apps or cross-platform codebases?',
      answer: 'We build primarily with high-performance cross-platform frameworks like Flutter and React Native. This saves up to 40% in engineering timelines and ensures perfect code consistency between iOS and Android. However, for specialized hardware-heavy projects, we also code native Swift and Kotlin.'
    },
    {
      question: 'Will our web application load instantly on standard mobile networks?',
      answer: 'Yes. We build using Next.js with Server-Side Rendering (SSR) and automated Static Generation. We implement code-splitting, tree-shaking, and image-optimization to maintain high Google Core Web Vitals and Lighthouse scores (95+) even on slow networks.'
    },
    {
      question: 'How do you handle App Store and Play Store submission pipelines?',
      answer: 'We manage the entire deployment process on your behalf. This includes configuring developer accounts, generating security certificates, satisfying store guidelines, and pushing production builds through TestFlight and Google Play Console.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketId(Math.floor(Math.random() * 90000) + 10000);
    setSubmitted(true);
  };

  return (
    <div className="bg-white font-sans" id="web-mobile-app-dev-page">
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
                Cloud & Mobile Engineering
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                Web & Mobile App <span className="text-[#FF6B00]">Development</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connect your business to your users with lightning-fast cloud-native portals and native-feeling iOS and Android applications compiled with stunning precision and peak responsive fluid layouts.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#contact-form-sec"
                  className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold text-center px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/20 transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Build Your App Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923006392025?text=Hi,%20I%20want%20to%20discuss%20web%20and%20mobile%20app%20development%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-center px-8 py-4 rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  <span>Chat with Developer</span>
                </a>
              </div>
            </div>

            {/* Hero Right Mockup: Web / Mobile Mockup Visual */}
            <div className="lg:col-span-6" id="web-mobile-hero-mockup">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FF6B00] to-[#FF8C39] opacity-25 blur-lg" aria-hidden="true"></div>
                <div className="relative bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl text-xs text-gray-300 font-mono">
                  {/* Mockup Header */}
                  <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-[10px] text-gray-500 ml-2">CHISHTY_CLIENT_PORTAL</span>
                    </div>
                    <span className="bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 px-2 py-0.5 rounded text-[10px] font-bold">
                      CLOUD COMPILING
                    </span>
                  </div>

                  {/* Mockup UI Panel */}
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
                    {/* Left: Mobile layout preview */}
                    <div className="md:col-span-7 p-4 border-r border-white/5 space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="text-white font-bold">MOBILE RENDER VIEWPORT</span>
                        <span className="text-gray-500 text-[10px]">FLUID FLEX</span>
                      </div>
                      
                      <div className="space-y-3 font-sans">
                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center space-x-3">
                          <div className="p-2 bg-[#FF6B00]/10 rounded-lg text-[#FF6B00]">
                            <Smartphone className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-white font-bold text-[11px]">Flutter Mobile Core</p>
                            <p className="text-gray-400 text-[9px]">Target: iOS & Android compiled successfully</p>
                          </div>
                        </div>

                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center space-x-3">
                          <div className="p-2 bg-[#FF6B00]/10 rounded-lg text-[#FF6B00]">
                            <Laptop className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="text-white font-bold text-[11px]">Next.js App Router</p>
                            <p className="text-gray-400 text-[9px]">Target: Server-rendered dashboard viewport</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: API Logs */}
                    <div className="md:col-span-5 p-4 bg-[#141414] flex flex-col justify-between">
                      <div className="space-y-4 font-mono text-[10px]">
                        <div className="flex justify-between items-center pb-2 border-b border-white/5">
                          <span className="text-white font-bold">PERFORMANCE STATS</span>
                        </div>
                        <div className="space-y-2 text-[10px] text-gray-400">
                          <div className="flex justify-between">
                            <span>Lighthouse score:</span>
                            <span className="text-emerald-500">98% Perfect</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Response Latency:</span>
                            <span className="text-white">45ms</span>
                          </div>
                          <div className="flex justify-between">
                            <span>API Payload:</span>
                            <span className="text-white">12.4kb Gzipped</span>
                          </div>
                          <div className="flex justify-between">
                            <span>OAuth Security:</span>
                            <span className="text-[#FF6B00]">JWT Enabled</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#FF6B00] text-center text-white py-2 rounded-lg font-bold cursor-pointer hover:bg-orange-600 transition-colors mt-6 font-sans">
                        LAUNCH SIMULATION
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
      <section className="py-24 bg-white border-b border-gray-100" id="web-mobile-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
                02 / Modern Frontends
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Scalable Cloud Frameworks for High Traffic.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                A slow web loading latency kills conversion rates and pushes customer interactions away. Our client platforms are hand-coded using the world’s most advanced full-stack technologies to render content beautifully and quickly on any device.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Whether deploying robust corporate cloud intranets, custom logistics management portals, or consumer-facing mobile applications, we streamline operations and ensure perfect cross-platform synchronization.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gray-50 border border-gray-150 rounded-3xl p-6 shadow-sm">
                <Laptop className="w-10 h-10 text-[#FF6B00] mb-4" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Modern Server-Rendered Hubs</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Engineered using Next.js 15+ App Router pipelines with optimized layouts and lightning-fast static and dynamic caching engines.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-150 rounded-3xl p-6 shadow-sm">
                <Smartphone className="w-10 h-10 text-[#FF6B00] mb-4" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Flutter & Native App Packages</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Beautiful cross-platform mobile apps featuring real-time offline local cache layers and automated push notifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE FEATURES SECTION */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="web-mobile-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Full Stack Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Modern App Features we Integrate
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We skip basic templates to code secure, custom, interactive architectures tailored entirely around your workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Next.js App Router Pipelines',
                description: 'Single Page Applications & server-rendered viewports with optimized SEO indexing and blazing speed.',
                icon: <Laptop className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Flutter Cross-Platform Compiling',
                description: 'We code lightweight Flutter applications to ensure consistent responsive rendering on both iOS and Android stores.',
                icon: <Smartphone className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'OAuth & Secure API Gateways',
                description: 'Custom JWT authentication, security integrations, and role-based access management setups.',
                icon: <ShieldCheck className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Advanced Push Notifications',
                description: 'Push notification architectures that alert your customers about order updates, tracking, and campaigns instantly.',
                icon: <Sparkles className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Offline-First Storage Caching',
                description: 'IndexedDB or local SQLite databases inside the client package so data is editable even when offline.',
                icon: <Rocket className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Fully Responsive Frameworks',
                description: 'Custom Tailwind layouts designed desktop-first and refined mobile-first to adjust seamlessly to all screen sizes.',
                icon: <CheckCircle2 className="w-6 h-6 text-[#FF6B00]" />
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
      <section className="py-24 bg-white border-b border-gray-100" id="web-mobile-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Target Markets
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Industries Dominating our Interfaces
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'E-Commerce Retailers',
                desc: 'Blazing fast custom storefront catalogs, interactive cart setups, and localized local wallet integrations.',
                icon: <Building2 className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'On-Demand Dispatch',
                desc: 'Real-time GPS delivery routes, push notification triggers, and client receipt billing streams.',
                icon: <Rocket className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Real Estate & Finance',
                desc: 'Visual data portfolios, live interest rate calculators, and secure client document portals.',
                icon: <Briefcase className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Enterprise Corporates',
                desc: 'Secure partner dashboard channels, internal task logs, and cross-office resource management portals.',
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
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="web-mobile-tech">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#FF6B00] font-bold uppercase tracking-wider text-xs font-mono">
                Technology base
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Our Cloud-Native Front & Backend Stack
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We design with state-of-the-art frameworks to guarantee lightning-fast load speeds, tight database synchronization, and scalable serverless capabilities.
              </p>
            </div>
            <div className="lg:col-span-7 bg-white border border-gray-150 rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-8 text-xs font-mono">
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">WEB FRONTEND</h4>
                  <p className="text-gray-600">Next.js 15+ (App Router)</p>
                  <p className="text-gray-600">React & TypeScript</p>
                  <p className="text-gray-600">Tailwind CSS v4 styling</p>
                  <p className="text-gray-600">Motion (Smooth animations)</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">MOBILE ENGINES</h4>
                  <p className="text-gray-600">Flutter Framework</p>
                  <p className="text-gray-600">React Native / Expo</p>
                  <p className="text-gray-600">Swift (Pure iOS modules)</p>
                  <p className="text-gray-600">Kotlin (Pure Android components)</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">BACKEND API</h4>
                  <p className="text-gray-600">Node.js (NestJS / Express)</p>
                  <p className="text-gray-600">Go (Golang compiled APIs)</p>
                  <p className="text-gray-600">Python (FastAPI routers)</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">CLOUD & SERVERS</h4>
                  <p className="text-gray-600">Vercel & Supabase</p>
                  <p className="text-gray-600">Google Cloud Engine</p>
                  <p className="text-gray-600">AWS Lambdas & Gateways</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT PROCESS */}
      <section className="py-24 bg-white border-b border-gray-100" id="web-mobile-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Development Path
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Interactive Design & Deploy Pipeline
            </h2>
            <p className="text-gray-500 text-sm">
              We guide you smoothly through visual design to live publishing on the stores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'High-Fidelity UI/UX Figma Design',
                duration: 'Week 1-2',
                desc: 'We map out custom layouts, active customer journeys, and beautiful interactive interfaces.'
              },
              {
                step: '02',
                title: 'API Modeling & Database Setup',
                duration: 'Week 3-4',
                desc: 'We structure the cloud API endpoints and secure credentials using robust JWT frameworks.'
              },
              {
                step: '03',
                title: 'Interface Compiling',
                duration: 'Week 5-10',
                desc: 'Our senior React and Flutter developers code client packages and connect them to real-time sync databases.'
              },
              {
                step: '04',
                title: 'QA Store Deployment',
                duration: 'Week 11-12',
                desc: 'We run defensive stress testing, optimize sitemaps and speed scores, and publish the final app.'
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
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="web-mobile-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[#FF6B00] font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-[#FF6B00]" /> Value Proposition
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-none">
                Elevating Engagement With Optimized Layouts
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Slow platforms bleed traffic and damage brand reputation. We engineer optimized platforms to ensure your business remains active, responsive, and available around the clock.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-2xl border border-gray-150">
                  <div className="text-3xl font-black text-[#FF6B00] font-mono">95+</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">Lighthouse Speed</div>
                  <p className="text-gray-500 text-[11px] mt-1">Guaranteed performance marks on search spiders and mobile devices.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-150">
                  <div className="text-3xl font-black text-[#FF6B00] font-mono">99.99%</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">Guaranteed SLA Uptime</div>
                  <p className="text-gray-500 text-[11px] mt-1">Scale-to-zero server infrastructure built to absorb massive traffic.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
                <h3 className="text-white font-extrabold text-xl">Cloud API Support Guarantee</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Every application we build is backed by our robust technical SLA. We manage server scaling parameters, security updates, SSL renewals, and store compliance audits so your business stays online smoothly.
                </p>
                <div className="border-t border-white/5 pt-4 flex justify-between text-xs text-gray-400 font-mono">
                  <span>SLA INCLUSION</span>
                  <span className="text-[#FF6B00] font-bold">99.99% RUNTIME MONITORING</span>
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
              We stand apart from marketing-only design agencies by prioritizing actual engineering and database security over standard templates.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'High-speed cloud-native architectures',
                desc: 'We are experts in Next.js Server-Side Rendering (SSR) and automated Static Site Generation. Your application loads instantly on all screens.'
              },
              {
                title: 'Store publishing specialists',
                desc: 'We manage the entire Apple App Store and Google Play deployment process, avoiding store rejection risks completely.'
              },
              {
                title: 'Guaranteed 99.99% cloud service uptime',
                desc: 'Our deployment structures are designed using serverless autoscaling systems to handle high customer traffic with minimal resource costs.'
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
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="web-mobile-faq">
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
              href="/services/custom-software-development"
              className="bg-gray-50 p-8 rounded-3xl border border-gray-150 hover:shadow-xl hover:bg-white transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="text-[10px] font-mono font-extrabold text-[#FF6B00] bg-[#FF6B00]/5 px-2.5 py-1 rounded-full border border-[#FF6B00]/10 uppercase">
                  BESPOKE SYSTEMS
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors">Custom Software Development</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">High-performance compiled desktop engines, hardware drivers, and local sync databases built for enterprise scale.</p>
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
                  Our 100% Quality & Cloud SLA Guarantee
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  Every application we build is backed by beautiful responsive wireframes, optimized page rendering, and guaranteed 99.99% server availability.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="#contact-form-sec"
                  className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-[#FF6B00]/20 transition-all flex items-center space-x-2"
                >
                  <span>Build App Blueprint</span>
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
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" id="web-mobile-form-element">
                <div className="text-center space-y-2 mb-8">
                  <span className="text-[#FF6B00] text-xs font-mono font-extrabold uppercase tracking-widest block">APP BLUEPRINT</span>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Initiate App Blueprint</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">Submit your mobile or web app ideas. Our UI/UX designer and software engineers will prepare structural wireframes.</p>
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
                    <option value="web-mobile">Comprehensive Web & Mobile Package</option>
                    <option value="web-only">Cloud Portal & Next.js Website only</option>
                    <option value="mobile-only">Flutter Native iOS/Android app only</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="message">Describe your intended app features</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe core pages, API integrations, and how users will interact with your application..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="web-mobile-submit-btn"
                  className="w-full bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#FF6B00]/20 transition-all text-xs uppercase tracking-wider"
                >
                  Schedule App Blueprint Review Call
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6 relative z-10" id="web-mobile-submit-success">
                <div className="p-4 bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">App Blueprint Received!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Your app blueprint ticket is <strong>#CSS-APP-{ticketId}</strong>. Our UI/UX designer and cloud developer will review your details and contact you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#FF6B00] hover:underline"
                  >
                    ← Submit Another App Blueprint
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
            <p className="text-gray-500 text-xs sm:text-sm">Connect with our app coordinator over WhatsApp directly.</p>
          </div>
          <a
            href="https://wa.me/923006392025?text=Hi,%20I%20want%20to%20discuss%20web%20and%20mobile%20app%20development%20for%20my%20business."
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
