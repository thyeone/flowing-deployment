'use client';

import { type SetStateAction, createContext, useState, useMemo, useContext } from 'react';

type Step4ContextValue = {
  tab: number;
  setTab: React.Dispatch<SetStateAction<number>>;
};

const Step4Context = createContext<Step4ContextValue | null>(null);

export default function Step4Provider({ children }: PropsWithStrictChildren) {
  const [tab, setTab] = useState(1);

  const memoizedValue = useMemo(
    () => ({
      tab,
      setTab,
    }),
    [tab, setTab],
  );

  return <Step4Context.Provider value={memoizedValue}>{children}</Step4Context.Provider>;
}

export function useStep4Context() {
  const context = useContext(Step4Context);

  if (!context) throw new Error('부모 트리에서 Step4Context를 사용해주세요.');

  const { tab, setTab } = context;

  return { tab, setTab };
}
