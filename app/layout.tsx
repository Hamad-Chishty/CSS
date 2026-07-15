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
  title: 'Chishty Smart Solutions | World-Class Enterprise POS & Software Company',
  description: 'Enterprise Restaurant, Retail, Grocery, Pharmacy POS, custom business automation, websites, ERP systems, and AI solutions.',
  keywords: 'Restaurant POS, Retail POS, ERP, CRM, Custom Software, Chishty Smart Solutions',
  openGraph: {
    title: 'Chishty Smart Solutions | World-Class Software Company',
    description: 'A premium, international software engineering agency building POS, custom systems, and AI solutions.',
    url: 'https://chishtysmartsolutions.com',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chishty Smart Solutions | World-Class Enterprise Software',
    description: 'Transforming businesses with bespoke POS solutions, ERPs, and high-performance custom engineering.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-white font-sans text-gray-900 antialiased min-h-screen flex flex-col justify-between">
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
