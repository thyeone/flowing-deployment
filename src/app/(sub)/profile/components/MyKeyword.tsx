'use client';

import CheckIcon from '@public/svg/check-24.svg';
import DeleteIcon from '@public/svg/delete-24.svg';
import { useWatch } from 'react-hook-form';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import Spacing from '@/components/layout/Spacing';
import { useOverlay } from '@/hooks';

import KeywordPopup from './KeywordPopup';
import { useProfileContext } from './ProfileContext';

export default function MyKeyword() {
  const useForm = useProfileContext();
  const { control, setValue } = useForm;

  const keywords = useWatch({
    control,
    name: 'keywords',
  });

  const { open } = useOverlay();

  const handleRemoveKeyword = (keyword: string) => {
    setValue(
      'keywords',
      keywords.filter((value) => value !== keyword),
    );
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-1">
          <label className="font-bold">내 키워드</label>
          {!!keywords.length && <CheckIcon />}
        </div>
        <span
          className="cursor-pointer text-sm text-gray-700"
          onClick={() =>
            open(({ isOpen, close }) => (
              <KeywordPopup isOpen={isOpen} onClose={close} useForm={useForm} />
            ))
          }
        >
          편집
        </span>
      </div>
      <Spacing size={16} />
      <div>
        <Swiper spaceBetween={8} slidesPerView="auto" className="w-full">
          {keywords.map((keyword, index) => (
            <SwiperSlide key={index} style={{ width: 'auto' }}>
              <div className="flex h-10 w-fit snap-center items-center justify-center gap-x-1 whitespace-nowrap rounded-[48px] border border-gray-200 bg-white pl-4 pr-3 text-sm">
                {keyword}
                <button onClick={() => handleRemoveKeyword(keyword)}>
                  <DeleteIcon />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
