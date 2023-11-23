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
} from './explore-api-types.ts';

export const exploreApi = {
  getExploreFromNewsapi:
    (): ApiResponse<GetExploreFromNewsapiSuccessResponse> => {
      // TODO: add parameters
      return newsapiHttpClient.get<GetExploreFromNewsapiSuccessResponse>(
        '/v2/everything',
        {
          params: {
            q: 'programming',
            pageSize: 10,
            page: 1,
          },
        },
      );
    },

  getExploreFromNytimes:
    (): ApiResponse<GetExploreFromNytimesSuccessResponse> => {
      // TODO: add parameters
      return nytimesHttpClient.get<GetExploreFromNytimesSuccessResponse>(
        '/svc/search/v2/articlesearch.json',
      );
    },

  getExploreFromGuardian:
    (): ApiResponse<GetExploreFromGuardiansSuccessResponse> => {
      // TODO: add parameters
      return guardianHttpClient.get<GetExploreFromGuardiansSuccessResponse>(
        '/search',
      );
    },

  getExplore: async (): Promise<Article[]> => {
    const [newsapiResponse, nytimesResponse, guardiansResponse] =
      await Promise.all([
        exploreApi.getExploreFromNewsapi(),
        exploreApi.getExploreFromNytimes(),
        exploreApi.getExploreFromGuardian(),
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
