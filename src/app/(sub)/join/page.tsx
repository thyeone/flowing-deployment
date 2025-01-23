import { queryKeys } from '@/apis/question';
import { questionApi } from '@/apis/question';
import { SSRSafeSuspense } from '@/components/Async';
import HydrationProvider from '@/providers/HydrationProvider';

import AnimatePresenceLayout from './components/AnimatePresenceLayout';
import FunnelProvider from './components/FunnelContext';
import Join1Provider from './components/Join1Context';
import JoinFunnel from './funnels/JoinFunnel';

export default function Join() {
  return (
    <SSRSafeSuspense>
      <FunnelProvider>
        <Join1Provider>
          <AnimatePresenceLayout>
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
          </AnimatePresenceLayout>
        </Join1Provider>
      </FunnelProvider>
    </SSRSafeSuspense>
  );
}
