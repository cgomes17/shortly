import { Button } from 'flowbite-react';

export function BoostBanner() {
  return (
    <div className="flex flex-col justify-center py-12 bg-accent md:bg-[url('/images/bg-boost-desktop.svg')] bg-[url('/images/bg-boost-mobile.svg')] bg-cover bg-center bg-no-repeat w-screen ">
      <div className="flex flex-col items-center justify-center gap-6 ">
        <span className="text-3xl font-bold text-accent-contrast">
          Boost your links today
        </span>
        <Button pill size="lg" color="info">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default BoostBanner;
