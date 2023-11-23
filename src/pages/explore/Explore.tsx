import { exploreApiGateway } from '../../api/explore/explore-api-gateway.ts';
import { ArticleList } from '../../components/article-list';

export const Explore = () => {
  const { isLoading, isError, data } = exploreApiGateway.useGetExplore();

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
      <h1 className="w-auto p-3 text-large font-bold">Your Search Result</h1>
      <ArticleList articles={data!} />
    </>
  );
};
