import type { Action, Dispatch, Store } from '@reduxjs/toolkit'
import type { BoundStore, Selector, EqualityChecker, Listener } from './types'

import { setContext, getContext } from 'svelte'
import { bind } from './bind'

const KEY = Symbol ('@svelte-rtk')

export const provideStore = <S, A>(store: Readonly<Store<S, Action<A>>>): void => {
  setContext (KEY, bind (store))
}

const createUseSelector = <S, A, T>(isEqual: EqualityChecker<T>) => (selector: Selector<S, T>) => {
  let previousState: T
  let hasPrevious = false
  const { subscribe } = getContext<BoundStore<S, A>> (KEY)

  return {
    subscribe: (listener: Listener<T>) =>
      subscribe ((state) => {
        const newState = selector (state)

        if (!hasPrevious) {
          hasPrevious = true
          previousState = newState
          listener (newState)
        } else if (!isEqual (previousState, newState)) {
          previousState = newState
          listener (newState)
        }
      })
  }
}

export const useSelector = createUseSelector ((a, b) => a === b)

export const useDispatch = <S, A>(): Dispatch<Action<A>> => {
  const { dispatch } = getContext<BoundStore<S, A>> (KEY)
  return dispatch
}
