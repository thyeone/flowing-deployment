import NoContentIcon from '@public/svg/no-content.svg';

import { useGetFeedMatchCrush, useGetFeedRecommend, useGetFeeds } from '@/apis/feed';
import { useTabContext } from '@/components/TabBar/TabProvider';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import FeedItem from './FeedItem';
import { useFeedFilterContext } from './Filter/FeedFilterContext';

export default function FeedList() {
  const { selectedTab } = useTabContext();
  const { feedsParams } = useFeedFilterContext();

  const feedLatestQuery = useGetFeeds({
    ...feedsParams,
    enabled: selectedTab === 'latest',
  });
  const feedRecommendQuery = useGetFeedRecommend({
    ...feedsParams,
    enabled: selectedTab === 'recommend',
  });
  const feedMatchCrushQuery = useGetFeedMatchCrush({ enabled: selectedTab === 'matched' });

  const feedListQuery = {
    latest: feedLatestQuery,
    recommend: feedRecommendQuery,
    matched: feedMatchCrushQuery,
  }[selectedTab];

  const { setTarget } = useIntersectionObserver({
    hasNextPage: feedListQuery!.hasNextPage,
    fetchNextPage: feedListQuery!.fetchNextPage,
  });

  return (
    <>
      <ul className="mb-[60px]">
        {feedListQuery?.data?.pages.map((group) =>
          group.map((feedData) => (
            <li key={feedData.id}>
              <FeedItem feedData={feedData} className="border-b border-gray-200 py-5" />
            </li>
          )),
        )}
      </ul>
      {selectedTab === 'matched' && !feedListQuery?.data?.pages.length && (
        <div className="mt-48 flex flex-auto flex-col items-center justify-center gap-6">
          <NoContentIcon />
          <span className="text-gray-500">아직 매칭된 이성 쓴 글이 없어요</span>
        </div>
      )}

      <div ref={setTarget} className="h-px" />
    </>
  );
}
