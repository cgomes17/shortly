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
import design from './../../../../design/desktop-active-states.jpg';

export const rootRoute = createRootRoute({
  component: App,
});

const routeTree = rootRoute.addChildren([
  createRoute({
    path: '/design',
    getParentRoute: () => rootRoute,
    component: () => (
      <div>
        <img src={design} alt="Design" />
      </div>
    ),
  }),
  getHomeRoute(rootRoute),
  getFeaturesRoute(rootRoute),
  getResourcesRoute(rootRoute),
  getPricingRoute(rootRoute),
]);

export const router = createRouter({ routeTree });
