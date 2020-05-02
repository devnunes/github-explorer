import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TagManager from 'react-gtm-module';

import TagManagerInitialize from './config/TagManager';

TagManager.initialize(TagManagerInitialize);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
