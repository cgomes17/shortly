import { Link } from '@tanstack/react-router';
import ShellHeaderLinkText from './link/link';
import { ReactComponent as ShortlyLogo } from './../../../assets/logo.svg';
import { Button } from 'flowbite-react';

export function ShellHeader() {
  return (
    <div className="container flex flex-row items-center justify-between gap-2 mx-auto">
      <div className="flex flex-row items-center gap-12">
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
          <Link to="/resources">
            <ShellHeaderLinkText label="Resources" />
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center gap-8">
        <Link to="/login">
          <ShellHeaderLinkText label="Login" />
        </Link>
        <Link to="/signup">
          <Button pill size="sm" color="info">
            Sign Up
          </Button>
        </Link>
        <Link to="/design">
          <ShellHeaderLinkText label="Design" />
        </Link>
      </div>
    </div>
  );
}

export default ShellHeader;
