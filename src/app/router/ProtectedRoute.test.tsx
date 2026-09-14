import { describe, it, expect } from 'vitest';

import { screen, render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import LearnerLayout from '../../layouts/LearnerLayout';
import { AuthContext, AuthProvider } from '../providers/AuthProvider';
import ProtectedRoute from './ProtectedRoute';
import LoginPage from '../../pages/LoginPage';
import CoursePage from '../../pages/CoursePage';
import AdminLayout from '../../layouts/AdminLayout';
import UnauthorizedPage from '../../pages/UnauthorizedPage';

describe('ProtectedRoute', () => {
  it('should redirect unauthenticated users to the login page', async () => {
    render(
      <MemoryRouter initialEntries={['/app']}>
        <AuthProvider>
          <Routes>
            <Route element={<ProtectedRoute allowedRoles={['learner']} />}>
              <Route path="/app" element={<LearnerLayout />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </AuthProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
  });

  it('should allow public link for unauthorized user', () => {
    render(
      <MemoryRouter initialEntries={['/courses']}>
        <AuthProvider>
          <Routes>
            <Route path="/courses" element={<CoursePage />} />
          </Routes>
        </AuthProvider>
      </MemoryRouter>,
    );

    screen.debug();
    expect(screen.getByText(/Courses Page/i)).toBeInTheDocument();
  });

  it('allows an authenticated learner to access /app', () => {
    render(
      <MemoryRouter initialEntries={['/app']}>
        <AuthContext.Provider
          value={{
            user: {
              id: 'u1',
              email: 'learner@example.com',
              name: 'Test Learner',
              role: 'learner',
            },
            isAuthenticated: true,
          }}
        >
          <Routes>
            <Route element={<ProtectedRoute allowedRoles={['learner']} />}>
              <Route path="/app" element={<LearnerLayout />} />
            </Route>
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/Learner/i)).toBeInTheDocument();
  });

  it('prevents a learner from accessing /admin', () => {
    render(
      <MemoryRouter initialEntries={['/admin']}>
        <AuthContext.Provider
          value={{
            user: {
              id: 'u1',
              email: 'learner@example.com',
              name: 'Test Learner',
              role: 'learner',
            },
            isAuthenticated: true,
          }}
        >
          <Routes>
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin" element={<AdminLayout />} />
            </Route>
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/Unauthorized Access/i)).toBeInTheDocument();
  });
});
