import { Article } from '../../types/article-types.ts';
import { NewsapiArticle, NewsapiCategory } from '../../types/newsapi-types.ts';

export const newsapiMappers = {
  mapGetFeed: (
    articles: NewsapiArticle[],
    category: NewsapiCategory,
  ): Article[] => {
    if (!articles || !articles.length) return [];

    return articles.map((article) => ({
      title: article.title,
      description: article.description,
      sourceName: article.source.name,
      author: article.author,
      url: article.url,
      imageUrl: article.urlToImage,
      publishedAt: article.publishedAt,
      category,
    }));
  },
};
