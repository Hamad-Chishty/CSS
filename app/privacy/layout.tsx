import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Chishty Smart Solutions',
  description: 'Our commitment to data protection, privacy standards, and secure client information handling.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Chishty Smart Solutions',
    description: 'Our commitment to data protection, privacy standards, and secure client information handling.',
    url: 'https://chishtysmartsolutions.com/privacy',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
