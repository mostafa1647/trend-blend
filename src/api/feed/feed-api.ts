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
  GetFeedRequest,
} from './feed-api-types.ts';

export const feedApi = {
  getFeedFromNewsapi: ({
    page,
    sources,
    categories,
    authors,
  }: GetFeedRequest): ApiResponse<GetFeedFromNewsapiSuccessResponse> => {
    return newsapiHttpClient.get<GetFeedFromNewsapiSuccessResponse>(
      '/v2/top-headlines',
      {
        params: {
          page: page || 1,
          ...(authors && authors.length > 0 && { q: authors?.join(' OR ') }),
          ...(sources && sources.length > 0
            ? { sources: sources.join(',') }
            : categories && categories.length > 0
              ? { category: categories[0] }
              : {}),
          ...(!authors?.length &&
            !sources &&
            !categories && { country: import.meta.env.VITE_NEWSAPI_COUNTRY }),
        },
      },
    );
  },

  getFeedFromNytimes: ({
    page,
    sources,
    categories,
    authors,
  }: GetFeedRequest): ApiResponse<GetFeedFromNytimesSuccessResponse> => {
    return nytimesHttpClient.get<GetFeedFromNytimesSuccessResponse>(
      '/svc/search/v2/articlesearch.json',
      {
        params: {
          page: page - 1 || 0,
          q:
            `(${sources?.join(', ') || ''})` +
            ` OR (${categories?.join(', ') || ''})` +
            ` OR (${authors?.join(' OR ') || ''})`,
        },
      },
    );
  },

  getFeedFromGuardian: ({
    page,
    sources,
    categories,
    authors,
  }: GetFeedRequest): ApiResponse<GetFeedFromGuardiansSuccessResponse> => {
    return guardianHttpClient.get<GetFeedFromGuardiansSuccessResponse>(
      '/search',
      {
        params: {
          page: page || 1,
          q:
            `(${sources?.join(' OR ')})` +
            ` OR (${categories?.join(' OR ')})` +
            ` OR (${authors?.join(' OR ')})`,
        },
      },
    );
  },

  getFeed: async ({
    page,
    sources,
    categories,
    authors,
  }: GetFeedRequest): Promise<Article[]> => {
    const [newsapiResponse, nytimesResponse, guardiansResponse] =
      await Promise.all([
        feedApi.getFeedFromNewsapi({ page, sources, categories, authors }),
        feedApi.getFeedFromNytimes({ page, sources, categories, authors }),
        feedApi.getFeedFromGuardian({ page, sources, categories, authors }),
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
