import {
  createRoute,
  lazyRouteComponent,
  RootRoute,
} from '@tanstack/react-router';

export const getHomeRoute = (rootRoute: RootRoute) =>
  createRoute({
    path: '/',
    getParentRoute: () => rootRoute,
    component: lazyRouteComponent(() => import('./home')),
  });
