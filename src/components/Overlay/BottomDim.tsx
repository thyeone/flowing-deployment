import { motion } from 'framer-motion';

export default function BottomDim({ children }: PropsWithStrictChildren) {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="max-width fixed inset-x-0 top-0 z-bottomDim mx-auto h-[100dvh] w-screen bg-[rgba(0,0,0,0.6)]"
    >
      {children}
    </motion.div>
  );
}
