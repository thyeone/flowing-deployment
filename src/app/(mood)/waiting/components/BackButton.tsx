'use client';

import LeftArrow from '@/assets/LeftArrow';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <LeftArrow />
    </button>
  );
}
