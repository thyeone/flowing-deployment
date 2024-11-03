import FilterIcon from '@public/svg/filter.svg';
import { useState } from 'react';
import 'swiper/css';

import { useTabContext } from '@/components/TabBar/TabProvider';

import ChannelList from './ChannelList';
import FeedFilter from './Filter/FeedFilter';
import { useFeedFilterContext } from './Filter/FeedFilterContext';

export default function FeedFilterBar() {
  const { selectedTab } = useTabContext();
  const { feedsParams, setChannelId } = useFeedFilterContext();

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

          <ChannelList
            selectedChannelId={Number(feedsParams.channelId) || null}
            setSelectedChannelId={setChannelId}
          />
        </div>
        <FeedFilter open={open} onClose={() => setOpen(false)} />
      </>
    )
  );
}
