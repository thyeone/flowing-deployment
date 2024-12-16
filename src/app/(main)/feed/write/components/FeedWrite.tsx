import Divider from '@/components/layout/Divider';

import ChannelList from '../../components/ChannelList';
import ContentSection from './ContentSection';
import { useFeedWriteFormContext } from './FeedWriteFormContext';
import FeedWriteHeader from './FeedWriteHeader';
import ImageSection from './ImageSection';

const FeedWrite = () => {
  const { watch, setValue } = useFeedWriteFormContext();

  return (
    <div className="flex h-full flex-col">
      <FeedWriteHeader />
      <div className="flex items-center py-3 pl-4">
        <ChannelList
          selectedChannelId={watch('channel')}
          setSelectedChannelId={(id) => {
            setValue('channel', id as number);
          }}
          excludeTotal
        />
      </div>
      <ImageSection />
      <Divider size="xs" />
      <ContentSection />
    </div>
  );
};

export default FeedWrite;
