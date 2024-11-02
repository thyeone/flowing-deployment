import { BackButton, Header } from '@/components/Header';

import { useFeedDetailContext } from './FeedDetailContext';

export default function FeedDetailHeader() {
  const { feedData } = useFeedDetailContext();

  return (
    <Header>
      <Header.Left>
        <BackButton />
      </Header.Left>
      <Header.Center>{`${feedData.contents.nickname}, ${feedData.contents.age}`}</Header.Center>
    </Header>
  );
}
