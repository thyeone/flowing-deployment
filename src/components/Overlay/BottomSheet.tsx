'use client';

import CloseIcon from '@public/svg/close-24.svg';
import { HTMLMotionProps, motion } from 'framer-motion';
import { forwardRef } from 'react';

import { springTransition } from '@/constants';
import useBottomSheet from '@/hooks/useBottomSheet';
import { cn } from '@/utils';

import Flex from '../layout/Flex';
import AnimatePortal from './AnimatePortal';
import BottomDim from './BottomDim';

type BottomSheetProps = HTMLMotionProps<'div'> & {
  isOpen: boolean;
  onClose: VoidFunction;
  headerTitle?: string;
};

const BottomSheet = (
  { children, isOpen, onClose, headerTitle, ...rest }: PropsWithStrictChildren<BottomSheetProps>,
  ref: React.ForwardedRef<HTMLDivElement>,
) => {
  const {
    maxScrollHeight: MAX_Y,
    maxBottomSheetHeight,
    onDragEnd,
  } = useBottomSheet(() => onClose());

  return (
    <AnimatePortal isOpen={isOpen}>
      <BottomDim>
        <motion.div
          className={`max-width fixed bottom-0 z-50 h-fit w-full overflow-hidden rounded-t-2xl bg-white px-5 pt-3`}
          style={{ maxHeight: maxBottomSheetHeight }}
          ref={ref}
          initial="hidden"
          animate="visible"
          exit="hidden"
          {...springTransition}
          variants={{
            visible: { y: '0%' },
            hidden: { y: '100%' },
          }}
          drag="y"
          dragConstraints={{ top: 0, bottom: MAX_Y }}
          onDragEnd={onDragEnd}
          dragElastic={0}
          dragSnapToOrigin
          {...rest}
        >
          <header className="relative flex w-full cursor-pointer flex-col items-center">
            <div className="h-1 w-[45px] rounded-[10px] bg-gray-300" />
            {headerTitle && (
              <div className="mt-2 flex h-14 items-center">
                <h1 className="text-center text-lg font-bold text-gray-900">{headerTitle}</h1>
                <button onClick={onClose} className="absolute right-0">
                  <CloseIcon />
                </button>
              </div>
            )}
          </header>
          {children}
        </motion.div>
      </BottomDim>
    </AnimatePortal>
  );
};

function Footer({ children, className }: PropsWithStrictChildren<{ className?: string }>) {
  return (
    <Flex as="footer" centered className={cn('mt-auto h-[92px] w-full bg-white', className)}>
      {children}
    </Flex>
  );
}

export default Object.assign(forwardRef(BottomSheet), {
  Footer,
});
