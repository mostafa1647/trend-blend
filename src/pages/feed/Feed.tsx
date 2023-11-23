import { feedApiGateway } from '../../api/feed/feed-api-gateway.ts';
import { ArticleList } from '../../components/article-list';

export const Feed = () => {
  const { isLoading, isError, data } = feedApiGateway.useGetFeed();

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
    </>
  );
};
