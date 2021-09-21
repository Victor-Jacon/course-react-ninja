import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GlobalStyle } from './pages/Page1';
import App from './App';
import { Provider } from 'react-redux' 
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);