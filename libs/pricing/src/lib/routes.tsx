import {
  createRoute,
  lazyRouteComponent,
  RootRoute,
} from '@tanstack/react-router';

export const getPricingRoute = (rootRoute: RootRoute) =>
  createRoute({
    path: '/pricing',
    getParentRoute: () => rootRoute,
    component: lazyRouteComponent(() => import('./pricing')),
  });
