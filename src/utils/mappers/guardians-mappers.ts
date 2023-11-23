import { Article } from '../../types/article-types.ts';
import { GuardianArticle } from '../../types/guardians-types.ts';

export const guardiansMappers = {
  articleMapper: (articles: GuardianArticle[]): Article[] => {
    if (!articles || !articles.length) return [];

    return articles.map((article) => ({
      title: article.webTitle,
      description: undefined,
      sourceName: article.pillarName || undefined,
      author: undefined,
      url: article.webUrl,
      imageUrl: undefined,
      publishedAt: article.webPublicationDate,
      category: article.sectionName,
    }));
  },
};
