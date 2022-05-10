import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { Store } from "./store/index"
import { Provider } from "react-redux"
ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
