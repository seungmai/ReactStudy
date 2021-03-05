import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import SimpleHabit from './components/simpleHabit';

ReactDOM.render(
  <React.StrictMode>
    {/* stricmode를 사용하면 바로 에로 메시지가나타나기 때문에 사용! */}
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById('root')
);