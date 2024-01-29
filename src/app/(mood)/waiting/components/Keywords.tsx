'use client';

import { KEYWORD_LIST } from '@/constants/keywords';
import { cn } from '@/utils/cn';
import { useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useMoodContext } from './MoodContext';
import DirectInputSection from './DirectInputSection';

export default function Keywords() {
  const [keywordList, setKeywordList] = useState<string[]>([...KEYWORD_LIST]);
  const { control, setValue } = useMoodContext();

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
      {keywordList.map((tag, index) => (
        <li
          key={index}
          onClick={() => handleTagClick(String(tag))}
          className={cn(
            `flex h-8 w-fit cursor-pointer items-center justify-center rounded-[48px] border border-gray-100 bg-transparent px-5 text-xs font-medium text-gray-900 dark:border-gray-800 dark:text-white`,
            {
              'border-primary-400 text-primary-400 dark:border-primary-400 dark:text-primary-400':
                keywords.includes(tag),
            },
          )}
        >
          {tag}
        </li>
      ))}
      <DirectInputSection setKeywordList={setKeywordList} keywordList={keywordList} />
    </ul>
  );
}
