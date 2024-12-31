import Banner from './banner/banner';
import BoostBanner from './boost-banner/boost-banner';
import Shortner from './shortner/shortner';
import Statistics from './statistics/statistics';

export function Home() {
  return (
    <div className="flex flex-col w-full h-full justify-self-center">
      <div className="flex flex-col flex-1 w-full mx-auto">
        <Banner />
        <div className="flex flex-col w-full pb-12 bg-neutral-light">
          <div className="container flex flex-col gap-16 mx-auto">
            <Shortner />
            <Statistics />
          </div>
        </div>
      </div>
      <BoostBanner />
    </div>
  );
}

export default Home;
