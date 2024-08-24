import NoContentIcon from '@public/svg/no-content.svg';
import Link from 'next/link';

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
    address: filter.address.join(','),
    minAge: ageToDateString({ age: filter.age.min }),
    maxAge: ageToDateString({ age: filter.age.max, firstDay: true }),
  };

  const feedLatestQuery = useGetFeeds({
    ...feedsParams,
    enabled: selectedTab === 'latest',
  });
  const feedRecommendQuery = useGetFeedRecommend({ enabled: selectedTab === 'recommend' });
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
          group.map(({ id, contents, images }) => (
            <Link key={id} href={`/feed/detail/${id}`}>
              <li>
                <FeedItem
                  id={id}
                  className="border-b border-gray-200 py-5"
                  contents={contents}
                  images={images}
                />
              </li>
            </Link>
          )),
        )}
      </ul>
      {selectedTab === 'matched' && !feedListQuery?.data?.pages.length && (
        <div className="mt-48 flex flex-auto flex-col items-center justify-center gap-6">
          <NoContentIcon />
          <span className="text-gray-500">아직 매칭된 이성 쓴 글이 없어요</span>
        </div>
      )}

      <div ref={setTarget} className="h-[1px]" />
    </>
  );
}
