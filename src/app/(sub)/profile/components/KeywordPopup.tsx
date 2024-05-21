'use client';

import CheckIcon from '@public/svg/check-24.svg';
import CloseIcon from '@public/svg/close-24.svg';
import DeleteIcon from '@public/svg/delete-24.svg';
import PlusIcon from '@public/svg/plus-24.svg';
import { useState } from 'react';
import { type UseFormReturn, useWatch } from 'react-hook-form';

import { Button, ButtonWrapper } from '@/components/Button';
import { Header } from '@/components/Header';
import { PopupContainer } from '@/components/Overlay';
import Spacing from '@/components/Spacing';
import { KEYWORD_LIST } from '@/constants';
import { useToast } from '@/hooks';
import { cn } from '@/utils';

import type { ProfileContextValue } from './ProfileContext';

type KeywordPopupProps = OverlayProps & {
  useForm: UseFormReturn<ProfileContextValue>;
};

export default function KeywordPopup({ isOpen, onClose, useForm }: KeywordPopupProps) {
  const { control, setValue } = useForm;
  const keywords = useWatch({
    control,
    name: 'keywords',
  });
  const [tempKeywords, setTempKeywords] = useState<string[]>(keywords ?? []);

  const { openToast } = useToast();

  const handleTagClick = (keyword: string) => {
    if (tempKeywords.length === 5 && !tempKeywords.includes(keyword)) {
      openToast({ type: 'warning', message: '키워드는 최대 5개까지 선택할 수 있어요.' });
      return;
    }

    if (tempKeywords.includes(keyword)) {
      setTempKeywords((prev) => {
        return prev.filter((tag) => tag !== keyword);
      });
      return;
    }

    setTempKeywords((prev) => {
      return [...prev, keyword];
    });
  };

  const handleEditButton = () => {
    setValue('keywords', tempKeywords);
    onClose();
  };

  return (
    <PopupContainer isOpen={isOpen}>
      <Header>
        <Header.Center className="text-gray-900">내 키워드 수정</Header.Center>
        <Header.Right>
          <button type="button" onClick={onClose}>
            <CloseIcon />
          </button>
        </Header.Right>
      </Header>
      <h1 className="text-xl font-bold">
        나를 소개하는 <br />
        키워드를 선택해 주세요
      </h1>
      <p className="mt-2 text-xs text-gray-500">5개까지 선택 가능</p>
      <Spacing size={20} />
      <ul className="mb-[60px] flex flex-wrap gap-2">
        {KEYWORD_LIST.map((tag, index) => (
          <li
            key={index}
            onClick={() => handleTagClick(String(tag))}
            className={cn(
              `flex h-10 w-fit cursor-pointer items-center justify-center gap-x-1 rounded-[48px] border border-gray-100 bg-transparent pl-4 pr-3 text-sm text-gray-900`,
              {
                'border-primary-400 text-primary-400': tempKeywords.includes(tag),
              },
            )}
          >
            {tag}
            {tempKeywords.includes(tag) ? <CheckIcon /> : <PlusIcon />}
          </li>
        ))}
      </ul>
      <ul className="max-width fixed inset-x-0 bottom-[112px] mx-auto flex h-20 w-full snap-x snap-mandatory items-center gap-x-2 overflow-scroll border-t border-t-gray-100 bg-gray-50 px-5">
        {tempKeywords.map((keyword, index) => (
          <li
            key={index}
            className="flex h-10 w-fit snap-center items-center justify-center gap-x-1 whitespace-nowrap rounded-[48px] border border-gray-100 bg-white pl-4 pr-3 text-sm text-gray-900"
          >
            {keyword}
            <button type="button" onClick={() => handleTagClick(keyword)}>
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>
      <ButtonWrapper>
        <Button type="button" disabled={!tempKeywords.length} onClick={handleEditButton}>
          수정
        </Button>
      </ButtonWrapper>
    </PopupContainer>
  );
}
