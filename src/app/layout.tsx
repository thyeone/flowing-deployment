import 'dayjs/locale/ko';
import type { Metadata, Viewport } from 'next';

import Providers from '@/providers/Providers';

import MetaPixcel from './_components/MetaPixcel';
import './globals.css';

export const metadata: Metadata = {
  title: 'Flowing | 플로잉',
  description: 'Flowing, 플로잉',
  icons: {
    icon: '/favicon/favicon.png',
  },
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
      <body className="body-layout">
        {children}
        <MetaPixcel />
      </body>
    </html>
  );
}
