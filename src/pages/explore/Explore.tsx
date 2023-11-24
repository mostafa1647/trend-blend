import { Button, Input, Select, SelectItem, Skeleton } from '@nextui-org/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import Datepicker from 'react-tailwindcss-datepicker';

import { exploreApiGateway } from '../../api/explore/explore-api-gateway.ts';
import { sourcesApiGateway } from '../../api/sources/sources-api-gateway.ts';
// eslint-disable-next-line import/no-unresolved
import SearchIcon from '../../assets/icons/search-icon.svg?react';
import { ArticleList } from '../../components/article-list';
import { ExploreEmptyState } from '../../components/empty-state';
import { PageError } from '../../components/error';
import { ArticlePagesLoading } from '../../components/loading';
import { NewsapiCategory } from '../../types/newsapi-types.ts';

interface ExploreFormSchema {
  searchValue: string;
  source?: Set<string>;
  category?: Set<string>;
  date?: string;
}

export const Explore = () => {
  const form = useForm<ExploreFormSchema>({
    mode: 'onSubmit',
    defaultValues: {
      searchValue: '',
      source: new Set(),
      category: new Set(),
      date: '',
    },
  });

  const {
    data: sourcesData,
    isError: sourcesIsError,
    isLoading: sourcesIsLoading,
  } = sourcesApiGateway.useGetSources();

  const getExplore = exploreApiGateway.useGetExplore();

  const exploreSubmitHandler: SubmitHandler<ExploreFormSchema> = (
    values: ExploreFormSchema,
  ) => {
    getExplore.mutate({
      searchValue: values.searchValue,
      category:
        values.category && values.category?.size > 0
          ? [...values.category][0]
          : undefined,
      source:
        values.source && values.source?.size > 0
          ? [...values.source][0]
          : undefined,
      date: values.date,
    });
  };

  return (
    <>
      <form
        className="mb-3 mt-4 flex w-full flex-col items-start justify-start gap-4"
        onSubmit={form.handleSubmit(exploreSubmitHandler)}
      >
        <div className="flex w-full flex-1 flex-row items-end justify-between gap-4">
          <Controller<ExploreFormSchema>
            control={form.control}
            name="searchValue"
            rules={{ required: true }}
            render={({ field, fieldState }) => (
              <Input
                type="text"
                variant="bordered"
                label="Search"
                placeholder="Innoscripta"
                labelPlacement="outside"
                isClearable={true}
                isRequired={true}
                onClear={() => form.resetField('searchValue')}
                value={(field.value as string) || ''}
                onValueChange={field.onChange}
                isInvalid={fieldState.invalid}
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
        </div>

        <div className="flex w-full flex-1 flex-col  gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="w-full flex-1 sm:w-auto">
            {sourcesIsLoading ? (
              <Skeleton className="w-full rounded-lg">
                <div className="h-12 rounded-lg bg-default-300"></div>
              </Skeleton>
            ) : sourcesIsError ? (
              <p className="text-danger">
                Something went wrong while loading sources
              </p>
            ) : sourcesData ? (
              <Controller<ExploreFormSchema>
                name="source"
                control={form.control}
                render={({ field }) => (
                  <Select
                    size="sm"
                    label="Source"
                    variant="bordered"
                    placeholder="ABC News"
                    name={field.name}
                    selectedKeys={field.value as ExploreFormSchema['source']}
                    onSelectionChange={field.onChange}
                  >
                    {sourcesData.data.sources.map((source) => (
                      <SelectItem key={source.id} value={source.id}>
                        {source.name}
                      </SelectItem>
                    ))}
                  </Select>
                )}
              />
            ) : null}
          </div>

          <div className="w-full flex-1 sm:w-auto">
            <Controller<ExploreFormSchema>
              name="category"
              control={form.control}
              render={({ field }) => (
                <Select
                  size="sm"
                  label="Category"
                  variant="bordered"
                  placeholder="business"
                  name={field.name}
                  selectedKeys={field.value as ExploreFormSchema['category']}
                  onSelectionChange={field.onChange}
                >
                  {Object.values(NewsapiCategory).map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </Select>
              )}
            />
          </div>

          <div className="w-full flex-1 sm:w-auto">
            <Controller<ExploreFormSchema>
              name="date"
              control={form.control}
              render={({ field }) => (
                <Datepicker
                  inputClassName="w-full shadow-sm border-medium border-default-200 rounded-small h-12 min-h-unit-12 py-1.5 px-3"
                  useRange={false}
                  asSingle={true}
                  value={{
                    startDate: (field.value as string) || null,
                    endDate: (field.value as string) || null,
                  }}
                  onChange={(value) => field.onChange(value?.startDate)}
                />
              )}
            />
          </div>
        </div>
      </form>

      {getExplore.isPending ? (
        <ArticlePagesLoading />
      ) : getExplore.isError ? (
        <PageError />
      ) : getExplore.data ? (
        <>
          <h1 className="w-auto p-3 pt-0 text-large font-bold">
            Your Search Result
          </h1>
          <ArticleList articles={getExplore.data} />
        </>
      ) : (
        <ExploreEmptyState />
      )}
    </>
  );
};
