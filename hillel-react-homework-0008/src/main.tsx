import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import './index.css';
import { store } from './store/store';

hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
