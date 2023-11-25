import { exploreApiGateway } from '../../api/explore/explore-api-gateway.ts';
import { ArticleList } from '../../components/article-list';
import { ExploreEmptyState } from '../../components/empty-state';
import { PageError } from '../../components/error';
import { ArticlePagesLoading } from '../../components/loading';

import { ExploreForm } from './ExploreForm.tsx';

export const Explore = () => {
  const getExplore = exploreApiGateway.useGetExplore();

  return (
    <>
      <ExploreForm getExplore={getExplore} />
      {getExplore.isPending ? (
        <ArticlePagesLoading />
      ) : getExplore.isError ? (
        <PageError />
      ) : getExplore.data ? (
        getExplore.data.length > 0 ? (
          <>
            <h1 className="w-auto p-3 pt-0 text-large font-bold">
              Your Search Result
            </h1>
            <ArticleList articles={getExplore.data} />
          </>
        ) : (
          <ExploreEmptyState message="Sorry! We couldn't find any matched result." />
        )
      ) : (
        <ExploreEmptyState message="Please fill the form to search for your desired articles." />
      )}
    </>
  );
};
