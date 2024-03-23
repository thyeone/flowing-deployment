//todo 채널명 추가, 타입 지정, 영문->한글 변환, 채널네임에 따른 스타일

type ChannelBadgeProps = {
  channelName: string;
};

export default function ChannelBadge({ channelName }: ChannelBadgeProps) {
  return (
    <div className="flex h-[18px] w-fit items-center rounded-[4px] bg-primary-50 px-[6px] text-[10px] font-bold text-primary-300">
      {channelName}
    </div>
  );
}
