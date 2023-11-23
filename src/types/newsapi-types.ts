export interface NewsapiSource {
  id?: string;
  name: string;
}

export interface NewsapiArticle {
  source: NewsapiSource;
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
  category?: NewsapiCategory;
}

export const enum NewsapiCategory {
  BUSINESS = 'business',
  ENTERTAINMENT = 'entertainment',
  GENERAL = 'general',
  HEALTH = 'health',
  SCIENCE = 'science',
  SPORTS = 'sports',
  TECHNOLOGY = 'technology',
}

export interface NewsapiResponse {
  status: string;
  totalResults: number;
  articles: NewsapiArticle[];
}
