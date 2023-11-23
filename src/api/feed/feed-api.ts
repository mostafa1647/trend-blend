import { ApiResponse, Article } from '../../types/article-types.ts';
import { GuardiansRequest } from '../../types/guardians-types.ts';
import { NewsapiCategory, NewsapiRequest } from '../../types/newsapi-types.ts';
import { NytimesRequest } from '../../types/nytimes-types.ts';
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
  GetFeedRequest,
} from './feed-api-types.ts';

export const feedApi = {
  getFeedFromNewsapi: ({
    page,
  }: NewsapiRequest): ApiResponse<GetFeedFromNewsapiSuccessResponse> => {
    // TODO: add parameters
    return newsapiHttpClient.get<GetFeedFromNewsapiSuccessResponse>(
      '/v2/top-headlines',
      {
        params: {
          country: import.meta.env.VITE_NEWSAPI_COUNTRY,
          category: 'business',
          page: page || 1,
        },
      },
    );
  },

  getFeedFromNytimes: ({
    page,
  }: NytimesRequest): ApiResponse<GetFeedFromNytimesSuccessResponse> => {
    // TODO: add parameters
    return nytimesHttpClient.get<GetFeedFromNytimesSuccessResponse>(
      '/svc/search/v2/articlesearch.json',
      {
        params: {
          page: page - 1 || 0,
        },
      },
    );
  },

  getFeedFromGuardian: ({
    page,
  }: GuardiansRequest): ApiResponse<GetFeedFromGuardiansSuccessResponse> => {
    // TODO: add parameters
    return guardianHttpClient.get<GetFeedFromGuardiansSuccessResponse>(
      '/search',
      {
        params: {
          page: page || 1,
        },
      },
    );
  },

  getFeed: async ({ page }: GetFeedRequest): Promise<Article[]> => {
    const [newsapiResponse, nytimesResponse, guardiansResponse] =
      await Promise.all([
        feedApi.getFeedFromNewsapi({ page }),
        feedApi.getFeedFromNytimes({ page }),
        feedApi.getFeedFromGuardian({ page }),
      ]);

    const newsApiMappedArticles: Article[] = newsapiMappers.articleMapper(
      newsapiResponse.data.articles,
      NewsapiCategory.BUSINESS,
    );

    const nytimesMappedArticles: Article[] = nytimesMappers.articleMapper(
      nytimesResponse.data.response.docs,
    );

    const guardiansMappedArticled: Article[] = guardiansMappers.articleMapper(
      guardiansResponse.data.response.results,
    );

    return aggregators.articleAggregator({
      newsapiArticles: newsApiMappedArticles,
      nytimesArticles: nytimesMappedArticles,
      guardianArticles: guardiansMappedArticled,
    });
  },
};
