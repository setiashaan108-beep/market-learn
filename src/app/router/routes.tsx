import HomePage from '../../pages/HomePage';
import LearnerLayout from '../../layouts/LearnerLayout';
import AdminLayout from '../../layouts/AdminLayout';
import InstructorLayout from '../../layouts/InstructorLayout';
import PublicLayout from '../../layouts/PublicLayout';

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
    ]
  },
  {
    element: <LearnerLayout />,
    children: [
      {
        path: '/app',
        element: <p>Learner Dashboard</p>,
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: '/admin',
        element: <p>Admin Dashboard</p>,
      },
    ],
  },
  {
    element: <InstructorLayout />,
    children: [
      {
        path: '/instructor',
        element: <p>Instructor Dashboard</p>,
      },
    ],
  },
];
