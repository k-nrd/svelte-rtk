import type { Action, AnyAction, Dispatch, Store } from '@reduxjs/toolkit'
import type { BoundStore } from './types'

import { readable } from 'svelte/store'

export function bind<
  S = unknown,
  A extends Action = AnyAction
> (store: Store<S, A>): BoundStore<S, Dispatch<A>> {
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
