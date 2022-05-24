import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

// Define a service using a base URL and expected endpoints
export const usersApi = createApi ({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery ({
    baseUrl: 'https://jsonplaceholder.typicode.com/users'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query ({
      query: () => '/'
    })
  })
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { getUsers } = usersApi.endpoints
