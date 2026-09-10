import { useState } from 'react';
import { AuthContext } from './AuthContext';
import type { LoginResponse, LoginPayload } from '../../features/auth/types/auth.types';
import { login as loginApi } from '../../features/auth/api/auth.api';

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<LoginResponse['user'] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (credentials: LoginPayload) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginApi(credentials);
      setIsAuthenticated(true);
      setUser(response.user);
      setLoading(false);
    } catch {
      setError('Login failed. Please check your credentials and try again.');
      setLoading(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
