import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (build) => ({
        login: build.mutation({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body
            })
        })
    }),
})

export const { useLoginMutation } = authApi;
