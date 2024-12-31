import { Button, Card, Label, TextInput } from 'flowbite-react';
import ShortnerLinks from './links/links';

export function Shortner() {
  return (
    <div className="flex flex-col gap-6">
      <Card className="bg-accent md:bg-[url('/images/bg-shorten-desktop.svg')] bg-[url('/images/bg-shorten-mobile.svg')] bg-cover bg-center bg-no-repeat p-6">
        <div className="flex flex-row items-center gap-6">
          <div className="flex flex-col flex-1">
            <Label htmlFor="fullLink" hidden>
              Full Link
            </Label>
            <TextInput
              sizing="lg"
              id="fullLink"
              type="text"
              placeholder="Shorten a link here..."
            />
          </div>
          <Button
            className="flex flex-col items-center h-full"
            size="lg"
            color="info"
          >
            Shorten it!
          </Button>
        </div>
      </Card>

      <div className="flex flex-col">
        <ShortnerLinks />
      </div>
    </div>
  );
}

export default Shortner;
