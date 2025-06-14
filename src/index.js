import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import './index.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { Layout } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>   
    <Layout />
   </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
