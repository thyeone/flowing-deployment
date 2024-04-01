'use client';

import CloseIcon from '@public/svg/close-24.svg';

import { Header } from '@/components/Header';

export default function ProfileHeader() {
  return (
    <Header>
      <Header.Center>내 프로필</Header.Center>
      <Header.Right>
        <button>
          <CloseIcon />
        </button>
      </Header.Right>
    </Header>
  );
}
