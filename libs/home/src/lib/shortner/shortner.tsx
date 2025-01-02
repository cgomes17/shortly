import ShortnerLinks from './links/links';
import ShortnerInput from './input/input';
import { Card } from 'flowbite-react';

export function Shortner() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="bg-accent md:bg-[url('/images/bg-shorten-desktop.svg')] bg-[url('/images/bg-shorten-mobile.svg')] bg-cover bg-center bg-no-repeat h-[150px] px-8">
        <ShortnerInput />
      </Card>

      <div className="flex flex-col">
        <ShortnerLinks />
      </div>
    </div>
  );
}

export default Shortner;
