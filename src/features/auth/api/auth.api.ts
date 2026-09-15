import type { LoginPayload, LoginResponse } from '../types/auth.types';

const API_URL = import.meta.env.VITE_API_URL;

export async function login(request: LoginPayload): Promise<LoginResponse> {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Login failed');
  }

  const data: LoginResponse = await response.json();
  return data;
}
