import { Article } from '../../types/article-types.ts';
import { NytimesDocument } from '../../types/nytimes-types.ts';

export const nytimesMappers = {
  mapGetFeed: (articles: NytimesDocument[]): Article[] => {
    if (!articles || !articles.length) return [];

    return articles.map((article) => ({
      title: article.headline.main,
      description: article.abstract,
      sourceName: article.source,
      author: article?.byline?.original,
      url: article.web_url,
      imageUrl: article?.multimedia?.[0]?.url,
      publishedAt: article.pub_date,
      category: article.section_name,
    }));
  },
};
