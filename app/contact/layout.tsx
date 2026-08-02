import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Chishty Smart Solutions - Get a Custom Quote',
  description: 'Get in touch with Chishty Smart Solutions for custom POS software, ERP systems, web development, and AI business automation consultations.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Chishty Smart Solutions',
    description: 'Get in touch for custom POS software, ERP systems, and AI business automation consultations.',
    url: 'https://chishtysmartsolutions.com/contact',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Chishty Smart Solutions',
    description: 'Get in touch for custom POS software, ERP systems, and AI business automation consultations.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
