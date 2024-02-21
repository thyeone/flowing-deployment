import { AnimatePresence } from 'framer-motion';
import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';

export const OverlayContext = createContext<{
  mount(id: string, element: ReactNode): void;
  unmount(id: string): void;
} | null>(null);

export default function OverlayProvider({ children }: PropsWithStrictChildren) {
  const [overlayById, setOverlayById] = useState<Map<string, ReactNode>>(new Map());

  const mount = useCallback((id: string, element: ReactNode) => {
    setOverlayById((overlayById) => {
      const cloned = new Map(overlayById);
      cloned.set(id, element);
      return cloned;
    });
  }, []);

  const unmount = useCallback((id: string) => {
    setOverlayById((overlayById) => {
      const cloned = new Map(overlayById);
      cloned.delete(id);
      return cloned;
    });
  }, []);

  const context = useMemo(() => ({ mount, unmount }), [mount, unmount]);

  return (
    <OverlayContext.Provider value={context}>
      {children}
      <AnimatePresence>
        {[...overlayById.entries()].map(([id, element]) => (
          <React.Fragment key={id}>{element}</React.Fragment>
        ))}
      </AnimatePresence>
    </OverlayContext.Provider>
  );
}
