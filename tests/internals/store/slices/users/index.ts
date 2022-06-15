import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

type User = {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

// Define a service using a base URL and expected endpoints
export const usersApi = createApi ({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery ({
    baseUrl: 'https://jsonplaceholder.typicode.com/users'
  }),
  endpoints: (build) => ({
    getUsers: build.query<User[], unknown> ({
      query: () => '/'
    })
  })
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { getUsers } = usersApi.endpoints
