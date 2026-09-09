import { createContext } from 'react';
import type { LoginResponse, LoginPayload } from '../../features/auth/types/auth.types';

type AuthContextValue = {
  isAuthenticated: boolean;
  user: LoginResponse['user'] | null;
  login: (user: LoginPayload) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
};
const AuthContext = createContext<AuthContextValue>({
  isAuthenticated: false,
  user: null as LoginResponse['user'] | null,
  login: async () => {},
  logout: () => {},
  loading: false,
  error: null as string | null,
});

export { AuthContext };
