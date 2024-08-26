import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '@/utils/cn';

type ChannelListProps = {
  selectedChannelId: number;
  setSelectedChannelId: (id: number) => void;
  excludeTotal?: boolean;
};

const channels = [
  { id: 0, name: '전체' },
  { id: 1, name: '연애 이야기' },
  { id: 2, name: '데일리' },
  { id: 3, name: '취미 활동' },
  { id: 4, name: '고민상담' },
  { id: 5, name: '셀프 소개팅' },
  { id: 6, name: '반려동물' },
];

export default function ChannelList({
  selectedChannelId,
  setSelectedChannelId,
  excludeTotal = false,
}: ChannelListProps) {
  const channelList = excludeTotal ? channels.slice(1) : channels;

  return (
    <Swiper slidesPerView="auto" spaceBetween={4}>
      {channelList.map(({ id, name }) => (
        <SwiperSlide key={id} className="!w-fit">
          <button
            type="button"
            className={cn(
              'flex h-9 !w-fit items-center justify-center rounded-[28px] border border-gray-200 px-3 text-xs',
              { 'bg-gray-900 text-white': selectedChannelId === id },
            )}
            onClick={() => setSelectedChannelId(id)}
          >
            {name}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
