'use client';

import { useTheme } from 'next-themes';
import ToggleButton from './ToggleButton';
import { useIsMounted } from '@/hooks';
import { useMoodContext } from '../../../components/MoodContext';
import { useWatch } from 'react-hook-form';
import { motion } from 'framer-motion';
import { fadeInOut } from '@/constants';

export default function MoodBoard() {
  const { theme } = useTheme();
  const isMounted = useIsMounted();
  const { control } = useMoodContext();

  const gender = useWatch({
    control,
    name: 'gender',
  });

  return (
    <div className="-z-50 mx-auto mb-6 mt-8 flex h-52 flex-col items-center justify-center gap-y-6">
      {isMounted && (
        <motion.img
          layout
          key={`${theme}-${gender}`}
          src={`/image/${theme}-${gender}-profile.png`}
          width={128}
          height={132}
          alt="profile"
          {...fadeInOut}
        />
      )}
      <ToggleButton />
    </div>
  );
}
