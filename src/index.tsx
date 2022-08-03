import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { MovieProvider } from './contexts/movieContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </React.StrictMode>
);
