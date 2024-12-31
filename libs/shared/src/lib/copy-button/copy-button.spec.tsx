import { render } from '@testing-library/react';

import CopyButton from './copy-button';

describe('CopyButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CopyButton />);
    expect(baseElement).toBeTruthy();
  });
});
