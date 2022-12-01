import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { HiddenContextProvider } from './context/HiddenContext';
import { TodosContextProvider } from './context/TodosContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodosContextProvider>
      <HiddenContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HiddenContextProvider>
    </TodosContextProvider>
  </React.StrictMode>
);
