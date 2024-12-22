import Channel from './Channel';

const CHANNEL_DATA = [
  {
    id: 1,
    name: '연애 이야기',
    title: '당신의 연애 이야기를\n들려주세요',
    subTitle: '시작하고 싶은 취미가 있으신가요.',
    image: '/image/channel-image/channel1.png',
  },
  {
    id: 2,
    name: '데일리',
    title: '일상의 소중한 순간들을\n함께 나눠주세요',
    subTitle: '시작하고 싶은 취미가 있으신가요.',
    image: '/image/channel-image/channel2.png',
  },
  {
    id: 3,
    name: '취미 활동',
    title: '다시 시작하고 싶은\n취미가 있으신가요?',
    subTitle: '시작하고 싶은 취미가 있으신가요.',
    image: '/image/channel-image/channel3.png',
  },
  {
    id: 4,
    name: '고민상담',
    title: '일상의 소중한 순간들을\n함께 나눠주세요',
    subTitle: '시작하고 싶은 취미가 있으신가요.',
    image: '/image/channel-image/channel4.png',
  },
  {
    id: 5,
    name: '셀프 소개팅',
    title: '이성에게 나를 소개하여\n매력을 어필해보세요',
    subTitle: '시작하고 싶은 취미가 있으신가요.',
    image: '/image/channel-image/channel5.png',
  },
  {
    id: 6,
    name: '반려동물',
    title: '일상의 소중한 순간들을\n함께 나눠주세요',
    subTitle: '시작하고 싶은 취미가 있으신가요.',
    image: '/image/channel-image/channel6.png',
  },
];

export default function InterestChannelSection() {
  return (
    <>
      <h2 className="mb-3 text-lg font-bold">관심 채널</h2>
      <div className="flex flex-col gap-2">
        {CHANNEL_DATA.map((channel) => (
          <Channel key={channel.id} channelData={channel} />
        ))}
      </div>
    </>
  );
}
