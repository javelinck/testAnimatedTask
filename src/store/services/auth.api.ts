import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {AuthFormType} from '../../types/auth-form.type.ts';
import {AuthResponseType} from '../../types/auth-response.type.ts';

const baseUrl = 'http://localhost:3001/';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    createUser: builder.mutation<AuthResponseType, AuthFormType>({
      query: queryArg => ({
        url: 'api/create',
        method: 'POST',
        body: {...queryArg},
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {useCreateUserMutation} = authApi;
