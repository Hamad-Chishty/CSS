'use client';

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div id="privacy-page-root" className="bg-white min-h-screen">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider font-mono">
            Compliance & Security
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            Last Updated: July 15, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
        <div className="space-y-8 text-gray-600 text-xs sm:text-sm leading-relaxed" id="privacy-doc-content">
          <p>
            At Chishty Smart Solutions, we prioritize the protection and security of your corporate transaction databases, inventory catalogs, employee records, and client accounts. This document outlines how we collect, store, and secure your systems data when you license our POS or custom ERP applications.
          </p>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">1. Data Storage & Local Caching</h2>
            <p>
              When using our offline-first applications, all transaction queues and credit logs (Khata logs) are saved locally on your physical device using secure SQLite database instances. If cloud synchronization is activated, this data replicates securely via encrypted SSL/TLS pathways to our cloud server hosted on certified datacenters.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">2. Customer Database Security</h2>
            <p>
              We do not share, sell, or disclose your customer directories, sales histories, ingredients recipe data, or billing ledgers to any third-party marketing entities. All database access credentials are owned and managed solely by your authorized system supervisors.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">3. Local Hardware Isolation</h2>
            <p>
              Our universal hardware integration drivers (for scales, barcode printers, biometric logs, and card swipers) run completely in your private network container. No sensitive credentials or biometric profiles are transmitted or saved on public public registries.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">4. Compliance Audits</h2>
            <p>
              We compile granular chronological audit trails showing precisely which system terminal or employee account processed modifications, discounts, or voids to prevent unauthorized administrative alterations.
            </p>
          </div>

          <p className="pt-6 border-t border-gray-100 text-xs text-gray-400">
            For further technical specifications regarding our database encryption, backup security, or local network options, please consult our Chief Software Architect.
          </p>
        </div>
      </section>

    </div>
  );
}
