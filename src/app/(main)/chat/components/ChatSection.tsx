import EmptyChatIcon from '@/assets/EmptyChatIcon';
import ItemList from '@/components/ItemList';
import Col from '@/components/layout/Col';
import { cn } from '@/utils';

import ChatItem from './ChatItem';

const chatData: React.ComponentProps<typeof ChatItem>[] = [
  {
    id: '1',
    name: '김결',
    age: 26,
    address: '서울 동대문구',
    createdAt: '2024-10-21T09:27:00',
    avatarSrc:
      'https://gyeol-imagebucket.s3.ap-northeast-2.amazonaws.com/profile/2_b45e3ca2-325b-433b-9bec-eddc3bc00633.png',
    lastMessage:
      '오늘 아침에 또 이프 온리 영화보고 울었어요오늘 아침에 또 이프 온리 영화보고 울었어요 오늘 아침에 또 이프 온리 영화보고 울었어요',
    messages: ['aa', 'sss', 'ddd', 'dddd', 'dddd'],
  },
  {
    id: '2',
    name: '김결',
    age: 26,
    address: '서울 동대문구',
    createdAt: '2024-10-21T09:27:00',
    avatarSrc:
      'https://gyeol-imagebucket.s3.ap-northeast-2.amazonaws.com/profile/2_b45e3ca2-325b-433b-9bec-eddc3bc00633.png',
    lastMessage:
      '오늘 아침에 또 이프 온리 영화보고 울었어요오늘 아침에 또 이프 온리 영화보고 울었어요 오늘 아침에 또 이프 온리 영화보고 울었어요',
    messages: [],
  },
];

export default function ChatSection() {
  return (
    <ItemList
      data={[...chatData, ...chatData, ...chatData]}
      renderItem={(data, index) => <ChatItem key={index} {...data} />}
      renderEmpty={() => (
        <Col isCentered gap={24} className="h-[calc(100dvh-116px)]">
          <EmptyChatIcon />
          <p className="text-[16px] leading-4 text-gray-500">진행중인 대화가 없어요</p>
        </Col>
      )}
      className={cn('gap-7', {
        'pt-4': chatData.length,
      })}
    />
  );
}
