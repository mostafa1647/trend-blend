import { useQuery } from '@tanstack/react-query';

import {
  GetFeedRequest,
  GetFeedResponse,
  GetFeedSuccessResponse,
} from './feed-api-types.ts';
import { feedApi } from './feed-api.ts';

export const feedApiGateway = {
  useGetFeed: (params: GetFeedRequest) =>
    useQuery<GetFeedResponse, Error, GetFeedSuccessResponse>({
      queryFn: () => feedApi.getFeed(params),
      queryKey: ['feed', 'useGetFeed', params],
    }),
};
