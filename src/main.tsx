import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App.tsx';
import './index.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 1 hour since it is a static API
      staleTime: 1000 * 60 * 60,
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/pokedex">
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
