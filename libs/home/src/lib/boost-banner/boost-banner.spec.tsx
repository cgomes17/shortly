import { render } from '@testing-library/react';
import BoostBanner from './boost-banner';
import React from 'react';

describe('BoostBanner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BoostBanner />);
    expect(baseElement).toBeTruthy();
  });
});
