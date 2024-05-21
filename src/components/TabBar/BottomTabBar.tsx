'use client';

import ChattingOffIcon from '@public/svg/bottomTabBar/chatting-off.svg';
import ChattingOnIcon from '@public/svg/bottomTabBar/chatting-on.svg';
import FeedOffIcon from '@public/svg/bottomTabBar/feed-off.svg';
import FeedOnIcon from '@public/svg/bottomTabBar/feed-on.svg';
import HomeOffIcon from '@public/svg/bottomTabBar/home-off.svg';
import HomeOnIcon from '@public/svg/bottomTabBar/home-on.svg';
import LikeOffIcon from '@public/svg/bottomTabBar/like-off.svg';
import LikeOnIcon from '@public/svg/bottomTabBar/like-on.svg';
import MyOffIcon from '@public/svg/bottomTabBar/my-off.svg';
import MyOnIcon from '@public/svg/bottomTabBar/my-on.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Spacing from '../Spacing';

const tabs = [
  { name: '홈', href: '/home', icon: <HomeOffIcon />, checkedIcon: <HomeOnIcon /> },
  { name: '피드', href: '/feed', icon: <FeedOffIcon />, checkedIcon: <FeedOnIcon /> },
  { name: '메세지', href: '/chatting', icon: <ChattingOffIcon />, checkedIcon: <ChattingOnIcon /> },
  { name: '호감', href: '/like', icon: <LikeOffIcon />, checkedIcon: <LikeOnIcon /> },
  { name: '마이', href: '/my', icon: <MyOffIcon />, checkedIcon: <MyOnIcon /> },
];

export default function BottomTabBar() {
  const pathName = usePathname();

  return (
    <>
      <Spacing size={61} />
      <nav className="max-width fixed bottom-0 z-10 w-full border-t border-gray-200 bg-white">
        <ul className="flex h-[60px] w-full">
          {tabs.map(({ name, href, icon, checkedIcon }, index) => (
            <Link key={index} href={href} className="flex-1">
              <li className="flex h-full flex-col items-center justify-center text-[10px]">
                {pathName === href ? checkedIcon : icon}
                <span className={`${pathName === href ? 'text-gray-900' : 'text-gray-600'}`}>
                  {name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
}
