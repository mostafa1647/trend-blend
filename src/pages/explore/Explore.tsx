import { Button, Input } from '@nextui-org/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { exploreApiGateway } from '../../api/explore/explore-api-gateway.ts';
// eslint-disable-next-line import/no-unresolved
import SearchIcon from '../../assets/icons/search-icon.svg?react';
import { ArticleList } from '../../components/article-list';

interface ExploreFormSchema {
  searchValue?: string;
}

export const Explore = () => {
  const form = useForm<ExploreFormSchema>({
    mode: 'onSubmit',
    defaultValues: {
      searchValue: '',
    },
  });

  const getExplore = exploreApiGateway.useGetExplore();

  const exploreSubmitHandler: SubmitHandler<ExploreFormSchema> = (
    values: ExploreFormSchema,
  ) => {
    try {
      getExplore.mutate({
        searchValue: values.searchValue,
      });
    } catch (e) {
      console.log(e); // todo: handle this error
    }
  };

  return (
    <>
      <form
        className="mt-4 flex max-w-xl items-end justify-start gap-4"
        onSubmit={form.handleSubmit(exploreSubmitHandler)}
      >
        <Controller<ExploreFormSchema>
          control={form.control}
          name="searchValue"
          render={({ field }) => (
            <Input
              type="text"
              variant="bordered"
              label="Search"
              placeholder="Innoscripta"
              labelPlacement="outside"
              isClearable={true}
              onClear={() => form.resetField('searchValue')}
              {...field}
              value={field.value || ''}
            />
          )}
        />

        <Button
          type="submit"
          color="primary"
          aria-label="Search"
          className="border fill-white px-4"
          isLoading={getExplore.isPending}
        >
          <SearchIcon />
        </Button>
      </form>

      {/* todo: handle loading and error */}
      {getExplore.data ? (
        <>
          <h1 className="w-auto p-3 text-large font-bold">
            Your Search Result
          </h1>
          <ArticleList articles={getExplore.data} />
        </>
      ) : (
        <p>no data</p>
      )}
    </>
  );
};
