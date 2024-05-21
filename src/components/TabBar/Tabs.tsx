'use client';

import { motion } from 'framer-motion';

import { cn } from '@/utils';

import Spacing from '../Spacing';
import { useTabContext } from './TabProvider';

export default function Tabs({ children }: PropsWithStrictChildren) {
  return (
    <>
      <nav className="max-width fixed z-10 w-full border-b border-gray-200 bg-white pt-4">
        {children}
      </nav>
      <Spacing size={54} />
    </>
  );
}

function List({ children }: PropsWithStrictChildren) {
  return <motion.ul className="ml-[23px] flex h-full gap-x-5">{children}</motion.ul>;
}

function Item({ value, name }: { value: string; name: string }) {
  const { selectedTab, setSelectedTab } = useTabContext();
  return (
    <motion.li
      className={cn('cursor-pointer text-gray-500', {
        'font-bold text-gray-900': value === selectedTab,
      })}
      onClick={() => setSelectedTab(value)}
    >
      {name}
      {value === selectedTab && <Indicator />}
    </motion.li>
  );
}

function Panel({ children, tab }: PropsWithStrictChildren<{ tab: string }>) {
  const { selectedTab } = useTabContext();
  const isActive = selectedTab === tab;

  return <>{isActive && children}</>;
}

Tabs.List = List;
Tabs.Item = Item;
Tabs.Panel = Panel;

function Indicator() {
  return <motion.div className="mt-3 h-px w-full bg-gray-900" layoutId="bg-gray-900" />;
}
