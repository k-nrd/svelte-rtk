import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { createUseSelector, createUseDispatch } from '../../../src'

import { counterReducer } from './slices/counter'
import { usersApi } from './slices/users'
import { pokemonApi } from './slices/pokemon'

export const store = configureStore ({
  reducer: {
    counter: counterReducer,
    // Add the generated reducer as a specific top-level slice
    [usersApi.reducerPath]: usersApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (gDM) => gDM ().concat (usersApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useDispatch = createUseDispatch<RootState, AppDispatch> ()
export const useSelector = createUseSelector<RootState, AppDispatch> ()

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners (store.dispatch)
