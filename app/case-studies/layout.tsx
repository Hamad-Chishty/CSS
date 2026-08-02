import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies & Client Success Stories | Chishty Smart Solutions',
  description: 'Discover how Chishty Smart Solutions helped restaurants, supermarkets, and enterprises automate operations, increase revenue, and integrate FBR POS.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/case-studies',
  },
  openGraph: {
    title: 'Case Studies & Client Success Stories | Chishty Smart Solutions',
    description: 'Discover how Chishty Smart Solutions helped businesses automate operations and increase revenue.',
    url: 'https://chishtysmartsolutions.com/case-studies',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies & Client Success Stories | Chishty Smart Solutions',
    description: 'Discover how Chishty Smart Solutions helped businesses automate operations and increase revenue.',
  },
};

export default function CaseStudiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
