import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppProvider } from './app/providers/AppProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/index.tsx';
import { AuthProvider } from './app/providers/AuthProvider.tsx';

async function enableMocking() {
  if (import.meta.env.DEV) {
    const { worker } = await import('./mocks/browser');

    return worker.start();
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <AppProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </AppProvider>
    </StrictMode>,
  );
});
