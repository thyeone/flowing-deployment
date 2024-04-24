import AlarmIcon from '@public/svg/alarm.svg';
import CreateIcon from '@public/svg/create.svg';
import Link from 'next/link';

import { Header } from '@/components/Header';

export default function FeedHeader() {
  return (
    <div>
      <Header>
        <Header.Left className="text-[22px] font-bold">피드</Header.Left>
        <Header.Right className="gap-4">
          <Link href="/feed/create">
            <CreateIcon />
          </Link>
          <AlarmIcon />
        </Header.Right>
      </Header>
    </div>
  );
}
