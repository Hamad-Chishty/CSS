import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'POS Payment Terminals & Gateway Solutions | Chishty Smart Solutions',
  description: 'Secure credit card terminals, mobile wallet integrations, and instant transaction settlement for retail and restaurant POS systems.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/solutions/payment-gateway',
  },
  openGraph: {
    title: 'POS Payment Terminals & Gateway Solutions | Chishty Smart Solutions',
    description: 'Secure credit card terminals and instant transaction settlement for POS systems.',
    url: 'https://chishtysmartsolutions.com/solutions/payment-gateway',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'POS Payment Terminals & Gateway Solutions | Chishty Smart Solutions',
    description: 'Secure credit card terminals and instant transaction settlement for POS systems.',
  },
};

export default function PaymentGatewayLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
