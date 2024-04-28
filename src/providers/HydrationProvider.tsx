import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import type { QueryFunction, QueryKey, UseQueryOptions } from '@tanstack/react-query';

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
  const queryClient = new QueryClient();

  if (queries) await Promise.all(queries.map((query) => queryClient.prefetchQuery(query)));

  if (queryKey && queryFn) await queryClient.prefetchQuery({ queryKey, queryFn });

  return <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>;
}
