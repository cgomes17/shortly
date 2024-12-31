import { Link } from '@tanstack/react-router';

export interface FooterLinkListItem {
  label: string;
  url: string;
}

export function FooterLinkList({
  name,
  items,
}: {
  name: string;
  items: FooterLinkListItem[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-bold">{name}</span>
      <ul className="flex flex-col gap-4 text-neutral">
        {items.map((item) => (
          <li className="hover:text-primary" key={item.url}>
            <Link to={item.url}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinkList;
