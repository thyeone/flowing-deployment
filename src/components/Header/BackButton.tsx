'use client';

import { useRouter } from 'next/navigation';

import LeftArrow from '@/assets/LeftArrow';

type BackButtonProps = {
  isDark?: boolean;
};

export default function BackButton({ isDark }: BackButtonProps) {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <LeftArrow isDark={isDark} />
    </button>
  );
}
