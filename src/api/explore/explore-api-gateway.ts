import { useQuery } from '@tanstack/react-query';

import {
  GetExploreResponse,
  GetExploreSuccessResponse,
} from './explore-api-types.ts';
import { exploreApi } from './explore-api.ts';

export const exploreApiGateway = {
  useGetExplore: () =>
    useQuery<
      GetExploreResponse,
      Error, // todo: check error
      GetExploreSuccessResponse
    >({
      queryFn: exploreApi.getExplore,
      queryKey: ['explore', 'useGetExplore'],
    }),
};
