import type { Action, Dispatch, Store } from 'redux'
import type { Readable } from 'svelte/store'
import type { BoundStore } from './types'

import { setContext, getContext } from 'svelte'
import { bind } from './bind'

const KEY = Symbol ('@svelte-rtk')

export const provideStore = <S, A>(store: Readonly<Store<S, Action<A>>>): void => {
  setContext (KEY, bind (store))
}

export const useSelector = <S, A, T>(selector: ((state: S) => T)): Readable<T> => {
  const { subscribe } = getContext<BoundStore<S, A>> (KEY)
  return {
    subscribe: (listener) =>
      subscribe ((state) =>
        listener (selector (state))
      )
  }
}

export const useDispatch = <S, A>(): Dispatch<Action<A>> => {
  const { dispatch } = getContext<BoundStore<S, A>> (KEY)
  return dispatch
}
