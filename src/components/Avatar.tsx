import FemaleAvatar from '@public/svg/female.svg?url';
import MaleAvatar from '@public/svg/male.svg?url';
import Image from 'next/image';

import { cn } from '@/utils';

type AvatarProps = {
  gender: boolean;

  /**
   * 아바타의 크기를 지정합니다. 순서대로 28, 32, 40, 64 입니다.
   */

  size: 'xs' | 'sm' | 'md' | 'lg';
};

export default function Avatar({ gender, size }: AvatarProps) {
  return (
    <Image
      src={gender ? MaleAvatar : FemaleAvatar}
      className={cn('rounded-full', {
        'size-7': size === 'xs',
        'size-8': size === 'sm',
        'size-10': size === 'md',
        'size-16': size === 'lg',
      })}
      alt="avatar"
    />
  );
}
