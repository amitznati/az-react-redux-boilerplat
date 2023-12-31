import React from 'react'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {getStoreInstance} from './sdk';

const store = getStoreInstance();

ReactDOM.createRoot((document.getElementById('root') as any)).render(
  <React.StrictMode>
      <Provider store={store} >
          <App />
      </Provider>
  </React.StrictMode>,
)
