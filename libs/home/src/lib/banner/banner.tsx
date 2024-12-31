import { Button } from 'flowbite-react';
import { ReactComponent as WorkingImage } from './../assets/illustration-working.svg';

export function Banner() {
  return (
    <div className="container mx-auto flex flex-row justify-between h-[500px]">
      <div className="flex flex-col justify-center w-[700px]">
        <h1 className="font-bold text-7xl text-neutral-dark">
          More than just shorter links
        </h1>
        <span className="max-w-md pt-4 text-lg text-neutral">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </span>
        <Button
          pill
          size="lg"
          className="self-start mt-8 text-lg font-bold bg-primary"
        >
          Get Started
        </Button>
      </div>
      <div className="absolute right-0">
        <WorkingImage title="Working Image" className="pl-32" />
      </div>
    </div>
  );
}

export default Banner;
