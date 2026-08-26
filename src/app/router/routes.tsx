import HomePage from '../../pages/HomePage';
import LearnerLayout from '../../layouts/LearnerLayout';
import AdminLayout from '../../layouts/AdminLayout';
import InstructorLayout from '../../layouts/InstructorLayout';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/courses',
    element: <h1>Courses Page</h1>,
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
    element: <h1>Login Page</h1>,
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
    path: '/app',
    element: <LearnerLayout />,
    children: [
      {
        index: true,
        element: <h1>Learner Dashboard</h1>,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <h1>Admin Dashboard</h1>,
      },
    ],
  },
  {
    path: '/instructor',
    element: <InstructorLayout />,
    children: [
      {
        index: true,
        element: <h1>Instructor Dashboard</h1>,
      },
    ],
  },
];
