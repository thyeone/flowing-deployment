import 'dayjs/locale/ko';
import type { Viewport } from 'next';

import MetaPixcel from '../_components/MetaPixcel';
import '../globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function UserLayout({ children }: PropsWithStrictChildren) {
  return (
    <main className="main-layout">
      {children}
      <MetaPixcel />
    </main>
  );
}
