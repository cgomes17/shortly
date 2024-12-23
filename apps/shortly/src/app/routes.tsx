import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import App from './app';

export const rootRoute = createRootRoute({
  component: App,
});

const index = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <div>Home</div>,
});

const features = createRoute({
  getParentRoute: () => rootRoute,
  path: '/features',
  component: () => <div>Features</div>,
});

const routeTree = rootRoute.addChildren([index, features]);

export const router = createRouter({ routeTree });
