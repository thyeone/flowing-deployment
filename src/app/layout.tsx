import type { Metadata, Viewport } from 'next';

import Providers from '@/providers/Providers';

import './globals.css';

export const metadata: Metadata = {
  title: 'Gyeol | 결',
  description: 'Gyeol, 결',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: PropsWithStrictChildren) {
  return (
    <Layout>
      <Providers>{children}</Providers>
    </Layout>
  );
}

function Layout({ children }: PropsWithStrictChildren) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="body-layout">{children}</body>
    </html>
  );
}
