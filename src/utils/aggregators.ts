import { Article } from '../types/article-types.ts';

interface GetFeedAggregatorArgs {
  newsapiArticles: Article[];
  nytimesArticles: Article[];
  guardianArticles: Article[];
  sort?: 'asc' | 'desc';
}

export const aggregators = {
  articleAggregator: ({
    newsapiArticles,
    nytimesArticles,
    guardianArticles,
    sort = 'desc',
  }: GetFeedAggregatorArgs): Article[] => {
    if (sort === 'asc') {
      return [...newsapiArticles, ...nytimesArticles, ...guardianArticles].sort(
        (a, b) => +Date.parse(a.publishedAt) - +Date.parse(b.publishedAt),
      );
    }

    return [...newsapiArticles, ...nytimesArticles, ...guardianArticles].sort(
      (a, b) => +Date.parse(b.publishedAt) - +Date.parse(a.publishedAt),
    );
  },
};
