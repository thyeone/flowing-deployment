'use client';

import BackButton from './BackButton';
import Header from './Header';
import MenuIcon from '@public/svg/menu-dot-24.svg';

type FeedHeaderProps = {
  text?: string;
};

export default function FeedHeader({ text }: FeedHeaderProps) {
  return (
    <Header>
      <BackButton />
      {text && <span className="font-bold text-[#292929]">{text}</span>}
      <button>
        <MenuIcon />
      </button>
    </Header>
  );
}
