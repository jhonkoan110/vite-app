import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'todos',
      onQueryStarted: async (body, { dispatch, queryFulfilled, getState }) => {
        const { data: todos } = await queryFulfilled;
        const state = getState();
        // const {} = state.filters
        const extraDataFromAnotherEndpoint = await jsonPlaceholderApi.endpoints.getUsers.initiate()(dispatch, getState);

        console.log({extraDataFromAnotherEndpoint});
        console.log({state});
      },
    }),
    getUsers: builder.query({
      query: () => 'users',
    }),
    getComments: builder.query({
      query: () => 'comments',
    }),
  }),
});

export const { useGetTodosQuery } = jsonPlaceholderApi;
