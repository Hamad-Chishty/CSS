import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries We Serve | Chishty Smart Solutions',
  description: 'Custom software, POS, and ERP solutions tailored for restaurants, supermarkets, pharmacies, apparel, healthcare, and manufacturing.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/industries',
  },
  openGraph: {
    title: 'Industries We Serve | Chishty Smart Solutions',
    description: 'Custom software, POS, and ERP solutions tailored for restaurants, supermarkets, pharmacies, apparel, healthcare, and manufacturing.',
    url: 'https://chishtysmartsolutions.com/industries',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | Chishty Smart Solutions',
    description: 'Custom software, POS, and ERP solutions tailored for restaurants, supermarkets, pharmacies, apparel, healthcare, and manufacturing.',
  },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
