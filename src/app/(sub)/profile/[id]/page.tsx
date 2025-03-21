import { memberApi } from '@/apis/member';
import { queryKeys } from '@/apis/member/keys';
import { SSRSafeSuspense } from '@/components/Async';
import HydrationProvider from '@/providers/HydrationProvider';

import ProfileDetail from './components/ProfileDetail';

export default function ProfileDetailPage({ params }: { params: { id: string } }) {
  return (
    <HydrationProvider
      queryKey={queryKeys.getMember(params.id)}
      queryFn={() => memberApi.getMember(params.id)}
    >
      <SSRSafeSuspense>
        <ProfileDetail id={params.id} />
      </SSRSafeSuspense>
    </HydrationProvider>
  );
}
