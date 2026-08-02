import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Custom Software Development Services | Chishty Smart Solutions',
  description: 'Enterprise custom software development, bespoke database schemas, offline-first architectures, and high-performance business applications.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/services/custom-software-development',
  },
  openGraph: {
    title: 'Custom Software Development Services | Chishty Smart Solutions',
    description: 'Enterprise custom software development, bespoke database schemas, and offline-first architectures.',
    url: 'https://chishtysmartsolutions.com/services/custom-software-development',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Services | Chishty Smart Solutions',
    description: 'Enterprise custom software development, bespoke database schemas, and offline-first architectures.',
  },
};

export default function CustomSoftwareServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
