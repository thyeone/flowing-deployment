'use client';

import { useRouter } from 'next/navigation';

import LeftArrow from '@/assets/LeftArrow';

export default function BackButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()}>
      <LeftArrow />
    </button>
  );
}
