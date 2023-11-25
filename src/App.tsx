import { NextUIProvider } from '@nextui-org/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';

import { router } from './router/router.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: +import.meta.env.VITE_REACT_QUERY_STALE_TIME,
      retry: 2,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
  },
});

console.log(
  '🚀 Welcome to my news aggregator application, I hope you enjoy it.😁',
);

function App() {
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </NextUIProvider>
  );
}

export default App;
