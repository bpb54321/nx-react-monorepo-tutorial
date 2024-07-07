import { render } from '@testing-library/react';

import SharedButton from './shared-ui';

describe('SharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedButton />);
    expect(baseElement).toBeTruthy();
  });
});
