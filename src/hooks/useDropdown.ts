import { useState } from 'react';

import { useClickAway } from '.';

const useDropdown = () => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const ref = useClickAway<HTMLDivElement>(() => {
    onClose();
  });

  return {
    ref,
    open,
    setOpen,
  };
};

export default useDropdown;
