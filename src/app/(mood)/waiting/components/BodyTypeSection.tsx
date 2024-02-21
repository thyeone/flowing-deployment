'use client';

import { cn } from '@/utils/cn';
import { useMoodContext } from './MoodContext';
import BodyTypeSelectBox from './BodyTypeDropBox';
import Spacing from '@/components/common/Spacing';
import { useWatch } from 'react-hook-form';
import CheckIcon from '@public/svg/check-16.svg';

export default function BodyTypeSection() {
  const useForm = useMoodContext();
  const { control, register } = useForm;
  const height = useWatch({
    control,
    name: 'height',
  });
  const bodyType = useWatch({
    control,
    name: 'bodyType',
  });

  return (
    <>
      <div className="mb-2 flex items-center gap-x-1">
        <label htmlFor="bodytype-input" className="text-sm text-gray-600 dark:text-gray-400">
          키 / 체형
        </label>
        {height && bodyType && <CheckIcon />}
      </div>
      <div className="relative flex gap-x-2">
        <div className="relative w-full flex-[2_2_0%]">
          <input
            {...register('height')}
            id="bodytype-input"
            placeholder="예) 170"
            className={cn(
              `h-[52px] w-full rounded-lg border-[1px] border-gray-100 bg-transparent px-4 text-sm outline-none placeholder:text-base focus:border-primary-400 dark:border-gray-800 dark:text-white placeholder:dark:text-gray-700`,
            )}
          />
          <span className="absolute right-4 top-3">cm</span>
        </div>
        <BodyTypeSelectBox useForm={useForm} />
      </div>
      <Spacing size={28} />
    </>
  );
}
