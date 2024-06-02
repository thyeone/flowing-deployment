import RightArrow from '@public/svg/right-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';

import { ChannelResponse } from '@/apis/channel';

type ChannelProps = {
  content: ChannelResponse;
};

export default function Channel({ content }: ChannelProps) {
  return (
    <>
      <div className="relative h-[400px] w-full">
        <Image
          src={content.image}
          alt={content.name}
          fill
          priority
          className="absolute rounded-xl"
        />
        <div className="absolute z-10 flex size-full flex-col justify-between">
          <div className="flex flex-col gap-3 px-6 pt-6">
            <p className="text-xs text-white">{content.name}</p>
            <h2 className="whitespace-pre-wrap text-xl font-bold text-white">{content.title}</h2>
            <p className="text-xs text-gray-300">{content.subTitle}</p>
          </div>
          <Link href={`/feed/${content.path}`}>
            <div className="h-12 w-full bg-[rgba(255,255,255,0.12)]">
              <div className="flex size-full items-center justify-end gap-2 px-5">
                <p className="text-xs text-white">자세히 보기</p>
                <div className="flex size-5 items-center justify-center rounded-full bg-white">
                  <RightArrow />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
