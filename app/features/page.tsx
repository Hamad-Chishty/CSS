'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Zap, CloudLightning, Database, Shield, Monitor, MessageSquare, 
  CheckCircle2, ChevronRight, BarChart3, Users, Printer, RefreshCw
} from 'lucide-react';

export default function FeaturesPage() {
  
  const featureGroups = [
    {
      title: 'Resilient System Architecture',
      features: [
        {
          icon: <CloudLightning className="w-6 h-6 text-orange-500" />,
          title: 'Hybrid Cloud Sync Engine',
          desc: 'Operate with complete confidence. All transaction logs and sales queues sync in the background with our low-latency cloud server.'
        },
        {
          icon: <Database className="w-6 h-6 text-orange-500" />,
          title: 'Offline-First Fail-Safes',
          desc: 'Connection failures will never stall your billing operations. All tables cache locally on standard-compliant localized databases.'
        },
        {
          icon: <Shield className="w-6 h-6 text-orange-500" />,
          title: 'Meticulous Audit Trails',
          desc: 'Chronological activity trackers monitor every action (discounts, refunds, voids) with cashier level identification.'
        }
      ]
    },
    {
      title: 'Operational Excellence',
      features: [
        {
          icon: <Printer className="w-6 h-6 text-orange-500" />,
          title: 'Universal Hardware Bridges',
          desc: 'Plug-and-play compatibility with thermal receipt devices, electronic weights, barcode cameras, and biometric clocks.'
        },
        {
          icon: <Users className="w-6 h-6 text-orange-500" />,
          title: 'Granular Role Clearances',
          desc: 'Establish separate, password-protected visibility for cashier terminals, warehouse managers, and corporate audit teams.'
        },
        {
          icon: <BarChart3 className="w-6 h-6 text-orange-500" />,
          title: 'Executive Analytics Panels',
          desc: 'Extract visual reports on product depletion velocities, daily revenue trends, profit margins, and cashier performance metrics.'
        }
      ]
    }
  ];

  return (
    <div id="features-page-root" className="bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            Engineering Blueprint
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Built for Extreme Speed & Security
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover why our customized software is selected by high-volume retail networks and fine dining locations.
          </p>
        </div>
      </section>

      {/* Feature Bento Grid Groups */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24" id="features-group-list">
        {featureGroups.map((group, gidx) => (
          <div key={gidx} className="space-y-12" id={`feature-group-${gidx}`}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight border-l-4 border-[#FF6B00] pl-4">
              {group.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {group.features.map((feat, fidx) => (
                <div 
                  key={fidx}
                  className="bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="p-3 bg-white border border-gray-100 rounded-xl w-12 h-12 flex items-center justify-center mb-6 shadow-sm">
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feat.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* SLA Matrix Callout */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Interested in bespoke system features?
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Our technical engineers specialize in developing custom APIs, proprietary barcode databases, localized hardware drivers, and dedicated desktop packages.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              id="features-custom-cta"
              href="/contact"
              className="bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white px-8 py-3.5 rounded-xl text-sm font-bold shadow-lg transition-colors"
            >
              Consult Our Engineers
            </Link>
            <a
              id="features-wa-cta"
              href="https://wa.me/923006392025?text=Hello,%20I%20have%20questions%20about%20your%20POS%20and%20ERP%20system%20features."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 rounded-xl text-sm font-bold shadow-lg transition-colors flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
