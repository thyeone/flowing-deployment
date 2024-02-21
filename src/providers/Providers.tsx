'use client';

import QueryProvider from './QueryProvider';
import NextThemeProvider from './NextThemeProvider';
import OverlayProvider from './OverlayProvider';

export default function Providers({ children }: PropsWithStrictChildren) {
  return (
    <QueryProvider>
      <OverlayProvider>
        <NextThemeProvider>{children}</NextThemeProvider>
      </OverlayProvider>
    </QueryProvider>
  );
}
