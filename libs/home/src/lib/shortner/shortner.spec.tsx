import { render } from '@testing-library/react';

import Shortner from './shortner';

describe('Shortner', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Shortner />);
    expect(baseElement).toBeTruthy();
  });
});
