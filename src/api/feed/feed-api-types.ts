import { Article } from '../../types/article-types.ts';
import { GuardiansResponse } from '../../types/guardians-types.ts';
import { NewsapiArticle } from '../../types/newsapi-types.ts';
import { NytimesDocument, NytimesMeta } from '../../types/nytimes-types.ts';

export interface GetFeedFromNewsapiSuccessResponse {
  status: string;
  totalResults: number;
  articles: NewsapiArticle[];
}

export interface GetFeedFromNytimesSuccessResponse {
  status: string;
  copyright: string;
  response: {
    docs: NytimesDocument[];
    meta: NytimesMeta;
  };
}

export interface GetFeedFromGuardiansSuccessResponse {
  response: GuardiansResponse;
}

export type GetFeedSuccessResponse = Article[];

export type GetFeedResponse = GetFeedSuccessResponse | Error;
