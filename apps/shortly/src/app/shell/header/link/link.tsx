import { Link } from '@tanstack/react-router';

export function ShellHeaderLink({
  path,
  label,
}: {
  path: string;
  label: string;
}) {
  return (
    <Link to={path} className="text-green-900 [&.active]:text-black">
      {label}
    </Link>
  );
}

export default ShellHeaderLink;
