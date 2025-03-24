import type { FeedChannelType } from '@/apis/feed';
import { cn } from '@/utils';

const channelStyle = [
  { name: '연애 이야기', bgColor: 'bg-primary-50/50', color: 'text-primary-300' },
  { name: '데일리', bgColor: 'bg-[#E7F6E9]', color: 'text-[#0E8926]' },
  { name: '취미 활동', bgColor: 'bg-[#FFF5E6]', color: 'text-[#FF9900]' },
  { name: '고민상담', bgColor: 'bg-[#E2F1FF]', color: 'text-[#36ABFF]' },
  { name: '셀프 소개팅', bgColor: 'bg-[#FCF6E0]', color: 'text-[#C3A400]' },
  { name: '반려동물', bgColor: 'bg-[#FFECF6]', color: 'text-[#FF57B2]' },
];

type ChannelBadgeProps = {
  name: FeedChannelType['name'];
};

export default function ChannelBadge({ name }: ChannelBadgeProps) {
  const style = channelStyle.find((channel) => channel.name === name);
  if (!style) return;

  return (
    <div
      className={cn(
        `flex h-[18px] w-fit items-center rounded-[4px] px-[6px] text-[10px] font-bold`,
        style.bgColor,
        style.color,
      )}
    >
      {name}
    </div>
  );
}
