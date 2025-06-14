import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import ProductList from './component/ProductList';

import './index.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>   
    <ProductList />
   </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
