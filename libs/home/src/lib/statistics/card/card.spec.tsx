import { render } from '@testing-library/react';

import StatisticsCard from './card';

describe('StatisticsCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StatisticsCard />);
    expect(baseElement).toBeTruthy();
  });
});
