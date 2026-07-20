import React from 'react';
import { Metadata } from 'next';
import ProductDetailLayout, { ProductDetailData } from '@/components/ProductDetailLayout';
import { 
  Heart, Pill, HelpCircle, Shield, Layers, FileText, 
  AlertTriangle, Search, Library, Archive, CheckSquare, Clipboard
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compliance-Locked Pharmacy POS Software | Chishty Smart Solutions',
  description: 'Mitigate medical retail risks with automated drug expiry alerts, batch tracking, generic formula search indices, and locked narcotics access controls.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/products/pharmacy-pos',
  },
  openGraph: {
    title: 'Compliance-Locked Pharmacy POS Software | Chishty Smart Solutions',
    description: 'Mitigate medical retail risks with automated drug expiry alerts, batch tracking, generic formula search indices, and locked narcotics access controls.',
    url: 'https://chishtysmartsolutions.com/products/pharmacy-pos',
    siteName: 'Chishty Smart Solutions',
    images: [
      {
        url: 'https://chishtysmartsolutions.com/images/pharmacy-pos-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Pharmacy & Medical Retail POS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compliance-Locked Pharmacy POS Software | Chishty Smart Solutions',
    description: 'Protect your pharmacy with pharmaceutical batch control, prescription uploading, and expiry countdowns.',
    images: ['https://chishtysmartsolutions.com/images/pharmacy-pos-og.jpg'],
  },
};

const pharmacyData: ProductDetailData = {
  id: 'pharmacy-pos',
  title: 'Pharmacy POS',
  headline: 'Pharmacy & Medical Retail POS',
  subheading: 'Power strict medical batch scheduling, configure drug generic substitutions, prevent expired medicine sales, and secure customer prescriptions with robust data structures.',
  problems: [
    'Critical compliance risk from selling expired drugs due to unmonitored batch lifespans.',
    'Slow lookup of generic drug substitutes during severe pharmaceutical shortages.',
    'Sloppy batch tracking making drug-supplier recall procedures nearly impossible to coordinate.',
    'Unregulated access to narcotics and controlled prescription substances leading to audits.'
  ],
  solutionOverview: 'Our Pharmacy POS integrates deep compliance guardrails. Featuring automated expiry alerts, searchable generic formula indexes, medical batch matrices, and digital prescription image archives, we make healthcare retail bulletproof.',
  solutionBullets: [
    'Prevent accidental sales of expired drug batches with active blocking safeguards.',
    'Discover generic alternatives instantly when exact brands are out of stock.',
    'Track batch histories from supplier receipts to patient delivery checklists.',
    'Secure controlled medications behind custom access locks and manager passcodes.'
  ],
  features: [
    {
      title: 'Active Expiry Alert Monitors',
      description: 'Color-coded warning dashboards display expiring medicine batches 30, 60, and 90 days in advance, blocking sales on critical dates.',
      icon: <AlertTriangle className="w-6 h-6" />
    },
    {
      title: 'Generic Substitution Search',
      description: 'Search by medical generic formulas (e.g., Atorvastatin, Amoxicillin) to discover matching pharmaceutical brands and dosages instantly.',
      icon: <Search className="w-6 h-6" />
    },
    {
      title: 'Precision Batch Tracking',
      description: 'Track drugs down to individual batch codes, supplier dates, manufacturer codes, and custom retail tax classes.',
      icon: <Archive className="w-6 h-6" />
    },
    {
      title: 'Prescription Photo Storage',
      description: 'Upload and archive patient prescription photos directly during checkout, linking files to specific invoices and doctor records.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      title: 'Medicine Catalog Directory',
      description: 'Access an extensive, pre-loaded medicine directory with chemical classifications, manufacturer costs, and standard margins.',
      icon: <Library className="w-6 h-6" />
    },
    {
      title: 'Locked Narcotics Security',
      description: 'Controlled substances (narcotics, sedatives) trigger manager authentication popups during billing to log dispenser IDs.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Strict Stock Audit Controls',
      description: 'Run rolling stock audits by shelf rows or manufacturer catalogs without halting active checkout registers.',
      icon: <CheckSquare className="w-6 h-6" />
    },
    {
      title: 'Universal Barcode Checking',
      description: 'Scan standard medical barcode sheets, manufacturer batch codes, and custom-printed retail pharmacy price labels.',
      icon: <Pill className="w-6 h-6" />
    },
    {
      title: 'Comprehensive Supplier Logs',
      description: 'Track outstanding payments to pharmaceutical distributors, log batch buy rates, and review past supply orders.',
      icon: <Clipboard className="w-6 h-6" />
    }
  ],
  modules: [
    {
      title: 'Compliant Cashier Portal',
      description: 'POS register with integrated barcode checkouts, generic substitute selectors, and prescription verification.',
      code: 'MOD-PHARM-REG'
    },
    {
      title: 'Expiry Warning Matrix',
      description: 'Generates active lists of expiring batches and triggers automated return logs to suppliers.',
      code: 'MOD-EXP-WARN'
    },
    {
      title: 'Formula Search Index',
      description: 'Relational query engine linking commercial drug brands to chemical generic compound groups.',
      code: 'MOD-GENERIC-DB'
    },
    {
      title: 'Patient Profile Database',
      description: 'Stores patient contact cards, history, prescription photo links, and credit limits.',
      code: 'MOD-PATIENT-DB'
    },
    {
      title: 'Audit & Narcotics Vault',
      description: 'Logs all modifications, refund authorizations, and controlled medicine sales with timestamp trails.',
      code: 'MOD-VAULT-SEC'
    },
    {
      title: 'Purchase & Batch Ledger',
      description: 'Registers incoming pharmaceutical shipments with batch tags, expiry dates, and supplier invoice metrics.',
      code: 'MOD-BATCH-LEDG'
    }
  ],
  industries: [
    {
      name: 'Retail Pharmacies',
      icon: <Pill className="w-6 h-6" />,
      desc: 'High-speed medical barcode scanning, generic substitutes search, and strict medicine expiry blocks.'
    },
    {
      name: 'Medical Clinic Dispensaries',
      icon: <Heart className="w-6 h-6" />,
      desc: 'Link checkout billing directly with clinic doctor recommendations and patient prescription histories.'
    },
    {
      name: 'Veterinary Pharmacy Stores',
      icon: <Archive className="w-6 h-6" />,
      desc: 'Animal-specific medicine classifications, dosage conversions, and vaccine cold-chain log sheets.'
    }
  ],
  benefits: [
    {
      metric: '0%',
      label: 'Expired Medicine Sales',
      description: 'The point-of-sale automatically blocks checkout if a cashier accidentally scans an expired batch code.'
    },
    {
      metric: '45%',
      label: 'Faster Formula Lookup',
      description: 'Staff find generic alternative brands instantly when exact customer requested medicines are unavailable.'
    },
    {
      metric: '100%',
      label: 'Audit & Compliance Safety',
      description: 'Controlled substance transactions are locked behind custom authorization requirements with full ledger logs.'
    }
  ],
  faqs: [
    {
      question: 'How does the software handle partial strip dispensing (cutting tablets)?',
      answer: 'Our inventory model supports multi-unit pricing. You can define a medicine pack, strip, and individual tablet. Scanning the box or strip deducts the exact fraction from the master inventory count.'
    },
    {
      question: 'Can we import pre-existing medicine databases during configuration?',
      answer: 'Yes. Chishty Smart Solutions provides bulk excel import utilities to map your existing pharmaceutical lists (containing names, barcodes, generics, and suppliers) directly into the new relational DB.'
    },
    {
      question: 'Can we set drug purchase limits for specific patients?',
      answer: 'Yes. Patient profiling allows you to set customized notes, restrict controlled drug quantities, and monitor chronological transaction histories for enhanced patient safety.'
    }
  ],
  mockupType: 'pharmacy'
};

export default function PharmacyPOSPage() {
  return <ProductDetailLayout data={pharmacyData} />;
}
