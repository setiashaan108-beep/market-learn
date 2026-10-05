import { configureStore } from '@reduxjs/toolkit';
import { coursesAPI } from '../features/home/services/courseAPI';
import { instructorsApi } from '../features/home/services/instructorsAPI';

export const store = configureStore({
  reducer: {
    [coursesAPI.reducerPath]: coursesAPI.reducer,
    [instructorsApi.reducerPath]: instructorsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesAPI.middleware, instructorsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
