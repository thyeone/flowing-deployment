'use client';

import { JobBW, JobColor, LifeBW, LifeColor, LoveBW, LoveColor } from '@/assets/MyValue';
import { cn } from '@/utils';

import { useStep4Context } from './Step4Context';

export const VALUE_CATEGORIES = [
  {
    id: 1,
    name: '라이프',
    params: 'life',
    title: '라이프',
  },
  {
    id: 2,
    name: '직업',
    params: 'job',
    title: '일, 직업',
  },
  {
    id: 3,
    name: '연애관',
    params: 'love',
    title: '연애',
  },
] as const;

const ICONS = {
  라이프: [LifeColor, LifeBW],
  직업: [JobColor, JobBW],
  연애관: [LoveColor, LoveBW],
};

export default function TabBar() {
  const { tab, setTab } = useStep4Context();

  return (
    <nav>
      <ul className="flex h-11 w-full rounded-lg bg-gray-100 p-0.5">
        {VALUE_CATEGORIES.map(({ id, name }) => {
          const Icon = id === tab ? ICONS[name][0] : ICONS[name][1];

          return (
            <li
              key={id}
              className={cn(
                'relative flex flex-1 cursor-pointer items-center justify-center gap-x-[6px] text-sm font-bold text-gray-600 transition duration-100',
                { 'rounded-lg bg-white text-gray-900': id === tab },
              )}
              onClick={() => setTab(id)}
            >
              <Icon />
              {name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
