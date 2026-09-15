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
import InstructorLayout from '../../layouts/InstructorLayout';

const authContextAttribute = {
  isAuthenticated: true,
  login: async () => {},
  logout: () => {},
  loading: false,
  error: null,
};

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

  it('allows unauthenticated users to access public routes', () => {
    render(
      <MemoryRouter initialEntries={['/courses']}>
        <AuthProvider>
          <Routes>
            <Route path="/courses" element={<CoursePage />} />
          </Routes>
        </AuthProvider>
      </MemoryRouter>,
    );

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
            ...authContextAttribute,
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
            ...authContextAttribute,
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

  it('allows an authenticated instructor to access /instructor', () => {
    render(
      <MemoryRouter initialEntries={['/instructor']}>
        <AuthContext.Provider
          value={{
            user: {
              id: 'u1',
              email: 'learner@example.com',
              name: 'Test Learner',
              role: 'instructor',
            },
            ...authContextAttribute
          }}
        >
          <Routes>
            <Route element={<ProtectedRoute allowedRoles={['instructor']} />}>
              <Route path="/instructor" element={<InstructorLayout />} />
            </Route>
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/Instructor/i)).toBeInTheDocument();
  });

  it('prevents an instructor from accessing /admin', () => {
    render(
      <MemoryRouter initialEntries={['/admin']}>
        <AuthContext.Provider
          value={{
            user: {
              id: 'u1',
              email: 'learner@example.com',
              name: 'Test Learner',
              role: 'instructor',
            },
            ...authContextAttribute,
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

  it('allows an authenticated admin to access /admin', () => {
    render(
      <MemoryRouter initialEntries={['/admin']}>
        <AuthContext.Provider
          value={{
            user: {
              id: 'u1',
              email: 'learner@example.com',
              name: 'Test Learner',
              role: 'admin',
            },
            ...authContextAttribute,
          }}
        >
          <Routes>
            <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
              <Route path="/admin" element={<AdminLayout />} />
            </Route>
          </Routes>
        </AuthContext.Provider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/Admin/i)).toBeInTheDocument();
  });
});
