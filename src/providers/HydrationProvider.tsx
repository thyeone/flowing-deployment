import type { QueryFunction, QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { cache } from 'react';

import { SSRSafeSuspense } from '@/components/Async';

type HydrationProviderProps = {
  queries?: UseQueryOptions[];
  queryKey?: QueryKey;
  queryFn?: QueryFunction;
};

export default async function HydrationProvider({
  children,
  queries,
  queryKey,
  queryFn,
}: PropsWithStrictChildren<HydrationProviderProps>) {
  const getQueryClient = cache(() => new QueryClient());
  const queryClient = getQueryClient();

  if (queries) await Promise.all(queries.map((query) => queryClient.prefetchQuery(query)));

  if (queryKey && queryFn) await queryClient.prefetchQuery({ queryKey, queryFn });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <SSRSafeSuspense>{children}</SSRSafeSuspense>
    </HydrationBoundary>
  );
}
