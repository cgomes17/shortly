import { Outlet } from '@tanstack/react-router';
import { RouterDevtools } from '@shortly/shared';
import Shell from './shell/shell';

export function App() {
  return (
    <>
      <Shell>
        <Outlet />
      </Shell>
      <RouterDevtools />
    </>
  );
}

export default App;
