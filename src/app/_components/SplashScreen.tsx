import { AnimatePresence, motion } from 'framer-motion';

import LogoIcon from '@/assets/LogoIcon';
import { fadeInOut } from '@/constants';

export default function SplashScreen({ isLoading }: { isLoading: boolean }) {
  return (
    <AnimatePresence>
      {!isLoading && (
        <main className="main-layout fixed z-50">
          <motion.div {...fadeInOut} className="flex h-full items-center justify-center bg-white">
            <LogoIcon />
          </motion.div>
        </main>
      )}
    </AnimatePresence>
  );
}
