'use client';

import { ThemeProvider } from 'next-themes';

export default function NextThemeProvider({ children }: PropsWithStrictChildren) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      {children}
    </ThemeProvider>
  );
}
