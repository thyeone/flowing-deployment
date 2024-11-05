import FemaleAvatar from '@public/svg/female.svg?url';
import MaleAvatar from '@public/svg/male.svg?url';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

import type { FeedResponse } from '@/apis/feed';
import { useGetMember } from '@/apis/member';
import { cn, decodeAccessToken } from '@/utils';
import { DateFormat } from '@/utils/date';

import ChannelBadge from './ChannelBadge';
import CommentCount from './CommentCount';
import LikeCount from './LikeCount';

type FeedItemProps = {
  feedData: FeedResponse;
  className?: string;
};

export default function FeedItem({ feedData, className }: FeedItemProps) {
  const { id, contents, feedLikeDtos = [] } = feedData;

  const { data: myData } = useGetMember(decodeAccessToken());

  const swiperRef = useRef<SwiperRef>(null);
  const isLiked = feedLikeDtos.some(
    ({ memberId }: { memberId: string }) => myData?.profile.memberId === memberId,
  );

  return (
    <div className={cn(`flex flex-col gap-4 px-5 py-4`, className)}>
      <Link href={`/feed/detail/${id}`} className="flex flex-col gap-4">
        <ChannelBadge name={contents.channel.name} />
        <div className="flex items-center gap-2">
          <Image
            src={contents.gender === 'MALE' ? MaleAvatar : FemaleAvatar}
            alt="genderAvatar"
            width={40}
          />
          <div>
            <p className="text-[14px] font-bold">
              {contents.nickname}. {contents.age}
            </p>
            <p className="text-[12px] text-gray-600">
              {contents.region} · {DateFormat(contents.createdAt)}
            </p>
          </div>
        </div>

        <p>{contents.content}</p>
      </Link>

      <Swiper
        ref={swiperRef}
        slidesPerView={'auto'}
        centeredSlides
        modules={[Pagination]}
        pagination={{
          type: 'custom',
          renderCustom: (_, current, total) =>
            `<span class="absolute z-50 bottom-4 right-4 rounded-xl bg-gray-900 px-2 py-1 text-xs text-white">
              ${current}/${total}
            </span>`,
        }}
        spaceBetween={8}
        className="w-full rounded-xl"
      >
        {feedData.images.map((image, index) => {
          const url = typeof image === 'string' ? image : image.url;

          return (
            <SwiperSlide key={index} className="aspect-video">
              <div className="relative size-full rounded-xl bg-gray-800">
                <Image src={url} alt="upload-image" fill objectFit="contain" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex items-center justify-between">
        <div className="flex gap-[12px]">
          <LikeCount id={id} count={contents.likeCount} isLiked={isLiked} />
          <CommentCount id={id} count={contents.commentCount} />
        </div>
        <p className="text-[12px] text-gray-600">{contents.viewCount}명 조회</p>
      </div>
    </div>
  );
}
