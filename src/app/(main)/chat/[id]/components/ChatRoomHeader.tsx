import AlertIcon from '@public/svg/alarm.svg';

import MoreHoriz from '@/assets/MoreHoriz';
import Avatar from '@/components/Avatar/Avatar';
import { BackButton, Header } from '@/components/Header';
import Col from '@/components/layout/Col';

export default function ChatRoomHeader() {
  return (
    <Header>
      <Header.Left>
        <BackButton />
        <Avatar
          size="sm"
          imageSrc="https://gyeol-imagebucket.s3.ap-northeast-2.amazonaws.com/profile/2_b45e3ca2-325b-433b-9bec-eddc3bc00633.png"
        />
        <Col gap={6}>
          <span className="text-[16px] font-bold leading-4">김기우</span>
          <span className="text-[12px] leading-3 text-gray-700">서울 용산구</span>
        </Col>
      </Header.Left>
      <Header.Right>
        <button>
          <AlertIcon />
        </button>
        <button className="rotate-90">
          <MoreHoriz />
        </button>
      </Header.Right>
    </Header>
  );
}
