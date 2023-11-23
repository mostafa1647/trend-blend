import { ApiResponse, Article } from '../../types/article-types.ts';
import { NewsapiCategory } from '../../types/newsapi-types.ts';
import { aggregators } from '../../utils/aggregators.ts';
import {
  guardianHttpClient,
  newsapiHttpClient,
  nytimesHttpClient,
} from '../../utils/http-clients';
import { guardiansMappers } from '../../utils/mappers/guardians-mappers.ts';
import { newsapiMappers } from '../../utils/mappers/newsapi-mappers.ts';
import { nytimesMappers } from '../../utils/mappers/nytimes-mappers.ts';

import {
  GetFeedFromGuardiansSuccessResponse,
  GetFeedFromNewsapiSuccessResponse,
  GetFeedFromNytimesSuccessResponse,
} from './feed-api-types.ts';

export const feedApi = {
  getFeedFromNewsapi: (): ApiResponse<GetFeedFromNewsapiSuccessResponse> => {
    // TODO: add parameters
    return newsapiHttpClient.get<GetFeedFromNewsapiSuccessResponse>(
      '/v2/top-headlines',
      {
        params: {
          country: 'us',
          category: 'business',
        },
      },
    );
  },

  getFeedFromNytimes: (): ApiResponse<GetFeedFromNytimesSuccessResponse> => {
    // TODO: add parameters
    return nytimesHttpClient.get<GetFeedFromNytimesSuccessResponse>(
      '/svc/search/v2/articlesearch.json',
    );
  },

  getFeedFromGuardian: (): ApiResponse<GetFeedFromGuardiansSuccessResponse> => {
    // TODO: add parameters
    return guardianHttpClient.get<GetFeedFromGuardiansSuccessResponse>(
      '/search',
    );
  },

  getFeed: async (): Promise<Article[]> => {
    const [newsapiResponse, nytimesResponse, guardiansResponse] =
      await Promise.all([
        feedApi.getFeedFromNewsapi(),
        feedApi.getFeedFromNytimes(),
        feedApi.getFeedFromGuardian(),
      ]);

    return aggregators.articleAggregator({
      newsapiArticles: newsapiMappers.articleMapper(
        newsapiResponse.data.articles,
        NewsapiCategory.BUSINESS,
      ),
      nytimesArticles: nytimesMappers.articleMapper(
        nytimesResponse.data.response.docs,
      ),
      guardianArticles: guardiansMappers.articleMapper(
        guardiansResponse.data.response.results,
      ),
    });
  },
};
