'use client';

import CheckIcon from '@public/svg/check-24.svg';
import CloseIcon from '@public/svg/close-24.svg';
import DeleteIcon from '@public/svg/delete-24.svg';
import PlusIcon from '@public/svg/plus-24.svg';
import { useState } from 'react';
import { type UseFormReturn, useWatch } from 'react-hook-form';
import 'swiper/css';

import Button from '@/components/Button/Button';
import ButtonWrapper from '@/components/Button/ButtonWrapper';
import EmblaCarousel from '@/components/EmblaCarousel';
import { Header } from '@/components/Header';
import ItemList from '@/components/ItemList';
import { PopupContainer } from '@/components/Overlay';
import Spacing from '@/components/layout/Spacing';
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
          <button onClick={onClose}>
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
      <ItemList
        direction="row"
        data={KEYWORD_LIST}
        renderItem={(tag, index) => (
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
        )}
        className="flex h-[calc(100dvh-320px)] flex-wrap content-start gap-2 overflow-y-auto pb-[46px]"
      />
      {tempKeywords.length > 0 && (
        <EmblaCarousel
          options={{
            dragFree: true,
          }}
          className="max-width fixed inset-x-0 bottom-[92px] mx-auto h-[72px] w-full border-t border-t-gray-100 bg-gray-50"
        >
          <EmblaCarousel.Content className="mx-5 h-[72px] items-center gap-2">
            {tempKeywords.map((keyword, index) => (
              <EmblaCarousel.Item
                key={index}
                className="flex h-10 w-fit cursor-pointer items-center justify-center gap-x-1 whitespace-nowrap rounded-[48px] border border-gray-100 bg-white pl-4 pr-3 text-sm text-gray-900"
                onClick={() => handleTagClick(keyword)}
              >
                {keyword}
                <DeleteIcon />
              </EmblaCarousel.Item>
            ))}
          </EmblaCarousel.Content>
        </EmblaCarousel>
      )}
      <ButtonWrapper>
        <Button disabled={!tempKeywords.length} onClick={handleEditButton}>
          수정
        </Button>
      </ButtonWrapper>
    </PopupContainer>
  );
}
