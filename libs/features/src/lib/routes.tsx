import {
  createRoute,
  lazyRouteComponent,
  RootRoute,
} from '@tanstack/react-router';

export const getFeaturesRoute = (rootRoute: RootRoute) =>
  createRoute({
    path: '/features',
    getParentRoute: () => rootRoute,
    component: lazyRouteComponent(() => import('./features')),
  });
