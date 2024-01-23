'use client';

import Input from '@/components/common/Input';
import { cn } from '@/utils/cn';
import { useState } from 'react';
import type { SetStateAction, Dispatch } from 'react';
import { useForm } from 'react-hook-form';

type DirectInputSection = {
  setKeywordList: Dispatch<SetStateAction<string[]>>;
  keywordList: string[];
};

type FieldValues = {
  keywordInput: string;
};

export default function DirectInputSection({ setKeywordList, keywordList }: DirectInputSection) {
  const [isActive, setIsActive] = useState(false);
  const {
    register,
    resetField,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const handleOnSubmit = (keyword: FieldValues) => {
    const { keywordInput: value } = keyword;
    if (!keyword) return;

    if (keywordList.includes(value)) {
      alert('중복된 키워드입니다.'); // TODO: 추후 토스트 메시지 대체
      return;
    }

    setKeywordList((prev) => {
      return [...prev, value];
    });
    resetField('keywordInput');
  };

  return (
    <div className="flex w-full flex-col">
      <button
        onClick={() => setIsActive((prev) => !prev)}
        className={cn(
          `mb-2 flex h-8 w-fit cursor-pointer items-center justify-center whitespace-nowrap rounded-[48px] border border-gray-100 bg-transparent px-5 text-xs font-medium text-gray-900 dark:border-gray-800 dark:text-white`,
          {
            'border-primary-400 text-primary-400 dark:border-primary-400 dark:text-primary-400':
              isActive,
          },
        )}
      >
        + 직접 입력
      </button>
      {isActive && (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Input
            register={register('keywordInput', {
              required: true,
              pattern: {
                value: /^[a-zA-Z0-9가-힣]*$/,
                message: '한글, 영어, 숫자만 허용됩니다.',
              },
            })}
            id="keyword-input"
            placeholder="키워드를 입력해주세요."
            isDark
            error={errors.keywordInput?.message}
          />
        </form>
      )}
    </div>
  );
}
