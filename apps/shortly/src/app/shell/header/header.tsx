import { Link } from '@tanstack/react-router';
import ShellHeaderLink from './link/link';

export function ShellHeader() {
  return (
    <>
      {' '}
      <h1>Welcome to Header!</h1>
      <div className="flex gap-2 p-2">
        <Link to="/">LOGO</Link>
        <ShellHeaderLink path="/features" label="Features" />
        <ShellHeaderLink path="/pricing" label="Pricing" />
        <ShellHeaderLink path="/resources" label="Resources" />
      </div>
    </>
  );
}

export default ShellHeader;
