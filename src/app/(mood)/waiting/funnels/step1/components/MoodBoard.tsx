'use client';

import { useTheme } from 'next-themes';
import ToggleButton from './ToggleButton';
import LightBoard from '@/assets/LightBoard';
import DarkBoard from '@/assets/DarkBoard';
import { useIsMounted } from '@/hooks';

export default function MoodBoard() {
  const { theme } = useTheme();
  const isMounted = useIsMounted();

  return (
    <div className="-z-50 mx-auto mt-10 flex h-60 flex-col items-center justify-center gap-y-6">
      {isMounted && (theme === 'light' ? <LightBoard /> : <DarkBoard />)}
      <ToggleButton />
    </div>
  );
}
