import { queryKeys } from '@/apis/question';
import { questionApi } from '@/apis/question';
import HydrationProvider from '@/providers/HydrationProvider';

import JoinFunnel from './funnels/JoinFunnel';

export default function Join() {
  return (
    <HydrationProvider
      queries={[
        {
          queryKey: queryKeys.getValue('life'),
          queryFn: () => questionApi.getValue('life'),
        },
        {
          queryKey: queryKeys.getValue('job'),
          queryFn: () => questionApi.getValue('job'),
        },
        {
          queryKey: queryKeys.getValue('love'),
          queryFn: () => questionApi.getValue('love'),
        },
      ]}
    >
      <JoinFunnel />
    </HydrationProvider>
  );
}
