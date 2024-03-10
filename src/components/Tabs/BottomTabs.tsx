'use client';

import ChattingOffIcon from '@public/svg/chatting-off.svg';
import ChattingOnIcon from '@public/svg/chatting-on.svg';
import FeedOffIcon from '@public/svg/feed-off.svg';
import FeedOnIcon from '@public/svg/feed-on.svg';
import HomeOffIcon from '@public/svg/home-off.svg';
import HomeOnIcon from '@public/svg/home-on.svg';
import LikeOffIcon from '@public/svg/like-off.svg';
import LikeOnIcon from '@public/svg/like-on.svg';
import MyOffIcon from '@public/svg/my-off.svg';
import MyOnIcon from '@public/svg/my-on.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { name: '홈', href: '/home', icon: <HomeOffIcon />, checkedIcon: <HomeOnIcon /> },
  { name: '피드', href: '/feed', icon: <FeedOffIcon />, checkedIcon: <FeedOnIcon /> },
  { name: '메세지', href: '/chatting', icon: <ChattingOffIcon />, checkedIcon: <ChattingOnIcon /> },
  { name: '호감', href: '/like', icon: <LikeOffIcon />, checkedIcon: <LikeOnIcon /> },
  { name: '마이', href: '/my', icon: <MyOffIcon />, checkedIcon: <MyOnIcon /> },
];

export default function BottomTabs() {
  const pathName = usePathname();

  return (
    <nav className="fixed bottom-0 h-[88.5px] w-full max-w-[430px] border-t border-gray-200 bg-white pt-[7px]">
      <ul className="flex justify-between px-7">
        {tabs.map(({ name, href, icon, checkedIcon }, index) => (
          <Link key={index} href={href}>
            <li className="flex flex-col items-center text-[10px]">
              {pathName === href ? checkedIcon : icon}
              <span className={`${pathName === href ? 'text-gray-900' : 'text-gray-600'}`}>
                {name}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
