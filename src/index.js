import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { PersistGate } from 'redux-persist/integration/react'
import configureStore from "./redux/configureStore";
import { Provider } from 'react-redux';

const store = configureStore().store;
const persistor = configureStore().persistor;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);