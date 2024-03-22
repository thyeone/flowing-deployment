//todo 채널명 추가, 타입 지정, 영문->한글 변환, 채널네임에 따른 스타일 변경

type ChannelBadgeProps = {
  channelName: string;
};

export default function ChannelBadge({ channelName }: ChannelBadgeProps) {
  return (
    <div className="w-fit rounded-[4px] bg-primary-50 px-[6px] pb-[4.5px] pt-[3.5px] text-[10px] font-bold text-primary-300">
      {channelName}
    </div>
  );
}
