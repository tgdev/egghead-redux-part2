import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './configure-store';

import Root from './components/Root';

const appStore = configureStore();

ReactDOM.render(
  <Root store={appStore} />,
  document.getElementById('root')
);
