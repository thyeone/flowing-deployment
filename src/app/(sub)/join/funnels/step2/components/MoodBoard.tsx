'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useWatch } from 'react-hook-form';

import { fadeInOut } from '@/constants';
import { useIsMounted } from '@/hooks';
import usePreloadImages from '@/hooks/usePreloadImage';

import { useJoin1Context } from '../../../components/Join1Context';
import ToggleButton from './ToggleButton';

export default function MoodBoard() {
  const { theme } = useTheme();
  const isMounted = useIsMounted();
  const { control } = useJoin1Context();

  const gender = useWatch({
    control,
    name: 'gender',
  }).toLowerCase();

  usePreloadImages([
    '/image/light-male-profile.png',
    '/image/light-female-profile.png',
    '/image/dark-female-profile.png',
    '/image/dark-male-profile.png',
  ]);

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
