import type { AnimationProps } from 'framer-motion';

export const fadeInOut: AnimationProps = {
  initial: { opacity: 0, willChange: 'opacity' },
  animate: { opacity: 1, willChange: 'opacity' },
  exit: { opacity: 0, willChange: 'opacity' },
  transition: { ease: 'easeOut', duration: 0.5, willChange: 'opacity' },
};
