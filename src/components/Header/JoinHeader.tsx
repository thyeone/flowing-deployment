'use client';

import Link from 'next/link';
import BackButton from './BackButton';
import Header from './Header';

type JoinHeaderProps = {
  isLanding?: boolean;
};

export default function JoinHeader({ isLanding }: JoinHeaderProps) {
  return (
    <Header>
      {isLanding ? (
        <Link href="/home" className="w-full text-right text-sm text-[#212529]">
          둘러보기
        </Link>
      ) : (
        <BackButton />
      )}
    </Header>
  );
}
