'use client';

import QueryProvider from './QueryProvider';
import NextThemeProvider from './NextThemeProvider';

export default function Providers({ children }: PropsWithStrictChildren) {
  return (
    <QueryProvider>
      <NextThemeProvider>{children}</NextThemeProvider>
    </QueryProvider>
  );
}
