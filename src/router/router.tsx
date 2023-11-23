import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '../layouts';
import { Explore } from '../pages/explore';
import { Feed } from '../pages/feed';

import { paths } from './paths.ts';

export const router = createBrowserRouter([
  {
    path: paths.home.href,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Feed />,
      },
      {
        path: paths.explore.href,
        element: <Explore />,
      },
    ],
  },
  {
    // TODO: complete 404 page
    path: '*',
    element: <div>Not Found</div>,
  },
]);