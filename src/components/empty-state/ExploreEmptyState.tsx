// eslint-disable-next-line import/no-unresolved
import SearchIcon from '../../assets/icons/search-icon.svg?react';

export const ExploreEmptyState = ({ message }: { message: string }) => {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
      <SearchIcon className="h-24 w-24 fill-primary" />
      <p className="w-auto text-center text-large font-bold ">{message}</p>
    </div>
  );
};
