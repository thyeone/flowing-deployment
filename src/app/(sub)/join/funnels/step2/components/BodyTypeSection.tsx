'use client';

import { useWatch } from 'react-hook-form';

import Spacing from '@/components/Spacing';
import { cn } from '@/utils/cn';

import { useJoin1Context } from '../../../components/Join1Context';
import BodyTypeSelectBox from './BodyTypeDropBox';
import SectionLabel from './SectionLabel';

export default function BodyTypeSection() {
  const useForm = useJoin1Context();
  const {
    control,
    register,
    formState: { errors },
  } = useForm;
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
      <SectionLabel label="키 / 체형" isCheck={!!height && !!bodyType && !errors.height} />
      <div className="relative flex gap-x-2">
        <div className="relative w-full flex-[2_2_0%]">
          <input
            {...register('height', {
              required: true,
              pattern: /^(1[3-9][0-9]|2[0-1][0-9]|220)$/,
            })}
            id="bodytype-input"
            placeholder="예) 170"
            className={cn(
              `f h-[52px] w-full rounded-lg border-[1px] border-gray-100 bg-transparent px-4 text-sm outline-none placeholder:text-base focus:border-primary-400 dark:border-gray-800 dark:text-white placeholder:dark:text-gray-700`,
            )}
          />
          <span className="absolute right-4 top-3">cm</span>
        </div>
        <BodyTypeSelectBox useForm={useForm} />
      </div>
      <Spacing size={32} />
    </>
  );
}
