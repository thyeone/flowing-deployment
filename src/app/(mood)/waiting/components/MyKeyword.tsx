'use client';

import CheckIcon from '@public/svg/check-16.svg';
import Keywords from './Keywords';
import { useMoodContext } from './MoodContext';
import { useWatch } from 'react-hook-form';

export default function Mykeyword() {
  const { control } = useMoodContext();
  const keywords = useWatch({
    control,
    name: 'keywords',
  });

  return (
    <>
      <div className="mb-4 mt-8 flex items-center gap-x-1">
        <h3 className="font-bold text-gray-900 dark:text-white">나의 키워드</h3>
        {keywords.length !== 0 && <CheckIcon />}
      </div>
      <Keywords />
    </>
  );
}
