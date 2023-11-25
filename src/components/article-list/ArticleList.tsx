import { Article } from '../../types/article-types.ts';
import { EmptyState } from '../empty-state';

import { ArticleListItem } from './ArticleListItem.tsx';

interface ArticleListProps {
  articles: Article[];
}

export const ArticleList = ({ articles }: ArticleListProps) => {
  if (articles.length === 0) {
    return (
      <EmptyState message="Could not fetch articles, please adjust your preferences and try again!" />
    );
  }

  return (
    <>
      {articles.map((article, index) => (
        <ArticleListItem key={`${article.title}-${index}`} article={article} />
      ))}
    </>
  );
};
