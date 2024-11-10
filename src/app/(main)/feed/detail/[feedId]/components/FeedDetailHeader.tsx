import { useState } from 'react';

import { useGetMember } from '@/apis/member';
import { BackButton, Header, MenuButton } from '@/components/Header';
import useDropdown from '@/hooks/useDropdown';
import { decodeAccessToken } from '@/utils';

import { useFeedDetailContext } from './FeedDetailContext';
import FeedDetailMoreBottomSheet from './FeedDetailMoreBottomSheet';
import FeedDetailMoreMenu from './FeedDetailMoreMenu';

export default function FeedDetailHeader() {
  const { feedData } = useFeedDetailContext();
  const { data: myData } = useGetMember(decodeAccessToken());

  const isMyFeed = myData?.profile.memberId === feedData.contents.memberId;

  const [openBottomSheet, setOpenBottomSheet] = useState(false);
  const { ref, open: openDropdown, setOpen: setOpenDropdown } = useDropdown();

  return (
    <Header>
      <Header.Left>
        <BackButton />
      </Header.Left>
      <Header.Center>{`${feedData.contents.nickname}, ${feedData.contents.age}`}</Header.Center>
      <Header.Right>
        <div ref={ref} className="relative">
          <MenuButton
            variant="vertical"
            onClick={(e) => {
              isMyFeed ? setOpenDropdown(!openDropdown) : setOpenBottomSheet(true);
            }}
          />
          <FeedDetailMoreMenu open={openDropdown} />
        </div>
        <FeedDetailMoreBottomSheet
          open={openBottomSheet}
          onClose={() => setOpenBottomSheet(false)}
        />
      </Header.Right>
    </Header>
  );
}
