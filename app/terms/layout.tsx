import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Chishty Smart Solutions',
  description: 'Terms of service and legal agreement for using Chishty Smart Solutions software products and services.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/terms',
  },
  openGraph: {
    title: 'Terms of Service | Chishty Smart Solutions',
    description: 'Terms of service and legal agreement for using Chishty Smart Solutions software products and services.',
    url: 'https://chishtysmartsolutions.com/terms',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
