import React from 'react';
import { Metadata } from 'next';
import ProductDetailLayout, { ProductDetailData } from '@/components/ProductDetailLayout';
import { 
  ShoppingBag, HardDrive, Barcode, ClipboardList, TrendingUp, HelpCircle, 
  Users, Layers, Landmark, Shield, Percent, FileSpreadsheet, RefreshCw
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'High-Throughput Retail & Grocery POS Software | Chishty Smart Solutions',
  description: 'Scale your retail operations with lightning-fast barcode checkouts, automatic multi-store inventory alerts, automated purchase orders, and localized Khata ledger systems.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/products/retail-pos',
  },
  openGraph: {
    title: 'High-Throughput Retail & Grocery POS Software | Chishty Smart Solutions',
    description: 'Scale your retail operations with lightning-fast barcode checkouts, automatic multi-store inventory alerts, automated purchase orders, and localized Khata ledger systems.',
    url: 'https://chishtysmartsolutions.com/products/retail-pos',
    siteName: 'Chishty Smart Solutions',
    images: [
      {
        url: 'https://chishtysmartsolutions.com/images/retail-pos-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Retail & Grocery POS Suite',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High-Throughput Retail & Grocery POS Software | Chishty Smart Solutions',
    description: 'Bespoke retail point-of-sale featuring bulk SKU indexes and real-time inventory synchronization.',
    images: ['https://chishtysmartsolutions.com/images/retail-pos-og.jpg'],
  },
};

const retailData: ProductDetailData = {
  id: 'retail-pos',
  title: 'Retail & Grocery POS',
  headline: 'Retail & Grocery POS System',
  subheading: 'Power sub-second barcode scans, manage up to 200,000 SKUs across multiple warehouses, automate supplier PO alerts, and track customer credit ledger sheets.',
  problems: [
    'Long customer checkout queues during rush hours that trigger lost basket sales.',
    'Manual stock-count discrepancies across warehouses resulting in under-stocking or cash tying up.',
    'Sloppy margin tracking due to unorganized wholesale pricing lists and hidden supplier costs.',
    'Lack of a simple outstanding customer credit (Khata) ledger causing slow repayments.'
  ],
  solutionOverview: 'Our Retail POS is optimized for massive data catalogs. Featuring swift barcode billing, automated purchase order sheets, multi-warehouse cargo transfer sheets, and consumer profiles, we make retailing clean.',
  solutionBullets: [
    'Complete barcode scans and invoice generation in under 2 seconds.',
    'Check physical stock metrics across all outlets and warehouses in real-time.',
    'Generate automatic purchase orders based on minimum inventory thresholds.',
    'Manage outstanding credit balances with an integrated client credit (Khata) sheet.'
  ],
  features: [
    {
      title: 'Bulk Barcode Generation',
      description: 'Generate, design, and print customized barcode labels for custom-packed items, directly linked to your master SKU database.',
      icon: <Barcode className="w-6 h-6" />
    },
    {
      title: 'Smart Stock Transfers',
      description: 'Request, log, and authorize inventory movements between branches or central warehouses with full digital audit transit sheets.',
      icon: <Layers className="w-6 h-6" />
    },
    {
      title: 'Automated Purchase Orders',
      description: 'Set minimum stock warning thresholds. The system auto-drafts Supplier Purchase Orders once stock dips below acceptable counts.',
      icon: <ClipboardList className="w-6 h-6" />
    },
    {
      title: 'Integrated Returns & Swaps',
      description: 'Handle customer item returns or stock swaps seamlessly. Logs reasons, adjusts cash drawers, and updates stock metrics instantly.',
      icon: <RefreshCw className="w-6 h-6" />
    },
    {
      title: 'Dynamic Discount Scheduler',
      description: 'Create multi-tier promotional campaigns (Buy 1 Get 1, percentage discount, wholesale threshold tiers) with ease.',
      icon: <Percent className="w-6 h-6" />
    },
    {
      title: 'Supplier & Ledger Hub',
      description: 'Maintain clean supplier profiles, record bulk batch cost rates, monitor outstanding debts, and verify transaction receipts.',
      icon: <Landmark className="w-6 h-6" />
    },
    {
      title: 'Integrated Khata Ledgers',
      description: 'Track localized credit purchases. Store client contact cards, record payments, and send SMS alerts for outstanding debts.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Real-Time Sales Metrics',
      description: 'Extract instant reports on top-performing stock items, gross profit margins, daily cash balances, and peak checkout hours.',
      icon: <FileSpreadsheet className="w-6 h-6" />
    },
    {
      title: 'Role-Based Authorization',
      description: 'Manage staff cashier roles. Restrict permissions for void sales, manual inventory adjustments, and cash drawer audits.',
      icon: <Shield className="w-6 h-6" />
    }
  ],
  modules: [
    {
      title: 'Sleek Billing Terminal',
      description: 'Frictionless checkout interface supporting barcode scanning, hot-key indexing, and multi-payment gateways.',
      code: 'MOD-POS-REG'
    },
    {
      title: 'Multi-Warehouse Ledger',
      description: 'Tracks batch numbers, manufacturing dates, and physical warehouse inventory levels.',
      code: 'MOD-INV-LEDGER'
    },
    {
      title: 'Automated PO Dispatcher',
      description: 'Drafts and emails supply purchase requests directly to vendor email accounts.',
      code: 'MOD-PO-AUTO'
    },
    {
      title: 'Client Credit Registry',
      description: 'Tracks outstanding Khata balances, transaction trails, and customer credit limits.',
      code: 'MOD-KHATA-04'
    },
    {
      title: 'Discount Compiler',
      description: 'Executes complex promotional structures and calculates precise tax schedules.',
      code: 'MOD-PROMO-TAX'
    },
    {
      title: 'Supplier Balance Engine',
      description: 'Tracks cash-out flows, bulk purchase invoices, and vendor account ledgers.',
      code: 'MOD-VENDOR-06'
    }
  ],
  industries: [
    {
      name: 'Supermarkets & Groceries',
      icon: <ShoppingBag className="w-6 h-6" />,
      desc: 'Handles thousands of daily barcode checks, bulk shelf inventory count lists, and perishable expirations.'
    },
    {
      name: 'Apparel & Department Stores',
      icon: <Layers className="w-6 h-6" />,
      desc: 'Track items by multiple colors, sizes, materials, and generate custom clothing barcode hangtags.'
    },
    {
      name: 'Wholesale Distributors',
      icon: <Landmark className="w-6 h-6" />,
      desc: 'Bulk client order processing, supplier freight logs, and robust credit account trackers.'
    }
  ],
  benefits: [
    {
      metric: 'Under 2s',
      label: 'Barcode Checkout Speed',
      description: 'Optimized scan buffers let cashiers slide goods through the register with zero processing delays.'
    },
    {
      metric: '100%',
      label: 'Stock Audits Visibility',
      description: 'Eliminates manual discrepancies between physical shelf counts and database figures.'
    },
    {
      metric: '25%',
      label: 'Reduced Inventory Overheads',
      description: 'Precise low-stock trigger points prevent tying up precious cash flow in slow-moving items.'
    }
  ],
  faqs: [
    {
      question: 'Can the retail system parse custom-packed scale barcode labels?',
      answer: 'Yes. Our software can decode complex weighted scale barcodes (EAN-13, UPC) containing both the item identifier code and the weight/price values calculated by your electronic weighing scale.'
    },
    {
      question: 'How does stock synchronization behave if a branch loses network connection?',
      answer: 'The localized server stores all local cash register scans in an offline queue. As soon as the branch internet re-establishes, the database automatically synchronizes with the main cloud server, maintaining accurate stock counts.'
    },
    {
      question: 'Is there a limit to how many items we can store in the POS database?',
      answer: 'No. Our backend relies on a high-speed relational engine optimized to index and query over 200,000 distinct SKUs without causing search delays.'
    }
  ],
  mockupType: 'retail'
};

export default function RetailPOSPage() {
  return <ProductDetailLayout data={retailData} />;
}
