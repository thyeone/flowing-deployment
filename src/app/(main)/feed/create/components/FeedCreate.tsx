import Divider from '@/components/layout/Divider';

import ChannelList from '../../components/ChannelList';
import ContentSection from './ContentSection';
import { useFeedCreateFormContext } from './FeedCreateFormContext';
import FeedCreateHeader from './FeedCreateHeader';
import ImageSection from './ImageSection';

const FeedCreate = () => {
  const { watch, setValue } = useFeedCreateFormContext();

  return (
    <>
      <FeedCreateHeader />
      <div className="flex items-center gap-3 py-3 pl-4">
        <ChannelList
          selectedChannelId={watch('channelId')}
          setSelectedChannelId={(id) => {
            setValue('channelId', id);
          }}
          excludeTotal
        />
      </div>
      <ImageSection />
      <Divider size="xs" />
      <ContentSection />
    </>
  );
};

export default FeedCreate;
