import { Article } from '../../types/article-types.ts';
import { GuardiansResponse } from '../../types/guardians-types.ts';
import { NewsapiResponse } from '../../types/newsapi-types.ts';
import { NytimesResponse } from '../../types/nytimes-types.ts';

export type GetExploreFromNewsapiSuccessResponse = NewsapiResponse;

export type GetExploreFromNytimesSuccessResponse = NytimesResponse;

export type GetExploreFromGuardiansSuccessResponse = GuardiansResponse;

export type GetExploreSuccessResponse = Article[];

export interface GetExploreRequest {
  searchValue?: string;
  category?: string;
  source?: string;
  date?: string;
}
