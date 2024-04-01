'use client';

import OverlayProvider from './OverlayProvider';

export default function ToastProvider({ children }: PropsWithStrictChildren) {
  return <OverlayProvider>{children}</OverlayProvider>;
}
