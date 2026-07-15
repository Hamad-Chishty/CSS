'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  HelpCircle, MessageSquare, ChevronDown, CheckCircle2, 
  Shield, Server, Landmark, RefreshCw
} from 'lucide-react';

export default function FAQPage() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const extendedFaqs = [
    {
      q: 'Will your POS systems function if regional internet lines fail?',
      a: 'Absolutely. We architect our software to be entirely offline-first. Our hybrid local synchronization engine continues to record billing logs, inventory transactions, and table updates locally on your local terminal using SQLite or optimized local PostgreSQL caches. Once internet connectivity is restored, the terminal automatically synchronizes and updates your cloud dashboard.'
    },
    {
      q: 'Do you offer direct data migration from legacy softwares or Excel sheets?',
      a: 'Yes, we take care of the entire migration pipeline. Our database engineers parse your old Excel catalogs, customer credit lists (Khata), and supplier accounts, cleanly model them into our standard schema layouts, and import them without interrupting your daily business operations.'
    },
    {
      q: 'How are biometric hardware scanners and thermal printers integrated?',
      a: 'We write native specialized drivers and universal bridging software. This ensures plug-and-play synchronization with thermal receipt devices, electronic weights scales, biometric finger/face scanners, barcode readers, and credit card readers.'
    },
    {
      q: 'What is your official WhatsApp Business API integration process?',
      a: 'We connect your POS/CRM with official Meta-Verified API channels. This allows you to automatically dispatch invoice PDFs, dispatch alerts, payment links, and low-stock reminders straight to your customer and vendor WhatsApp accounts.'
    },
    {
      q: 'Do you support localized server installations for maximum security?',
      a: 'Yes. For high-security pharmacies, corporate offices, or production factories, we can compile dedicated desktop software packages (C++, C#, Rust) that write securely to localized, private intranet SQL Servers, bypassing the public cloud entirely.'
    },
    {
      q: 'What level of support and training SLA is included in our license?',
      a: 'Every package comes standard with on-site hardware setups, hands-on staff training, automated database backup schedules, and 24/7 technical monitoring. Enterprise SLA customers get a dedicated engineer priority support channel for instant assistance.'
    }
  ];

  return (
    <div id="faq-page-root" className="bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            Knowledge Hub
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Frequently Asked Support FAQ
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Everything you need to understand about our custom software architectures, licensing fees, on-site onboarding, and backup parameters.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" id="faq-extended-roster">
        <div className="space-y-6">
          {extendedFaqs.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-gray-150 rounded-2xl overflow-hidden transition-all bg-gray-50/50"
              id={`extended-faq-card-${idx}`}
            >
              <button
                id={`extended-faq-btn-${idx}`}
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50/20 font-bold text-gray-900 text-sm sm:text-base"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-[#FF6B00] transition-transform duration-200 ${
                  activeIdx === idx ? 'rotate-180' : ''
                }`} />
              </button>
              {activeIdx === idx && (
                <div className="p-6 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed space-y-2">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Still Have Technical System Inquiries?
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Our engineers are standing by. Get instant clarifications on compatible scales, card reader protocols, custom database schema designs, or regional SLA agreements.
          </p>
          <div className="flex justify-center pt-2">
            <a 
              id="faq-whatsapp-cta"
              href="https://wa.me/923006392025?text=Hello,%20I%20have%20custom%20technical%20system%20questions%20regarding%20Chishty%20POS/ERP." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-colors flex items-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
