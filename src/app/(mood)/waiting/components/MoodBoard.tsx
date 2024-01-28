'use client';

import { useTheme } from 'next-themes';
import ToggleButton from './ToggleButton';
import PinkBoard from '@/assets/PinkBoard';
import DarkBoard from '@/assets/DarkBoard';

export default function MoodBoard() {
  const { theme } = useTheme();

  return (
    <div className="mx-auto mt-10 flex flex-col items-center justify-center gap-y-6">
      {theme === 'light' ? <PinkBoard /> : <DarkBoard />}
      <ToggleButton />
    </div>
  );
}
