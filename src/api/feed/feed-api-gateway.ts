import { useQuery } from '@tanstack/react-query';

import { GetFeedResponse, GetFeedSuccessResponse } from './feed-api-types.ts';
import { feedApi } from './feed-api.ts';

export const feedApiGateway = {
  useGetFeed: () =>
    useQuery<
      GetFeedResponse,
      Error, // todo: check error
      GetFeedSuccessResponse
    >({
      queryFn: feedApi.getFeed,
      queryKey: ['feed', 'useGetFeed'],
    }),
};
