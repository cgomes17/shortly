import FooterLinkList, { FooterLinkListItem } from './link-list/link-list';
import { ReactComponent as ShortlyLogo } from './../../../assets/logo.svg';
import { SocialLinks } from './social-links/social-links';
import { Link } from '@tanstack/react-router';

export function ShellFooter() {
  const featureItems: FooterLinkListItem[] = [
    { label: 'Link Shortening', url: 'link-shortening' },
    { label: 'Branded Links', url: 'branded-links' },
    { label: 'Analytics', url: 'analytics' },
  ];

  const resourcesItems: FooterLinkListItem[] = [
    { label: 'Blog', url: 'blog' },
    { label: 'Developers', url: 'developers' },
    { label: 'Support', url: 'support' },
  ];

  const companyItems: FooterLinkListItem[] = [
    { label: 'About', url: 'about' },
    { label: 'Our Team', url: 'our-team' },
    { label: 'Careers', url: 'careers' },
    { label: 'Contact', url: 'contact' },
  ];

  return (
    <div className="py-12 bg-neutral-darkest text-primary-contrast">
      <div className="container flex flex-row justify-between mx-auto ">
        <Link to="/">
          <ShortlyLogo
            className="color-override fill-primary-contrast"
            title="Shortly Logo"
          />
        </Link>
        <div className="flex flex-row gap-32">
          <div className="flex flex-row gap-24 text-xs">
            <FooterLinkList name="Features" items={featureItems} />
            <FooterLinkList name="Resources" items={resourcesItems} />
            <FooterLinkList name="Company" items={companyItems} />
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default ShellFooter;
