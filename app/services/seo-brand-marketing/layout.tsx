import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical SEO, Brand Strategy & UI/UX | Chishty Smart Solutions',
  description: 'Technical SEO optimization, organic search growth strategies, brand identity design, and conversion-focused UI/UX engineering.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/services/seo-brand-marketing',
  },
  openGraph: {
    title: 'Technical SEO, Brand Strategy & UI/UX | Chishty Smart Solutions',
    description: 'Technical SEO optimization, organic search growth strategies, and brand identity design.',
    url: 'https://chishtysmartsolutions.com/services/seo-brand-marketing',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical SEO, Brand Strategy & UI/UX | Chishty Smart Solutions',
    description: 'Technical SEO optimization, organic search growth strategies, and brand identity design.',
  },
};

export default function SeoBrandServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
