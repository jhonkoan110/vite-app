import { configureStore } from '@reduxjs/toolkit';
import { jsonPlaceholderApi } from '../api';
import todosReducer from './slices/todoSlice';

export const store = configureStore({
  reducer: {
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    todo: todosReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});
