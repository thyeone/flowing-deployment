import BlockIcon from '@public/svg/block.svg';
import ReportIcon from '@public/svg/report.svg';

import { useDeleteChatRoom } from '@/apis/chatroom/mutations';
import { useGetMember } from '@/apis/member';
import OutRoomIcon from '@/assets/OutRoomIcon';
import RightArrow from '@/assets/RightArrow';
import ItemList from '@/components/ItemList';
import { BottomSheet } from '@/components/Overlay';
import Flex from '@/components/layout/Flex';
import Spacing from '@/components/layout/Spacing';
import { decodeAccessToken } from '@/utils';

const list = [
  {
    id: 1,
    icon: <ReportIcon />,
    label: '신고하기',
  },
  {
    id: 2,
    icon: <BlockIcon />,
    label: '이 회원 차단하기',
  },
  {
    id: 3,
    icon: <OutRoomIcon />,
    label: '대화 나가기',
  },
];

export default function ChatRoomSheet({ isOpen, onClose, id }: OverlayProps & { id: string }) {
  const { data: myData } = useGetMember(decodeAccessToken());
  const { mutate: deleteChatRoom } = useDeleteChatRoom();

  console.log(id, 'id');
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose} headerTitle="더보기">
      <ItemList
        data={list}
        renderItem={({ id: key, icon, label }) => (
          <Flex
            key={key}
            align="center"
            className="h-12 cursor-pointer"
            onClick={() => {
              switch (label) {
                case '대화 나가기':
                  deleteChatRoom({
                    profileId: myData.profile.id,
                    chatRoomId: +id,
                  });
                  break;
                default:
                  onClose();
                  break;
              }
            }}
          >
            {icon}
            <span className="ml-2 mr-auto text-[14px] leading-[14px] text-gray-900">{label}</span>
            <RightArrow />
          </Flex>
        )}
      />
      <Spacing size={40} />
    </BottomSheet>
  );
}
