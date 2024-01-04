'use client';

import QueryProvider from './QueryProvider';

export default function Providers({ children }: PropsWithStrictChildren) {
  return <QueryProvider>{children}</QueryProvider>;
}
