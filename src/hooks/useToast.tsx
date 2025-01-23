import { Toast } from '@/components/Overlay';

import { useOverlay } from '.';

const useToast = () => {
  const { open } = useOverlay({ delay: 1500, exitOnUnmount: false });

  const openToast = ({
    message,
    type = 'default',
  }: {
    message: string;
    type?: 'warning' | 'default';
  }) =>
    open(({ isOpen }) => (
      <Toast isOpen={isOpen} type={type}>
        {message}
      </Toast>
    ));

  return { openToast };
};

export default useToast;
