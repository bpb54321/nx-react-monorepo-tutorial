import { render } from '@testing-library/react';

import App from './app';
import { BrowserRouter } from 'react-router-dom';

const WrappedApp = () => {
  return <BrowserRouter>
    <App />
  </BrowserRouter>;
}

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WrappedApp />);
    expect(baseElement).toBeTruthy();
  });

  it('should have home as the title', () => {
    const { getByText } = render(<WrappedApp />);
    expect(getByText(/home/i)).toBeTruthy();
  });
});
