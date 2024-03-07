import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import type { UseQueryOptions } from '@tanstack/react-query';

type HydrationProviderProps = {
  queries: UseQueryOptions[];
};

export default async function HydrationProvider({
  children,
  queries,
}: PropsWithStrictChildren<HydrationProviderProps>) {
  const queryClient = new QueryClient();

  await Promise.all(queries.map((query) => queryClient.prefetchQuery(query)));

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
