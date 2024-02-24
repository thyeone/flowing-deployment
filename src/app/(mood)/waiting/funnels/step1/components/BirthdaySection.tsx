'use client';

import { cn } from '@/utils/cn';
import CheckIcon from '@public/svg/check-16.svg';
import { useMoodContext } from '../../../components/MoodContext';
import { useWatch } from 'react-hook-form';
import Spacing from '@/components/Spacing';
import WaringIcon from '@public/svg/warning-16.svg';
import SectionLabel from './SectionLabel';

export default function BirthdaySection() {
  const {
    setValue,
    control,
    register,
    formState: { errors },
  } = useMoodContext();

  const birthday = useWatch({
    control,
    name: 'birthday',
  });
  const gender = useWatch({
    control,
    name: 'gender',
  });

  return (
    <>
      <SectionLabel label="생년월일" isCheck={!errors.birthday?.message && gender && !!birthday} />
      <div className="relative flex gap-x-2">
        <input
          {...register('birthday', {
            required: true,
            pattern: {
              value: /^\d{4}\.\d{2}\.\d{2}$/,
              message: 'YYYY.MM.DD 형식으로 입력해주세요.',
            },
            validate: (value) =>
              Number(value.slice(0, 4)) < 2006 || '2005년생 이후는 가입이 불가능합니다.',
          })}
          id="birthday-input"
          placeholder="예시) 2024.01.25"
          className={cn(
            `h-[52px] w-full flex-[2] rounded-xl border border-gray-200 bg-transparent px-4 text-sm outline-none placeholder:text-base focus:border-primary-400 dark:border-gray-800 dark:text-white placeholder:dark:text-gray-700`,
          )}
        />
        {errors.birthday?.message && (
          <p className="absolute top-full mt-2 inline-flex items-center gap-x-1 text-xs text-error">
            <WaringIcon />
            {errors.birthday?.message}
          </p>
        )}
        <div className="flex flex-1 gap-x-2">
          <button
            onClick={() =>
              setValue('gender', 'MALE', {
                shouldDirty: true,
              })
            }
            className={cn(
              `flex w-[60px] items-center justify-center rounded-xl border border-gray-300 dark:border-gray-800`,
              {
                'border-primary-300 text-primary-300 dark:border-primary-300 dark:text-primary-300 dark:placeholder:text-gray-700':
                  gender === 'MALE',
              },
            )}
          >
            남
          </button>
          <button
            onClick={() =>
              setValue('gender', 'FEMALE', {
                shouldDirty: true,
              })
            }
            className={cn(
              `flex w-[60px] items-center justify-center rounded-xl border border-gray-300 dark:border-gray-800`,
              {
                'border-primary-300 text-primary-300 dark:border-primary-300 dark:text-primary-300 dark:placeholder:text-gray-700':
                  gender === 'FEMALE',
              },
            )}
          >
            여
          </button>
        </div>
      </div>
      <Spacing size={32} />
    </>
  );
}
