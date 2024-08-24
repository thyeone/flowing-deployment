import FilterIcon from '@public/svg/filter.svg';
import { useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useTabContext } from '@/components/TabBar/TabProvider';
import { cn } from '@/utils';

import FeedFilter from './Filter/FeedFilter';
import { useFeedFilterContext } from './Filter/FeedFilterProvider';

const channels = [
  { id: 0, name: '전체' },
  { id: 1, name: '연애 이야기' },
  { id: 2, name: '데일리' },
  { id: 3, name: '취미 활동' },
  { id: 4, name: '고민상담' },
  { id: 5, name: '셀프 소개팅' },
  { id: 6, name: '반려동물' },
];

export default function FeedFilterBar() {
  const { selectedTab } = useTabContext();
  const { filter, setChannelId } = useFeedFilterContext();

  const [open, setOpen] = useState(false);

  return (
    selectedTab !== 'matched' && (
      <>
        <div className="flex items-center gap-3 py-3 pl-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-9 w-fit items-center justify-center gap-1.5 whitespace-nowrap rounded-[28px] border border-gray-200 px-3 text-xs"
          >
            <FilterIcon />
            필터
          </button>
          <div className="h-4 w-px bg-gray-200" />
          <Swiper slidesPerView="auto" spaceBetween={8}>
            {channels.map(({ id, name }) => (
              <SwiperSlide key={id} className="!w-fit">
                <button
                  type="button"
                  className={cn(
                    'flex h-9 !w-fit items-center justify-center rounded-[28px] border border-gray-200 px-3 text-xs',
                    { 'bg-gray-900 text-white': filter.channelId === id },
                  )}
                  onClick={() => setChannelId(id)}
                >
                  {name}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <FeedFilter open={open} onClose={() => setOpen(false)} />
      </>
    )
  );
}
