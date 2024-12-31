import { RouterProvider } from '@tanstack/react-router';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { router } from './app/routes';
import { Flowbite } from 'flowbite-react';
import { customTheme } from './flow-bite.config';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <Flowbite theme={{ theme: customTheme }}>
      <RouterProvider router={router} />
    </Flowbite>
  </StrictMode>
);
