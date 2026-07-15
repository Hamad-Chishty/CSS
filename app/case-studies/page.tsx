'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  CheckCircle2, MessageSquare, ArrowUpRight, BarChart3, 
  TrendingUp, Database, Shield, Layout, ChevronRight, Activity
} from 'lucide-react';

export default function CaseStudiesPage() {
  
  const cases = [
    {
      title: 'BakeWay Premium: Optimizing a 14-Location Bakery Network',
      metric: 'Checkout time reduced to <1.5s',
      result: '+34% Operating Speed',
      challenge: 'BakeWay operated with a legacy system that crashed under heavy morning rushes. Raw ingredient levels were calculated manually, causing substantial daily inventory discrepancies.',
      solution: 'We deployed our Hybrid Restaurant & Cafe POS. We integrated offline SQLite database caches on local cashier terminals to guarantee continuous billing during internet latency, paired with real-time ingredients recipe (BOM) depletion engines on parent servers.',
      results: [
        'Zero transactions lost during network outages',
        'Ingredients discrepancies minimized by 94%',
        'Cashier training completed in less than 4 hours',
        'Daily automated profit ledger alerts on WhatsApp'
      ]
    },
    {
      title: 'AeroPOS: Standardizing Catalog Data Across 25 Fashion Branches',
      metric: 'Stock accuracy stabilized to 99.8%',
      result: '25+ Warehouses Synced',
      challenge: 'Each clothing outlet operated separate stock spreadsheets, resulting in frequent oversells and inaccurate customer loyalty scores.',
      solution: 'We engineered a centralized SQL Server catalog system. Stock level depletion is decremented in real-time from our centralized hub, locking multi-branch inventory with absolute synchronization.',
      results: [
        'Absolute elimination of clothing catalog discrepancies',
        'Loyalty program participation increased by 65%',
        'Direct connection with multi-barcode printing scales',
        'Administrative inventory auditing hours reduced by half'
      ]
    },
    {
      title: 'Apex Logistics: Designing a Custom Enterprise ERP Infrastructure',
      metric: 'Audit cycles cut from 7 days to 2 hours',
      result: '-22% Operating Hours',
      challenge: 'Apex Logistics was bogged down by fragmented staff rosters, billing logs, and manual vehicle delivery ledger sheets.',
      solution: 'Our engineering division developed a custom web-based Enterprise ERP. We consolidated vehicle dispatch schedules, biometric payroll ledgers, and automated business invoicing in a single highly secured portal.',
      results: [
        'Direct API integration with biometric face scanners',
        'Secure multi-tier access permissions for accountants',
        'Real-time trial balance and ledger statement generation',
        'Automated dispatch alerts trigger straight to client WhatsApp'
      ]
    }
  ];

  return (
    <div id="case-studies-page-root" className="bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            Detailed Deconstructions
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Detailed Technical Case Studies
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Deconstruct how we analyze bottleneck matrices, model database schemas, and deploy resilient enterprise systems.
          </p>
        </div>
      </section>

      {/* Case studies list */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24" id="cases-list-section">
        {cases.map((cs, idx) => (
          <div 
            key={idx}
            className="border border-gray-150 rounded-3xl p-8 sm:p-12 hover:shadow-xl hover:border-gray-200 transition-all bg-gray-50/30"
            id={`case-card-${idx}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Content Column */}
              <div className="lg:col-span-8 space-y-6" id={`case-content-${idx}`}>
                <div className="flex items-center space-x-3 text-xs font-bold text-[#FF6B00] uppercase tracking-widest font-mono">
                  <span>CASE STUDY: 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <span>{cs.result}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight">
                  {cs.title}
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">The Challenge</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">The Custom Solution</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-1">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">Quantitative Outcomes</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                    {cs.results.map((res, ridx) => (
                      <div key={ridx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-xs sm:text-sm font-medium">
                          {res}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Metrics Column */}
              <div className="lg:col-span-4 bg-white border border-gray-150 p-8 rounded-2xl flex flex-col justify-between shadow-sm" id={`case-sidebar-${idx}`}>
                <div className="space-y-6">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-mono block">
                    SLA KPI PERFORMANCE
                  </span>
                  <div className="space-y-2">
                    <span className="text-4xl sm:text-5xl font-black text-[#FF6B00] font-mono block leading-none">
                      {cs.result.split(' ')[0]}
                    </span>
                    <span className="text-xs text-gray-500 font-bold uppercase tracking-wider block">
                      {cs.result.split(' ').slice(1).join(' ')}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed border-t border-gray-100 pt-4">
                    {cs.metric}
                  </p>
                </div>

                <div className="pt-8">
                  <a
                    id={`case-wa-inquire-${idx}`}
                    href={`https://wa.me/923006392025?text=Hi,%20I%20want%20to%20implement%20a%20solution%20similar%20to%20your%20${encodeURIComponent(cs.title.split(':')[0])}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white font-bold text-sm py-3.5 px-4 rounded-xl text-center flex items-center justify-center space-x-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-[#FF6B00]" />
                    <span>Inquire About This Setup</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
