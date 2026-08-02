import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Chishty Smart Solutions - Software Engineering Agency',
  description: 'Learn about Chishty Smart Solutions, a premier enterprise software and POS development company delivering custom ERPs, POS systems, and AI solutions.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/about',
  },
  openGraph: {
    title: 'About Us | Chishty Smart Solutions',
    description: 'Learn about Chishty Smart Solutions, a premier enterprise software and POS development company.',
    url: 'https://chishtysmartsolutions.com/about',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Chishty Smart Solutions',
    description: 'Learn about Chishty Smart Solutions, a premier enterprise software and POS development company.',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
