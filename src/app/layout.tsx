import 'dayjs/locale/ko';
import type { Metadata } from 'next';

import Providers from '@/providers/Providers';

import './globals.css';

export const metadata: Metadata = {
  title: 'Flowing | 플로잉',
  description: 'Flowing, 플로잉',
  icons: {
    icon: '/favicon/favicon.png',
  },
};

export default function RootLayout({ children }: PropsWithStrictChildren) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="body-layout">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
