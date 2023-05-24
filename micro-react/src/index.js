import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { IframeMessageProxy } from 'iframe-message-proxy'
import * as serviceWorker from './serviceWorker'


IframeMessageProxy.listen();
IframeMessageProxy.config({
  prefix: 'fragmentEvent:',
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.unregister();