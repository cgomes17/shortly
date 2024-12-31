import { ReactComponent as BrandRecognition } from './../../assets/icon-brand-recognition.svg';
import { Card } from 'flowbite-react';

export interface FooterSocialLinkListItem {
  label: string;
  logo: typeof BrandRecognition;
  description: string;
}

export function StatisticsCard({ card }: { card: FooterSocialLinkListItem }) {
  return (
    <Card>
      <div className="flex items-center justify-center w-[70px] h-[70px] ml-1 -mt-14 rounded-full bg-accent">
        <card.logo
          className="overflow-visible"
          title={card.label}
          viewBox="5 0 30 40"
          style={{ width: '30px', height: '30px' }}
        />
      </div>

      <h4 className="pt-4 text-xl font-bold text-neutral-dark">{card.label}</h4>
      <span className="text-sm text-neutral">{card.description}</span>
    </Card>
  );
}

export default StatisticsCard;
