'use client';

import DeleteIcon from '@public/svg/delete-24.svg';
import { useState } from 'react';
import { type UseFormReturn, useWatch } from 'react-hook-form';

import { Button, ButtonWrapper } from '@/components/Button';
import { AnimatePortal, PopupContainer } from '@/components/Overlay';
import Spacing from '@/components/Spacing';
import { fadeInOut } from '@/constants';
import { useToast } from '@/hooks';

import type { Join1ContextValue } from '../../../components/Join1Context';
import PopupHeader from '../../../components/PopupHeader';
import StepTitle from '../../../components/StepTitle';
import Keywords from './Keywords';

type MyKeywordPopupProps = {
  useForm: UseFormReturn<Join1ContextValue>;
  onClose: VoidFunction;
  isOpen: boolean;
};

export default function MyKeywordPopup({ useForm, onClose, isOpen }: MyKeywordPopupProps) {
  const { control, setValue } = useForm;
  const keywords = useWatch({ name: 'keywords', control });

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

  const handleAddButton = () => {
    setValue('keywords', tempKeywords);
    onClose();
  };

  return (
    <PopupContainer isOpen={isOpen} key="popup">
      <PopupHeader key="keyword-header" text="내 키워드" onClose={onClose} {...fadeInOut} />
      <StepTitle
        topTitle="나를 소개하는"
        bottomTitle="키워드를 선택해주세요."
        subDescription="5개까지 선택 가능"
      />
      <Keywords handleOnClick={handleTagClick} keywords={tempKeywords} />
      <Spacing size={86} />
      <ul className="max-width fixed inset-x-0 bottom-[112px] mx-auto flex h-20 w-full snap-x snap-mandatory items-center gap-x-2 overflow-scroll border-t border-t-gray-100 bg-gray-50 px-5">
        {tempKeywords.map((keyword, index) => (
          <li
            key={index}
            onClick={() => handleTagClick(keyword)}
            className="flex h-10 w-fit cursor-pointer snap-center items-center justify-center gap-x-1 whitespace-nowrap rounded-[48px] border border-gray-100 bg-white pl-4 pr-3 text-sm text-gray-900"
          >
            {keyword}
            <DeleteIcon />
          </li>
        ))}
      </ul>
      <ButtonWrapper>
        <Button onClick={handleAddButton} disabled={!tempKeywords.length} className="px-5">
          추가하기
        </Button>
      </ButtonWrapper>
    </PopupContainer>
  );
}
