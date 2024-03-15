import { Toast } from '@/components/Overlay';

import { useOverlay } from '.';

const useToast = () => {
  const { open, close, exit } = useOverlay({ delay: 1500 });

  const openToast = ({ message, type }: { message: string; type: 'warning' | 'default' }) =>
    open(({ isOpen }) => (
      <Toast isOpen={isOpen} type={type}>
        {message}
      </Toast>
    ));

  return { openToast, close, exit };
};

export default useToast;
