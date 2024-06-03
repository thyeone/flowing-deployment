import Image from 'next/image';

import { cn } from '@/utils';

type AvatarProps = {
  imageSrc: string;

  /**
   * 아바타의 크기를 지정합니다. 순서대로 32, 36, 48, 64, 75 입니다.
   */

  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export default function Avatar({ imageSrc, size }: AvatarProps) {
  return (
    <div
      className={cn('relative rounded-full', {
        'size-8': size === 'xs',
        'size-9': size === 'sm',
        'size-12': size === 'md',
        'size-16': size === 'lg',
        'size-[75px]': size === 'xl',
      })}
    >
      <Image src={imageSrc} fill className="rounded-full object-cover" alt="avatar" />
    </div>
  );
}
