'use client';

import LockIcon from '@public/svg/lock.svg';
import { useMotionValue } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

import type { ImageResponse } from '@/apis/profile';
import Slider from '@/components/Slider';
import { cn } from '@/utils';

export default function ProfileImageSlider({
  images,
  isBlur,
}: {
  images: ImageResponse[];
  isBlur: boolean;
}) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const x = useMotionValue(0);

  const handleDragEnd = () => {
    if (x.get() < -20) {
      setSliderIndex((prev) => (prev + 1) % images.length);
    } else if (x.get() > 20) {
      setSliderIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }
  };

  return (
    <>
      {isBlur ? (
        <div className="relative flex h-[335px] w-full items-center justify-center overflow-hidden rounded-xl">
          <Image
            src={images[sliderIndex].path}
            alt="profile"
            fill
            className="object-cover blur-[3px]"
          />
          <div className="z-10 flex flex-col items-center gap-y-3">
            <LockIcon />
            <p className="font-bold text-white">매칭 되었을 때 보여드려요</p>
          </div>
          <div className="absolute bottom-4 right-4 z-[1] flex h-6 w-[34px] items-center justify-center rounded-xl bg-[rgba(0,0,0,0.2)]">
            <span className="text-xs font-bold text-white">{`1 / ${images.length}`}</span>
          </div>
        </div>
      ) : (
        <div className={cn('relative h-[335px] w-full overflow-hidden rounded-xl bg-transparent')}>
          <Slider index={sliderIndex} onDragEnd={handleDragEnd} style={{ x }} className="relative">
            {images.map(({ id, path }, idx) => (
              <div
                className="absolute flex size-full shrink-0 flex-col"
                style={{ left: `${idx * 100}%`, right: `${idx * 100}%` }}
                key={id}
              >
                <Image key={id} src={path} alt="profile" fill className="size-full object-cover" />
              </div>
            ))}
          </Slider>
          <div className="absolute bottom-4 right-4 flex h-6 w-[34px] items-center justify-center rounded-xl bg-[rgba(0,0,0,0.2)]">
            <span className="text-xs font-bold text-white">{`${sliderIndex + 1} / ${
              images.length
            }`}</span>
          </div>
        </div>
      )}
    </>
  );
}
