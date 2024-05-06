'use client';

import { createContext, useContext, useMemo, useState } from 'react';

type TabContextValue = {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
};

type TabProviderProps = {
  initialValue: string;
};

const TabContext = createContext<TabContextValue | null>(null);

export default function TabProvider({
  children,
  initialValue,
}: PropsWithStrictChildren<TabProviderProps>) {
  const [selectedTab, setSelectedTab] = useState<string>(initialValue);

  const memoizedValue = useMemo(
    () => ({
      selectedTab,
      setSelectedTab,
    }),
    [selectedTab],
  );

  return <TabContext.Provider value={memoizedValue}>{children}</TabContext.Provider>;
}

export function useTabContext() {
  const tabContext = useContext(TabContext);

  if (!tabContext) throw new Error('부모 트리에서 TabContext를 사용해주세요.');

  return { ...tabContext };
}
