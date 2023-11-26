import { lazy, Suspense } from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { PageError } from '../components/error';

import { paths } from './paths.ts';

const RootLayout = lazy(() => import('../layouts/RootLayout.tsx'));
const Explore = lazy(() => import('../pages/explore'));
const Feed = lazy(() => import('../pages/feed'));

export const router = createBrowserRouter([
  {
    path: paths.home.href,
    element: (
      <Suspense>
        <RootLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <Feed />
          </Suspense>
        ),
      },
      {
        path: paths.explore.href,
        element: (
          <Suspense>
            <Explore />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense>
        <PageError message="Not Found" />
      </Suspense>
    ),
  },
]);
