import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Instructor } from '../types/instructor';
const API_URL = import.meta.env.VITE_API_BASE_URL;

export const instructorsApi = createApi({
  reducerPath: 'instructorApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/` }),
  endpoints: (builder) => ({
    getFeaturedInstructors: builder.query<Instructor[], void>({
      query: () => 'instructors/featured',
    }),
  }),
});

export const { useGetFeaturedInstructorsQuery } = instructorsApi;
