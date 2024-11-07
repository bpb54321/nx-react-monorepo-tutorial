import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// A comment in inventory.
// Adding  a fix commit.
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
