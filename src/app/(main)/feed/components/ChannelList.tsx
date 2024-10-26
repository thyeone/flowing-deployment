import { useRef } from 'react';
import { useDraggable } from 'react-use-draggable-scroll';

import { cn } from '@/utils/cn';

type ChannelListProps = {
  selectedChannelId: number | null;
  setSelectedChannelId: (id: number | null) => void;
  excludeTotal?: boolean;
};

const channels = [
  { id: null, name: '전체' },
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
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });
  const channelList = excludeTotal ? channels.slice(1) : channels;

  return (
    <div {...events} ref={ref} className="flex items-center space-x-2 overflow-x-scroll pr-3">
      {channelList.map(({ id, name }) => (
        <button
          key={id}
          type="button"
          className={cn(
            'flex h-9 w-fit flex-none items-center justify-center rounded-[28px] border border-gray-200 px-3 text-xs',
            { 'bg-gray-900 text-white': selectedChannelId === id },
          )}
          onClick={() => setSelectedChannelId(id)}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
