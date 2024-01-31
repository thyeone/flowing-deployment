import { forwardRef } from 'react';
import { AnimatePortal } from '../Portal';
import BottomDim from './BottomDim';
import { motion } from 'framer-motion';

/**
 * @description
 * 나타날 때 화면 하단에서 올라오고 사라질 때 화면 하단으로 내려가는 애니메이션이 적용되어 있습니다.
 * 바텀시트 외부를 클릭할 경우 창이 닫힙니다.
 */

const BottomSheet = forwardRef<HTMLDivElement, PropsWithStrictChildren<{ isOpen: boolean }>>(
  ({ children, isOpen, ...rest }, ref) => {
    return (
      <AnimatePortal isOpen={isOpen}>
        <BottomDim>
          <motion.div
            className="absolute bottom-0 left-0 h-[464px] w-full max-w-[430px] rounded-t-2xl bg-white px-4 py-5"
            ref={ref}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              type: 'spring',
              damping: 40,
              stiffness: 350,
            }}
            variants={{
              visible: { y: '0%' },
              hidden: { y: '100%' },
            }}
            {...rest}
          >
            {children}
          </motion.div>
        </BottomDim>
      </AnimatePortal>
    );
  },
);

BottomSheet.displayName = 'BottomSheet';

export default BottomSheet;
