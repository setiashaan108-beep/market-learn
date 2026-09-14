import { http, HttpResponse } from 'msw';
const BACKEND_URL = 'http://localhost:3000';

export const handlers = [
  http.post(`${BACKEND_URL}/auth/login`, async ({ request }) => {
    const body = await request.json();

    const { email, password } = body as {
      email: string;
      password: string;
    };

    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (email !== 'setiashaan108@gmail.com' || password !== 'setia123') {
      return HttpResponse.json(
        {
          message: 'Invalid email or password',
        },
        {
          status: 401,
        },
      );
    }

    return HttpResponse.json({
      user: {
        id: 'u1',
        name: 'Shaan Setia',
        email: 'setiashaan108@gmail.com',
        role: 'learner',
      },
      token: 'mocked-jwt-token',
    });
  }),
];
