import { ApiResponse } from '../../types/article-types.ts';
import { newsapiHttpClient } from '../../utils/http-clients';

import { GetSourcesSuccessResponse } from './sources-api-types.ts';

export const sourcesApi = {
  getSources: (): ApiResponse<GetSourcesSuccessResponse> => {
    return newsapiHttpClient.get<GetSourcesSuccessResponse>(
      '/v2/top-headlines/sources',
    );
  },
};
