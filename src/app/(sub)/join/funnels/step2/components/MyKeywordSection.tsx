'use client';

import { useWatch } from 'react-hook-form';

import DeleteIcon from '@/assets/Delete';
import PlusIcon from '@/assets/Plus';
import Spacing from '@/components/Spacing';
import useOverlay from '@/hooks/useOverlay';
import { cn } from '@/utils/cn';

import { useJoin1Context } from '../../../components/Join1Context';
import MyKeywordModal from './MyKeywordPopup';
import SectionLabel from './SectionLabel';

export default function MykeywordSection() {
  const useForm = useJoin1Context();
  const { control, setValue } = useForm;
  const { open } = useOverlay();

  const keywords = useWatch({
    control,
    name: 'keywords',
  });

  const handleKeywordClick = (keyword: string) => {
    setValue(
      'keywords',
      keywords.filter((value) => value !== keyword),
      {
        shouldDirty: true,
      },
    );
  };

  return (
    <>
      <SectionLabel label="내 키워드" isCheck={!!keywords.length} />
      {keywords.length ? (
        <ul className="mt-3 flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <li
              key={index}
              className="flex h-10 w-fit cursor-pointer items-center justify-center gap-x-1 whitespace-nowrap rounded-[48px] border border-gray-100 bg-transparent pl-4 pr-3 text-sm dark:border-gray-800"
              onClick={() => handleKeywordClick(keyword)}
            >
              {keyword}
              <DeleteIcon />
            </li>
          ))}
        </ul>
      ) : (
        <button
          type="button"
          className={cn(
            `h-[104px] w-full rounded-lg border border-dashed border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800`,
          )}
          onClick={() => {
            open(({ close, isOpen }) => (
              <MyKeywordModal useForm={useForm} onClose={close} isOpen={isOpen} />
            ));
          }}
        >
          <span className="mx-4 flex flex-col items-center gap-y-2 text-sm text-gray-600 dark:text-gray-300">
            <PlusIcon className="text-gray-400 dark:text-gray-700" />
            나를 소개하는 키워드를 선택해주세요
          </span>
        </button>
      )}
      <Spacing size={32} />
    </>
  );
}
