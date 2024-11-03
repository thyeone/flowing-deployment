'use client';

import { createContext, useContext, useMemo } from 'react';

import useCustomSearchParams from '@/hooks/useCustomSearchParams';

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
  const { searchParams, setSearchParams } = useCustomSearchParams();
  const selectedTab = (searchParams.tab as string) || initialValue;

  const setSelectedTab = (value: string) => {
    setSearchParams({ ...searchParams, tab: value });
  };

  const memoizedValue = useMemo(
    () => ({
      selectedTab,
      setSelectedTab,
    }),
    [selectedTab, setSelectedTab],
  );

  return <TabContext.Provider value={memoizedValue}>{children}</TabContext.Provider>;
}

export function useTabContext() {
  const tabContext = useContext(TabContext);

  if (!tabContext) throw new Error('부모 트리에서 TabContext를 사용해주세요.');

  return { ...tabContext };
}
