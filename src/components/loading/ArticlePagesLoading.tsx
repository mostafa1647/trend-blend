import { Skeleton } from '@nextui-org/react';

export const ArticlePagesLoading = () => {
  return (
    <div className="w-full">
      {new Array(4).fill(null).map((_, index) => (
        <Skeleton className="mb-3 rounded-lg" key={index}>
          <div className="h-44 rounded-lg bg-default-300"></div>
        </Skeleton>
      ))}
    </div>
  );
};
