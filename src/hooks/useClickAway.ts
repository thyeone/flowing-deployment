import { useEffect, useRef } from 'react';

const useClickAway = <T extends HTMLElement>(event: VoidFunction) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickAway = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        event();
      }
    };

    document.addEventListener('click', handleClickAway, true);

    return () => {
      document.removeEventListener('click', handleClickAway, true);
    };
  }, [ref, event]);

  return ref;
};

export default useClickAway;
