import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Store from './store/store';
import { createContext } from 'react';

const store = new Store();

export const Context = createContext(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context.Provider value={{ store }}>
      <App />
    </Context.Provider>
  </React.StrictMode>
);
