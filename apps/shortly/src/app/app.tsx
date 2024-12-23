import { Outlet } from '@tanstack/react-router';
import { RouterDevtools } from '@shortly/shared';
import Shell from './shell/shell';

export function App() {
  return (
    <div>
      <Shell>
        <>
          Content
          <Outlet />
        </>
      </Shell>
      <RouterDevtools />
    </div>
  );
}

export default App;
