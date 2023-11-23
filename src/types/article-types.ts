import { AxiosResponse } from 'axios';

export interface Article {
  title: string;
  description?: string;
  sourceName?: string;
  author?: string;
  url: string;
  imageUrl?: string;
  publishedAt: string;
  category?: string;
}

export type ApiResponse<T> = Promise<AxiosResponse<T>>;
