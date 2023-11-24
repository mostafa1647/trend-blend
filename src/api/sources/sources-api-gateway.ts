import { useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import {
  GetSourcesResponse,
  GetSourcesSuccessResponse,
} from './sources-api-types.ts';
import { sourcesApi } from './sources-api.ts';

export const sourcesApiGateway = {
  useGetSources: () =>
    useQuery<
      AxiosResponse<GetSourcesResponse>,
      AxiosError,
      AxiosResponse<GetSourcesSuccessResponse>
    >({
      queryFn: sourcesApi.getSources,
      queryKey: ['sources', 'useGetSources'],
    }),
};
