import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
} from '@nextui-org/react';

import { Article } from '../../types/article-types.ts';

interface ArticleListItemProps {
  article: Article;
}

export const ArticleListItem = ({ article }: ArticleListItemProps) => {
  return (
    <Card className="mb-3">
      <CardHeader className="flex flex-col items-start justify-start">
        <Link
          href={article.url}
          color="foreground"
          target="_blank"
          rel="noreferrer noopener"
        >
          <h6 className="mb-2 font-medium">{article.title}</h6>
        </Link>
        <div>
          {article.sourceName ? (
            <Chip className="me-2" color="primary" size="sm">
              {article.sourceName}
            </Chip>
          ) : null}
          {article.author ? (
            <Chip className="me-2" color="primary" size="sm">
              {article.author}
            </Chip>
          ) : null}
        </div>
      </CardHeader>
      <Divider />
      {article.description ? <CardBody>{article.description}</CardBody> : null}
      <CardFooter className="flex flex-row flex-wrap items-center justify-between">
        <p>{article.publishedAt}</p>
        <Link
          href={article.url}
          target="_blank"
          rel="noreferrer noopener"
          showAnchorIcon={true}
          color="primary"
        >
          Visit Article
        </Link>
      </CardFooter>
    </Card>
  );
};
