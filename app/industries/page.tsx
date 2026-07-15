'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Building2, MessageSquare, CheckCircle2, ShoppingBag, 
  Heart, Landmark, Briefcase, ChevronRight, Zap, Play, Sparkles
} from 'lucide-react';

export default function IndustriesPage() {
  
  const industries = [
    {
      category: 'Hospitality & Dining',
      items: [
        { name: 'Restaurant & Fine Dining', desc: 'Table-side ordering, multiple kitchen screens, split billing, and unified menu management.', link: '/products#pos-restaurant' },
        { name: 'Cafes & Coffee Shops', desc: 'Fast transaction speed, modifier options (syrups, milk types), loyalty points, and barcode scans.', link: '/products#pos-restaurant' },
        { name: 'Bakeries & Sweet Outlets', desc: 'Batch expiration tracking, customized ingredient levels, bulk weights, and dynamic catering billing.', link: '/products#pos-restaurant' },
        { name: 'Hotel Management Suite', desc: 'Room booking databases, check-in timelines, cleaning rosters, and direct room-service POS integration.', link: '/products#hotel-management' }
      ]
    },
    {
      category: 'Specialized Commercial Outlets',
      items: [
        { name: 'Retail Networks', desc: 'Unified multi-branch catalog management, barcode printing, and wholesale sales channels.', link: '/products#pos-retail' },
        { name: 'Grocery & Supermarkets', desc: 'Weight scale scale configurations, rapid checkout routines, and multi-tier supplier invoice matching.', link: '/products#pos-retail' },
        { name: 'Electronics & Hardware', desc: 'Serial number and MAC tracking, customized warranties, service logs, and technician assignments.', link: '/products#pos-retail' },
        { name: 'Mobile Shops & Repair Centers', desc: 'IMEI logging, job card management, supplier spare parts inventory, and technician commissions.', link: '/products#pos-retail' },
        { name: 'Garments & Fashion Boutiques', desc: 'Size-color-style matrix indexing, loyalty card support, and seasonal discount triggers.', link: '/products#pos-retail' },
        { name: 'Jewelry & Luxury Boutiques', desc: 'Carat-weight calculations, metal market price sync tools, high-security client history profiles, and custom certificates.', link: '/products#pos-retail' },
        { name: 'Furniture & Custom Decor', desc: 'Custom order assembly tracking, partial payment logs, shipping and installation schedules.', link: '/products#pos-retail' },
        { name: 'Book Stores & Stationery', desc: 'ISBN indexing, author catalog sorting, school pack assembly, and custom wholesale channels.', link: '/products#pos-retail' }
      ]
    },
    {
      category: 'Healthcare & Wellness',
      items: [
        { name: 'Pharmacies & Drug Stores', desc: 'Meticulous drug batch expiration checking, substitution lookups, and narcotic sales audits.', link: '/products#pos-pharmacy' },
        { name: 'Salons & Premium Spas', desc: 'Staff appointment schedules, technician commission splits, and membership packages.', link: '/products#pos-retail' },
        { name: 'Medical Clinics & Lab Centers', desc: 'Patient history folders, doctor consultation fee splits, and diagnostic test billing.', link: '/products#pos-pharmacy' }
      ]
    },
    {
      category: 'Corporate, Education & Production',
      items: [
        { name: 'Schools & Educational Hubs', desc: 'Student enrollment directories, multi-installment fee ledger books, and exam scorecard logs.', link: '/products#erp-accounting' },
        { name: 'Corporate Head Offices', desc: 'Comprehensive financial accounting dashboards, assets sheets, and custom client communication loops.', link: '/products#erp-accounting' },
        { name: 'Manufacturing & Factories', desc: 'Raw material recipe (BOM) matching, production pipeline logs, and worker wage schedules.', link: '/products#erp-accounting' }
      ]
    }
  ];

  return (
    <div id="industries-page-root" className="bg-white">
      
      {/* Header Section */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            Specialized Verticals
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            Industries We Deconstruct & Automate
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Generic systems fail because they ignore your unique daily bottlenecks. We build custom schemas and workflows optimized for your exact niche.
          </p>
        </div>
      </section>

      {/* Roster list of categories */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24" id="industries-roster-section">
        {industries.map((cat, idx) => (
          <div key={idx} className="space-y-10" id={`cat-group-${idx}`}>
            <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
              <span className="w-2.5 h-6 bg-[#FF6B00] rounded-full"></span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                {cat.category}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cat.items.map((item, iidx) => (
                <div 
                  key={iidx}
                  className="bg-gray-50 border border-gray-100 hover:border-gray-200 hover:bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-6">
                    <Link 
                      href={item.link}
                      className="text-xs font-semibold text-[#FF6B00] hover:text-[#FF8C39] inline-flex items-center group/link"
                    >
                      <span>Explore Technical Schema</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover/link:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Free Consulting Section */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
            No-Obligation Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Do not see your specific industry vertical?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We specialize in bespoke systems engineering. Contact our brand strategist and lead developer directly. We will deconstruct your business model, outline a visual database blueprint, and design custom modules at standard rates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              id="industries-custom-cta"
              href="/contact"
              className="bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg transition-colors"
            >
              Consult Our Architect
            </Link>
            <a
              id="industries-wa-cta"
              href="https://wa.me/923006392025?text=Hello,%20I%20have%20a%20specialized%20business%20and%20want%20to%20consult%20on%20a%20POS/ERP%20blueprint."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg transition-colors flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
