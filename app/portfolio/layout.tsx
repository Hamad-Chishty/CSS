import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Work & Project Portfolio | Chishty Smart Solutions',
  description: 'Explore our featured projects, custom software builds, mobile applications, and enterprise POS installations.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/portfolio',
  },
  openGraph: {
    title: 'Our Work & Project Portfolio | Chishty Smart Solutions',
    description: 'Explore our featured projects, custom software builds, mobile applications, and enterprise POS installations.',
    url: 'https://chishtysmartsolutions.com/portfolio',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work & Project Portfolio | Chishty Smart Solutions',
    description: 'Explore our featured projects, custom software builds, mobile applications, and enterprise POS installations.',
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
