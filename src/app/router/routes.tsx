import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';
import LearnerLayout from '../../layouts/LearnerLayout';
import AdminLayout from '../../layouts/AdminLayout';
import InstructorLayout from '../../layouts/InstructorLayout';
import PublicLayout from '../../layouts/PublicLayout';
import ProtectedRoute from '../router/ProtectedRoute';
import UnauthorizedPage from '../../pages/UnauthorizedPage';
import CoursePage from '../../pages/CoursePage';

export const routes = [
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/courses',
        element: <CoursePage />,
      },
      {
        path: '/courses/:courseId',
        element: <h1>Course Details Page</h1>,
      },
      {
        path: '/instructors',
        element: <h1>Instructors Page</h1>,
      },
      {
        path: '/instructors/:instructorId',
        element: <h1>Instructor Details Page</h1>,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <h1>Register Page</h1>,
      },
      {
        path: '/forgot-password',
        element: <h1>Forgot Password Page</h1>,
      },
      {
        path: '/unauthorized',
        element: <UnauthorizedPage />,
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={['learner']} />, // This will protect the routes below
    children: [
      {
        path: '/app',
        element: <LearnerLayout />,
        children: [
          {
            index: true,
            element: <p>Learner Dashboard</p>,
          },
          {
            path: 'profile',
            element: <p>Learner Profile Page</p>,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={['admin']} />, // This will protect the routes below
    children: [
      {
        path: '/admin',
        element: <AdminLayout />,
        children: [
          {
            index: true,
            element: <p>Admin Dashboard</p>,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={['instructor']} />, // This will protect the routes below
    children: [
      {
        path: '/instructor',
        element: <InstructorLayout />,
        children: [
          {
            index: true,
            element: <p>Instructor Dashboard</p>,
          },
        ],
      },
    ],
  },
];
