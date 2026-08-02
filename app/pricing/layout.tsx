import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transparent Software & POS Pricing | Chishty Smart Solutions',
  description: 'Simple, transparent pricing plans for restaurant POS, retail POS, ERP systems, and custom software development.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/pricing',
  },
  openGraph: {
    title: 'Transparent Software & POS Pricing | Chishty Smart Solutions',
    description: 'Simple, transparent pricing plans for restaurant POS, retail POS, ERP systems, and custom software development.',
    url: 'https://chishtysmartsolutions.com/pricing',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Transparent Software & POS Pricing | Chishty Smart Solutions',
    description: 'Simple, transparent pricing plans for restaurant POS, retail POS, ERP systems, and custom software development.',
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
