import CreateIcon from '@public/svg/create.svg';
import Link from 'next/link';

import { Header } from '@/components/Header';

export default function FeedHeader() {
  return (
    <div>
      <Header>
        <Header.Left className="text-[22px] font-bold">피드</Header.Left>
        <Header.Right className="gap-4">
          <Link href="/feed/write/0">
            <CreateIcon />
          </Link>
        </Header.Right>
      </Header>
    </div>
  );
}
