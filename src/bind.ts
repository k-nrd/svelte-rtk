import type { Action, Store } from '@reduxjs/toolkit'

import { readable } from 'svelte/store'
import { BoundStore } from './types'

export const bind = <S, A>(store: Store<S, Action<A>>): BoundStore<S, A> => {
  const state = readable (store.getState (), (set) =>
    store.subscribe (() => {
      set (store.getState ())
    })
  )

  return {
    subscribe: state.subscribe,
    getState: () => store.getState (),
    dispatch: store.dispatch
  }
}
