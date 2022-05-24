import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { counterReducer } from './slices/counter'
import { usersApi } from './slices/users'

export const store = configureStore ({
  reducer: {
    counter: counterReducer,
    // Add the generated reducer as a specific top-level slice
    [usersApi.reducerPath]: usersApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: () => [usersApi.middleware]
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners (store.dispatch)
