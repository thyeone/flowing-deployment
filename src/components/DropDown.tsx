import { motion } from 'framer-motion';

import { cn } from '@/utils';

type DropDownProps = {
  open: boolean;
};

const wrapperVariants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

function DropDown({ children, open }: PropsWithStrictChildren<DropDownProps>) {
  return (
    <motion.div
      animate={open ? 'open' : 'closed'}
      initial={wrapperVariants.closed}
      variants={wrapperVariants}
      className="absolute right-0 top-full z-10 min-w-[148px] origin-top overflow-hidden rounded-xl bg-white shadow-md"
    >
      {children}
    </motion.div>
  );
}

function Title({ children, className }: PropsWithStrictChildren<{ className?: string }>) {
  return <p className={cn('py-2 text-center text-xs text-gray-500', className)}>{children}</p>;
}

function Option({ children, className }: PropsWithStrictChildren<{ className?: string }>) {
  return <li className={cn('list-none border-t border-gray-200', className)}>{children}</li>;
}

export default Object.assign(DropDown, {
  Title,
  Option,
});
