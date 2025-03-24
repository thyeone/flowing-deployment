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

const THREE_LINES_MAX_HEIGHT = 72;

export default function FeedItem({ feedData, className }: FeedItemProps) {
  const { id, contents, feedLikeDtos = [] } = feedData;

  const { data: myData } = useGetMember(decodeAccessToken());

  const swiperRef = useRef<SwiperRef>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  const [isOverflowed, setIsOverflowed] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const isLiked = feedLikeDtos.some(
    ({ memberId }: { memberId: string }) => myData?.profile.memberId === memberId,
  );

  useEffect(() => {
    if (textRef.current) {
      if (textRef.current.scrollHeight > THREE_LINES_MAX_HEIGHT) {
        setIsOverflowed(true);
      }
    }
  }, [feedData.contents.content]);

  return (
    <Link href={`/feed/detail/${id}`} className={cn(`flex flex-col gap-4 px-5 py-4`, className)}>
      <div className="flex flex-col gap-4">
        <ChannelBadge name={contents.channel.name} />
        <Link
          href={`/profile/${feedData.contents.simpleProfileDto.memberId}`}
          className="flex items-center gap-2"
        >
          <div className="relative size-10 overflow-hidden rounded-full">
            <Image
              src={contents.simpleProfileDto.gender === 'MALE' ? MaleAvatar : FemaleAvatar}
              alt="genderAvatar"
              className="absolute object-cover"
              fill
            />
          </div>
          <div>
            <p className="text-[14px] font-bold">
              {contents.simpleProfileDto.nickname}. {contents.simpleProfileDto.age}
            </p>
            <p className="text-[12px] text-gray-600">
              {contents.simpleProfileDto.region} · {DateFormat(contents.createdAt)}
            </p>
          </div>
        </Link>
      </div>

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
                <Image
                  src={url}
                  alt="upload-image-backdrop"
                  fill
                  objectFit="cover"
                  className="blur-lg"
                />
                <Image src={url} alt="upload-image" fill objectFit="cover" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div>
        <p
          ref={textRef}
          className={cn(`whitespace-pre-line`, {
            [`max-h-[72px] overflow-hidden`]: isOverflowed && !isExpanded,
          })}
        >
          {contents.content}
        </p>
        {isOverflowed && !isExpanded && (
          <span
            className="cursor-pointer text-gray-600"
            onClick={(e) => {
              e.preventDefault();
              setIsExpanded(true);
            }}
          >
            ...더보기
          </span>
        )}
      </div>
      <div className="flex items-center justify-between">
        <div
          className="flex gap-[12px]"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <LikeCount id={id} count={contents.likeCount} isLiked={isLiked} />
          <CommentCount id={id} count={contents.commentCount} />
        </div>
        <p className="text-[12px] text-gray-600">{contents.viewCount}명 조회</p>
      </div>
    </Link>
  );
}
