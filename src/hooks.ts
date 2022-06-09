import type { Action, Dispatch, Store } from '@reduxjs/toolkit'
import type { BoundStore, Selector, Comparison } from './types'

import { setContext, getContext } from 'svelte'
import { Readable, readable } from 'svelte/store'
import { bind } from './bind'

const KEY = Symbol ('@svelte-rtk')

export const provideStore = <S, A>(store: Readonly<Store<S, Action<A>>>): void => {
  setContext (KEY, bind<S, A> (store))
}

const createUseSelectorCreator = (isEqual: Comparison) => <S, A>() => <T>(selector: Selector<S, T>): Readable<T> => {
  let previousState: T
  let hasPrevious = false
  const store = getContext<BoundStore<S, A>> (KEY)

  return readable<T> (selector (store.getState ()), (set) =>
    store.subscribe ((state) => {
      const newState = selector (state)

      if (!hasPrevious) {
        hasPrevious = true
        previousState = newState
        set (newState)
      } else if (!isEqual (previousState, newState)) {
        previousState = newState
        set (newState)
      }
    })
  )
}

export const createUseSelector = createUseSelectorCreator ((a, b) => a === b)
export const useSelector = createUseSelector ()

export const useDispatch = <S, A>(): Dispatch<Action<A>> => {
  const { dispatch } = getContext<BoundStore<S, A>> (KEY)
  return dispatch
}
