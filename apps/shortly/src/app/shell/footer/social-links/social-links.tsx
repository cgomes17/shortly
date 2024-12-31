import { ReactComponent as FBLogo } from './../../../../assets/icon-facebook.svg';
import { ReactComponent as TwitterLogo } from './../../../../assets/icon-twitter.svg';
import { ReactComponent as InstagramLogo } from './../../../../assets/icon-instagram.svg';
import { ReactComponent as PinterestLogo } from './../../../../assets/icon-pinterest.svg';

export interface FooterSocialLinkListItem {
  label: string;
  logo: typeof FBLogo;
  url: string;
}

const items: FooterSocialLinkListItem[] = [
  { label: 'Facebook', logo: FBLogo, url: 'http://www.facebook.com' },
  { label: 'Twitter', logo: TwitterLogo, url: 'http://www.twitter.com' },
  {
    label: 'Pinterest',
    logo: PinterestLogo,
    url: 'http://www.pinterest.com',
  },
  {
    label: 'Instagram',
    logo: InstagramLogo,
    url: 'http://www.instagram.com',
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-row gap-6">
      {items.map((item) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noreferrer"
          title={`${item.label} Logo`}
        >
          <item.logo className="color-override fill-primary-contrast hover:fill-primary" />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
