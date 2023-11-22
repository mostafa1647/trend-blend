import { Article } from '../../types/article-types.ts';

import { ArticleListItem } from './ArticleListItem.tsx';

interface ArticleListProps {
  articles: Article[];
}

export const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <>
      {articles.map((article, index) => (
        <ArticleListItem key={`${article.title}-${index}`} article={article} />
      ))}
    </>
  );
};
