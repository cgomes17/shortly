import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import App from './app';
import { getFeaturesRoute } from '@shortly/features';
import { getResourcesRoute } from '@shortly/resources';
import { getPricingRoute } from '@shortly/pricing';
import { getHomeRoute } from '@shortly/home';

export const rootRoute = createRootRoute({
  component: App,
});

const routeTree = rootRoute.addChildren([
  getHomeRoute(rootRoute),
  getFeaturesRoute(rootRoute),
  getResourcesRoute(rootRoute),
  getPricingRoute(rootRoute),
]);

export const router = createRouter({ routeTree });
