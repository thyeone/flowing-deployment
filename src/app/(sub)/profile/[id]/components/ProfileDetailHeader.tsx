'use client';

import clsx from 'clsx';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import { BackButton, Header, MoreHorizButton } from '@/components/Header';

type ProfileDetailHeaderProps = {
  nickname: string;
  age: number;
};

export default function ProfileDetailHeader({ nickname, age }: ProfileDetailHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <>
      <Header
        className={clsx('dark:bg-gray-900', {
          'bg-primary-50 dark:bg-[rgba(133,0,85,0.1)]': isInView,
        })}
      >
        <Header.Left>
          <BackButton isDark />
        </Header.Left>
        <Header.Center>{!isInView && <p>{`${nickname}. ${age}`}</p>}</Header.Center>
        <Header.Right>
          <MoreHorizButton isDark />
        </Header.Right>
      </Header>
      <motion.div
        ref={ref}
        className="max-width absolute inset-x-0 top-0 mx-auto h-80 w-full bg-gradient-to-b from-primary-50 from-40% to-white to-100% dark:from-[rgba(133,0,85,0.1)] dark:to-[rgba(33,33,35,0.1)]"
      />
    </>
  );
}
