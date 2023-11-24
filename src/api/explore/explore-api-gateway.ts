import { useMutation } from '@tanstack/react-query';

import {
  GetExploreRequest,
  GetExploreSuccessResponse,
} from './explore-api-types.ts';
import { exploreApi } from './explore-api.ts';

export const exploreApiGateway = {
  useGetExplore: () =>
    useMutation<GetExploreSuccessResponse, Error, GetExploreRequest>({
      mutationFn: exploreApi.getExplore,
    }),
};
