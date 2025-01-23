import { memberApi } from '@/apis/member';
import { queryKeys } from '@/apis/member/keys';
import { SSRSafeSuspense } from '@/components/Async';
import HydrationProvider from '@/providers/HydrationProvider';

import ApprovedSection from '../components/ApprovedSection';

export default function ApprovedPage({ params: { id } }: { params: { id: string } }) {
  return (
    <SSRSafeSuspense>
      <HydrationProvider queryKey={queryKeys.getMember(id)} queryFn={() => memberApi.getMember(id)}>
        <ApprovedSection id={id} />
      </HydrationProvider>
    </SSRSafeSuspense>
  );
}
