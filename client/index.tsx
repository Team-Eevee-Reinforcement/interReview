
import React from 'react';
// import { render } from 'react-dom';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import store from './store';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)



root.render(
    <Provider store={store}>
      <App/>
    </Provider>,
);


