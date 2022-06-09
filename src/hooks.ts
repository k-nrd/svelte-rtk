import type { Action, Dispatch, Store } from '@reduxjs/toolkit'
import type { BoundStore, Selector, Comparison } from './types'

import { setContext, getContext } from 'svelte'
import { Readable, readable } from 'svelte/store'
import { bind } from './bind'

const KEY = Symbol ('$$svelte-rtk')

export const provideStore = <S, A>(store: Store<S, Action<A>>): void => {
  setContext (KEY, bind<S, A> (store))
}

const createUseSelectorCreator = (isEqual: Comparison) => <S, A>() => <T>(selector: Selector<S, T>): Readable<T> => {
  const store = getContext<BoundStore<S, A>> (KEY)

  let previousState = selector (store.getState ())

  return readable<T> (previousState, (set) =>
    store.subscribe ((state) => {
      const newState = selector (state)

      if (!isEqual (previousState, newState)) {
        previousState = newState
        set (newState)
      }
    })
  )
}

export const createUseSelector = createUseSelectorCreator ((a, b) => a === b)

export const createUseDispatch = <S, A>() => (): Dispatch<Action<A>> => {
  const { dispatch } = getContext<BoundStore<S, A>> (KEY)
  return dispatch
}
export const useSelector = createUseSelector ()

export const useDispatch = createUseDispatch ()
