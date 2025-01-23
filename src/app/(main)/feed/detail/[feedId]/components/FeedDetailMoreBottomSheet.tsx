import BlockIcon from '@public/svg/block.svg';
import ReportIcon from '@public/svg/report.svg';
import SendIcon from '@public/svg/send.svg';
import { useRouter } from 'next/navigation';

import { useGetRemainCoversation, usePostConversationRequest } from '@/apis/conversation';
import { useGetMember } from '@/apis/member';
import { usePostBlock, usePostReport } from '@/apis/member/mutations';
import RightArrow from '@/assets/RightArrow';
import { BottomSheet } from '@/components/Overlay';
import AlertDialog from '@/components/Overlay/AlertDialog';
import FeedDialog from '@/components/Overlay/FeedDialog';
import SendChatRequestPopup from '@/components/Popup/conversation/SendConversationRequestPopup';
import { useBottomSheet, useOverlay, useToast } from '@/hooks';
import { decodeAccessToken } from '@/utils';

import { useFeedDetailContext } from './FeedDetailContext';

type FeedDetailMoreBottomSheetProps = {
  open: boolean;
  onClose: () => void;
};

export default function FeedDetailMoreBottomSheet({
  open,
  onClose,
}: FeedDetailMoreBottomSheetProps) {
  const { feedData } = useFeedDetailContext();
  const { simpleProfileDto } = feedData.contents;

  const { data: myData } = useGetMember(decodeAccessToken());

  const sendProfileId = myData.profile.id;
  const receiveProfileId = simpleProfileDto.profileId;

  const { ref } = useBottomSheet(() => onClose());

  const { open: openDialog } = useOverlay();
  const { openToast } = useToast();

  const { mutate: postConversationRequest } = usePostConversationRequest();
  const { data: getRemainCoversation } = useGetRemainCoversation(myData.profile.memberId);
  const handleChatRequest = () => {
    if (getRemainCoversation === 0) {
      onClose();
      openDialog(({ isOpen, close }) => <FeedDialog isOpen={isOpen} onClose={close} />);
      return;
    }

    postConversationRequest(
      {
        sendProfileId,
        receiveProfileId,
      },
      {
        onSuccess: (data) => {
          onClose();
          openDialog(({ isOpen, close }) => (
            <SendChatRequestPopup isOpen={isOpen} onClose={close} {...data} />
          ));
        },
      },
    );
  };

  const { mutate: postBlock } = usePostBlock();
  const { mutate: postReport } = usePostReport();

  const router = useRouter();

  const MORE_LIST = [
    { text: '대화 신청 보내기', icon: <SendIcon />, action: handleChatRequest },
    {
      text: '신고하기',
      icon: <ReportIcon />,
      action: () =>
        openDialog(({ isOpen, close }) => (
          <AlertDialog
            isOpen={isOpen}
            onClose={close}
            title={`${simpleProfileDto.nickname}님을 신고하시겠습니까?`}
            confirmText="신고"
            onConfirm={() => {
              postReport(simpleProfileDto.memberId, {
                onSuccess: () => {
                  openToast({ message: `${simpleProfileDto.nickname}님을 신고했습니다.` });
                },
              });
            }}
          />
        )),
    },
    {
      text: '이 회원 차단하기',
      icon: <BlockIcon />,
      action: () =>
        openDialog(({ isOpen, close }) => (
          <AlertDialog
            isOpen={isOpen}
            onClose={close}
            title={`${simpleProfileDto.nickname}님을 차단하시겠습니까?`}
            confirmText="차단하기"
            onConfirm={() => {
              postBlock(simpleProfileDto.memberId, {
                onSuccess: () => {
                  openToast({ message: `${simpleProfileDto.nickname}님을 차단했습니다.` });
                  router.back();
                },
              });
            }}
          />
        )),
    },
  ];

  return (
    <BottomSheet ref={ref} isOpen={open} onClose={onClose} headerTitle="더보기">
      <div className="mb-10">
        {MORE_LIST.map(({ text, icon, action }) => (
          <button
            key={text}
            type="button"
            className="flex h-12 w-full items-center gap-2 text-sm text-black"
            onClick={action}
          >
            {icon}
            <span>{text}</span>
            <RightArrow className="ml-auto" />
          </button>
        ))}
      </div>
    </BottomSheet>
  );
}
