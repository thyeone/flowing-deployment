'use client';

import NextThemeProvider from './NextThemeProvider';
import OverlayProvider from './OverlayProvider';
import QueryProvider from './QueryProvider';
import ToastProvider from './ToastProvider';

export default function Providers({ children }: PropsWithStrictChildren) {
  return (
    <ToastProvider>
      <QueryProvider>
        <OverlayProvider>
          <NextThemeProvider>{children}</NextThemeProvider>
        </OverlayProvider>
      </QueryProvider>
    </ToastProvider>
  );
}
