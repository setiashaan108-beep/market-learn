import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { AppProvider } from './app/providers/AppProvider.tsx';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/index.tsx';
import { AuthProvider } from './app/providers/AuthProvider.tsx';

async function enableMocking() {
  // Check if MSW is explicitly enabled for this environment
  const isMswEnabled = import.meta.env.VITE_ENABLE_MSW === 'true';

  if (!isMswEnabled) {
    return;
  }

  const { worker } = await import('./mocks/browser');

  // Resolve base path dynamically if hosted on a subpath (e.g., domain.com/app/)
  const baseUrl = import.meta.env.BASE_URL || '/';

  return worker.start({
    onUnhandledRequest: 'bypass',
    serviceWorker: {
      // Points to public/mockServiceWorker.js served relative to base path
      url: `${baseUrl}mockServiceWorker.js`,
    },
  });
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
