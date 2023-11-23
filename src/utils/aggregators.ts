import { Article } from '../types/article-types.ts';

interface GetFeedAggregatorArgs {
  newsapiArticles: Article[];
  nytimesArticles: Article[];
  guardianArticles: Article[];
}

export const aggregators = {
  articleAggregator: ({
    newsapiArticles,
    nytimesArticles,
    guardianArticles,
  }: GetFeedAggregatorArgs): Article[] => {
    return [...newsapiArticles, ...nytimesArticles, ...guardianArticles].sort(
      (a, b) => +Date.parse(b.publishedAt) - +Date.parse(a.publishedAt),
    );
  },
};
