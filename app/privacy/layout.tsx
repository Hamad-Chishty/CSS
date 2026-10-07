import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Chishty Smart Solutions',
  description: 'Official Privacy Policy for Chishty Smart Solutions. Outlines data protection standards for POS/ERP systems and the WhatsApp AI Sales & Support Agent.',
  alternates: {
    canonical: 'https://www.chishtysmartsolutions.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Chishty Smart Solutions',
    description: 'Official Privacy Policy for Chishty Smart Solutions. Outlines data protection standards for POS/ERP systems and the WhatsApp AI Sales & Support Agent.',
    url: 'https://www.chishtysmartsolutions.com/privacy',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Chishty Smart Solutions',
    description: 'Official Privacy Policy for Chishty Smart Solutions POS/ERP software and WhatsApp AI Agent services.',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
