import { memberApi } from '@/apis/member';
import { queryKeys } from '@/apis/member/keys';
import { SSRSafeSuspense } from '@/components/Async';
import HydrationProvider from '@/providers/HydrationProvider';
import { decodeAccessToken } from '@/utils';

import ProfileDetail from './components/ProfileDetail';

export default function ProfileDetailPage({ params }: { params: { id: string } }) {
  return (
    <SSRSafeSuspense>
      <HydrationProvider
        queries={[
          {
            queryKey: queryKeys.getMember(params.id),
            queryFn: () => memberApi.getMember(params.id),
          },
          {
            queryKey: queryKeys.getMember(decodeAccessToken()),
            queryFn: () => memberApi.getMember(decodeAccessToken()),
          },
        ]}
      >
        <ProfileDetail id={params.id} />
      </HydrationProvider>
    </SSRSafeSuspense>
  );
}
