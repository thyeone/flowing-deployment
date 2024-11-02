import NoContentIcon from '@public/svg/no-content.svg';

import { useGetFeedMatchCrush, useGetFeedRecommend, useGetFeeds } from '@/apis/feed';
import { useTabContext } from '@/components/TabBar/TabProvider';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { ageToDateString } from '@/utils';

import FeedItem from './FeedItem';
import { useFeedFilterContext } from './Filter/FeedFilterProvider';

export default function FeedList() {
  const { selectedTab } = useTabContext();
  const { filter } = useFeedFilterContext();
  const feedsParams = {
    channelId: filter.channelId,
    gender: Object.keys(filter.gender).filter(
      (key) => filter.gender[key as GenderType],
    ) as GenderType[],
    address: filter.address.join(', '),
    maxAge: ageToDateString({ age: filter.age.min }),
    minAge: ageToDateString({ age: filter.age.max, firstDay: true }),
  };

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
          group.map(({ id, contents, images, feedLikeDtos }) => (
            <li key={id}>
              <FeedItem
                id={id}
                className="border-b border-gray-200 py-5"
                contents={contents}
                images={images}
                feedLikes={feedLikeDtos}
              />
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
