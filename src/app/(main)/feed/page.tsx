'use client';

import { useGetFeedList } from '@/apis/feed';
import { Header } from '@/components/Header';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

import FeedItem from './components/FeedItem';

export default function Feed() {
  const { data: feedList } = useGetFeedList();
  console.log(feedList);

  return (
    <div>
      <Header>
        <Header.FeedHeader>피드</Header.FeedHeader>
      </Header>
      <ul className="mb-[60px]">
        {feedList?.map(({ id, contents, images }) => (
          <li key={id}>
            <FeedItem id={id} contents={contents} images={images} />
          </li>
        ))}
      </ul>
      <BottomTabBar />
    </div>
  );
}
