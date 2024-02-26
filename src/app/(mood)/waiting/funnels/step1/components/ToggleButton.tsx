'use client';

import { cn } from '@/utils/cn';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import DarkToggleIcon from '@public/svg/dark-toggle-14.svg';
import LightToggleIcon from '@public/svg/light-toggle-14.svg';
import { useIsMounted } from '@/hooks';

export default function ToggleButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  return (
    <div className="relative flex items-center">
      <button
        className={cn(
          `flex h-8 w-[60px] items-center rounded-[38px] bg-primary-400 transition duration-300 dark:bg-gray-800`,
        )}
        onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
        {...props}
      />
      <motion.button
        animate={{
          translateX: theme === 'dark' ? 26 : 0,
        }}
        className="absolute ml-0.5 flex h-7 w-7 items-center justify-center rounded-[38px] bg-white"
        onClick={() => (theme === 'light' ? setTheme('dark') : setTheme('light'))}
      >
        {theme === 'light' ? <LightToggleIcon /> : <DarkToggleIcon />}
      </motion.button>
    </div>
  );
}
