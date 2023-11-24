import { Article } from '../../types/article-types.ts';
import { GuardiansResponse } from '../../types/guardians-types.ts';
import {
  NewsapiCategoryType,
  NewsapiResponse,
} from '../../types/newsapi-types.ts';
import { NytimesResponse } from '../../types/nytimes-types.ts';

export type GetFeedFromNewsapiSuccessResponse = NewsapiResponse;

export type GetFeedFromNytimesSuccessResponse = NytimesResponse;

export type GetFeedFromGuardiansSuccessResponse = GuardiansResponse;

export type GetFeedSuccessResponse = Article[];

export type GetFeedResponse = GetFeedSuccessResponse | Error;

export interface GetFeedRequest {
  page: number;
  sources?: string[];
  categories?: NewsapiCategoryType[];
  authors?: string[];
}
