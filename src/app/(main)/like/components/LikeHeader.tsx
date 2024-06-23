'use client';

import AlarmIcon from '@public/svg/alarm.svg';

import { Header } from '@/components/Header';

export default function LikeHeader() {
  return (
    <Header>
      <Header.Left className="text-[22px] font-bold">호감</Header.Left>
      <Header.Right>
        <button>
          <AlarmIcon />
        </button>
      </Header.Right>
    </Header>
  );
}
