import { useGetFeedsComments } from '@/apis/feed';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import Comment from './Comments/Comment';
import { useFeedDetailContext } from './FeedDetailContext';

export default function FeedDetailComments() {
  const { feedId } = useFeedDetailContext();
  const commentsQuery = useGetFeedsComments(feedId);

  const { setTarget } = useIntersectionObserver({
    hasNextPage: commentsQuery.hasNextPage,
    fetchNextPage: commentsQuery.fetchNextPage,
  });

  return (
    <div className="h-fit w-full pb-16" id="comment">
      {commentsQuery?.data?.pages.map((group: any) =>
        [...group]
          .reverse()
          .map((comment: any) => <Comment key={comment.id} commentData={comment} />),
      )}

      <div ref={setTarget} className="h-px" />
    </div>
  );
}
