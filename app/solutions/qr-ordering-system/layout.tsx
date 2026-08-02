import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contactless QR Menu & Ordering System | Chishty Smart Solutions',
  description: 'Dynamic table QR code menus, digital self-ordering, real-time kitchen KDS synchronization, and contactless checkout.',
  alternates: {
    canonical: 'https://chishtysmartsolutions.com/solutions/qr-ordering-system',
  },
  openGraph: {
    title: 'Contactless QR Menu & Ordering System | Chishty Smart Solutions',
    description: 'Dynamic table QR code menus, digital self-ordering, and real-time kitchen KDS synchronization.',
    url: 'https://chishtysmartsolutions.com/solutions/qr-ordering-system',
    siteName: 'Chishty Smart Solutions',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contactless QR Menu & Ordering System | Chishty Smart Solutions',
    description: 'Dynamic table QR code menus, digital self-ordering, and real-time kitchen KDS synchronization.',
  },
};

export default function QrOrderingSolutionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
