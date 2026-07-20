'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, HelpCircle, 
  Send, Cpu, Brain, Database, Check, Users, Building2, Briefcase, FileText
} from 'lucide-react';

export default function AIBusinessAutomationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    projectScope: 'ai-automation',
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
        'name': 'AI & Business Automation',
        'item': 'https://chishtysmartsolutions.com/services/ai-business-automation'
      }
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'AI & Business Automation Services',
    'description': 'Integrate intelligent Gemini API pipelines, official WhatsApp Business bulk messaging CRM, and automated OCR invoice extractions into your operational systems.',
    'provider': {
      '@type': 'Organization',
      'name': 'Chishty Smart Solutions',
      'url': 'https://chishtysmartsolutions.com'
    },
    'areaServed': 'Worldwide',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'AI & Workflow Automation',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Gemini API Semantic Pipeline Development'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'CRM Workflow & WhatsApp Automation'
          }
        }
      ]
    }
  };

  const faqItems = [
    {
      question: 'Will the AI provide incorrect or hallucinated answers to our clients?',
      answer: 'No. We lock the AI down using strict Retrieval-Augmented Generation (RAG) and semantic guardrails. The model is trained and constrained purely to read from your corporate databases and business directories, ensuring 100% accurate customer support outputs.'
    },
    {
      question: 'Do we need verified corporate licenses to set up WhatsApp CRM bots?',
      answer: 'Yes. Official Meta APIs require active Facebook Business Manager verification. We assist you through the complete documentation and verification lifecycle to whitelist your corporate phone number safely.'
    },
    {
      question: 'How much time and administrative effort can we save by implementing AI OCR?',
      answer: 'Our clients report up to an 85% drop in manual ledger entries. Automated OCR systems parse incoming suppliers PDFs, map SKU names, and populate central POS/ERP databases under 2 seconds.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketId(Math.floor(Math.random() * 90000) + 10000);
    setSubmitted(true);
  };

  return (
    <div className="bg-white font-sans" id="ai-business-automation-page">
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
                AI & Cognitive Automation
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                AI & Business <span className="text-[#FF6B00]">Automation</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Supercharge your business with cognitive LLM algorithms. Integrate official Gemini APIs to categorize transactions, execute automated invoice OCR extractions, and launch responsive WhatsApp Business bulk alerts under 1 second.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#contact-form-sec"
                  className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold text-center px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/20 transition-all flex items-center justify-center space-x-2 text-sm"
                >
                  <span>Build Intelligence Blueprint</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/923006392025?text=Hi,%20I%20want%20to%20discuss%20AI%20and%20business%20automation%20services%20for%20my%20company."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-center px-8 py-4 rounded-xl transition-colors flex items-center justify-center space-x-2 text-sm"
                >
                  <MessageSquare className="w-5 h-5 text-[#25D366]" />
                  <span>Chat with AI Engineer</span>
                </a>
              </div>
            </div>

            {/* Hero Right Mockup: AI pipelines & Webhooks visual */}
            <div className="lg:col-span-6" id="ai-automation-hero-mockup">
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FF6B00] to-[#FF8C39] opacity-25 blur-lg" aria-hidden="true"></div>
                <div className="relative bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl text-xs text-gray-300 font-mono">
                  {/* Mockup Header */}
                  <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-red-500"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500"></span>
                      <span className="text-[10px] text-gray-500 ml-2">CHISHTY_AI_PROCESSOR</span>
                    </div>
                    <span className="bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 px-2 py-0.5 rounded text-[10px] font-bold">
                      GEMINI ACTIVE
                    </span>
                  </div>

                  {/* Mockup UI Panel */}
                  <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
                    {/* Left: AI prompt pipeline log */}
                    <div className="md:col-span-7 p-4 border-r border-white/5 space-y-4 font-mono text-[11px]">
                      <div className="flex justify-between items-center pb-2 border-b border-white/5">
                        <span className="text-white font-bold">COGNITIVE OCR WEBHOOK</span>
                        <span className="text-gray-500 text-[10px]">GEMINI-1.5</span>
                      </div>
                      
                      <div className="space-y-2 text-[10px]">
                        <div className="bg-white/5 p-2 rounded border border-white/5">
                          <span className="text-emerald-400"># Listening for supplier receipt:</span><br/>
                          <span className="text-white">&gt; PDF file received via invoice webhook</span><br/>
                          <span className="text-white">&gt; Mapping semantic tables...</span><br/>
                          <span className="text-[#FF6B00]">&gt; Gemini Extraction Confidence: 99.8%</span>
                        </div>
                        <div className="bg-white/5 p-2 rounded border border-white/5">
                          <span className="text-emerald-400"># Synchronizing POS general ledger:</span><br/>
                          <span className="text-white">✓ Accounts mapped instantly</span><br/>
                          <span className="text-white">✓ Dispatching auto email notification</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Telemetry data */}
                    <div className="md:col-span-5 p-4 bg-[#141414] flex flex-col justify-between">
                      <div className="space-y-4 font-mono text-[10px]">
                        <div className="flex justify-between items-center pb-2 border-b border-white/5">
                          <span className="text-white font-bold">AI TELEMETRY</span>
                        </div>
                        <div className="space-y-2 text-gray-400">
                          <div className="flex justify-between">
                            <span>NLP Model:</span>
                            <span className="text-white">Gemini Flash</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Execution:</span>
                            <span className="text-emerald-500">0.45s Speed</span>
                          </div>
                          <div className="flex justify-between">
                            <span>SLA Status:</span>
                            <span className="text-white">Active</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Cost/Task:</span>
                            <span className="text-white">$0.0002 Avg</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#FF6B00] text-center text-white py-2 rounded-lg font-bold cursor-pointer hover:bg-orange-600 transition-colors mt-6 font-sans">
                        TEST NLP HANDSHAKE
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
      <section className="py-24 bg-white border-b border-gray-100" id="ai-overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono font-bold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
                03 / Cognitive Workflows
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Say Goodbye to Fragile Hand-Keyed Workflows.
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Manual data entry and repetitive admin tasks are expensive operational bottlenecks that invite typos and delay response times. Our AI engineering division builds cognitive intelligence loops directly into your software.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                By integrating the official Google Gemini SDKs with custom-coded CRM and database triggers, we translate natural language, extract invoice fields automatically, and let bots coordinate supplier and customer transactions around the clock.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-gray-50 border border-gray-150 rounded-3xl p-6 shadow-sm">
                <Brain className="w-10 h-10 text-[#FF6B00] mb-4" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">Gemini SDK Custom Pipes</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  We write semantic pipelines that parse raw customer feedback, automatically route tickets, and analyze operational trends instantly.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-150 rounded-3xl p-6 shadow-sm">
                <Cpu className="w-10 h-10 text-[#FF6B00] mb-4" />
                <h3 className="font-bold text-gray-900 text-lg mb-2">CRM Workflow Automations</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  Deeply link email, accounting, POS, and supplier inventories into highly efficient, automated operational pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE FEATURES SECTION */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="ai-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Full Stack AI Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Technical Automation Core Features
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We focus on reliable, high-speed logical execution loops with failover pathways.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Gemini LLM Semantics',
                description: 'Custom prompting structures and vector databases designed to sort files and classify corporate transaction data accurately.',
                icon: <Brain className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Meta WhatsApp CRM Sync',
                description: 'Official API integration that dispatches purchase notifications, receipts, and localized followups instantly.',
                icon: <MessageSquare className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Automatic PDF Invoice OCR',
                description: 'Optical Character Recognition (OCR) systems extract supplier pricing fields from PDFs directly to your ledger database.',
                icon: <FileText className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Custom CRM Pipeline Rules',
                description: 'We code automated cross-platform triggers that sync contacts, inventory states, and ledger records flawlessly.',
                icon: <Cpu className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Predictive Stock Forecasting',
                description: 'Identify upcoming inventory shortages and trigger automatic purchase orders using simple regression algorithms.',
                icon: <Database className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Automated Ticket Router',
                description: 'Classify incoming customer feedback using natural language processing to alert the correct support team inside 30s.',
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
      <section className="py-24 bg-white border-b border-gray-100" id="ai-industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Scalable Workflows
            </span>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">
              Industries Served Custom Automations
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'E-Commerce Brands',
                desc: 'Automated supplier invoice logs, real-time bulk shipping updates, and localized sales reporting charts.',
                icon: <Building2 className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Logistics Operators',
                desc: 'Weighbridge log databases synced to accounts receivable and automated dispatch alert loops.',
                icon: <Cpu className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Hospitality Outlets',
                desc: 'Automated dining table reservation confirmers, feedback analyzers, and customer FAQ chat channels.',
                icon: <Briefcase className="w-6 h-6 text-[#FF6B00]" />
              },
              {
                title: 'Professional Services',
                desc: 'Fast document semantic search pipelines, PDF transaction scraping, and automated billing dispatch channels.',
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
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="ai-tech">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[#FF6B00] font-bold uppercase tracking-wider text-xs font-mono">
                Technology Base
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                Our AI & Process Automation Stack
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                We develop and deploy utilizing Meta, Google Gemini, and custom Python frameworks to ensure strict, reliable NLP boundaries with cost-effective model parameters.
              </p>
            </div>
            <div className="lg:col-span-7 bg-white border border-gray-150 rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-8 text-xs font-mono">
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">AI ENGINE & LLM</h4>
                  <p className="text-gray-600">Google Gemini SDKs (Flash/Pro)</p>
                  <p className="text-gray-600">Llama Index (Semantic indexing)</p>
                  <p className="text-gray-600">OpenAI API configurations</p>
                  <p className="text-gray-600">Pinecone Vector Database</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">PROCESS PIPELINES</h4>
                  <p className="text-gray-600">Python (FastAPI / Celery)</p>
                  <p className="text-gray-600">n8n Workflow Nodes</p>
                  <p className="text-gray-600">Make automation webhooks</p>
                  <p className="text-gray-600">Node.js microservices</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">COMMUNICATIONS</h4>
                  <p className="text-gray-600">Meta Cloud WhatsApp API</p>
                  <p className="text-gray-600">Twilio SMS Gateways</p>
                  <p className="text-gray-600">SMTP SendGrid relays</p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900 border-b border-gray-100 pb-2">DATA ARCHITECTURES</h4>
                  <p className="text-gray-600">Supabase & PostgreSQL</p>
                  <p className="text-gray-600">Firebase Firestore sync</p>
                  <p className="text-gray-600">JSON-LD Schemas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DEVELOPMENT PROCESS */}
      <section className="py-24 bg-white border-b border-gray-100" id="ai-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Integration Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Our 4-Phase Automation Timeline
            </h2>
            <p className="text-gray-500 text-sm">
              We design and configure strict pipelines that eliminate security and hallucination risks entirely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Operational Audit & Mapping',
                duration: 'Week 1-2',
                desc: 'We map out your repetitive document and customer entry bottlenecks to identify high-ROI automation targets.'
              },
              {
                step: '02',
                title: 'Prompt Modeling & Vector setup',
                duration: 'Week 3-4',
                desc: 'We construct RAG index directories and configure the security guardrails to lock down LLM responses.'
              },
              {
                step: '03',
                title: 'Webhook & Bot Compilation',
                duration: 'Week 5-7',
                desc: 'Our backend developers code Meta WhatsApp integrations, PDF OCR scraping routers, and API synchronizations.'
              },
              {
                step: '04',
                title: 'Operational Run & Calibration',
                duration: 'Week 8-9',
                desc: 'We launch live monitoring telemetry, run sample validation sets, and calibrate conversational guidelines.'
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
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="ai-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-[#FF6B00] font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-[#FF6B00]" /> Value Proposition
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-none">
                Transforming Human Productivity With Smart Loops
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                By letting AI handle the routine transaction scraping, receipt dispatching, and FAQ support answering, your office staff can concentrate strictly on growth, relationships, and service quality.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white p-6 rounded-2xl border border-gray-150">
                  <div className="text-3xl font-black text-[#FF6B00] font-mono">70%</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">Fewer Manual Tasks</div>
                  <p className="text-gray-500 text-[11px] mt-1">Repetitive admin queries and data entry are automated completely.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-150">
                  <div className="text-3xl font-black text-[#FF6B00] font-mono">0.5s</div>
                  <div className="text-xs font-bold text-gray-900 mt-1">Average Response Speed</div>
                  <p className="text-gray-500 text-[11px] mt-1">Immediate PDF invoices and transaction confirmations dispatched to users.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-white/10 shadow-2xl space-y-6">
                <h3 className="text-white font-extrabold text-xl">Operational SLA Guarantee</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  Every automated flow compiled by Chishty Smart Solutions is backed by active API failover pathways. If cognitive LLM servers experience high latencies, transactions queue cleanly and execute automatically.
                </p>
                <div className="border-t border-white/5 pt-4 flex justify-between text-xs text-gray-400 font-mono">
                  <span>SLA INCLUSION</span>
                  <span className="text-[#FF6B00] font-bold">FAILSAFE QUEUE ROUTING</span>
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
              We stand apart from marketing-only agencies by offering deep technical system integrations and secure semantic architectures.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Official Meta & Google APIs Developers',
                desc: 'We write deep custom integrations using the latest Google GenAI SDKs and Meta Cloud protocols, skipping sluggish third-party no-code connectors.'
              },
              {
                title: 'Guaranteed 100% data privacy',
                desc: 'We build with encrypted local data caching and sandboxed API relays to make sure your client transaction logs and invoices are safe.'
              },
              {
                title: 'Rigorous cognitive guardrails',
                desc: 'We write strict system prompt directives and retrieval rules, ensuring your AI handles customers with professionalism and accuracy.'
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
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="ai-faq">
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
                  Our 100% Quality & Failsafe SLA Guarantee
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                  Every automated node compiled by Chishty Smart Solutions is backed by active database relays, automated error monitoring, and direct connectivity to senior systems developers.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="#contact-form-sec"
                  className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-[#FF6B00]/20 transition-all flex items-center space-x-2"
                >
                  <span>Build Intelligence Blueprint</span>
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
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10" id="ai-automation-form-element">
                <div className="text-center space-y-2 mb-8">
                  <span className="text-[#FF6B00] text-xs font-mono font-extrabold uppercase tracking-widest block">INTELLIGENCE BLUEPRINT</span>
                  <h2 className="text-3xl font-black text-gray-900 tracking-tight">Initiate Automation Blueprint</h2>
                  <p className="text-gray-500 text-xs sm:text-sm">Submit your administrative scaling requirements. Our system architect will prepare an interactive workflow diagram.</p>
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
                    <option value="ai-automation">Custom Gemini API & Workflow Automation</option>
                    <option value="whatsapp-only">WhatsApp Business API & CRM Bot Setup</option>
                    <option value="ocr-extraction">Supplier Invoice OCR Extraction Sync</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block" htmlFor="message">Describe your manual administrative workload</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe how invoices are entered, how customers receive receipts, and what repetitive ticket logs you want to automate..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-[#FF6B00]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  id="ai-automation-submit-btn"
                  className="w-full bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#FF6B00]/20 transition-all text-xs uppercase tracking-wider"
                >
                  Schedule Automation Review Call
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-6 relative z-10" id="ai-automation-submit-success">
                <div className="p-4 bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center text-emerald-500 mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Automation Ticket Received!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Your intelligence blueprint ticket is <strong>#CSS-AI-{ticketId}</strong>. Our AI architect and Meta API coordinator will review your parameters and contact you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#FF6B00] hover:underline"
                  >
                    ← Submit Another Automation Request
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
            <p className="text-gray-500 text-xs sm:text-sm">Connect with our AI coordinator over WhatsApp directly.</p>
          </div>
          <a
            href="https://wa.me/923006392025?text=Hi,%20I%20want%20to%20discuss%20AI%20and%20business%20automation%20services%20for%20my%20company."
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
