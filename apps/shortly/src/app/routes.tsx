import { getFeaturesRoute } from '@shortly/features';
import { getHomeRoute } from '@shortly/home';
import { getPricingRoute } from '@shortly/pricing';
import { getResourcesRoute } from '@shortly/resources';
import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import App from './app';

export const rootRoute = createRootRoute({
  component: App,
});

const routeTree = rootRoute.addChildren([
  createRoute({
    path: '/signup',
    getParentRoute: () => rootRoute,
  }),
  createRoute({
    path: '/login',
    getParentRoute: () => rootRoute,
  }),
  getHomeRoute(rootRoute),
  getFeaturesRoute(rootRoute),
  getResourcesRoute(rootRoute),
  getPricingRoute(rootRoute),
]);

export const router = createRouter({ routeTree });
