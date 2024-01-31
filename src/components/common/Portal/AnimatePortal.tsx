import { AnimatePresence } from 'framer-motion';
import Portal from './Portal';

type AnimatePortalProps = {
  isOpen: boolean;
};

/**
 * @description unmount시 exit 애니메이션을 적용하기 위해 AnimatePresence와 함께 사용합니다.
 */

export default function AnimatePortal({
  children,
  isOpen,
}: PropsWithStrictChildren<AnimatePortalProps>) {
  return (
    <Portal>
      <AnimatePresence>{isOpen && children}</AnimatePresence>
    </Portal>
  );
}
