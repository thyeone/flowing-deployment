'use client';

import FirstImage from '@public/image/onboarding1.png';
import SecondImage from '@public/image/onboarding2.png';
import ThirdImage from '@public/image/onboarding3.png';
import GoogleIcon from '@public/svg/google.svg';
import KakaoIcon from '@public/svg/kakao.svg';
import { motion, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import Spacing from '@/components/Spacing';
import { BASE_DOMAIN, springTransition } from '@/constants';
import { cn } from '@/utils';

const CAROUSEL_LIST = [
  {
    id: 0,
    image: FirstImage,
    title: '내 가치관을 적고\n새로운 이성을 만나보세요',
    description:
      '사진이 아닌, 가치관이 만나는 지점\n플로잉에서 가치관을 통해 진정한 사랑을 찾아보세요',
  },
  {
    id: 1,
    image: SecondImage,
    title: '나와 비슷한 가치관을 가진\n 이성과 대화해 보세요!',
    description: '마음에 드는 상대방의 가치관을 확인하고\n대화를 통해 첫 걸음을 내디뎌 보세요',
  },
  {
    id: 2,
    image: ThirdImage,
    title: '나와 결이 통하는 순간,\n플로잉에서 경험하세요.',
    description: '마음의 결이 맞을 때, 사랑은 더 깊어집니다.\n플로잉에서 진정한 사랑을 경험하세요.',
  },
] as const;

export default function Login() {
  const [slideIndex, setSlideIndex] = useState(0);
  const x = useMotionValue(0);

  const onDragEnd = () => {
    if (x.get() < -20) {
      setSlideIndex((prev) => (prev + 1) % CAROUSEL_LIST.length);
    }

    if (x.get() > 20) {
      setSlideIndex((prev) => (prev === 0 ? CAROUSEL_LIST.length - 1 : prev - 1));
    }
  };

  return (
    <main className="main-layout">
      <motion.div
        style={{ x }}
        draggable
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        dragElastic={0.2}
        animate={{ translateX: `-${slideIndex * 100}%` }}
        {...springTransition}
        onDragEnd={onDragEnd}
        className="flex h-2/3 w-full cursor-grab items-center"
      >
        {CAROUSEL_LIST.map(({ id, image, title, description }) => (
          <div
            className="flex size-full shrink-0 flex-col"
            style={{ left: `${id * 100}%`, right: `${id * 100}%` }}
            key={id}
          >
            <div className="relative flex size-full flex-[2] items-center justify-center overflow-hidden bg-primary-50">
              <Image src={image} alt="service" className="size-full object-contain p-10" />
            </div>
            <Spacing size={40} />
            <div className="flex flex-1 flex-col gap-y-4 whitespace-pre-wrap text-center">
              <h1 className="text-[22px] font-bold">{title}</h1>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
        ))}
      </motion.div>
      <Spacing size={32} />
      <ul className="flex items-center justify-center gap-x-1">
        {CAROUSEL_LIST.map(({ id }) => (
          <li
            key={id}
            onClick={() => setSlideIndex(id)}
            className={cn('z-10 h-0.5 w-3 cursor-pointer rounded-[10px] bg-gray-300', {
              'bg-primary-300': id === slideIndex,
            })}
          />
        ))}
      </ul>
      <Spacing size={73} />
      <div className="fixed inset-x-0 bottom-0 mx-auto mb-5 flex w-full max-w-[430px] flex-col gap-y-2 px-5">
        <Spacing size={72} />
        <Link
          href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${BASE_DOMAIN}/auth/kakao&response_type=code`}
        >
          <button className="flex h-[52px] w-full items-center justify-center gap-x-2 rounded-xl bg-[#F9E000] font-medium">
            <KakaoIcon />
            카카오로 시작하기
          </button>
        </Link>

        <Link
          href={`https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${BASE_DOMAIN}/auth/google&response_type=code&scope=email`}
        >
          <button className="flex h-[52px] w-full items-center justify-center gap-x-2 rounded-xl border border-gray-200 bg-white font-medium">
            <GoogleIcon />
            구글로 시작하기
          </button>
        </Link>
      </div>
    </main>
  );
}
