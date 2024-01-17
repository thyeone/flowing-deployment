import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/providers/Providers';

export const metadata: Metadata = {
  title: 'Gyeol | 결',
  description: 'Gyeol, 결',
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
    <html lang="ko">
      <body className="body-layout">{children}</body>
    </html>
  );
}
