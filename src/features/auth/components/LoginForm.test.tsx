import { beforeEach, describe, expect, it, vi } from 'vitest';
import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../../../app/providers/AuthProvider';

// 1. Create a stable mock function reference
const mockNavigate = vi.fn();

// 2. Mock react-router-dom returning the stable mock instance
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

beforeEach(() => {
  mockNavigate.mockReset();
});

describe('LoginForm', () => {
  it('renders the login form', () => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      </MemoryRouter>,
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Submit/i })).toBeInTheDocument();
  });

  it('submits the form and authenticates the user', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      </MemoryRouter>,
    );

    await user.type(screen.getByLabelText(/email/i), 'setiashaan108@gmail.com');

    await user.type(screen.getByLabelText(/password/i), 'setia123');

    await user.click(screen.getByRole('button', { name: /Submit/i }));

    await waitFor(
      () => {
        expect(mockNavigate).toHaveBeenCalledWith('/app');
      },
      { timeout: 3000 },
    );
  });

  it('disable the loading button when form is submitting', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      </MemoryRouter>,
    );

    await user.type(screen.getByLabelText(/email/i), 'setiashaan108@gmail.com');

    await user.type(screen.getByLabelText(/password/i), 'setia12');
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    expect(submitButton).not.toBeDisabled();

    await user.click(submitButton);

    expect(submitButton).toBeDisabled();
    expect(await screen.findByRole('button', { name: /Loading/i })).toBeDisabled();
  });

  it('displays an error when login fails', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <AuthProvider>
          <LoginForm />
        </AuthProvider>
      </MemoryRouter>,
    );

    await user.type(screen.getByLabelText(/email/i), 'setiashaan108@gmail.com');

    await user.type(screen.getByLabelText(/password/i), 'wrongpassword');
    const submitButton = screen.getByRole('button', { name: /Submit/i });
    await user.click(submitButton);

    await waitFor(
      async () => {
        const errorMessage = await screen.findByText(
          /Login failed. Please check your credentials and try again./i,
        );
        expect(errorMessage).toBeInTheDocument();
      },
      { timeout: 3000 },
    );
  });
});
