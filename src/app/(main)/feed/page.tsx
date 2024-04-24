'use client';

import { useGetFeedList } from '@/apis/feed';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

import FeedHeader from './components/FeedHeader';
import FeedItem from './components/FeedItem';

export default function Feed() {
  const { data: feedList } = useGetFeedList();

  return (
    <div>
      <FeedHeader />
      <ul className="mb-[60px]">
        {feedList?.map(({ id, contents, images }) => (
          <li key={id} className="border-b border-gray-200">
            <FeedItem id={id} contents={contents} images={images} />
          </li>
        ))}
      </ul>
      <BottomTabBar />
    </div>
  );
}
