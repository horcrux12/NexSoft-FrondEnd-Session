import React from 'react';
import ReactDOM from 'react-dom';
import storage from "redux-persist/lib/storage";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";

import App from './App';
import Reducers from "./reducers"

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['UserReducer'],
  whitelist: ['AuthReducer']
}
const persistReducersInit = persistReducer(persistConfig, Reducers) 
const store = createStore(persistReducersInit,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
