'use client';

import { useGetFeed } from '@/apis/feed';
import { Header } from '@/components/Header';
import BottomTabBar from '@/components/TabBar/BottomTabBar';

export default function Feed() {
  const { data: feed } = useGetFeed('');

  return (
    <div>
      <Header>
        <Header.FeedHeader>피드</Header.FeedHeader>
      </Header>
      <span>왜 안뜨노</span>
      {feed?.map(({ id, contents, images }) => (
        <li key={id}>
          <p>{contents.channel}</p>
          <img src={contents.profilePic} />
          <p>{contents.nickname}.</p>
          <p>{contents.age}</p>
          <p>{contents.region}</p>
          <p>{contents.createdAt}</p>
          <p>{contents.content}</p>
          <p>{contents.likeCount}</p>
          <p>{contents.viewCount}</p>
          <p>{contents.commentCount}</p>
        </li>
      ))}
      <BottomTabBar />
    </div>
  );
}
