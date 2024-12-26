import {
  createRoute,
  lazyRouteComponent,
  RootRoute,
} from '@tanstack/react-router';

export const getResourcesRoute = (rootRoute: RootRoute) =>
  createRoute({
    path: '/resources',
    getParentRoute: () => rootRoute,
    component: lazyRouteComponent(() => import('./resources')),
  });
