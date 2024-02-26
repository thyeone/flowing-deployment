import React from 'react';
import { AnimatePortal } from '@/components/Modal';
import PopupContainer from '@/components/Modal/PopupContainer';
import Keywords from './Keywords';
import { useWatch, type UseFormReturn } from 'react-hook-form';
import type { Join1ContextValue } from '../../../components/Join1Context';
import Spacing from '@/components/Spacing';
import Button from '@/components/Button/Button';
import DeleteIcon from '@public/svg/delete-24.svg';
import { ButtonWrapper } from '@/components/Button';
import PopupHeader from '../../../components/PopupHeader';
import { fadeInOut } from '@/constants';
import StepTitle from '../../../components/StepTitle';

type MyKeywordPopupProps = {
  useForm: UseFormReturn<Join1ContextValue>;
  onClose: VoidFunction;
  isOpen: boolean;
};

export default function MyKeywordPopup({ useForm, onClose, isOpen }: MyKeywordPopupProps) {
  const { control, setValue } = useForm;
  const keywords = useWatch({ name: 'keywords', control });

  const handleRemoveKeyword = (keyword: string) => {
    setValue(
      'keywords',
      keywords.filter((value) => value !== keyword),
      {
        shouldDirty: true,
      },
    );
  };

  return (
    <AnimatePortal isOpen={isOpen}>
      <PopupHeader key="keyword-header" text="내 키워드" onClose={onClose} {...fadeInOut} />
      <PopupContainer key="popup">
        <StepTitle
          topTitle="나를 소개하는"
          bottomTitle="키워드를 선택해주세요."
          subDescription="5개까지 선택 가능"
        />
        <Keywords useForm={useForm} />
        <Spacing size={86} />
        <ul className="fixed inset-x-0 bottom-[112px] mx-auto flex h-20 w-full max-w-[430px] snap-x snap-mandatory items-center gap-x-2 overflow-scroll border-t border-t-gray-100 bg-gray-50 px-5">
          {keywords.map((keyword, index) => (
            <li
              key={index}
              onClick={() => handleRemoveKeyword(keyword)}
              className="flex h-10 w-fit cursor-pointer snap-center items-center justify-center gap-x-1 whitespace-nowrap rounded-[48px] border border-gray-100 bg-white pl-4 pr-3 text-sm text-gray-900"
            >
              {keyword}
              <DeleteIcon />
            </li>
          ))}
        </ul>
        <ButtonWrapper>
          <Button onClick={onClose} disabled={!keywords.length} className="px-5">
            추가하기
          </Button>
        </ButtonWrapper>
      </PopupContainer>
    </AnimatePortal>
  );
}
