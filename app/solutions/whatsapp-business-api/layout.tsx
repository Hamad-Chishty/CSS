import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WhatsApp Business API Integration | Chishty Smart Solutions',
  description: 'Official WhatsApp Business API setup, automated payment reminders, order notifications, and customer messaging pipelines.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/solutions/whatsapp-business-api',
  },
  openGraph: {
    title: 'WhatsApp Business API Integration | Chishty Smart Solutions',
    description: 'Official WhatsApp Business API setup and automated customer messaging pipelines.',
    url: 'https://chishtysmartsolutions.com/solutions/whatsapp-business-api',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Business API Integration | Chishty Smart Solutions',
    description: 'Official WhatsApp Business API setup and automated customer messaging pipelines.',
  },
};

export default function WhatsAppSolutionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
