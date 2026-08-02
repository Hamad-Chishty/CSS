import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upload Profile | Internal Tool',
  robots: {
    index: false,
    follow: false,
  },
};

export default function UploadProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
