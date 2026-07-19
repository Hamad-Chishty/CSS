import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chishtysmartsolutions.com'),
  title: 'Chishty Smart Solutions | World-Class Enterprise POS & Software Company',
  description: 'Enterprise Restaurant, Retail, Grocery, Pharmacy POS, custom business automation, websites, ERP systems, and AI solutions.',
  keywords: 'Restaurant POS, Retail POS, ERP, CRM, Custom Software, Chishty Smart Solutions',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Chishty Smart Solutions | World-Class Software Company',
    description: 'A premium, international software engineering agency building POS, custom systems, and AI solutions.',
    url: 'https://chishtysmartsolutions.com',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
    images: [
      {
        url: 'https://chishtysmartsolutions.com/assets/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Chishty Smart Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chishty Smart Solutions | World-Class Enterprise Software',
    description: 'Transforming businesses with bespoke POS solutions, ERPs, and high-performance custom engineering.',
    images: ['https://chishtysmartsolutions.com/assets/images/logo.png'],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Chishty Smart Solutions",
  "url": "https://chishtysmartsolutions.com",
  "logo": "https://chishtysmartsolutions.com/assets/images/logo.png",
  "sameAs": [
    "https://facebook.com/chishtysmartsolutions",
    "https://linkedin.com/company/chishtysmartsolutions",
    "https://github.com/chishtysmartsolutions"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+923006392025",
    "contactType": "customer service",
    "areaServed": "PK",
    "availableLanguage": ["English", "Urdu"]
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Chishty Smart Solutions",
  "url": "https://chishtysmartsolutions.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://chishtysmartsolutions.com/blog?search={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-white font-sans text-gray-900 antialiased min-h-screen flex flex-col justify-between">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Global Navigation */}
        <Header />

        {/* Dynamic Route Pages */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Sticky Contact Tools */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
