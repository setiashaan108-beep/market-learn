import { http, HttpResponse } from 'msw';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

const featCourses = [
  {
    id: 'course-web-dev-bootcamp',
    title: 'The Complete Web Development Bootcamp',
    isBestseller: true,
    thumbnail: {
      src: '/home/assets/web-development.png',
      alt: 'A laptop screen showing lines of colored code in a code editor',
    },
    instructor: {
      name: 'John Smith',
      avatar: '/home/assets/john-smith.jpg',
    },
    metrics: {
      rating: 4.8,
      reviewCount: 12500,
    },
    price: 49.99,
    currency: 'USD',
  },
  {
    id: 'course-data-science-beginners',
    title: 'Data Science for Beginners',
    isBestseller: false,
    thumbnail: {
      src: '/home/assets/data-science.png',
      alt: 'Close-up of hands typing on a laptop with data charts blurred in the background',
    },
    instructor: {
      name: 'Sarah Johnson',
      avatar: '/home/assets/sarah-johnson.jpg',
    },
    metrics: {
      rating: 4.7,
      reviewCount: 8200,
    },
    price: 39.99,
    currency: 'USD',
  },
  {
    id: 'course-uiux-fundamentals',
    title: 'UI/UX Design Fundamentals',
    isBestseller: false,
    thumbnail: {
      src: '/home/assets/uiux-design.png',
      alt: "A designer's hands sketching mobile user interface wireframes on graph paper",
    },
    instructor: {
      name: 'Mike Chen',
      avatar: '/home/assets/mike-chen.jpg',
    },
    metrics: {
      rating: 4.6,
      reviewCount: 6800,
    },
    price: 39.99,
    currency: 'USD',
  },
  {
    id: 'course-python-masterclass',
    title: 'Python Programming Masterclass',
    isBestseller: false,
    thumbnail: {
      src: '/home/assets/python-programming.png',
      alt: 'A laptop display highlighting the official blue and yellow Python logo',
    },
    instructor: {
      name: 'Emily Davis',
      avatar: '/home/assets/emily-devis.jpg',
    },
    metrics: {
      rating: 4.8,
      reviewCount: 9400,
    },
    price: 44.99,
    currency: 'USD',
  },
];

const featInstructors = [
  {
    id: 1,
    name: 'John Smith',
    role: 'Full Stack Developer',
    rating: 4.8,
    totalStudents: '1.2k',
    coursesCount: 5,
    avatarUrl: '/home/assets/john-smith.jpg',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Data Scientist',
    rating: 4.7,
    totalStudents: '880',
    coursesCount: 4,
    avatarUrl: '/home/assets/sarah-johnson.jpg',
  },
  {
    id: 3,
    name: 'Mike Chen',
    role: 'UI/UX Designer',
    rating: 4.6,
    totalStudents: '760',
    coursesCount: 3,
    avatarUrl: '/home/assets/mike-chen.jpg',
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'Python Developer',
    rating: 4.8,
    totalStudents: '1.1k',
    coursesCount: 5,
    avatarUrl: '/home/assets/emily-devis.jpg',
  },
];

export const handlers = [
  http.post(`${API_BASE_URL}/auth/login`, async ({ request }) => {
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

  http.get(`${API_BASE_URL}/courses/featured`, async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return HttpResponse.json(featCourses);
  }),

  http.get(`${API_BASE_URL}/instructors/featured`, async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return HttpResponse.json(featInstructors);
  }),
];
