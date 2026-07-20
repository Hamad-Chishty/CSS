'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle2, AlertCircle, Sparkles, ShieldCheck, HelpCircle, 
  ArrowRight, Phone, MessageSquare, Printer, Check, ChevronDown,
  Monitor, Layers, RefreshCw, Cpu, Database, Eye, FileText
} from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProductDetailData {
  id: string;
  title: string;
  headline: string;
  subheading: string;
  problems: string[];
  solutionOverview: string;
  solutionBullets: string[];
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  modules: {
    title: string;
    description: string;
    code: string;
  }[];
  industries: {
    name: string;
    icon: React.ReactNode;
    desc: string;
  }[];
  benefits: {
    metric: string;
    label: string;
    description: string;
  }[];
  faqs: FAQItem[];
  // Interactive mockup visual data
  mockupType: 'restaurant' | 'retail' | 'pharmacy' | 'erp' | 'hr' | 'crm';
}

interface ProductDetailLayoutProps {
  data: ProductDetailData;
}

export default function ProductDetailLayout({ data }: ProductDetailLayoutProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // JSON-LD Breadcrumb & FAQ schemas
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
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': data.title,
        'item': `https://chishtysmartsolutions.com/products/${data.id}`
      }
    ]
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': data.title,
    'description': data.subheading,
    'brand': {
      '@type': 'Brand',
      'name': 'Chishty Smart Solutions'
    },
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'PKR',
      'offerCount': '1',
      'price': 'Contact us for a tailored quotation'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': data.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  // Render the responsive interactive-looking mockup dashboard based on type
  const renderDashboardMockup = () => {
    switch (data.mockupType) {
      case 'restaurant':
        return (
          <div className="bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl text-xs text-gray-300 font-mono">
            {/* Header bar */}
            <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-[10px] text-gray-500 ml-2">CHISHTY_KDS_v4.5</span>
              </div>
              <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded text-[10px] font-bold">
                LIVE TERMINAL
              </span>
            </div>
            
            {/* Split layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px]">
              {/* Left Column: Visual Table Map */}
              <div className="md:col-span-7 p-4 border-r border-white/5 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-white font-bold">ACTIVE FLOOR MAP</span>
                  <span className="text-gray-500 text-[10px]">MAIN AREA (12 TABLES)</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'T-01', status: 'OCCUPIED', items: 4, bill: 'Rs. 4,820' },
                    { id: 'T-02', status: 'PREPARING', items: 2, bill: 'Rs. 1,650' },
                    { id: 'T-03', status: 'FREE', items: 0, bill: '-' },
                    { id: 'T-04', status: 'BILLING', items: 5, bill: 'Rs. 8,240' },
                    { id: 'T-05', status: 'OCCUPIED', items: 3, bill: 'Rs. 3,120' },
                    { id: 'T-06', status: 'FREE', items: 0, bill: '-' }
                  ].map((table) => (
                    <div 
                      key={table.id}
                      className={`p-3 rounded-xl border flex flex-col justify-between transition-colors ${
                        table.status === 'OCCUPIED' ? 'bg-orange-500/10 border-orange-500/30 text-orange-400' :
                        table.status === 'PREPARING' ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' :
                        table.status === 'BILLING' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' :
                        'bg-white/5 border-white/5 text-gray-500'
                      }`}
                    >
                      <span className="font-bold text-sm text-white">{table.id}</span>
                      <span className="text-[9px] mt-1 font-bold">{table.status}</span>
                      {table.items > 0 && (
                        <span className="text-[8px] text-gray-400 mt-2">{table.items} items • {table.bill}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Active Kitchen Queue Feed */}
              <div className="md:col-span-5 p-4 bg-[#141414] space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-white font-bold">KITCHEN DEPT FEED</span>
                  <span className="text-emerald-500 animate-pulse text-[9px] font-bold">● ONLINE</span>
                </div>
                <div className="space-y-3">
                  {[
                    { id: 'ORD-942', table: 'T-01', age: '4 mins ago', items: ['2x Grilled Chicken Alfredo', '1x Caesar Salad'] },
                    { id: 'ORD-943', table: 'T-05', age: '1 min ago', items: ['1x Signature Beef Burger', '1x Loaded Curly Fries'] }
                  ].map((order) => (
                    <div key={order.id} className="bg-white/5 p-2.5 rounded-lg border border-white/5 space-y-2">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-white font-bold">{order.id} ({order.table})</span>
                        <span className="text-gray-500 font-sans">{order.age}</span>
                      </div>
                      <div className="text-[11px] text-gray-300 space-y-1">
                        {order.items.map((item, i) => (
                          <div key={i} className="flex justify-between">
                            <span>{item}</span>
                            <span className="text-[#FF6B00] font-bold">✓</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'retail':
        return (
          <div className="bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl text-xs text-gray-300 font-mono">
            {/* Header */}
            <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-[10px] text-gray-500 ml-2">CHISHTY_CASHIER_TERMINAL</span>
              </div>
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded text-[10px] font-bold">
                BARCODE SYS ACTIVE
              </span>
            </div>
            
            {/* Split */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[320px]">
              {/* Left Column: Register Interface */}
              <div className="md:col-span-8 p-4 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-white font-bold">ACTIVE BASKET</span>
                  <span className="text-gray-400 text-[10px]">SKU: SCAN_TRIGGERED_OK</span>
                </div>
                
                {/* Active checkout lines */}
                <div className="space-y-2 max-h-[180px] overflow-y-auto">
                  {[
                    { sku: '590123412', name: 'Premium Jasmine Rice 5kg', price: 1850, qty: 2, total: 3700 },
                    { sku: '400580023', name: 'Imported Cooking Oil 3L', price: 1620, qty: 1, total: 1620 },
                    { sku: '871256156', name: 'Organic Handwash Refill 500ml', price: 480, qty: 3, total: 1440 }
                  ].map((line, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/5 p-2 rounded border border-white/5">
                      <div>
                        <p className="text-white font-bold">{line.name}</p>
                        <p className="text-[10px] text-gray-500">UPC: {line.sku} • Rs. {line.price} x {line.qty}</p>
                      </div>
                      <span className="text-[#FF6B00] font-bold font-sans">Rs. {line.total}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Checkout Total Metrics */}
              <div className="md:col-span-4 p-4 bg-[#141414] flex flex-col justify-between">
                <div>
                  <span className="text-gray-500 text-[10px] uppercase font-bold tracking-wider">TOTAL BILLING</span>
                  <div className="text-2xl text-white font-bold font-sans mt-2">Rs. 6,760</div>
                  
                  <div className="mt-4 space-y-1 text-[11px] text-gray-400 border-t border-white/5 pt-3">
                    <div className="flex justify-between">
                      <span>Total Items:</span>
                      <span className="text-white">6 units</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discount (5%):</span>
                      <span className="text-emerald-500">-Rs. 338</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sales Tax:</span>
                      <span className="text-white">Rs. 512</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="bg-[#FF6B00] text-center text-white py-2.5 rounded-lg font-bold hover:bg-[#FF8C39] transition-colors cursor-pointer text-xs uppercase tracking-wider font-sans">
                    F10 - CASH PAY (Rs. 6,934)
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'pharmacy':
        return (
          <div className="bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl text-xs text-gray-300 font-mono">
            {/* Header */}
            <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-[10px] text-gray-500 ml-2">CHISHTY_MED_LEDGER</span>
              </div>
              <span className="bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-0.5 rounded text-[10px] font-bold">
                EXPIRY MONITORS ON
              </span>
            </div>

            {/* Content list */}
            <div className="p-4 space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-white font-bold">COMPLIANCE DRUG RECORDING & BATCH MATRIX</span>
                <span className="text-gray-500 text-[10px]">INDEX: 4,821 COMPLIANT SKU ITEMS</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400 text-[10px]">
                      <th className="py-2">DRUG NAME</th>
                      <th className="py-2">BATCH #</th>
                      <th className="py-2">EXP DATE</th>
                      <th className="py-2">GENERIC MATCH</th>
                      <th className="py-2 text-right">STATUS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-[11px]">
                    {[
                      { name: 'Augmentin 625mg', batch: 'AUG-2026-94', exp: '10/2026', generic: 'Co-Amoxiclav', status: 'CRITICAL', color: 'text-red-500 bg-red-500/10' },
                      { name: 'Panadol CF 500mg', batch: 'PAN-2027-11', exp: '04/2027', generic: 'Paracetamol Compound', status: 'COMPLIANT', color: 'text-emerald-500 bg-emerald-500/10' },
                      { name: 'Lipitor 20mg', batch: 'LIP-2026-05', exp: '11/2026', generic: 'Atorvastatin', status: 'EXPIRING_90D', color: 'text-yellow-500 bg-yellow-500/10' },
                      { name: 'Surbex-Z High-Potency', batch: 'SUR-2028-02', exp: '08/2028', generic: 'Multivitamin Formula', status: 'COMPLIANT', color: 'text-emerald-500 bg-emerald-500/10' }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-white/5 transition-colors">
                        <td className="py-2.5 text-white font-bold">{row.name}</td>
                        <td className="py-2.5 text-gray-400">{row.batch}</td>
                        <td className="py-2.5 text-gray-300 font-sans">{row.exp}</td>
                        <td className="py-2.5 text-gray-400 italic">{row.generic}</td>
                        <td className="py-2.5 text-right">
                          <span className={`px-2 py-0.5 rounded font-bold text-[9px] ${row.color}`}>
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      case 'erp':
        return (
          <div className="bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl text-xs text-gray-300 font-mono">
            {/* Header */}
            <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-[10px] text-gray-500 ml-2">CHISHTY_ERP_LEDGER</span>
              </div>
              <span className="bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/30 px-2 py-0.5 rounded text-[10px] font-bold">
                DOUBLE_ENTRY_AUDIT_ON
              </span>
            </div>

            {/* Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 min-h-[300px]">
              {/* Financial Ledger Balance */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-white font-bold">TRIAL BALANCE SHEET</span>
                  <span className="text-gray-500 text-[10px]">Q2 FISCAL LEDGER</span>
                </div>
                <div className="space-y-2">
                  {[
                    { head: 'Sales Revenue Account', debit: '-', credit: 'Rs. 42,850,000' },
                    { head: 'Inventory Raw Materials', debit: 'Rs. 18,430,000', credit: '-' },
                    { head: 'Accounts Receivable', debit: 'Rs. 8,120,000', credit: '-' },
                    { head: 'Vendor Outstanding Payables', debit: '-', credit: 'Rs. 4,150,000' },
                    { head: 'Cash & Bank Liquid Capital', debit: 'Rs. 20,450,000', credit: '-' }
                  ].map((row, idx) => (
                    <div key={idx} className="flex justify-between text-[11px] hover:bg-white/5 p-1 rounded transition-colors">
                      <span className="text-gray-300 font-sans">{row.head}</span>
                      <div className="flex space-x-4">
                        <span className="text-emerald-500 font-sans">{row.debit}</span>
                        <span className="text-orange-400 font-sans">{row.credit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Manufacturing / Supply Chain Status */}
              <div className="bg-[#141414] p-4 rounded-xl border border-white/5 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-white font-bold">MANUFACTURING WAREHOUSE ROUTER</span>
                  <span className="text-emerald-500 text-[10px]">ACTIVE WORKFLOWS</span>
                </div>
                <div className="space-y-3">
                  {[
                    { batch: 'MFG-B492', product: 'Stainless Shell Case', progress: '85%', status: 'ASSEMBLING' },
                    { batch: 'MFG-B493', product: 'Copper Coil Insulators', progress: '100%', status: 'COMPLETED' },
                    { batch: 'MFG-B494', product: 'Packaging Cartons Unit', progress: '30%', status: 'QUEUE' }
                  ].map((job, idx) => (
                    <div key={idx} className="bg-white/5 p-2.5 rounded border border-white/5 space-y-1">
                      <div className="flex justify-between text-[10px]">
                        <span className="text-white font-bold">{job.batch} — {job.product}</span>
                        <span className="text-orange-400">{job.status}</span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden mt-1">
                        <div className="bg-[#FF6B00] h-full" style={{ width: job.progress }}></div>
                      </div>
                      <p className="text-[8px] text-gray-500 mt-1">Completion: {job.progress} • Target deadline: 24h</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 'hr':
        return (
          <div className="bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl text-xs text-gray-300 font-mono">
            {/* Header */}
            <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-[10px] text-gray-500 ml-2">CHISHTY_HR_SYSTEM</span>
              </div>
              <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded text-[10px] font-bold">
                BIOMETRICS CONNECTED
              </span>
            </div>

            {/* Split */}
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[300px]">
              {/* Left Side: Biometric Clock-ins */}
              <div className="md:col-span-7 p-4 border-r border-white/5 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-white font-bold">REAL-TIME TIMECLOCK FEED</span>
                  <span className="text-emerald-500 animate-pulse text-[9px] font-bold">● ACTIVE LINK</span>
                </div>
                <div className="space-y-2 max-h-[220px] overflow-y-auto">
                  {[
                    { id: 'CSS-1024', name: 'Ahmad Raza', dept: 'Production', time: '08:54:12 AM', status: 'ON_TIME' },
                    { id: 'CSS-1025', name: 'Sana Fatima', dept: 'HR & Accounts', time: '09:14:50 AM', status: 'LATE_14M' },
                    { id: 'CSS-1026', name: 'Zainab Jamil', dept: 'Sales', time: '08:45:02 AM', status: 'ON_TIME' },
                    { id: 'CSS-1027', name: 'Kamran Shah', dept: 'Logistics', time: '09:02:11 AM', status: 'ON_TIME' }
                  ].map((log, idx) => (
                    <div key={idx} className="bg-white/5 p-2 rounded border border-white/5 flex justify-between items-center">
                      <div>
                        <p className="text-white font-bold text-[11px]">{log.name}</p>
                        <p className="text-[9px] text-gray-500">ID: {log.id} • Dept: {log.dept}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-sans text-[10px] font-bold">{log.time}</p>
                        <span className={`text-[8px] font-bold px-1 rounded ${log.status === 'ON_TIME' ? 'text-emerald-500 bg-emerald-500/10' : 'text-red-500 bg-red-500/10'}`}>
                          {log.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Quick Payroll Formulas */}
              <div className="md:col-span-5 p-4 bg-[#141414] space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-white/5">
                  <span className="text-white font-bold">MONTHLY PAYROLL ENGINE</span>
                  <span className="text-gray-500 text-[9px]">JULY GENERATOR</span>
                </div>
                <div className="space-y-3 text-[11px]">
                  <div className="bg-white/5 p-3 rounded-lg border border-white/5 space-y-2">
                    <span className="text-gray-400">ACTIVE MATRIX FORMULA</span>
                    <p className="text-white font-bold text-[11px] leading-tight">NetSalary = Base + Overtime_Hr * Rate - Absence_Days * Deduct_Rate</p>
                  </div>
                  <div className="space-y-1.5 text-gray-400">
                    <div className="flex justify-between">
                      <span>Total Staff Calculated:</span>
                      <span className="text-white">48 Employees</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Basic Salary:</span>
                      <span className="text-white">Rs. 3,840,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Biometric Absences:</span>
                      <span className="text-red-500">Rs. -48,500</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'crm':
        return (
          <div className="bg-[#1E1E1E] rounded-2xl border border-white/10 overflow-hidden shadow-2xl text-xs text-gray-300 font-mono">
            {/* Header */}
            <div className="bg-[#121212] px-4 py-3 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="text-[10px] text-gray-500 ml-2">CHISHTY_CRM_PIPELINE</span>
              </div>
              <span className="bg-orange-500/20 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded text-[10px] font-bold">
                WHATSAPP_LOOP_ACTIVE
              </span>
            </div>

            {/* Content: Kanban Board style */}
            <div className="p-4 space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-white/5">
                <span className="text-white font-bold">B2B CONVERSION PIPELINE</span>
                <span className="text-gray-500 text-[10px]">Active Deal Value: Rs. 14.5M</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 min-h-[220px]">
                {[
                  {
                    title: 'NEW LEADS',
                    count: '3',
                    bg: 'border-white/5 bg-white/5',
                    cards: [
                      { title: 'Apex Industries POS Upgrade', client: 'Malik Umar', value: 'Rs. 450k', age: '2h ago' },
                      { title: 'Metro Cafe QR Setup', client: 'Zara Khan', value: 'Rs. 180k', age: '5h ago' }
                    ]
                  },
                  {
                    title: 'DEMO SCHEDULED',
                    count: '2',
                    bg: 'border-orange-500/10 bg-orange-500/5',
                    cards: [
                      { title: 'SurgiCare Medical ERP', client: 'Dr. Faisal', value: 'Rs. 1.2M', age: 'Yesterday' }
                    ]
                  },
                  {
                    title: 'NEGOTIATIONS',
                    count: '4',
                    bg: 'border-emerald-500/10 bg-emerald-500/5',
                    cards: [
                      { title: 'Nishat Warehouses ERP', client: 'A. Latif', value: 'Rs. 2.4M', age: '3 days ago' }
                    ]
                  }
                ].map((col, idx) => (
                  <div key={idx} className={`p-3 rounded-xl border ${col.bg} space-y-3 flex flex-col`}>
                    <div className="flex justify-between items-center text-[10px] font-bold border-b border-white/5 pb-1">
                      <span className="text-white">{col.title}</span>
                      <span className="bg-white/10 px-1.5 py-0.5 rounded text-[9px] text-gray-400">{col.count}</span>
                    </div>
                    <div className="space-y-2 flex-grow">
                      {col.cards.map((card, cidx) => (
                        <div key={cidx} className="bg-[#121212] p-2.5 rounded-lg border border-white/5 space-y-1.5">
                          <p className="text-white font-bold text-[11px] leading-snug">{card.title}</p>
                          <p className="text-[9px] text-gray-400">Lead: {card.client} • {card.value}</p>
                          <div className="flex justify-between items-center text-[8px] text-gray-500 pt-1 border-t border-white/5 mt-1">
                            <span className="text-[#FF6B00]">⏱ {card.age}</span>
                            <span>WhatsApp Sent ✓</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white" id={`product-page-${data.id}`}>
      
      {/* Dynamic Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <span className="text-xs font-semibold text-[#FF6B00] uppercase tracking-wider bg-[#FF6B00]/10 px-3.5 py-1.5 rounded-full">
                {data.title} Solutions
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                {data.headline}
              </h1>
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {data.subheading}
              </p>
              
              {/* Hero CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  id={`hero-book-demo-${data.id}`}
                  href={`/contact?product=${data.id}&demo=true`}
                  className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold text-center px-8 py-4 rounded-xl shadow-xl shadow-[#FF6B00]/20 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Book Free Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  id={`hero-whatsapp-${data.id}`}
                  href="https://wa.me/923006392025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold text-center px-8 py-4 rounded-xl transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right software mockup */}
            <div className="lg:col-span-6" id={`hero-mockup-wrapper-${data.id}`}>
              <div className="relative">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FF6B00] to-[#FF8C39] opacity-30 blur-lg" aria-hidden="true"></div>
                <div className="relative">
                  {renderDashboardMockup()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. Business Problems & Solutions */}
      <section className="py-20 lg:py-24 bg-gray-50 border-b border-gray-100" id="problems-solutions-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left side: Business Problems */}
            <div className="space-y-6">
              <span className="text-red-500 font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> Real Business Risks
              </span>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                Critical Inefficiencies We Solve
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Generic, standard point-of-sale systems ignore localized business models. Failing to monitor micro-operations leads to financial leaks, stock imbalances, and high employee oversight costs.
              </p>
              
              <div className="space-y-4 pt-2">
                {data.problems.map((problem, idx) => (
                  <div key={idx} className="flex items-start bg-red-50/50 p-4 rounded-2xl border border-red-100/50 space-y-1">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-3 shrink-0"></span>
                    <span className="text-gray-700 text-xs sm:text-sm font-medium leading-relaxed">
                      {problem}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side: Solutions Overview */}
            <div className="space-y-6">
              <span className="text-[#FF6B00] font-bold uppercase tracking-wider text-xs flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Chishty Resolution Matrix
              </span>
              <h2 className="text-3xl font-black text-gray-900 tracking-tight">
                How We Solve These Problems
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {data.solutionOverview}
              </p>
              
              <div className="space-y-4 pt-2">
                {data.solutionBullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start bg-emerald-50/50 p-4 rounded-2xl border border-emerald-100/50 space-y-1">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 mr-2.5" />
                    <span className="text-gray-700 text-xs sm:text-sm font-semibold leading-relaxed">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Features Section */}
      <section className="py-24 bg-white border-b border-gray-100" id="features-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Full Suite Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Built-In Advanced Features
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Every Chishty system includes state-of-the-art tooling tailored for absolute reliability. No missing modules, no forced extensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((feat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
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

      {/* 5. Modules Grid */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="modules-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Software Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Core Technical Modules
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Engineered with an isolated micro-module structure. Restrict access controls, query tables instantly, and generate automatic reports with full confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.modules.map((mod, idx) => (
              <div key={idx} className="bg-[#1C1C1C] text-white p-6 rounded-3xl relative overflow-hidden group border border-white/5 shadow-lg">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF6B00]/5 rounded-full blur-xl group-hover:bg-[#FF6B00]/10 transition-colors" aria-hidden="true"></div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-gray-500 font-mono tracking-widest">{mod.code}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true"></span>
                  </div>
                  <h3 className="text-white font-extrabold text-base sm:text-lg">{mod.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{mod.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Dashboard Placeholder Block (Stretched Mockup Container) */}
      <section className="py-24 bg-white border-b border-gray-100" id="dashboards-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Visual Screen Placeholder */}
            <div className="lg:col-span-7 order-2 lg:order-1" id="mockup-placeholder-panel">
              <div className="bg-[#1C1C1C] rounded-3xl border border-white/10 p-4 md:p-6 shadow-2xl relative">
                <div className="absolute top-4 left-4 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-[9px] font-bold text-[#FF6B00] tracking-wider uppercase">
                  Production Terminal Active
                </div>
                <div className="mt-8 border border-white/5 rounded-2xl overflow-hidden bg-[#121212]/80">
                  {renderDashboardMockup()}
                </div>
              </div>
            </div>

            {/* Left Content info */}
            <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
              <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
                Unified Admin Portal
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900 leading-none">
                Interactive Dashboard Control
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                The core manager terminal indexes live operational variables with sub-second retrieval. No complex SQL queries needed. The UI is designed for maximum speed under heavy load, ensuring your cashiers, store managers, or medical team remain productive.
              </p>
              <div className="space-y-3.5 pt-2">
                {[
                  'Clean visual interfaces showing tables, shelves, or records',
                  'Frictionless export of data sheets to Excel or physical thermal papers',
                  'Chronological user audit logs with strict permission security'
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2.5">
                    <Check className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-gray-700 text-xs sm:text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Industries Served */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="industries-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Who We Empower
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Tailored for These Sectors
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We customize the base database schema to match your industry-specific guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.industries.map((ind, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <div className="p-3 bg-[#FF6B00]/10 rounded-2xl w-fit text-[#FF6B00]">
                    {ind.icon}
                  </div>
                  <h3 className="text-gray-900 font-bold text-lg">{ind.name}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Benefits */}
      <section className="py-24 bg-white border-b border-gray-100" id="benefits-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Business Transformation
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Tangible B2B Outcomes
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Software is only as good as the return on investment it yields. Our specialized packages translate directly to faster, more profitable operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.benefits.map((ben, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center space-y-4">
                <div className="text-4xl sm:text-5xl font-black text-[#FF6B00] font-sans tracking-tight">
                  {ben.metric}
                </div>
                <div className="font-extrabold text-gray-900 text-base sm:text-lg">
                  {ben.label}
                </div>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                  {ben.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Hardware Compatibility */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="hardware-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Universal Peripheral Sync
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-gray-900">
              Hardware Compatibility Matrix
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Plug and play with industry-standard hardware accessories out of the box. No custom driver installations needed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { label: 'Thermal Printer', code: 'PRT-80', icon: <Printer className="w-6 h-6" /> },
              { label: 'Barcode Scanner', code: 'SCN-1D/2D', icon: <Cpu className="w-6 h-6" /> },
              { label: 'Cash Drawer', code: 'DRW-RJ11', icon: <Layers className="w-6 h-6" /> },
              { label: 'Touch POS', code: 'TERM-LCD', icon: <Monitor className="w-6 h-6" /> },
              { label: 'Kitchen Printer', code: 'PRT-KDS', icon: <Database className="w-6 h-6" /> },
              { label: 'QR Scanner', code: 'QR-CAM', icon: <RefreshCw className="w-6 h-6" /> }
            ].map((hw, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-gray-100 text-center space-y-3 flex flex-col items-center justify-center">
                <div className="p-3 bg-[#FF6B00]/10 rounded-xl text-[#FF6B00] mb-1">
                  {hw.icon}
                </div>
                <div className="font-extrabold text-gray-900 text-xs sm:text-sm">
                  {hw.label}
                </div>
                <div className="text-[10px] text-gray-400 font-mono">
                  {hw.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Cloud vs Offline Architecture */}
      <section className="py-24 bg-white border-b border-gray-100" id="cloud-offline-sec">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
                Hybrid Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-none">
                Offline Resilience, Cloud Sync
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Most modern SaaS systems stop functioning immediately when the internet drops. Chishty Smart Solutions features a multi-tiered database mapping system that safeguards transactions during connectivity drops.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <h3 className="text-gray-900 font-extrabold text-base flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> Local Offline Mode
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Processes bills, registers scans, maps table states, and stores database logs in a high-speed SQLite or PostgreSQL sandbox on-premise.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-gray-900 font-extrabold text-base flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Active Cloud Sync
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Once connection is verified, our system pushes transactions to the cloud in sequential packets, preventing conflicts.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Graphic/List box */}
            <div className="lg:col-span-6 bg-gray-50 p-8 rounded-3xl border border-gray-100 space-y-4">
              <h4 className="text-gray-900 font-bold text-lg">Why B2B Owners Choose Hybrid</h4>
              <div className="space-y-3 text-xs sm:text-sm">
                {[
                  { title: 'Zero business interruption during internet downtime', desc: 'Customers checkout instantly even if the ISP is down.' },
                  { title: 'Sub-second local query rendering', desc: 'No loading spinners in the checkout queue.' },
                  { title: 'Centralized live dashboards for owners', desc: 'Monitor daily sales and branch inventories remotely.' }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="text-gray-900 font-extrabold flex items-center gap-2">
                      <span className="text-[#FF6B00]">✓</span> {item.title}
                    </div>
                    <p className="text-gray-500 text-[11px] sm:text-xs pl-4">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. Security */}
      <section className="py-24 bg-gray-50 border-b border-gray-100" id="security-sec">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="p-3 bg-emerald-500/10 rounded-2xl w-fit text-emerald-500 mx-auto">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest block">
            Military-Grade Safeguards
          </span>
          <h2 className="text-3xl font-black text-gray-900 tracking-tight">
            Security Locked down by Design
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            All database systems feature end-to-end encryption. Role-Based Access Controls (RBAC) restrict cashiers from issuing refunds, deleting historic orders, or altering stock figures without manager-level authorization. Weekly automated off-site backups ensure your core records are never lost.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-bold text-gray-500 font-mono">
            <span>● SHA-256 ENCRYPTED CODES</span>
            <span>● SECURE SQLite / POSTGRES STORAGE</span>
            <span>● MANAGER-ONLY AUTHS</span>
            <span>● ENCRYPTED BACKUP LOGS</span>
          </div>
        </div>
      </section>

      {/* 12. FAQ Section */}
      <section className="py-24 bg-white border-b border-gray-100" id="faq-sec">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-[#FF6B00] text-xs font-bold uppercase tracking-wider bg-[#FF6B00]/10 px-3 py-1 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-3xl font-black tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto">
              Read transparent inquiries regarding software setup, hardware compatibility, and deployment guidelines.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index} 
                  className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-200"
                >
                  <button
                    id={`faq-btn-${index}`}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 bg-gray-50/50 hover:bg-gray-50 flex justify-between items-center transition-colors focus:outline-none"
                  >
                    <span className="text-gray-900 font-bold text-sm sm:text-base pr-4">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-6 py-5 bg-white border-t border-gray-50">
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. Strong CTA */}
      <section className="bg-gradient-to-b from-[#1C1C1C] to-[#121212] text-white py-20 relative" id="cta-sec">
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#FF6B00]/15 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-none text-white">
            Schedule a Live On-Site Demo
          </h2>
          <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our engineering team will install the demo system directly on your hardware and configure raw inventory indexes. Risk-free evaluation.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              id="cta-book-demo"
              href={`/contact?product=${data.id}&demo=true`}
              className="bg-[#FF6B00] hover:bg-[#FF8C39] text-white font-bold px-6 py-4 rounded-xl text-center text-sm transition-colors"
            >
              Book Free Demo
            </Link>
            <a
              id="cta-whatsapp"
              href="https://wa.me/923006392025"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-4 rounded-xl text-center text-sm transition-colors flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>WhatsApp Now</span>
            </a>
            <a
              id="cta-call"
              href="tel:+923006392025"
              className="bg-transparent hover:bg-white/5 border border-white/20 text-white font-bold px-6 py-4 rounded-xl text-center text-sm transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +92 300 6392025</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
