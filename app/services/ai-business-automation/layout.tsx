import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Architectures & Business Automation | Chishty Smart Solutions',
  description: 'AI-driven workflow automation, smart CRM triggers, automated document parsing, and custom machine learning pipelines for enterprises.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/services/ai-business-automation',
  },
  openGraph: {
    title: 'AI Architectures & Business Automation | Chishty Smart Solutions',
    description: 'AI-driven workflow automation and smart CRM triggers for enterprises.',
    url: 'https://chishtysmartsolutions.com/services/ai-business-automation',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Architectures & Business Automation | Chishty Smart Solutions',
    description: 'AI-driven workflow automation and smart CRM triggers for enterprises.',
  },
};

export default function AiAutomationServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
