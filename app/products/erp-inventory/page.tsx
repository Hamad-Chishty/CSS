import React from 'react';
import { Metadata } from 'next';
import ProductDetailLayout, { ProductDetailData } from '@/components/ProductDetailLayout';
import { 
  Landmark, Layers, Database, HelpCircle, Shield, FileText, 
  Settings, TrendingUp, BarChart4, ClipboardList, Briefcase, Truck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Enterprise ERP & Financial Ledger Software | Chishty Smart Solutions',
  description: 'Unify your business operations with a secure double-entry financial ledger, multi-warehouse cargo tracking, manufacturing Bill of Materials (BOM), and compliant tax configurations.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/products/erp-inventory',
  },
  openGraph: {
    title: 'Enterprise ERP & Financial Ledger Software | Chishty Smart Solutions',
    description: 'Unify your business operations with a secure double-entry financial ledger, multi-warehouse cargo tracking, manufacturing Bill of Materials (BOM), and compliant tax configurations.',
    url: 'https://chishtysmartsolutions.com/products/erp-inventory',
    siteName: 'Chishty Smart Solutions',
    images: [
      {
        url: 'https://chishtysmartsolutions.com/images/erp-inventory-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Enterprise ERP & Financial Ledger',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise ERP & Financial Ledger Software | Chishty Smart Solutions',
    description: 'Bespoke corporate ERP system featuring double-entry bookkeeping, manufacturing flows, and warehouse logs.',
    images: ['https://chishtysmartsolutions.com/images/erp-inventory-og.jpg'],
  },
};

const erpData: ProductDetailData = {
  id: 'erp-inventory',
  title: 'ERP & Inventory',
  headline: 'Enterprise ERP & Financial Ledger',
  subheading: 'Consolidate double-entry accounting ledgers, track raw materials to finished cargo, schedule multi-warehouse shipments, and output audit sheets in one secure hub.',
  problems: [
    'Fragmented spreadsheets leading to unbalanced trial margins and critical accounting errors.',
    'Untracked manufacturing raw materials resulting in unmeasured production waste and cost leaks.',
    'Lack of centralized cargo tracking across multiple warehouses leading to shipping bottlenecks.',
    'Inability to audit user activities chronologically, creating high vulnerability to internal fraud.'
  ],
  solutionOverview: 'Our ERP Suite centralizes your entire company structure. By combining secure double-entry general ledgers, manufacturing bills-of-materials, transit tracking sheets, and rigorous user audit logs, we establish maximum corporate clarity.',
  solutionBullets: [
    'Unify all financial ledger accounts into automatic trial balances with 100% accuracy.',
    'Track raw materials as they transform into finished items with strict Bill of Materials sheets.',
    'Manage cargo transfers between multiple warehouses with digital shipment verification.',
    'Review detailed, chronological system logs of every user interaction across departments.'
  ],
  features: [
    {
      title: 'Double-Entry General Ledger',
      description: 'Maintains strict financial balance. Every sales transaction, purchase, or expense logs corresponding debits and credits automatically.',
      icon: <Landmark className="w-6 h-6" />
    },
    {
      title: 'Manufacturing & Bill of Materials',
      description: 'Define raw input materials (BOM) for finished items. Tracks exact wastage, assembly stages, and calculates precise unit overhead costs.',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Multi-Warehouse Cargo Transit',
      description: 'Log and track inventory movements across multiple facilities. Features digital dispatch logs, receiver sign-offs, and in-transit records.',
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: 'Automatic Trial Balance Sheets',
      description: 'Generate Profit & Loss matrices, trial balance charts, cash flow statements, and balance sheets instantly for tax filing.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Compliant Tax Configurations',
      description: 'Configure multi-layer sales tax codes, GST/VAT margins, withholding values, and custom import customs rates effortlessly.',
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: 'Chronological User Audit Logs',
      description: 'Strict security logs track every database addition, edit, or deletion with precise employee IDs and server timestamps.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Purchase & Sales Workflow',
      description: 'Streamline procurement with supplier quotes, purchase requisitions, receiver notes, proforma invoices, and payment tracking.',
      icon: <ClipboardList className="w-6 h-6" />
    },
    {
      title: 'Enterprise Asset Register',
      description: 'Track capital assets, calculate automated monthly depreciation rates, log maintenance costs, and monitor warehouse assets.',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: 'Interactive Analytics Panels',
      description: 'Visualize company performance with real-time graphs displaying margins, department expenses, and cash flow forecasts.',
      icon: <BarChart4 className="w-6 h-6" />
    }
  ],
  modules: [
    {
      title: 'General Accounting Engine',
      description: 'Processes journal entries, ledger allocations, trial balances, and automated tax worksheets.',
      code: 'MOD-ERP-FINANCE'
    },
    {
      title: 'Manufacturing BOM Planner',
      description: 'Manages recipes, material conversion formulas, batch costs, and factory assembly queues.',
      code: 'MOD-ERP-MFG'
    },
    {
      title: 'Warehouse & Logistics Router',
      description: 'Tracks multiple physical structures, bin coordinates, shelf allocations, and shipping papers.',
      code: 'MOD-ERP-LOGISTICS'
    },
    {
      title: 'Procurement Pipeline Manager',
      description: 'Processes supplier quotes, PO logs, receiving checklists (GRN), and purchase bills.',
      code: 'MOD-ERP-PURCHASE'
    },
    {
      title: 'Sales & Invoicing Terminal',
      description: 'Manages bulk B2B client order books, shipping logs, invoices, and credit limit approvals.',
      code: 'MOD-ERP-SALES'
    },
    {
      title: 'Corporate Security Guard',
      description: 'Restricts user capabilities, coordinates multi-step voucher approvals, and records system audit histories.',
      code: 'MOD-ERP-SECURITY'
    }
  ],
  industries: [
    {
      name: 'Manufacturing & Factories',
      icon: <Settings className="w-6 h-6" />,
      desc: 'Formulate bill of materials, monitor assembly line speed, track inventory wastage, and audit manufacturing costs.'
    },
    {
      name: 'Large-Scale Warehouses',
      icon: <Layers className="w-6 h-6" />,
      desc: 'Coordinate cargo across multiple depots, manage shelf allocations, and track long-haul in-transit shipments.'
    },
    {
      name: 'Import & Export Firms',
      icon: <Landmark className="w-6 h-6" />,
      desc: 'Configure complex import custom tax codes, track freight logistics, and reconcile multi-currency sales ledgers.'
    }
  ],
  benefits: [
    {
      metric: '100%',
      label: 'Trial Balance Accuracy',
      description: 'Automated double-entry ledgers ensure every transaction remains balanced across credit and debit sheets.'
    },
    {
      metric: '30%',
      label: 'Reduced Assembly Waste',
      description: 'Strict manufacturing conversion blueprints enforce material discipline, instantly flagging raw inventory leaks.'
    },
    {
      metric: '99.9%',
      label: 'Audit Log Security',
      description: 'Every record adjustment is permanently stamped with precise user login coordinates, preventing fraud.'
    }
  ],
  faqs: [
    {
      question: 'Is the ERP ledger compatible with national sales tax systems (GST, VAT)?',
      answer: 'Yes. Our tax module allows you to define unlimited customized taxation matrices, tax-on-tax rules, withholding rates, and automatic sales-tax report layouts matching federal guidelines.'
    },
    {
      question: 'How do you handle data synchronization between separate warehouse servers?',
      answer: 'The system relies on a central relational database. Warehouse sub-nodes operate on localized sandboxes that use secure queue-based syncing to update stock transactions instantly once network handshakes complete.'
    },
    {
      question: 'Can we configure multi-level voucher approval workflows?',
      answer: 'Absolutely. You can define custom authorization trees where transactional vouchers (like purchase requests or expenses) require manager or CFO digital approvals before posting to the main ledger.'
    }
  ],
  mockupType: 'erp'
};

export default function ERPInventoryPage() {
  return <ProductDetailLayout data={erpData} />;
}
