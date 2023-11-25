// eslint-disable-next-line import/no-unresolved
import SearchIcon from '../../assets/icons/search-icon.svg?react';

export const EmptyState = ({ message }: { message: string }) => {
  return (
    <div className="flex h-[40vh] flex-col items-center justify-center gap-4 sm:h-[80vh]">
      <SearchIcon className="h-12 w-24 fill-primary sm:h-24" />
      <p className="w-auto text-center text-small font-bold sm:text-large ">
        {message}
      </p>
    </div>
  );
};
