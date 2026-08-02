import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Gateway Integration | Chishty Smart Solutions',
  description: 'Seamless integration with local and international payment gateways, card machines, online checkout, and direct POS terminal sync.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/solutions/payment-gateway-integration',
  },
  openGraph: {
    title: 'Payment Gateway Integration | Chishty Smart Solutions',
    description: 'Seamless integration with local and international payment gateways and POS terminals.',
    url: 'https://chishtysmartsolutions.com/solutions/payment-gateway-integration',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payment Gateway Integration | Chishty Smart Solutions',
    description: 'Seamless integration with local and international payment gateways and POS terminals.',
  },
};

export default function PaymentGatewayIntegrationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
