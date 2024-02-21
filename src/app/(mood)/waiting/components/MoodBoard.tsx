'use client';

import { useTheme } from 'next-themes';
import ToggleButton from './ToggleButton';
import PinkBoard from '@/assets/PinkBoard';
import DarkBoard from '@/assets/DarkBoard';
import { useIsMounted } from '@/hooks';

export default function MoodBoard() {
  const { theme } = useTheme();
  const isMounted = useIsMounted();

  return (
    <div className="-z-50 mx-auto mt-10 flex h-[276px] flex-col items-center justify-center gap-y-6">
      {isMounted && (theme === 'light' ? <PinkBoard /> : <DarkBoard />)}
      <ToggleButton />
    </div>
  );
}
