import { CopyButton } from '@shortly/shared';
import { Button, Card } from 'flowbite-react';

const links = [
  {
    original: 'https://www.google.com',
    shortened: 'https://shortly.com/shortened',
  },
  {
    original: 'https://www.googlfsdfdsfdsfe.com',
    shortened: 'https://shortlgdfgdfgdfgfdgfdgfdgfdy.com/shortened',
  },
  {
    original: 'https://www.googsdfdsfdsle.com',
    shortened: 'https://shortldfgdgfdgdfgdfgy.com/shortened',
  },
];

export function ShortnerLinks() {
  return (
    <div className="flex flex-col gap-4">
      {links.map((link, i) => (
        <Card key={link.original + '-' + i}>
          <div className="flex flex-row items-center justify-between">
            <span className="text-neutral-dark">{link.original}</span>
            <div className="flex flex-row items-center gap-8">
              <span className="text-primary">{link.shortened}</span>
              <CopyButton text={link.shortened} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ShortnerLinks;
