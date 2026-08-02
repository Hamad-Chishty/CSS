import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | Chishty Smart Solutions',
  description: 'Find answers to common questions about our POS software, FBR integration, ERP systems, custom development, hardware compatibility, and pricing.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions (FAQ) | Chishty Smart Solutions',
    description: 'Find answers to common questions about our POS software, FBR integration, ERP systems, and custom development.',
    url: 'https://chishtysmartsolutions.com/faq',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions (FAQ) | Chishty Smart Solutions',
    description: 'Find answers to common questions about our POS software, FBR integration, ERP systems, and custom development.',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
