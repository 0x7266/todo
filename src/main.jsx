import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TodosContextProvider } from './context/TodosContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodosContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodosContextProvider>
  </React.StrictMode>
);
