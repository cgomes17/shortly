import { Link } from '@tanstack/react-router';
import ShellHeaderLinkText from './link/link';
import { ReactComponent as ShortlyLogo } from './../../../assets/logo.svg';

export function ShellHeader() {
  return (
    <div className="flex flex-row justify-between gap-2">
      <div className="flex flex-row gap-12">
        <Link to="/">
          <ShortlyLogo title="Shortly Logo" />
        </Link>
        <div className="flex flex-row gap-8">
          <Link to="/features">
            <ShellHeaderLinkText label="Features" />
          </Link>
          <Link to="/pricing">
            <ShellHeaderLinkText label="Pricing" />
          </Link>
          <Link to="test">
            <ShellHeaderLinkText label="Resources" />
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-12">
        <Link to="/login">
          <ShellHeaderLinkText label="Login" />
        </Link>
        <Link to="/signup">
          <ShellHeaderLinkText label="Sign Up" />
        </Link>
        <Link to="/design">
          <ShellHeaderLinkText label="Design" />
        </Link>
      </div>
    </div>
  );
}

export default ShellHeader;
