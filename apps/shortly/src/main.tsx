import { QueryDevtools, RouterDevtools } from '@shortly/shared';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, RouterProvider } from '@tanstack/react-router';
import { Flowbite } from 'flowbite-react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { router } from './app/routes';
import { customTheme } from './flow-bite.config';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <Flowbite theme={{ theme: customTheme }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <QueryDevtools />
      </QueryClientProvider>
    </Flowbite>
  </StrictMode>
);
