import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Products & POS Suites | Chishty Smart Solutions',
  description: 'Explore our flagship products: Restaurant POS, Retail & Grocery POS, Pharmacy POS, Enterprise ERP, HR Payroll, and CRM.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/products',
  },
  openGraph: {
    title: 'Software Products & POS Suites | Chishty Smart Solutions',
    description: 'Explore our flagship products: Restaurant POS, Retail POS, Pharmacy POS, Enterprise ERP, HR Payroll, and CRM.',
    url: 'https://chishtysmartsolutions.com/products',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Products & POS Suites | Chishty Smart Solutions',
    description: 'Explore our flagship products: Restaurant POS, Retail POS, Pharmacy POS, Enterprise ERP, HR Payroll, and CRM.',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
