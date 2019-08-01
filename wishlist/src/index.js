import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import connect from '@vkontakte/vkui-connect-promise';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import createStore from './store';

connect.send('VKWebAppInit', {});

const store = createStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
