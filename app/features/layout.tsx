import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Software Features | Chishty Smart Solutions',
  description: 'Explore the powerful features of our POS, ERP, CRM, and automation software including offline-first sync, double-entry ledgers, and multi-store management.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/features',
  },
  openGraph: {
    title: 'Enterprise Software Features | Chishty Smart Solutions',
    description: 'Explore the powerful features of our POS, ERP, CRM, and automation software.',
    url: 'https://chishtysmartsolutions.com/features',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Software Features | Chishty Smart Solutions',
    description: 'Explore the powerful features of our POS, ERP, CRM, and automation software.',
  },
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
