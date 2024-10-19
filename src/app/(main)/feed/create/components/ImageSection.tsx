import PlusIcon from '@public/svg/plus.svg';
import XcircleIcon from '@public/svg/x-circle-24.svg';
import Image from 'next/image';
import { useRef } from 'react';
import { useFieldArray } from 'react-hook-form';
import 'swiper/css';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import { usePostFile } from '@/apis/file/mutations';
import { useToast } from '@/hooks';
import { compressImage } from '@/utils';

import { useFeedCreateFormContext } from './FeedCreateFormContext';

export default function ImageSection() {
  const { control, watch } = useFeedCreateFormContext();
  const { fields, append, remove, update } = useFieldArray({
    control: control,
    name: 'images',
  });
  const images = watch('images');
  const swiperRef = useRef<SwiperRef>(null);
  const { mutateAsync: postFile } = usePostFile();

  const { openToast } = useToast();

  const uploadMultipleImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const compressedImages = await Promise.all(
        [...(e.target.files ?? [])].map((file) => compressImage(file)),
      );

      const fileResponses = await Promise.all(compressedImages.map((image) => postFile(image)));

      append(fileResponses);
    } catch (error) {
      openToast({ message: (error as Error).message, type: 'warning' });
    } finally {
      e.target.value = '';
    }
  };

  const changeImage = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;
      const image = await compressImage(file);
      const fileResponse = await postFile(image);
      update(index, fileResponse);
    } catch (error) {
      openToast({ message: (error as Error).message, type: 'warning' });
    } finally {
      e.target.value = '';
    }
  };

  return (
    <div className="flex flex-col gap-4 py-3">
      <div className="flex items-center gap-3 px-5">
        <label className="cursor-pointer">
          <PlusIcon />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            multiple
            onChange={uploadMultipleImages}
          />
        </label>
        <span className="text-sm text-gray-400">이미지 추가</span>
      </div>

      <div>
        <Swiper
          ref={swiperRef}
          slidesPerView={'auto'}
          centeredSlides
          spaceBetween={8}
          className="w-full"
        >
          {fields.map((field, index) => (
            <SwiperSlide key={field.id} className="aspect-video !w-[calc(100%-40px)]">
              <div className="relative size-full rounded-xl bg-gray-600">
                <Image src={images[index].path} alt="upload-image" fill objectFit="contain" />
                <label
                  className={
                    'absolute left-4 top-4 z-20 flex h-9 w-fit cursor-pointer items-center justify-center rounded-[28px] bg-gray-900 px-3 text-xs text-white'
                  }
                >
                  변경
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      changeImage(e, index);
                    }}
                  />
                </label>

                <button
                  type="button"
                  className={
                    'absolute right-4 top-4 z-20 flex items-center justify-center rounded-full text-white'
                  }
                  onClick={() => {
                    remove(index);
                  }}
                >
                  <XcircleIcon />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
