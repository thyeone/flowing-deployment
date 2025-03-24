import { motion } from 'framer-motion';

import { cn } from '@/utils';

import { useFeedFilterContext } from './FeedFilterContext';

const TABS = [
  { id: 1, name: '성별', value: 'gender' },
  { id: 2, name: '거주 지역', value: 'address' },
  { id: 3, name: '연령대', value: 'age' },
] as const;

export default function FeedFilterTabs() {
  const { filterState, setSelectedTab } = useFeedFilterContext();

  return (
    <div className="w-full border-b border-gray-200 bg-white pt-4">
      <motion.ul className="flex h-full gap-x-5">
        {TABS.map(({ id, name, value }) => (
          <motion.li
            key={id}
            className={cn('cursor-pointer text-gray-500', {
              'font-bold text-gray-900': value === filterState.selectedTab,
            })}
            onClick={() => setSelectedTab(value)}
          >
            {name}
            {value === filterState.selectedTab && (
              <motion.div
                className="mt-3 h-px w-full bg-gray-900"
                layoutId="filter-tab-underline"
              />
            )}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
