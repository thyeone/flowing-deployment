'use client';

import FramerLazyMotionProvider from './FramerLazyMotionProvider';
import NextThemeProvider from './NextThemeProvider';
import OverlayProvider from './OverlayProvider';
import QueryProvider from './QueryProvider';
import ToastProvider from './ToastProvider';
import UserProvider from './user.provider';

export default function Providers({ children }: PropsWithStrictChildren) {
  return (
    <FramerLazyMotionProvider>
      <UserProvider>
        <ToastProvider>
          <QueryProvider>
            <OverlayProvider>
              <NextThemeProvider>{children}</NextThemeProvider>
            </OverlayProvider>
          </QueryProvider>
        </ToastProvider>
      </UserProvider>
    </FramerLazyMotionProvider>
  );
}
