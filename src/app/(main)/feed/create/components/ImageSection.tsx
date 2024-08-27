import PlusIcon from '@public/svg/plus.svg';
import XcircleIcon from '@public/svg/x-circle-24.svg';
import Image from 'next/image';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ImageSection() {
  const form = useFormContext();
  const { fields, append, remove, update } = useFieldArray({
    control: form.control,
    name: 'images',
  });
  const images = form.watch('images');

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
            onChange={(e) => {
              const newImages = [...(e.target.files ?? [])].map((file) => ({
                file,
                preview: URL.createObjectURL(file),
              }));
              append(newImages);
              e.target.value = '';
            }}
          />
        </label>
        <span className="text-sm text-gray-400">이미지 추가</span>
      </div>

      <div className="pl-5">
        <Swiper slidesPerView={1} spaceBetween={1}>
          {fields.map((field, index) => (
            <SwiperSlide key={field.id}>
              <div className="relative aspect-video w-[calc(100%-20px)] rounded-xl bg-gray-600">
                <Image src={images[index].preview} alt="upload-image" fill objectFit="contain" />

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
                      const file = e.target.files?.[0];
                      if (!file) return;

                      update(index, { file, preview: URL.createObjectURL(file) });
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
