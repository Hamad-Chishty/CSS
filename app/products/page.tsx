import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  ShoppingBag, CheckCircle2, ChevronRight, MessageSquare, 
  HardDrive, Heart, Landmark, Briefcase, Zap, RefreshCw, HelpCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise POS & ERP Software Solutions | Chishty Smart Solutions',
  description: 'Explore our 6 premium retail, restaurant, pharmacy, ERP, payroll, and CRM systems. High-performance software designed to optimize daily operations with seamless cloud sync and offline resilience.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/products',
  },
  openGraph: {
    title: 'Enterprise POS & ERP Software Solutions | Chishty Smart Solutions',
    description: 'Explore our 6 premium retail, restaurant, pharmacy, ERP, payroll, and CRM systems. High-performance software designed to optimize daily operations with seamless cloud sync and offline resilience.',
    url: 'https://chishtysmartsolutions.com/products',
    siteName: 'Chishty Smart Solutions',
    images: [
      {
        url: 'https://chishtysmartsolutions.com/images/products-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Chishty Smart Solutions Products Overview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise POS & ERP Software Solutions | Chishty Smart Solutions',
    description: 'Explore our 6 premium retail, restaurant, pharmacy, ERP, payroll, and CRM systems.',
    images: ['https://chishtysmartsolutions.com/images/products-og.jpg'],
  },
};

export default function ProductsPage() {
  
  const products = [
    {
      id: 'restaurant-pos',
      icon: <ShoppingBag className="w-8 h-8 text-[#FF6B00]" />,
      title: 'Restaurant & Cafe POS',
      badge: 'Bestseller',
      tagline: 'Table orders, digital kitchen feeds, and QR ordering in absolute harmony.',
      desc: 'Formulated to handle high-frequency dinner rushes with ease. Keeps wait staff synchronized with chefs and speeds up table turnover by up to 35%.',
      bullets: [
        'Dynamic visual table map state editor',
        'Direct-to-kitchen printer (KDS) & Android support',
        'Bespoke loyalty management & customer discount mechanics',
        'Contactless digital QR scanning ordering platform',
        'Multi-terminal network billing state engine'
      ]
    },
    {
      id: 'retail-pos',
      icon: <HardDrive className="w-8 h-8 text-[#FF6B00]" />,
      title: 'Retail & Grocery POS',
      badge: 'Enterprise-Grade',
      tagline: 'Lightning-fast checkout routines with instant multi-store stock audits.',
      desc: 'Capable of indexing up to 200,000 distinct SKU items effortlessly. Automates supplier replenishment, maps shelf space, and reduces queue overheads.',
      bullets: [
        'Frictionless barcode generation & digital scanning interfaces',
        'Real-time multi-branch warehouse synchronization',
        'Automated Purchase Orders (PO) based on threshold alerts',
        'Integrated dynamic batch-number stock sorting',
        'Customer credit ledger (Khata) & outstanding accounts tracker'
      ]
    },
    {
      id: 'pharmacy-pos',
      icon: <Heart className="w-8 h-8 text-[#FF6B00]" />,
      title: 'Pharmacy POS',
      badge: 'Compliance Locked',
      tagline: 'Strict batch scheduling, drug compound tracking, and expiration guardrails.',
      desc: 'Maintains meticulous pharmaceutical record safety. Features expiry countdown widgets, medical formula database search, and detailed supplier invoicing.',
      bullets: [
        'Automated early warnings for expiring drug batches',
        'Formula & drug generic substitution matcher',
        'Prescription image uploads and patient profiling',
        'Supplier batch purchase accounting matrix',
        'Locked access controls for narcotics & regulated medicines'
      ]
    },
    {
      id: 'erp-inventory',
      icon: <Landmark className="w-8 h-8 text-[#FF6B00]" />,
      title: 'ERP & Inventory',
      badge: 'All-In-One',
      tagline: 'Double-entry audit trails, dynamic fiscal mapping, and cash workflows.',
      desc: 'Centralize multi-tier business layers. Consolidate vendor logs, real-time capital ledgers, asset metrics, taxation, and detailed balance sheets.',
      bullets: [
        'Real-time trial balance, profit & loss statement generators',
        'Sales tax, GST, and custom taxation configurations',
        'Multi-warehouse transit tracking & logistics pipeline logs',
        'Automated bank reconciliation & cash flow forecasting',
        'Enterprise-grade audit logs showing chronological user operations'
      ]
    },
    {
      id: 'hr-payroll',
      icon: <Briefcase className="w-8 h-8 text-[#FF6B00]" />,
      title: 'HR & Payroll',
      badge: 'Workforce Suite',
      tagline: 'Biometric linkups, absolute salary formulas, and staff dashboards.',
      desc: 'Streamline staff coordination. Automatically calculate overtime metrics, track absences, configure custom bonus rules, and generate monthly payslips.',
      bullets: [
        'Compatible with biometric machines & dynamic face-scanners',
        'Bespoke salary structures (allowances, deductions, commissions)',
        'Staff leave management with sequential approval matrices',
        'One-click digital payslip distribution & banking spreadsheets',
        'Detailed performance audits and goal matrices'
      ]
    },
    {
      id: 'crm',
      icon: <Zap className="w-8 h-8 text-[#FF6B00]" />,
      title: 'CRM & Business Automation',
      badge: 'Custom Deployed',
      tagline: 'Unrestricted offline capabilities, custom data pipelines, & localized files.',
      desc: 'For environments where connection downtime is unacceptable. Built using optimized architectures for flawless execution and deep relationship management.',
      bullets: [
        'Secure SQLite/PostgreSQL localized instances for high safety',
        'Custom lead capture workflows and visual deal tracking stages',
        'Automated WhatsApp follow-up schedules and email loops',
        'Bespoke customer profile history panels',
        'Direct desktop API integrations with specialized hardware'
      ]
    }
  ];

  // FAQs for POS/ERP Overview (for FAQ Schema)
  const faqs = [
    {
      question: 'Can Chishty Smart Solutions products work entirely offline?',
      answer: 'Yes. All of our point-of-sale (POS) and inventory systems are engineered with a hybrid architecture. They function flawlessly offline using a localized database (SQLite or PostgreSQL) and sync to the cloud database once an internet connection is established.'
    },
    {
      question: 'Are your POS systems compatible with existing hardware peripherals?',
      answer: 'Our software suite is built for universal compatibility. It integrates directly with industry-standard thermal printers, USB and wireless barcode scanners, cash drawers, customer displays, electronic weighing scales, and biometric attendance devices.'
    },
    {
      question: 'Do you offer custom customization for specific business workflows?',
      answer: 'Absolutely. Unlike generic off-the-shelf software, Chishty Smart Solutions is built on an extensible code structure. Our engineering team can tailor database schemas, reporting dashboards, sales tax modules, and specialized hardware connections to match your internal procedures.'
    }
  ];

  // JSON-LD Schema objects
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
        'name': 'Products',
        'item': 'https://chishtysmartsolutions.com/products'
      }
    ]
  };

  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Chishty Smart Solutions Software Suite',
    'numberOfItems': products.length,
    'itemListElement': products.map((prod, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'item': {
        '@type': 'Product',
        'name': prod.title,
        'description': prod.desc,
        'url': `https://chishtysmartsolutions.com/products/${prod.id}`
      }
    }))
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <div id="products-page-root" className="bg-white">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
            Our Software Roster
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-none text-white">
            Our Specialized POS & ERP Systems
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Engineered to remove friction from daily billing, logistics, and staff operations. Built to out-perform generic SaaS products through custom optimization.
          </p>
          <div className="flex justify-center pt-2">
            <a 
              id="products-hero-cta"
              href="https://wa.me/923006392025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/20 transition-all flex items-center space-x-2"
              aria-label="Discuss POS software compatibility on WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Discuss Your Hardware compatible POS</span>
            </a>
          </div>
        </div>
      </section>
 
      {/* Main Roster Listing */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {products.map((prod, idx) => (
          <div 
            key={prod.id} 
            id={prod.id}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gray-100 pb-20 last:border-0 last:pb-0 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Visual Panel Mockup */}
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`} id={`prod-col-visual-${prod.id}`}>
              <div className="bg-gradient-to-tr from-gray-50 to-gray-100/50 border border-gray-200/60 rounded-3xl p-8 relative shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute top-4 right-4 bg-white border border-gray-100 px-3 py-1 rounded-full text-[10px] font-bold text-gray-400">
                  CSS ENGINE v4
                </div>
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100/80 mb-6 flex items-center space-x-4">
                  <div className="p-3 bg-[#FF6B00]/10 rounded-xl shrink-0">
                    {prod.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">{prod.title}</h3>
                    <span className="text-[10px] text-emerald-500 font-bold flex items-center gap-0.5">
                      <RefreshCw className="w-3 h-3 animate-spin" /> Real-time active database
                    </span>
                  </div>
                </div>
                
                {/* Visual metric list */}
                <div className="space-y-3" aria-hidden="true">
                  <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                  <div className="h-2 bg-gray-100 rounded-full w-5/6"></div>
                </div>
              </div>
            </div>

            {/* Content copy */}
            <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-1' : ''}`} id={`prod-col-content-${prod.id}`}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                    {prod.badge}
                  </span>
                  <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                  <span className="text-xs text-gray-400 font-medium font-mono">CODE: {prod.id.toUpperCase()}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  {prod.title}
                </h2>
                <p className="text-base text-gray-500 italic font-medium">
                  &ldquo;{prod.tagline}&rdquo;
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {prod.desc}
                </p>
                
                {/* Main Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {prod.bullets.map((bullet, bidx) => (
                    <div key={bidx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-xs sm:text-sm font-medium leading-tight">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link
                    id={`prod-btn-details-${prod.id}`}
                    href={`/products/${prod.id}`}
                    className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-black/5 text-center transition-colors"
                  >
                    Learn More
                  </Link>
                  <Link
                    id={`prod-btn-demo-${prod.id}`}
                    href={`/contact?product=${prod.id}`}
                    className="bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white font-bold text-sm px-6 py-3.5 rounded-xl text-center transition-colors"
                  >
                    Request Demo
                  </Link>
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* Trust Callout */}
      <section className="bg-gray-50 py-20 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Need a hardware integration?
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Our systems seamlessly connect with industry-standard barcode printers, receipt thermal paper devices, cash registers, electronic scales, biometric registers, and magnetic card swipes.
          </p>
          <Link
            id="products-hardware-cta"
            href="/contact"
            className="text-sm font-bold text-[#FF6B00] hover:text-[#FF8C39] inline-flex items-center"
          >
            <span>Ask about Hardware compatibility matrix</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Common Inquiries
            </span>
            <h2 className="text-3xl font-black tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Learn how our POS and enterprise systems scale, synchronize databases, and integrate with hardware devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100/80 space-y-3">
                <div className="flex items-start space-x-3">
                  <HelpCircle className="w-5 h-5 text-[#FF6B00] shrink-0 mt-0.5" />
                  <h3 className="text-gray-900 font-bold text-base">{faq.question}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
