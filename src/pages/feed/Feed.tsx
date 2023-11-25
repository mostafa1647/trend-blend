import { useState } from 'react';

import { Pagination } from '@nextui-org/react';
import { useLocalStorage } from 'usehooks-ts';

import { feedApiGateway } from '../../api/feed/feed-api-gateway.ts';
import { ArticleList } from '../../components/article-list';
import { PageError } from '../../components/error';
import { ArticlePagesLoading } from '../../components/loading';
import { UserPreferences } from '../../types/general-types.ts';
import { localStorageKeys } from '../../utils/constants.ts';
import { getUserPreferences } from '../../utils/user-preferences.ts';

export const Feed = () => {
  const [page, setPage] = useState<number>(1);

  const [userPreferences] = useLocalStorage<UserPreferences | null>(
    localStorageKeys.USER_PREFERENCES_LS_KEY,
    getUserPreferences(),
  );

  const { isLoading, isError, data } = feedApiGateway.useGetFeed({
    page,
    sources: userPreferences?.sources,
    categories: userPreferences?.categories,
    authors: userPreferences?.authors,
  });

  if (isError) {
    return <PageError />;
  }

  return (
    <>
      <h1 className="w-auto p-3 text-large font-bold">Your Feed</h1>
      {isLoading ? (
        <ArticlePagesLoading />
      ) : data ? (
        <ArticleList articles={data} />
      ) : null}
      {data && data?.length > 0 ? (
        <div className="flex items-center justify-center">
          <Pagination
            showControls
            // We cannot go more than 10 pages because newsapi free account doesn't provide more than 100 hits
            // Guardians is returning more than 10 pages, no matter what is the filtering options, so it's fine to set the total to 10
            total={10}
            page={page}
            variant="light"
            onChange={setPage}
          />
        </div>
      ) : null}
    </>
  );
};
