import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '../layouts';
import { Explore } from '../pages/explore';
import { Home } from '../pages/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/explore',
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
