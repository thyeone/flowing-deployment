import { fadeInOut } from '@/constants';
import { motion } from 'framer-motion';

export default function PopupContainer({ children }: PropsWithStrictChildren) {
  return (
    <motion.div
      {...fadeInOut}
      className="fixed inset-x-0 z-modal mx-auto mt-14 h-full w-full max-w-[430px] overflow-hidden bg-white px-5"
    >
      {children}
    </motion.div>
  );
}
