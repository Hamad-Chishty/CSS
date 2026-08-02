import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web & Mobile App Development | Chishty Smart Solutions',
  description: 'High-performance web applications, progressive web apps (PWAs), and native iOS & Android mobile apps built with React, Next.js, and React Native.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/services/web-mobile-app-development',
  },
  openGraph: {
    title: 'Web & Mobile App Development | Chishty Smart Solutions',
    description: 'High-performance web applications and mobile apps built for scale.',
    url: 'https://chishtysmartsolutions.com/services/web-mobile-app-development',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web & Mobile App Development | Chishty Smart Solutions',
    description: 'High-performance web applications and mobile apps built for scale.',
  },
};

export default function WebMobileServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
