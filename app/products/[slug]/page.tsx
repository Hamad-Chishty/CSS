'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  ArrowRight, MessageSquare, CheckCircle2, ChevronRight, 
  UtensilsCrossed, ShoppingBag, Pill, Layers, Briefcase, Users, Cpu,
  Shield, Database, Zap, Star, Layout, Laptop
} from 'lucide-react';

interface ProductDetails {
  title: string;
  tagline: string;
  badge: string;
  icon: React.ReactNode;
  hero_desc: string;
  features: { title: string; desc: string }[];
  screenshots: string[];
  industries_served: string[];
  integrations: string[];
  pricing: { tier: string; cost: string; outline: string; features: string[] }[];
  faq: { q: string; a: string }[];
}

const PRODUCTS_DATA: Record<string, ProductDetails> = {
  'restaurant-pos': {
    title: 'Restaurant POS Suite',
    tagline: 'Table billing, digital kitchen screens, and QR menus in perfect sync.',
    badge: 'Bestseller',
    icon: <UtensilsCrossed className="w-12 h-12 text-[#FF6B00]" />,
    hero_desc: 'Formulated to handle high-frequency dinner rushes with ease. Keeps wait staff synchronized with chefs and speeds up table turnover by up to 35%. Built on a responsive local state architecture.',
    features: [
      { title: 'Visual Table State Editor', desc: 'Manage restaurant floor layouts, track order age per seat, and update reservations in real-time.' },
      { title: 'Direct-to-Kitchen (KDS)', desc: 'Instant order routing to preparation monitors, reducing wait time and eliminating paper ticket loss.' },
      { title: 'Contactless QR Orders', desc: 'Allows guests to scan a dynamic QR, browse the menu, and place orders directly from their mobile browser.' },
      { title: 'Frictionless Split-Billing', desc: 'Process complex splits by seat, individual item, or custom decimal amounts at checkout.' }
    ],
    screenshots: [
      'Interactive Table Mapping Dashboard',
      'Active Order Status Monitor v4',
      'Kitchen Prep Screen (KDS Feed)'
    ],
    industries_served: ['Fine Dining Restaurants', 'Quick Service Cafes', 'Hotel Dining Rooms', 'High-volume Bakeries'],
    integrations: ['WhatsApp Business API', 'Local Payment Gateways', 'KDS Thermal Printers', 'SMS Alerts Service'],
    pricing: [
      { 
        tier: 'Kiosk / Cafe Plan', 
        cost: 'Custom Quote', 
        outline: 'Perfect for single terminal coffee shops & localized bakeries.',
        features: ['Dual-Engine local billing', 'Standard local database', 'Email receipts module', 'On-site setup & training']
      },
      { 
        tier: 'Pro Restaurant Suite', 
        cost: 'Custom Quote', 
        outline: 'Full table maps, unlimited preparation screens, and contactless QR ordering.',
        features: ['Everything in Cafe Plan', 'Multi-terminal KDS sync', 'QR menu order engine', 'Live mobile dashboard logs', 'Premium SLA support']
      }
    ],
    faq: [
      { q: 'Do we need specialized iPads or terminals?', a: 'No, our software runs flawlessly on standard tablets, iPads, Android devices, Windows touch systems, or any local browser.' },
      { q: 'Will billing work if the internet drops?', a: 'Absolutely. All tables and active tickets remain locally accessible and secure. Once your connection is restored, the data is automatically synced to your cloud account.' }
    ]
  },
  'retail-pos': {
    title: 'Retail & Grocery POS System',
    tagline: 'Lightning-fast barcode checkouts with instant multi-store stock audits.',
    badge: 'Enterprise-Grade',
    icon: <ShoppingBag className="w-12 h-12 text-[#FF6B00]" />,
    hero_desc: 'Capable of indexing up to 200,000 distinct SKU items effortlessly. Automates supplier replenishment, maps shelf space, and reduces queue overheads during heavy holiday rushes.',
    features: [
      { title: 'Frictionless Barcode Scan', desc: 'Ultra-fast scanner integration resolving items and prices in under 50 milliseconds.' },
      { title: 'Automated Supplier POs', desc: 'Generates purchase orders automatically when item counts drop below predefined thresholds.' },
      { title: 'Multi-Store Inventory Sync', desc: 'Synchronizes item counts and stock transfers across multiple branches, warehouses, and storage hubs.' },
      { title: 'Customer Ledger (Khata)', desc: 'Track credit limits, individual balances, outstanding invoices, and automate bill alerts.' }
    ],
    screenshots: [
      'SKU Master Inventory panel',
      'Automated Purchase Order Logs',
      'Branch Stock Transfer Map'
    ],
    industries_served: ['Supermarkets', 'Mega Grocery Stores', 'Fashion & Apparel', 'Hardware Outlets'],
    integrations: ['USB / Bluetooth Scanners', 'Barcode Thermal Printers', 'Electronic Weighing Scales', 'WhatsApp API Alerts'],
    pricing: [
      { 
        tier: 'Single Branch Core', 
        cost: 'Custom Quote', 
        outline: 'Streamlined checkout, barcode scans, and localized stock lists.',
        features: ['Dual-Engine billing', 'Standard stock control', 'Local khata registry', 'On-site onboarding']
      },
      { 
        tier: 'Multi-Store Enterprise', 
        cost: 'Custom Quote', 
        outline: 'Centralized warehouse logistics and real-time inventory synchronization across up to 100 branches.',
        features: ['Everything in Core', 'Multi-branch sync node', 'Automatic vendor re-orders', 'Live mobile audit logs', 'Dedicated local SLA support']
      }
    ],
    faq: [
      { q: 'Can we import our existing inventory?', a: 'Yes. Our data migration tool can import thousands of items from standard Excel, CSV, or legacy SQL backups in minutes.' },
      { q: 'Is there a limit on SKU records?', a: 'Our optimized database cache handles up to 200,000 active SKUs with zero lag during search routines.' }
    ]
  },
  'pharmacy-pos': {
    title: 'Pharmacy & Medical Retail POS',
    tagline: 'Strict batch scheduling, drug generic matching, and expiration guardrails.',
    badge: 'Compliance Locked',
    icon: <Pill className="w-12 h-12 text-[#FF6B00]" />,
    hero_desc: 'Maintains meticulous pharmaceutical record safety. Features expiry countdown widgets, medical formula database search, and locked controlled narcotic access matrices.',
    features: [
      { title: 'Expiry Warnings', desc: 'Color-coded notifications and auto-restrictions for drug batches nearing shelf limits.' },
      { title: 'Generic Substitute Matcher', desc: 'Instantly suggests equivalent generic drugs and chemical compounds when a branded drug is out of stock.' },
      { title: 'Prescription Digital Logs', desc: 'Scan and link doctor prescription images directly to patient health history profiles.' },
      { title: 'Narcotics Substance Gate', desc: 'Locks controlled medicines behind strict supervisor biometric or security pin authorization.' }
    ],
    screenshots: [
      'Generic Medicine Substitute Matcher',
      'Batch Expiry Chronological Panel',
      'Locked Medicine Approvals Feed'
    ],
    industries_served: ['Retail Pharmacies', 'Hospital Drug Stores', 'Medical Equipment Outlets', 'Wholesale Pharmacies'],
    integrations: ['Biometric Handsets', 'Regulatory Databases', 'High-Res Document Scanners', 'SMS Notifications Service'],
    pricing: [
      { 
        tier: 'Pharmacy Core', 
        cost: 'Custom Quote', 
        outline: 'Complete drug batch tracking, expiration alerts, and chemical matcher.',
        features: ['Drug batch sorting', 'Expiry warnings widget', 'Generics match database', 'Regular ledger logs', 'On-site installation']
      },
      { 
        tier: 'Hospital Pharmacy Suite', 
        cost: 'Custom Quote', 
        outline: 'Fully customized compliance suite with multiple levels of cashier security permissions and ward sync.',
        features: ['Everything in Core Plan', 'Multi-user biometric log gates', 'Controlled narcotics safe logs', 'Direct prescription database link', 'Priority SLA support']
      }
    ],
    faq: [
      { q: 'How does batch tracking operate?', a: 'Every stock purchase record binds specific batch IDs, purchase costs, and expiry dates to ensure First In First Out (FIFO) sale routing.', },
      { q: 'Can we manage customer medical histories?', a: 'Yes, the patient profile module logs transaction timelines, dosage instructions, and uploaded medical forms.' }
    ]
  },
  'erp-inventory': {
    title: 'Enterprise ERP & Financial Ledger',
    tagline: 'Double-entry audit trails, dynamic fiscal mapping, and cash workflows.',
    badge: 'All-In-One Backbone',
    icon: <Layers className="w-12 h-12 text-[#FF6B00]" />,
    hero_desc: 'Centralize multi-tier business layers. Consolidate vendor logs, real-time capital ledgers, asset metrics, taxation structures, and detailed balance sheets into a secure offline-ready portal.',
    features: [
      { title: 'Double-Entry Ledger', desc: 'Maintains absolute compliance with standard trial balances, profit & loss sheets, and asset audits.' },
      { title: 'Custom Taxation Engine', desc: 'Configures dynamic provincial sales tax, federal GST, and customs duties on a per-item basis.' },
      { title: 'Logistics Transit Logs', desc: 'Tracks goods chronologically as they travel from international containers to internal warehouses.' },
      { title: 'Bank Reconciliation API', desc: 'Matches bank ledger statements and digital POS payment records automatically using intelligent rules.' }
    ],
    screenshots: [
      'Interactive Balance Sheets Dashboard',
      'Tax Audit Distribution Map',
      'Inter-Warehouse Cargo Transit Feed'
    ],
    industries_served: ['Manufacturing Units', 'Corporate Franchises', 'Import & Export Hubs', 'Wholesale Distributors'],
    integrations: ['Bank Statement APIs', 'Corporate Accounting Suites', 'Logistics barcode scanners', 'Custom reporting boards'],
    pricing: [
      { 
        tier: 'Cloud ERP Core', 
        cost: 'Custom Quote', 
        outline: 'Standard double-entry logs, multi-warehouse tracing, and financial metrics.',
        features: ['Dual ledger entries', 'Automated GST calculators', 'Multi-user permission blocks', 'CSV/PDF report exports']
      },
      { 
        tier: 'Enterprise Global Suite', 
        cost: 'Custom Quote', 
        outline: 'Bespoke corporate setups with active database synchronization, multi-currency support, and live audits.',
        features: ['Everything in Core ERP', 'Bespoke database nodes', 'Automatic bank statement reconciliations', 'Customized localized APIs', '24/7 dedicated support SLA']
      }
    ],
    faq: [
      { q: 'Is it audited for international compliance?', a: 'Yes, our accounting algorithms adhere strictly to GAAP and international financial reporting standards.' },
      { q: 'Can we export financial statements?', a: 'All profit & loss reports, ledger feeds, and stock sheets can be exported instantly to secure PDF, CSV, or Microsoft Excel files.' }
    ]
  },
  'hr-payroll': {
    title: 'HR & Automated Payroll Suite',
    tagline: 'Biometric linkups, absolute salary formulas, and staff dashboards.',
    badge: 'Workforce Suite',
    icon: <Briefcase className="w-12 h-12 text-[#FF6B00]" />,
    hero_desc: 'Streamline staff coordination. Automatically calculate overtime metrics, track absences, configure custom bonus rules, and generate monthly payslips with biometric device synchronization.',
    features: [
      { title: 'Biometric Scanner Link', desc: 'Direct listeners parsing active check-in/out logs from thumb registers and face cameras.' },
      { title: 'Advanced Salary Formulas', desc: 'Handles hourly overtime, customizable bonuses, penalty deductions, and tax withholdings.' },
      { title: 'Sequential Leave Approvals', desc: 'Enables staff to request leaves via a portal and guides managers through multi-level approvals.' },
      { title: 'One-Click Bank CSVs', desc: 'Generates formatted salary spreadsheets compatible with major commercial banks for rapid payroll execution.' }
    ],
    screenshots: [
      'Worker Attendance Calendar',
      'Dynamic Salary Matrix Configurator',
      'Staff Portal & Leave Logs Board'
    ],
    industries_served: ['Large Retail Chains', 'Multi-Store Restaurants', 'Manufacturing Facilities', 'Corporate Offices'],
    integrations: ['ZKTeco Attendance Hardware', 'Hikvision face scanners', 'Bank Settlement CSVs', 'Staff Mobile Portal'],
    pricing: [
      { 
        tier: 'HR Standard', 
        cost: 'Custom Quote', 
        outline: 'Perfect for local business environments with up to 100 active staff.',
        features: ['Attendance logs mapping', 'Basic salary calculation', 'Direct digital payslip outputs', 'Holiday calendar editor']
      },
      { 
        tier: 'Enterprise Workforce Suite', 
        cost: 'Custom Quote', 
        outline: 'Full scale multi-branch setups with face sync API and employee self-service portals.',
        features: ['Everything in HR Standard', 'Biometric face-sync listener', 'Staff mobile portal nodes', 'Leave sequential approval matrix', '24/7 SLA helpline']
      }
    ],
    faq: [
      { q: 'What biometric hardware is compatible?', a: 'We support standard network-connected ZKTeco machines, Hikvision facial terminals, and standard USB recorders.' },
      { q: 'Do employees get a dedicated mobile dashboard?', a: 'Yes. An optional secure client portal allows staff to log leaves, check daily attendance stamps, and download payslips.' }
    ]
  },
  'crm': {
    title: 'Specialized CRM System',
    tagline: 'Offline-sync lead pipelines, WhatsApp alerts, and client history.',
    badge: 'Deal Closer',
    icon: <Users className="w-12 h-12 text-[#FF6B00]" />,
    hero_desc: 'For service-focused organizations where customer relationships and prompt WhatsApp follow-ups are critical. Features drag-and-drop kanban pipelines and localized SQLite sync.',
    features: [
      { title: 'Secure Deal Kanban', desc: 'Drag-and-drop lead cards from discovery to close, visualizing total value in real-time.' },
      { title: 'WhatsApp Automation', desc: 'Triggers instant greetings, payment reminders, and birthday offers directly to client numbers.' },
      { title: 'Timeline Activity feed', desc: 'Consolidates all past emails, texts, call notes, and transaction files into a single unified chronological timeline.' },
      { title: 'Bespoke Customer Fields', desc: 'Add custom tags, attachments, follow-up alarms, and rating categories to any contact record.' }
    ],
    screenshots: [
      'Lead pipeline drag-and-drop stage',
      'WhatsApp Automation trigger board',
      'Unified contact activity history'
    ],
    industries_served: ['Corporate Service Providers', 'Automotive Showrooms', 'Real Estate Agencies', 'Medical Consultancies'],
    integrations: ['WhatsApp Business API', 'Twilio SMS & Call', 'Google Calendar Workspace', 'Local Billing Terminals'],
    pricing: [
      { 
        tier: 'CRM Core', 
        cost: 'Custom Quote', 
        outline: 'Streamlined deal tracking, lead kanbans, and standard customer registries.',
        features: ['Kanban lead pipeline', 'Timeline logs feed', 'CSV contacts export', 'Standard staff permissions']
      },
      { 
        tier: 'Automation Suite Pro', 
        cost: 'Custom Quote', 
        outline: 'Adds WhatsApp automation triggers, email campaign integrations, and advanced staff dashboards.',
        features: ['Everything in CRM Core', 'WhatsApp Business API gateway', 'Email sequence automation', 'Custom contact schemas', 'Dedicated supervisor logs']
      }
    ],
    faq: [
      { q: 'Do we need a Meta approved phone number?', a: 'We assist your marketing team in setting up Meta Developer credentials to obtain official, high-reputation WhatsApp API endpoints.' },
      { q: 'Can we import contacts from previous sheets?', a: 'Yes. Our data wizard converts Excel or CSV files into organized leads, automatically detecting duplicate contact entries.' }
    ]
  },
  'custom-software': {
    title: 'Custom Software Development',
    tagline: 'Bespoke localized architectures, elite APIs, and total data ownership.',
    badge: 'Dedicated Engineering',
    icon: <Cpu className="w-12 h-12 text-[#FF6B00]" />,
    hero_desc: 'When standard templates do not align with your corporate workflow, our senior systems architects build high-performance, compliant systems from scratch with absolute security.',
    features: [
      { title: 'Bespoke Schema Design', desc: 'Every data field, table, and database relationship is custom-modeled specifically around your internal operational loops.' },
      { title: 'High-Performance Engine', desc: 'Engineered using optimized, secure tech frameworks ensuring sub-second response times under heavy user concurrency.' },
      { title: 'Hardware Integration', desc: 'Direct software bridge to specialized industrial scales, warehouse scanners, smart cameras, and IoT sensors.' },
      { title: 'Total Code Ownership', desc: 'Deploy on isolated corporate server nodes. Complete ownership of code repositories is signed over upon project delivery.' }
    ],
    screenshots: [
      'Custom database relationship schema',
      'Central system performance dashboard',
      'Hardware controller communication grid'
    ],
    industries_served: ['Enterprise Franchises', 'Logistics & Cargo Hubs', 'Healthcare Facilities', 'Government & Public Services'],
    integrations: ['Proprietary Corporate APIs', 'Industrial IoT Controllers', 'Secure Cloud VPNs', 'Enterprise Audit Logs'],
    pricing: [
      { 
        tier: 'Standard Automation Block', 
        cost: 'Custom Quote', 
        outline: 'Tailored workflow tools, portal builds, and database setup.',
        features: ['Custom database schema', 'Responsive web dashboard', 'Excel/PDF generation', 'Basic API endpoints', 'On-site deployment']
      },
      { 
        tier: 'Full Scale Corporate Build', 
        cost: 'Custom Quote', 
        outline: 'End-to-end bespoke software design, deep hardware integration, secure clouds, and physical training.',
        features: ['Everything in Standard Block', 'Hardware sensor integration', 'Biometric security gates', 'Custom WhatsApp pipelines', '24/7 dedicated support SLA']
      }
    ],
    faq: [
      { q: 'Is the source code fully ours?', a: 'Absolutely. Complete repository ownership and IP rights are legally transferred directly to your organization upon project completion.' },
      { q: 'What post-launch SLA support is available?', a: 'We provide monthly maintenance SLAs covering server upgrades, security patch compliance, and local emergency support.' }
    ]
  }
};

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = use(params);
  const slug = unwrappedParams.slug;
  const product = PRODUCTS_DATA[slug];

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4 text-center">
        <h2 className="text-2xl font-black text-gray-900 mb-4">Product Not Found</h2>
        <p className="text-gray-500 mb-6">The requested product information could not be found or is unavailable.</p>
        <Link href="/products" className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg shadow-[#FF6B00]/10 transition-colors">
          View All Products
        </Link>
      </div>
    );
  }

  return (
    <div id="product-detail-root" className="bg-white">
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full inline-block">
            {product.badge}
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">
            {product.title}
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed italic">
            &ldquo;{product.tagline}&rdquo;
          </p>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {product.hero_desc}
          </p>
          <div className="flex justify-center pt-4">
            <a 
              id="product-hero-cta"
              href="https://wa.me/923006392025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/20 transition-all flex items-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Discuss compatible configurations</span>
            </a>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
            Key Modules
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Advanced Product Capabilities
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Every feature is fine-tuned to remove daily bottlenecks and scale your transaction speeds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {product.features.map((feat, idx) => (
            <div key={idx} className="flex gap-5 p-6 rounded-2xl bg-gray-50/50 border border-gray-100/80 hover:bg-white hover:border-gray-200 hover:shadow-md transition-all">
              <div className="p-3 bg-white border border-gray-100 rounded-xl w-12 h-12 flex items-center justify-center shadow-sm shrink-0 text-[#FF6B00]">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feat.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCREENSHOTS (VISUAL DEMO METADATA) */}
      <section className="py-24 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Product interface
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Operational Interface Screens
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Constructed with high-contrast displays to support rapid operations under intense diner rushes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.screenshots.map((screen, idx) => (
              <div key={idx} className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 uppercase">CSS SCREEN {idx + 1}</span>
                </div>
                <div className="h-36 bg-gray-50 rounded-xl border border-dashed border-gray-250 flex items-center justify-center p-4 text-center">
                  <span className="text-xs font-bold text-gray-500">{screen}</span>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                  <span>Authorized active view</span>
                  <Laptop className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SERVED */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
            Vertical Markets
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Industries Served
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Purpose-built schemas customized for the strict needs of specific operators.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {product.industries_served.map((ind, idx) => (
            <div key={idx} className="bg-[#1C1C1C] border border-white/5 rounded-xl p-6 text-center hover:bg-neutral-900 transition-colors">
              <Star className="w-5 h-5 text-[#FF6B00] mx-auto mb-3" />
              <span className="font-bold text-sm text-white block">{ind}</span>
              <span className="text-[10px] text-gray-500 mt-1 block">Fully Standardized</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-24 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Automation Sync
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Supported Integrations
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Communicates directly with standard devices and secure web APIs for immediate logs tracking.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {product.integrations.map((intg, idx) => (
              <span key={idx} className="bg-white border border-gray-200 text-gray-800 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm">
                {intg}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
            Transparent quotes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Flexible Product Tiers
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Select standard features or customize entire database schemas to fit your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {product.pricing.map((tier, idx) => (
            <div key={idx} className="bg-white border border-gray-150 rounded-2xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow relative">
              <div>
                <h3 className="text-xl font-black text-gray-950">{tier.tier}</h3>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed min-h-[40px]">{tier.outline}</p>
                <div className="my-6 border-y border-gray-100 py-3.5">
                  <span className="text-3xl font-black text-gray-900">{tier.cost}</span>
                  <span className="text-xs text-gray-400 block mt-1">Free blueprints & trial boarding included</span>
                </div>
                <ul className="space-y-3">
                  {tier.features.map((feat, fidx) => (
                    <li key={fidx} className="flex items-start text-xs sm:text-sm font-medium text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mr-2.5 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-8 mt-8 border-t border-gray-100">
                <a 
                  href={`https://wa.me/923006392025?text=Hello,%20I%20am%20interested%20in%20pricing%20for%20${encodeURIComponent(product.title)}%20(${encodeURIComponent(tier.tier)})`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#FF6B00] text-white hover:bg-[#FF8C39] text-xs sm:text-sm font-bold py-3.5 rounded-xl transition-colors"
                >
                  Acquire Custom Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              System Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Product-Specific FAQ
            </h2>
          </div>

          <div className="space-y-4">
            {product.faq.map((item, idx) => (
              <div key={idx} className="border border-gray-150 bg-white rounded-xl overflow-hidden transition-all duration-200">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50/50 font-semibold text-gray-900 text-sm sm:text-base focus:outline-none"
                >
                  <span>{item.q}</span>
                  <span className="ml-4 flex-shrink-0 text-[#FF6B00] font-bold text-lg">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="p-5 bg-gray-50 border-t border-gray-100 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEMO CTA */}
      <section className="py-24 bg-gradient-to-t from-[#121212] to-[#1C1C1C] text-white relative">
        <div className="absolute inset-0 bg-[#FF6B00]/5 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Schedule a Live Feature Demo
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Witness our high-performance interfaces and real-time database synchronization on a live terminal configured for your workflow.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href={`/contact?product=${slug}`}
              className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white px-8 py-4 rounded-xl text-sm sm:text-base font-bold shadow-xl shadow-[#FF6B00]/20 hover:shadow-[#FF6B00]/30 transition-all w-full sm:w-auto"
            >
              Book Free Screen Share Demo
            </Link>
            <a
              href={`https://wa.me/923006392025?text=Hello,%20I%20would%20like%20to%20schedule%20a%20demo%20for%20${encodeURIComponent(product.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-sm sm:text-base font-bold transition-all flex items-center justify-center space-x-2 w-full sm:w-auto"
            >
              <MessageSquare className="w-5 h-5 text-[#FF6B00]" />
              <span>Request WhatsApp Demo Logs</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
