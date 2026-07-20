'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, HelpCircle, MessageSquare, ChevronRight, ArrowRight, Sparkles, 
  Database, Shield, Users, Layers, Zap, Clock, Code, Server, Building2,
  UtensilsCrossed, ShoppingBag, Store, Pill, Shirt, ShoppingCart, Smartphone,
  Tv, Wrench, Truck, Briefcase, Plus, Minus, CheckCircle2, ChevronDown
} from 'lucide-react';

export default function PricingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Industry Solutions list (Section 2)
  const industrySolutions = [
    {
      title: 'Restaurant POS',
      icon: UtensilsCrossed,
      desc: 'High-performance billing system tailored for fine dining, cafes, bakeries, and cloud kitchens. Real-time ingredient depletion and multi-KOT dispatch routing.',
      features: [
        'Real-time Table Mapping & Booking',
        'Kitchen Display System (KDS) Sync',
        'Recipe & Ingredient Depletion Tracking',
        'FBR Tax Compliance System Integration',
        'Multi-Terminal KOT Dispatch Routing',
        'Direct WhatsApp Receipt Dispatch'
      ],
      slug: 'restaurant'
    },
    {
      title: 'Retail POS',
      icon: ShoppingBag,
      desc: 'Speedy checkout engine engineered for fast-paced retail shops. Gain flawless inventory oversight, batch tagging, and smart discount rules.',
      features: [
        'Instant Barcode Generation & Scanning',
        'Multiple Payment Gateways Support',
        'Purchase Order & Supplier Management',
        'Dynamic Discount & Promo Campaign Tool',
        'Customer Credit Ledger Accounts',
        'Automated Secure Daily Cloud Backups'
      ],
      slug: 'retail'
    },
    {
      title: 'Supermarket POS',
      icon: Store,
      desc: 'Robust system designed for rapid bulk throughput. Supports dual-screen visual displays, weight scales, and extensive inventory databases.',
      features: [
        'Electronic Weight Scale Integration',
        'Dual-Screen Customer Monitor Display',
        'Rapid Batch Stock & Expiry Tracking',
        'Multi-Lane Register Cash Desks',
        'Customer Loyalty Points & Gift Cards',
        'FIFO Inventory Valuation Audits'
      ],
      slug: 'supermarket'
    },
    {
      title: 'Pharmacy POS',
      icon: Pill,
      desc: 'Advanced medical POS focusing on regulatory criteria, batch-wise tracking, automated expiry notifications, and doctor catalogs.',
      features: [
        'Automatic Expiry Notification Alarms',
        'Generic Formula & Molecule Search',
        'Batch-wise Stock Traceability Logs',
        'Doctor Prescription Database Lookup',
        'Drug Regulatory Compliance Modules',
        'Distributor Purchase & Margin Logs'
      ],
      slug: 'pharmacy'
    },
    {
      title: 'Garments POS',
      icon: Shirt,
      desc: 'Organize high-volume apparel inventories effortlessly with dynamic grid matrices mapping colors, sizes, styles, and barcode generations.',
      features: [
        'Matrix Inventory (Size, Color, Style)',
        'Custom Price Tag & Barcode Printing',
        'Visual Product Catalog Browser UI',
        'Sales Representative Commission Tracking',
        'Customer Fitting Room Tracking Logs',
        'Seasonal Clearance Markdown Alerts'
      ],
      slug: 'garments'
    },
    {
      title: 'Grocery POS',
      icon: ShoppingCart,
      desc: 'Perfect checkout tool for mini-marts. Features fast shortcut keys for loose items, batch replenishment triggers, and bulk credit files.',
      features: [
        'Loose Item & Custom Weight Math',
        'Express Hotkey Cashier Panel',
        'Auto-Low Inventory Email Notifications',
        'Supplier Ledger Balance Controls',
        'Official FBR Thermal Receipts Printing',
        'Seamless Multi-User Till Shifts'
      ],
      slug: 'grocery'
    },
    {
      title: 'Mobile Shop POS',
      icon: Smartphone,
      desc: 'Track high-value electronic units by unique IMEI numbers, manage mobile model configurations, repair bookings, and technicians.',
      features: [
        'IMEI & Unique Serial Numbers Tracking',
        'Repair Ticket & Job Sheet Manager',
        'Warranty Claim Validation Engine',
        'Used Phone Purchase & Sale Ledger',
        'Technician Revenue Commissions Tracker',
        'Brand-wise Performance Reporting'
      ],
      slug: 'mobile'
    },
    {
      title: 'Electronics POS',
      icon: Tv,
      desc: 'Control appliances inventory with serial logging, customized home delivery slips, and flexible installment payment scheduler trackers.',
      features: [
        'Product Serial Code Integration',
        'Installment (Kist) Payment Scheduler',
        'Warranty & Supplier Claim Ledger',
        'Home Delivery & Dispatch Sync',
        'Salesman Commission Calculations',
        'Technical Maintenance & Repair Portal'
      ],
      slug: 'electronics'
    },
    {
      title: 'Hardware Store POS',
      icon: Wrench,
      desc: 'Built for industrial supply. Formulates bulk material conversions (feet/kg/pcs), custom quotation matrices, and secure corporate credit lines.',
      features: [
        'Bulk Unit Conversions (Kg/Feet/Pieces)',
        'Builder / Contractor Quotation Builder',
        'Multi-Warehouse Inventory Placement',
        'Supplier Installment Billing Ledger',
        'Dynamic Client Credit Limit Checks',
        'Purchase Return & Breakage Logbooks'
      ],
      slug: 'hardware'
    },
    {
      title: 'Wholesale POS',
      icon: Briefcase,
      desc: 'Manage rapid sales bookings, dynamic merchant pricing tiers, outstanding credit balances, and heavy cargo truck dispatcher logistics.',
      features: [
        'Dynamic Pricing Tiers (Retail vs Bulk)',
        'Credit Limit Overdraw Lock System',
        'Bulk Cargo Truck Loading Sheet Logs',
        'Route Order Booker Mobile Sync',
        'Bank Cheque & Post-Dated Check Records',
        'Filer & Non-Filer Tax Allocation Rules'
      ],
      slug: 'wholesale'
    },
    {
      title: 'Distribution POS',
      icon: Truck,
      desc: 'Equip route delivery agents with automated stock reconciliations, localized van sales sheets, outstanding recoveries, and territory logs.',
      features: [
        'Route Planning & Map Route Logistics',
        'Van Load Out & Returns Reconciliation',
        'Offline Order Booker Android Sync',
        'Agency Distributor Margin Settings',
        'Automated Balance Recovery Alerts',
        'Primary vs Secondary Sales Auditing'
      ],
      slug: 'distribution'
    },
    {
      title: 'Enterprise ERP',
      icon: Layers,
      desc: 'Ultimate ecosystem for massive corporate groups. Unify multiple databases, central purchasing warehouses, employee payrolls, and audits.',
      features: [
        'Multi-Branch Consolidated Cloud Sync',
        'Double-Entry Accounting Ledgers',
        'Centralized Warehouse Procurements',
        'Biometric Attendance & Payroll Sync',
        'Real-time Enterprise Audit Logs',
        'Tailor-Made API Integrations Hub'
      ],
      slug: 'enterprise'
    }
  ];

  // Feature Comparison Table Rows (Section 3)
  const comparisonData = [
    { name: 'Inventory', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Barcode', restaurant: false, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'QR Code', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Kitchen Display', restaurant: true, retail: false, pharmacy: false, garments: false, enterprise: true },
    { name: 'Recipe Management', restaurant: true, retail: false, pharmacy: false, garments: false, enterprise: true },
    { name: 'Supplier Management', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Purchase Management', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Sales Reports', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Expense Tracking', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Customer Loyalty', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Staff Management', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Attendance', restaurant: false, retail: false, pharmacy: false, garments: false, enterprise: true },
    { name: 'WhatsApp Integration', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Cloud Backup', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Offline Mode', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Multi Branch', restaurant: false, retail: false, pharmacy: false, garments: false, enterprise: true },
    { name: 'Multi User', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Role Permissions', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Analytics', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'FBR Ready', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'Export Reports', restaurant: true, retail: true, pharmacy: true, garments: true, enterprise: true },
    { name: 'API Support', restaurant: false, retail: false, pharmacy: false, garments: false, enterprise: true },
    { name: 'Custom Modules', restaurant: false, retail: false, pharmacy: false, garments: false, enterprise: true },
    { name: 'Enterprise Support', restaurant: false, retail: false, pharmacy: false, garments: false, enterprise: true },
  ];

  // Animated Statistics (Section 4)
  const statsList = [
    { value: '100+', label: 'Business Solutions Deployments', desc: 'Active companies using Chishty systems daily' },
    { value: '100+', label: 'SEO Knowledge Articles', desc: 'Guides mapping enterprise retail and billing systems' },
    { value: '24/7', label: 'Priority SLA Support Engagements', desc: 'Engineers on standby for multi-branch chains' },
    { value: '48hr', label: 'Average On-Site POS Deployment', desc: 'From hardware unboxing to complete staff training' },
    { value: '100%', label: 'Custom Adaptable Development', desc: 'Every feature custom-tailored to brand workflows' },
    { value: 'SSL', label: 'Secure Local-to-Cloud Archival', desc: 'Offline-First design synced with high-grade encryptions' }
  ];

  // FAQ list (Section 6)
  const faqs = [
    {
      q: 'Which POS is best for restaurants?',
      a: 'The Chishty Restaurant POS is engineered precisely for fine dining, fast food, bakeries, and cloud kitchens. It incorporates real-time graphical table mappings, direct thermal KOT dispatching, custom recipes and ingredient inventory depletion, and official FBR invoice integrations, ensuring flawless control over kitchen operations.'
    },
    {
      q: 'Do you provide installation?',
      a: 'Yes, we handle complete, start-to-finish on-site installations. Our engineers mount your POS hardware, set up local area network (LAN) connections, route kitchen and cashier thermal printers, initialize local database servers, and deliver hands-on operational training.'
    },
    {
      q: 'Can I use it offline?',
      a: 'Yes, our entire line of POS products is built with an Offline-First system architecture. The software operates 100% locally with zero latency, storing records inside a secure offline cache. As soon as an internet connection is established, all ledger entries silently sync to your central cloud dashboard.'
    },
    {
      q: 'Do you provide source code?',
      a: 'For enterprise-level corporations and bespoke custom systems contracts, we offer options for complete source code transparency and licensing ownership, allowing your in-house IT team to audit, host, and expand the code as your operations grow.'
    },
    {
      q: 'Can I customize features?',
      a: 'Absolutely. We do not sell rigid off-the-shelf software. We are software engineering professionals—we specialize in editing and modifying the core codebase to perfectly match your brand’s custom workflows, recipe calculations, or specialized invoicing layout formats.'
    },
    {
      q: 'Do you support multiple branches?',
      a: 'Yes, our central cloud dashboard consolidates inventories and cash flow metrics from unlimited branches. You can transfer stock between warehouses, update prices globally, audit cashier shift margins, and modify user credentials instantly from any device.'
    },
    {
      q: 'Can I migrate from another POS?',
      a: 'Yes, we provide seamless database migration services. Our team will securely export your product catalog, barcode databases, supplier directories, and historical customer ledgers from formats like Excel, CSV, or old SQL backups and clean-import them into Chishty POS.'
    },
    {
      q: 'How long does implementation take?',
      a: 'Standard POS solutions are deployed, calibrated, and trained on-site within 1 to 2 business days. Complex bespoke modules or custom corporate ERP development cycles typically span from 2 to 6 weeks, depending on the custom integration checklists required.'
    },
    {
      q: 'Do you provide training?',
      a: 'Training is a vital pillar of our delivery. We provide thorough, interactive training for checkout cashiers, inventory supervisors, and executive managers until your staff operates the billing engine confidently. We also supply easy-to-digest video walkthroughs.'
    },
    {
      q: 'Do you offer annual support?',
      a: 'Yes, Chishty Smart Solutions offers comprehensive annual service level agreements (SLAs). This includes 24/7/365 priority telephone desks, immediate remote desk debugging assistance, routine database indexing, and quick on-site engineer dispatches.'
    }
  ];

  return (
    <div id="pricing-page-root" className="bg-white min-h-screen">
      
      {/* ==================================================
          SECTION 1: HERO SECTION
          ================================================== */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#0A0A0A] text-white py-24 sm:py-32 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF6B00]/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FF6B00]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase font-mono text-[#FF6B00]"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Enterprise Solutions Suite</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white max-w-4xl mx-auto"
          >
            Solutions & <span className="text-[#FF6B00]">Pricing</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            Choose the perfect POS solution for your business. From restaurants to supermarkets, pharmacies, retail stores and enterprise businesses, we provide scalable software tailored to your industry.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link 
              id="hero-demo-btn"
              href="/contact?demo=true"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-extrabold tracking-wide uppercase transition-all bg-[#FF6B00] hover:bg-[#FF8C39] text-white shadow-lg shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/35 text-center focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
            >
              Book Free Demo
            </Link>
            <Link 
              id="hero-quote-btn"
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-extrabold tracking-wide uppercase transition-all bg-white/5 hover:bg-white/10 text-white border border-white/10 text-center focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-none"
            >
              Request Custom Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ==================================================
          SECTION 2: INDUSTRY SOLUTIONS GRID
          ================================================== */}
      <section className="py-24 sm:py-32 bg-gray-50 relative" id="solutions-grid-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <span className="text-[#FF6B00] text-xs font-bold tracking-widest uppercase font-mono block">Custom-Tailored Deployments</span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none">
              Explore Industry Specialized POS Systems
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Every industry demands unique workflows. We do not provide generic software. Select your vertical below to view built-in capabilities designed for your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((sol, index) => {
              const IconComp = sol.icon;
              return (
                <motion.div
                  key={index}
                  id={`solution-card-${sol.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index % 3 * 0.1 }}
                  className="bg-white border border-gray-200/80 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#FF6B00]/40 transition-all group relative overflow-hidden"
                >
                  {/* Subtle top indicator bar on hover */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#FF6B00] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center transition-colors group-hover:bg-[#FF6B00] group-hover:text-white shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                        {sol.title}
                      </h3>
                    </div>

                    {/* Desc */}
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {sol.desc}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-2.5 pt-2">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider font-mono block">Core Capabilities</span>
                      {sol.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start space-x-2.5">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-xs font-semibold leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-3 pt-8 mt-8 border-t border-gray-100">
                    <Link
                      id={`sol-${sol.slug}-learn`}
                      href={`/contact?industry=${sol.slug}`}
                      className="px-3 py-3 border border-gray-200 hover:border-[#FF6B00] text-gray-700 hover:text-[#FF6B00] text-xs font-bold rounded-xl text-center transition-all bg-gray-50/50 hover:bg-white focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none"
                    >
                      Learn More
                    </Link>
                    <Link
                      id={`sol-${sol.slug}-demo`}
                      href={`/contact?demo=true&industry=${sol.slug}`}
                      className="px-3 py-3 bg-[#FF6B00] hover:bg-[#FF8C39] text-white text-xs font-bold rounded-xl text-center shadow-md shadow-[#FF6B00]/10 hover:shadow-[#FF6B00]/20 transition-all focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:outline-none"
                    >
                      Book Demo
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 3: FEATURE COMPARISON TABLE
          ================================================== */}
      <section className="py-24 sm:py-32 bg-white" id="comparison-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <span className="text-[#FF6B00] text-xs font-bold tracking-widest uppercase font-mono block">Granular Audit Metrics</span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none">
              Complete Feature Matrix
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Verify how our custom POS modules align across key industries. We ensure total transparency on every system we build.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-lg bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-gray-900 text-white font-mono text-xs uppercase tracking-widest">
                    <th className="p-6 font-bold text-sm">Feature Name</th>
                    <th className="p-6 text-center">Restaurant</th>
                    <th className="p-6 text-center">Retail</th>
                    <th className="p-6 text-center">Pharmacy</th>
                    <th className="p-6 text-center">Garments</th>
                    <th className="p-6 text-center text-[#FF6B00]">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-150">
                  {comparisonData.map((row, idx) => (
                    <tr 
                      key={idx} 
                      className={`hover:bg-gray-50/50 transition-colors ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                      }`}
                    >
                      <td className="p-5 font-bold text-gray-900 text-xs sm:text-sm pl-6">{row.name}</td>
                      
                      {/* Restaurant */}
                      <td className="p-5 text-center">
                        {row.restaurant ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto stroke-[2.5]" />
                        ) : (
                          <span className="text-gray-300 text-sm font-light font-mono">—</span>
                        )}
                      </td>

                      {/* Retail */}
                      <td className="p-5 text-center">
                        {row.retail ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto stroke-[2.5]" />
                        ) : (
                          <span className="text-gray-300 text-sm font-light font-mono">—</span>
                        )}
                      </td>

                      {/* Pharmacy */}
                      <td className="p-5 text-center">
                        {row.pharmacy ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto stroke-[2.5]" />
                        ) : (
                          <span className="text-gray-300 text-sm font-light font-mono">—</span>
                        )}
                      </td>

                      {/* Garments */}
                      <td className="p-5 text-center">
                        {row.garments ? (
                          <Check className="w-5 h-5 text-emerald-500 mx-auto stroke-[2.5]" />
                        ) : (
                          <span className="text-gray-300 text-sm font-light font-mono">—</span>
                        )}
                      </td>

                      {/* Enterprise */}
                      <td className="p-5 text-center bg-[#FF6B00]/5 font-bold">
                        {row.enterprise ? (
                          <Check className="w-5 h-5 text-[#FF6B00] mx-auto stroke-[3]" />
                        ) : (
                          <span className="text-gray-300 text-sm font-light font-mono">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 4: WHY BUSINESSES CHOOSE CHISHTY SMART SOLUTIONS
          ================================================== */}
      <section className="py-24 sm:py-32 bg-[#1C1C1C] text-white relative overflow-hidden" id="why-choose-us-section">
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#FF6B00]/5 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-4 mb-20">
            <span className="text-[#FF6B00] text-xs font-bold tracking-widest uppercase font-mono block">High Performance Logistics</span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-none">
              Why Businesses Trust Chishty Smart Solutions
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              We compile highly optimized local-first billing architectures designed to stay running under any stress conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statsList.map((stat, idx) => (
              <motion.div
                key={idx}
                id={`stat-card-${idx}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#FF6B00]/40 transition-all group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <span className="text-4xl sm:text-5xl font-black text-[#FF6B00] font-mono tracking-tight block">
                    {stat.value}
                  </span>
                  <h4 className="text-lg font-extrabold text-white tracking-tight">
                    {stat.label}
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 5: ENTERPRISE CUSTOM SOFTWARE SECTION
          ================================================== */}
      <section className="py-24 sm:py-32 bg-white relative" id="custom-enterprise-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-tr from-[#1C1C1C] to-[#0A0A0A] rounded-[40px] p-8 sm:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Ambient orange blob */}
            <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#FF6B00]/15 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <span className="text-[#FF6B00] text-xs font-bold tracking-widest uppercase font-mono block">Bespoke Architectural Engineering</span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-none">
                  Need a Fully Customized Software?
                </h2>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                  Chishty Smart Solutions is a full-service software company. We build completely customized systems tailored to your company&apos;s operational models, providing full scalability, deep systems integration, and clean codebases.
                </p>

                <div className="pt-4">
                  <Link
                    id="enterprise-cta-btn"
                    href="/contact"
                    className="inline-flex items-center space-x-2 bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-sm font-extrabold tracking-wide uppercase transition-all shadow-lg shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/35 focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:outline-none"
                  >
                    <span>Talk to an Expert</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Grid of Custom Software Sub-Products */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'POS Systems', desc: 'SaaS multi-terminals' },
                  { name: 'ERP Software', desc: 'Central logistics hubs' },
                  { name: 'Inventory & Stock', desc: 'Real-time FIFO counts' },
                  { name: 'Warehouse Suites', desc: 'Barcode cross-docks' },
                  { name: 'HRM & Payroll', desc: 'Salary & tax modules' },
                  { name: 'CRM Hubs', desc: 'Buyer loyalty matrices' },
                  { name: 'Hospital Panels', desc: 'Patient prescription panels' },
                  { name: 'School Portals', desc: 'Fee ledger audit routes' },
                  { name: 'Factory Systems', desc: 'Machine batch outputs' },
                  { name: 'Distribution API', desc: 'Secondary sales routes' },
                  { name: 'Desktop Software', desc: 'C++/Rust speed code' },
                  { name: 'Web Applications', desc: 'High-availability SaaS' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-[#FF6B00]/20 transition-all">
                    <span className="text-xs font-bold text-white block">{item.name}</span>
                    <span className="text-[10px] text-gray-400 block mt-0.5">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 6: FAQ ACCORDION (10 FAQs)
          ================================================== */}
      <section className="py-24 sm:py-32 bg-gray-50" id="faqs-accordion-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-20">
            <span className="text-[#FF6B00] text-xs font-bold tracking-widest uppercase font-mono block">Knowledge Repository</span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-none">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
              Clear answers regarding licensing options, system architectures, deployment timelines, and service warranties.
            </p>
          </div>

          <div className="space-y-4 divide-y divide-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  id={`faq-item-${index}`}
                  className="pt-4 first:pt-0"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-center justify-between text-left py-4 focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:outline-none rounded-lg px-2 group"
                  >
                    <span className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-[#FF6B00] transition-colors pr-4">
                      {faq.q}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center shrink-0 transition-transform duration-300">
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-6 px-2 text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================================================
          SECTION 7: FINAL CALL TO ACTION
          ================================================== */}
      <section className="py-24 sm:py-32 bg-[#1C1C1C] text-white text-center relative overflow-hidden" id="final-cta-section">
        {/* Glow Spheres */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#FF6B00]/10 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-[#FF6B00]/10 border border-[#FF6B00]/20 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase font-mono text-[#FF6B00]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Ready for Instant Deployment</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-black tracking-tight text-white leading-none">
            Ready to Transform Your Business?
          </h2>

          <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Unleash world-class offline-first speeds, precise FIFO inventories, automated WhatsApp alerts, and professional multi-branch central audits today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              id="final-demo-btn"
              href="/contact?demo=true"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-extrabold tracking-wide uppercase transition-all bg-[#FF6B00] hover:bg-[#FF8C39] text-white shadow-lg shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/35 text-center focus-visible:ring-2 focus-visible:ring-[#FF6B00] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Book Free Demo
            </Link>
            <a
              id="final-whatsapp-btn"
              href="https://wa.me/923006392025?text=Hello,%20I%20want%20to%20discuss%20pricing%20and%20solutions%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-extrabold tracking-wide uppercase transition-all bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-[#25D366]/10 text-center flex items-center justify-center space-x-2 focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Now</span>
            </a>
            <Link
              id="final-pricing-btn"
              href="/contact?quote=true"
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-extrabold tracking-wide uppercase transition-all bg-white/5 hover:bg-white/10 text-white border border-white/10 text-center focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              Request Pricing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
