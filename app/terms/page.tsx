'use client';

import React from 'react';
import Link from 'next/link';

export default function TermsAndConditionsPage() {
  return (
    <div id="terms-page-root" className="bg-white min-h-screen">
      
      {/* Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider font-mono">
            Licensing Agreement
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-none">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            Last Updated: July 15, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray">
        <div className="space-y-8 text-gray-600 text-xs sm:text-sm leading-relaxed" id="terms-doc-content">
          <p>
            Welcome to Chishty Smart Solutions. By implementing, compiling, or deploying our standard POS licenses, multi-branch pro editions, or custom enterprise software architectures, you agree to comply with and be bound by the following Terms & Conditions.
          </p>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">1. System Licensing & Usage</h2>
            <p>
              Software licenses are issued per transaction terminal or branch network, as specified in your agreement invoice. Standard licenses are non-transferable and must only be executed inside authorized business registers. Reverse compiling or unauthorized replication of proprietary components is strictly prohibited.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">2. Local Hardware Support Boundaries</h2>
            <p>
              While we provide direct assistance for configuring receipt thermal printing, barcode mapping scales, biometric attendance clocks, and credit card reader drivers, Chishty Smart Solutions is not liable for structural component failures or electrical defects in third-party physical hardware purchased from external vendors.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">3. Data Backup & Local Intracity Intranet Databases</h2>
            <p>
              While our offline-first synchronization systems write logs to local caches (SQLite) to protect active checkout speed, you are responsible for maintaining basic physical desktop storage backups. For private localized SQL Server installations, our staff will schedule automated backup routines during operational hours.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-lg font-bold text-gray-900">4. SLA & Maintenance Support Agreements</h2>
            <p>
              Monthly or yearly support Service Level Agreements (SLA) guarantee priority developer hotlines, database restoration, regional troubleshooting, and core version upgrades as detailed in your specific corporate service agreements.
            </p>
          </div>

          <p className="pt-6 border-t border-gray-100 text-xs text-gray-400">
            For specific licensing contracts, source code options, or regional SLA parameters, please contact our chief operations division.
          </p>
        </div>
      </section>

    </div>
  );
}
