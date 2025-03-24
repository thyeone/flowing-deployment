import FeedItem from '../../../components/FeedItem';
import { useFeedDetailContext } from './FeedDetailContext';

export default function FeedDetailContent() {
  const { feedData } = useFeedDetailContext();

  return <FeedItem feedData={feedData} />;
}
