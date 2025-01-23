import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import { colorKeys } from '@/styles';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'text-color': [
        {
          text: [...colorKeys],
        },
      ],
    },
  },
});

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
