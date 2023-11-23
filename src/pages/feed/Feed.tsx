import { useState } from 'react';

import { Pagination } from '@nextui-org/react';

import { feedApiGateway } from '../../api/feed/feed-api-gateway.ts';
import { ArticleList } from '../../components/article-list';

export const Feed = () => {
  const [page, setPage] = useState<number>(1);

  const { isLoading, isError, data } = feedApiGateway.useGetFeed({ page });

  // todo: create error component
  if (isError) {
    return <p>Error</p>;
  }

  // todo: create loading component
  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <h1 className="w-auto p-3 text-large font-bold">Your Feed</h1>
      <ArticleList articles={data!} />
      <div className="flex items-center justify-center">
        <Pagination
          showControls
          total={10} // We cannot go more than 10 pages because newsapi free account doesn't provide more than 100 hits
          page={page}
          variant="light"
          onChange={setPage}
        />
      </div>
    </>
  );
};
