'use client';

import { KEYWORD_LIST } from '@/constants/keywords';
import { cn } from '@/utils/cn';
import { type UseFormReturn, useWatch } from 'react-hook-form';
import { type MoodContextValue, useMoodContext } from './MoodContext';
import PlusIcon from '@public/svg/plus-24.svg';
import CheckIcon from '@public/svg/plus-checkbox-24.svg';

type KeywordsProps = {
  useForm: UseFormReturn<MoodContextValue>;
};

export default function Keywords({ useForm }: KeywordsProps) {
  const { control, setValue } = useForm;

  const keywords = useWatch({ name: 'keywords', control });

  const handleTagClick = (name: string) => {
    if (keywords.includes(name)) {
      setValue(
        'keywords',
        keywords.filter((tag) => tag !== name),
      );
      return;
    }

    setValue('keywords', [...keywords, name], {
      shouldDirty: true,
    });
  };

  return (
    <ul className="mb-[60px] flex flex-wrap gap-2">
      {KEYWORD_LIST.map((tag, index) => (
        <li
          key={index}
          onClick={() => handleTagClick(String(tag))}
          className={cn(
            `flex h-10 w-fit cursor-pointer items-center justify-center gap-x-1 rounded-[48px] border border-gray-100 bg-transparent pl-4 pr-3 text-sm text-gray-900`,
            {
              'border-primary-400 text-primary-400': keywords.includes(tag),
            },
          )}
        >
          {tag}
          {keywords.includes(tag) ? <CheckIcon /> : <PlusIcon />}
        </li>
      ))}
    </ul>
  );
}
