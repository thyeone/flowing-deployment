'use client';

import CloseIcon from '@public/svg/close-24.svg';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Header } from '@/components/Header';

export default function ProfileHeader() {
  const router = useRouter();

  return (
    <Header>
      <Header.Center>내 프로필</Header.Center>
      <Header.Right>
        <Link href="/my">
          <CloseIcon />
        </Link>
      </Header.Right>
    </Header>
  );
}
