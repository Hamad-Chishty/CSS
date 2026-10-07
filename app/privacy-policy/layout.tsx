import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Chishty Smart Solutions',
  description: 'Official Privacy Policy and WhatsApp Business messaging disclosure for Chishty Smart Solutions. Learn how client inquiries, sales leads, and communications are processed.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | Chishty Smart Solutions',
    description: 'Official Privacy Policy and WhatsApp Business messaging disclosure for Chishty Smart Solutions.',
    url: 'https://chishtysmartsolutions.com/privacy-policy',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy | Chishty Smart Solutions',
    description: 'Official Privacy Policy and WhatsApp Business messaging disclosure for Chishty Smart Solutions.',
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
