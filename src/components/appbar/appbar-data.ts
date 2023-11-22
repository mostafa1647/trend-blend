import { paths } from '../../router/paths.ts';

export const appbarData = [
  {
    title: paths.home.title,
    href: paths.home.href,
  },
  {
    title: paths.explore.title,
    href: paths.explore.href,
  },
] as const;
