'use client';

import Link from 'next/link';

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
        ))}
      </ul>
      <BottomTabBar />
    </div>
  );
}
