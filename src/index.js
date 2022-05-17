import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ErrorBoundry from './features/errorBoundry';
import ServiceContext from './serviceContext';
import Service from './services';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
const service = new Service();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry>
        <ServiceContext.Provider value={service}>
          <BrowserRouter>
            <App />
          </BrowserRouter>          
        </ServiceContext.Provider>
      </ErrorBoundry>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
