import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ErrorBoundry from './features/errorBoundry';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
