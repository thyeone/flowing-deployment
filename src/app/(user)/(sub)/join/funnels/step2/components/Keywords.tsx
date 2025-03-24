'use client';

import CheckIcon from '@public/svg/check-24.svg';
import PlusIcon from '@public/svg/plus-24.svg';

import { KEYWORD_LIST } from '@/constants/keywords';
import { cn } from '@/utils/cn';

type KeywordsProps = {
  handleOnClick: (keyword: string) => void;
  keywords: string[];
};

export default function Keywords({ handleOnClick, keywords }: KeywordsProps) {
  return (
    <ul className="mb-[60px] flex flex-wrap gap-2">
      {KEYWORD_LIST.map((tag, index) => (
        <li
          key={index}
          onClick={() => handleOnClick(String(tag))}
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
