import FemaleAvatar from '@public/svg/female.svg?url';
import MaleAvatar from '@public/svg/male.svg?url';
import Image from 'next/image';

import { cn } from '@/utils';

type GenderAvatarProps = {
  gender: GenderType;

  /**
   * 성별 아바타의 크기를 지정합니다. 순서대로 16, 28, 32, 40, 64 입니다.
   */

  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export default function GenderAvatar({ gender, size }: GenderAvatarProps) {
  return (
    <Image
      src={gender === 'MALE' ? MaleAvatar : FemaleAvatar}
      className={cn('rounded-full', {
        'size-4': size === 'xs',
        'size-7': size === 'sm',
        'size-8': size === 'md',
        'size-10': size === 'lg',
        'size-16': size === 'xl',
      })}
      alt="avatar"
    />
  );
}
