import React from 'react';
import { Metadata } from 'next';
import ProductDetailClient from './ProductDetailClient';

const PRODUCTS_METADATA: Record<string, { title: string; description: string }> = {
  'restaurant-pos': {
    title: 'Restaurant POS Suite | Chishty Smart Solutions',
    description: 'Table billing, digital kitchen display screens (KDS), and contactless QR menu ordering system for restaurants and cafes.',
  },
  'retail-pos': {
    title: 'Retail & Grocery POS System | Chishty Smart Solutions',
    description: 'Fast barcode checkout, multi-store inventory synchronization, and automated supplier purchase orders for retail and grocery stores.',
  },
  'pharmacy-pos': {
    title: 'Pharmacy & Medical Retail POS | Chishty Smart Solutions',
    description: 'Drug generic substitute matcher, batch expiry tracking, and prescription digital logs for retail and hospital pharmacies.',
  },
  'erp-inventory': {
    title: 'Enterprise ERP & Financial Ledger | Chishty Smart Solutions',
    description: 'Double-entry ledgers, custom taxation engine, logistics tracking, and automated bank reconciliation for enterprise operations.',
  },
  'hr-payroll': {
    title: 'HR & Automated Payroll Suite | Chishty Smart Solutions',
    description: 'Biometric face/thumb scanner integration, dynamic salary calculation, leave approval workflow, and one-click bank payroll CSVs.',
  },
  'crm': {
    title: 'Specialized CRM System | Chishty Smart Solutions',
    description: 'Visual deal kanban pipelines, automated WhatsApp customer messages, and complete contact activity history timelines.',
  },
  'custom-software': {
    title: 'Custom Software Development | Chishty Smart Solutions',
    description: 'Bespoke corporate database schemas, hardware integrations, secure APIs, and custom software architecture.',
  },
};

export async function generateStaticParams() {
  return Object.keys(PRODUCTS_METADATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meta = PRODUCTS_METADATA[slug] || {
    title: 'Enterprise Software Product | Chishty Smart Solutions',
    description: 'High-performance POS, ERP, and custom software solutions built by Chishty Smart Solutions.',
  };

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://chishtysmartsolutions.com/products/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://chishtysmartsolutions.com/products/${slug}`,
      type: 'website',
      siteName: 'Chishty Smart Solutions',
      images: [
        {
          url: 'https://chishtysmartsolutions.com/assets/images/logo.png',
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['https://chishtysmartsolutions.com/assets/images/logo.png'],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProductDetailClient slug={slug} />;
}
