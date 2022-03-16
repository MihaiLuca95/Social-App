import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// Needed for DEVELOPMENT
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Needed for DEV
reportWebVitals();
