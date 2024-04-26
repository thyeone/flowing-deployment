import { type HTMLMotionProps, type MotionStyle, motion } from 'framer-motion';

import { springTransition } from '@/constants';
import { cn } from '@/utils';

type SliderProps = {
  index: number;
  onDragEnd: VoidFunction;
  className?: string;
};

export default function Slider({
  index,
  onDragEnd,
  className,
  children,
  ...rest
}: PropsWithStrictChildren<HTMLMotionProps<'header'>> & SliderProps) {
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      animate={{ translateX: `-${index * 100}%` }}
      dragSnapToOrigin={true}
      {...springTransition}
      onDragEnd={onDragEnd}
      className={cn('flex size-full cursor-grab active:cursor-grabbing', className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
