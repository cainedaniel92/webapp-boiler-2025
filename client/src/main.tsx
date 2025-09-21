import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './styles/index.scss';
import { initTranslations } from './translations';
import { getUIConfig } from './configuration';

const applyInitialUISettings = () => {
  if (typeof document === 'undefined') {
    return;
  }

  const config = getUIConfig();
  const root = document.documentElement;

  root.dataset.skin = config.theme.defaultSkin;

  if (!root.hasAttribute('data-theme')) {
    root.setAttribute('data-theme', config.theme.defaultMode);
  }
};

const renderApp = () => {
  const rootElement = document.getElementById('root');

  if (!rootElement) {
    throw new Error('Root element not found');
  }

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

applyInitialUISettings();

initTranslations()
  .then(renderApp)
  .catch((error) => {
    console.error('Failed to initialise translations:', error);
    renderApp();
  });
