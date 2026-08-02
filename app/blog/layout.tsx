import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software & POS Tech Blog | Chishty Smart Solutions',
  description: 'Explore expert articles, guides, and blueprints on restaurant POS, retail automation, ERP systems, and business technology in Pakistan & globally.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/blog',
  },
  openGraph: {
    title: 'Software & POS Tech Blog | Chishty Smart Solutions',
    description: 'Explore expert articles, guides, and blueprints on restaurant POS, retail automation, ERP systems, and business technology.',
    url: 'https://chishtysmartsolutions.com/blog',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software & POS Tech Blog | Chishty Smart Solutions',
    description: 'Explore expert articles, guides, and blueprints on restaurant POS, retail automation, ERP systems, and business technology.',
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
