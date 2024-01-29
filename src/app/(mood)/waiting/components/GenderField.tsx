'use client';

import { cn } from '@/utils/cn';
import CheckIcon from '@public/svg/check-16.svg';
import { useMoodContext } from './MoodContext';
import { useWatch } from 'react-hook-form';

type GenderButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function GenderField({ className, ...rest }: GenderButtonProps) {
  const { setValue, control } = useMoodContext();

  const gender = useWatch({
    control,
    name: 'gender',
  });

  return (
    <>
      <div className="mb-4 mt-8 flex items-center gap-x-1">
        <h3 className="font-bold text-gray-900 dark:text-white">성별</h3>
        {gender && <CheckIcon />}
      </div>
      <div className="flex gap-x-2">
        <button
          {...rest}
          onClick={() =>
            setValue('gender', 'MALE', {
              shouldDirty: true,
            })
          }
          className={cn(
            `h-[52px] w-full flex-1 rounded-lg border border-gray-200 bg-transparent dark:border-gray-800`,
            {
              'border-primary-400 text-primary-400 dark:border-primary-400 dark:text-primary-400':
                gender === 'MALE',
            },
            className,
          )}
        >
          남성
        </button>
        <button
          {...rest}
          onClick={() => setValue('gender', 'FEMALE')}
          className={cn(
            `h-[52px] w-full flex-1 rounded-lg border border-gray-200 bg-transparent dark:border-gray-800`,
            {
              'border-primary-400 text-primary-400 dark:border-primary-400 dark:text-primary-400':
                gender === 'FEMALE',
            },
            className,
          )}
        >
          여성
        </button>
      </div>
    </>
  );
}
