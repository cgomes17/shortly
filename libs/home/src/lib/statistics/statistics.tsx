import StatisticsCard from './card/card';
import { ReactComponent as BrandRecognition } from './../assets/icon-brand-recognition.svg';
import { ReactComponent as DetailedRecords } from './../assets/icon-detailed-records.svg';
import { ReactComponent as FullyCustomizable } from './../assets/icon-fully-customizable.svg';

const statisticsCards = [
  {
    label: 'Brand Recognition',
    description: `Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.`,
    logo: BrandRecognition,
  },
  {
    label: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    logo: DetailedRecords,
  },
  {
    label: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    logo: FullyCustomizable,
  },
];

export function Statistics() {
  const getTopPadding = (i: number) => {
    if (i === 0) return '';
    return i === 1 ? 'pt-16' : 'pt-32';
  };

  return (
    <div className="flex flex-col items-center pb-8">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-3xl font-bold text-neutral-dark">
          Advanced Statistics
        </h3>
        <span className="text-center text-neutral max-w-[450px]">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </span>
      </div>

      <div className="flex flex-row items-center w-full md:flex-row">
        {statisticsCards.map((card, i) => (
          <div className="flex flex-row items-center" key={card.label}>
            <div className={`flex-1 ${getTopPadding(i)} `}>
              <StatisticsCard card={card} />
            </div>
            {i < statisticsCards.length - 1 ? (
              <div className="w-8 mt-12 min-h-2 bg-primary"></div>
            ) : (
              ''
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Statistics;
