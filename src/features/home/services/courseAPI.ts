import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Course } from '../types/course';

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const coursesAPI = createApi({
  reducerPath: 'courseApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/` }),
  endpoints: (builder) => ({
    getFeaturedCourses: builder.query<Course[], void>({
      query: () => 'courses/featured',
    }),
  }),
});

export const { useGetFeaturedCoursesQuery } = coursesAPI;
