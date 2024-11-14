import { useParams, useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';

import { usePatchFeed, usePostFeed } from '@/apis/feed/mutation';
import { BackButton, Header } from '@/components/Header';
import { useToast } from '@/hooks';

import { FeedWriteForm, useFeedWriteFormContext } from './FeedWriteFormContext';

export default function FeedWriteHeader() {
  const router = useRouter();
  const params = useParams();
  const { feedId } = params;
  const isEdit = Number(feedId) !== 0;

  const { handleSubmit } = useFeedWriteFormContext();
  const { mutate: postFeed } = usePostFeed();
  const { mutate: patchFeed } = usePatchFeed();

  const { openToast } = useToast();

  const createFeed = (data: FeedWriteForm) => {
    const submitData = { ...data, feedImageIds: data.images.map(({ id }) => id) };

    postFeed(
      { data: submitData },
      {
        onSuccess: () => {
          openToast({ message: '피드가 등록되었어요!' });
          router.push('/feed');
        },
      },
    );
  };

  const editFeed = (data: FeedWriteForm) => {
    const submitData = { ...data, newFeedImageIds: data.images.map(({ id }) => id) };
    patchFeed(
      { feedId: Number(feedId), data: submitData },
      {
        onSuccess: () => {
          openToast({ message: '피드가 수정되었어요!' });
          router.push('/feed');
        },
      },
    );
  };

  const onSubmit: SubmitHandler<FeedWriteForm> = async (data) => {
    isEdit ? editFeed(data) : createFeed(data);
  };

  return (
    <div>
      <Header>
        <Header.Left>
          <BackButton />
        </Header.Left>
        <Header.Center>피드 {isEdit ? '수정' : '작성'}</Header.Center>{' '}
        <Header.Right className="gap-4">
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            className="text-sm font-bold text-primary-400"
          >
            {isEdit ? '수정' : '작성'} 완료
          </button>
        </Header.Right>
      </Header>
    </div>
  );
}
