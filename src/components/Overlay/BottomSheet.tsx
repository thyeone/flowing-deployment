'use client';

import CloseIcon from '@public/svg/close-24.svg';
import { HTMLMotionProps, type PanInfo, motion } from 'framer-motion';
import { forwardRef } from 'react';

import { springTransition } from '@/constants';
import { MIN_Y } from '@/constants/bottomSheet';
import useBottomSheet from '@/hooks/useBottomSheet';

import AnimatePortal from './AnimatePortal';
import BottomDim from './BottomDim';

type BottomSheetProps = HTMLMotionProps<'div'> & {
  isOpen: boolean;
  onClose: VoidFunction;
  headerTitle?: string;
};

/**
 * @description
 * 나타날 때 화면 하단에서 올라오고 사라질 때 화면 하단으로 내려가는 애니메이션이 적용되어 있습니다.
 * 바텀시트 외부를 클릭할 경우 창이 닫힙니다.
 */

const BottomSheet = forwardRef<HTMLDivElement, PropsWithStrictChildren<BottomSheetProps>>(
  ({ children, isOpen, onClose, headerTitle, ...rest }, ref) => {
    const {
      maxScrollHeight: MAX_Y,
      maxBottomSheetHeight,
      onDragEnd,
    } = useBottomSheet(() => onClose());

    return (
      <AnimatePortal isOpen={isOpen}>
        <BottomDim>
          <motion.div
            className={`max-width absolute bottom-0 z-50 h-fit w-full overflow-hidden rounded-t-2xl bg-white px-5 pt-3`}
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
                <div className="relative mt-[43px] flex w-full items-center">
                  <h1 className="absolute inset-x-0 text-center text-lg font-bold text-gray-900">
                    {headerTitle}
                  </h1>
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
  },
);

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
