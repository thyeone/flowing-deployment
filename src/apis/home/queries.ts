import { useQuery } from '@tanstack/react-query';

import { HomeApi } from './apis';
import { queryKeys } from './keys';

export const useGetRecommendationProfile = (memberId: string) => {
  return useQuery({
    queryKey: queryKeys.getRecommendationProfile(memberId),
    queryFn: () => HomeApi.getRecommendationProfile(memberId),
  });
};
