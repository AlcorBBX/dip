import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from '../src/components/store/UserStore'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    // передаем объект, в поле юзер создаем новый объект класса UserStore
    user: new UserStore(),
  }}>
    <App />
  </Context.Provider>
);

