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
  GetExploreFromGuardiansSuccessResponse,
  GetExploreFromNewsapiSuccessResponse,
  GetExploreFromNytimesSuccessResponse,
  GetExploreRequest,
} from './explore-api-types.ts';

export const exploreApi = {
  getExploreFromNewsapi: ({
    searchValue,
    category,
    source,
    date,
  }: GetExploreRequest): ApiResponse<GetExploreFromNewsapiSuccessResponse> => {
    const q = [searchValue || '', category || ''].filter(Boolean).join(' AND ');

    return newsapiHttpClient.get<GetExploreFromNewsapiSuccessResponse>(
      '/v2/everything',
      {
        params: {
          ...(q && { q }),
          ...(source && { sources: source }),
          ...(date && { from: date, to: date }),
          pageSize: 10,
          page: 1,
        },
      },
    );
  },

  getExploreFromNytimes: ({
    searchValue,
    category,
    source,
    date,
  }: GetExploreRequest): ApiResponse<GetExploreFromNytimesSuccessResponse> => {
    const q = [searchValue || '', category || ''].filter(Boolean).join(' AND ');
    const fq = [
      date ? `pub_date:${date}` : '',
      source ? `source:${source}` : '',
    ]
      .filter(Boolean)
      .join(' AND ');

    return nytimesHttpClient.get<GetExploreFromNytimesSuccessResponse>(
      '/svc/search/v2/articlesearch.json',
      {
        params: {
          ...(q && { q }),
          ...(fq && { fq }),
        },
      },
    );
  },

  getExploreFromGuardian: ({
    searchValue,
    category,
    source,
    date,
  }: GetExploreRequest): ApiResponse<GetExploreFromGuardiansSuccessResponse> => {
    const q = [searchValue || '', source || '', category || '']
      .filter(Boolean)
      .join(' AND ');

    return guardianHttpClient.get<GetExploreFromGuardiansSuccessResponse>(
      '/search',
      {
        params: {
          ...(q && { q }),
          ...(date && { 'from-date': date }),
        },
      },
    );
  },

  getExplore: async ({
    searchValue,
    category,
    source,
    date,
  }: GetExploreRequest): Promise<Article[]> => {
    const [newsapiResponse, nytimesResponse, guardiansResponse] =
      await Promise.all([
        exploreApi.getExploreFromNewsapi({
          searchValue,
          category,
          source,
          date,
        }),
        exploreApi.getExploreFromNytimes({
          searchValue,
          category,
          source,
          date,
        }),
        exploreApi.getExploreFromGuardian({
          searchValue,
          category,
          source,
          date,
        }),
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
      sort: 'asc',
    });
  },
};
