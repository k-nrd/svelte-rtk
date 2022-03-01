import type { Action, Store } from 'redux'

import { readable } from 'svelte/store'
import { BoundStore } from './types'

export const bind = <S, A>(store: Readonly<Store<S, Action<A>>>): BoundStore<S, A> => {
  const state = readable (store.getState (), (set) =>
    store.subscribe (() => {
      set (store.getState ())
    })
  )

  return {
    subscribe: state.subscribe,
    dispatch: store.dispatch
  }
}
