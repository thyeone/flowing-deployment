'use client';

import NextThemeProvider from './NextThemeProvider';
import OverlayProvider from './OverlayProvider';
import QueryProvider from './QueryProvider';

export default function Providers({ children }: PropsWithStrictChildren) {
  return (
    <QueryProvider>
      <OverlayProvider>
        <NextThemeProvider>{children}</NextThemeProvider>
      </OverlayProvider>
    </QueryProvider>
  );
}
