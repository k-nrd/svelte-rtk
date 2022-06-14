import type { Dispatch } from '@reduxjs/toolkit'
import type { BoundStore, Comparison, Selector, SelectorHook } from './types'

import { getContext } from 'svelte'
import { Readable, readable } from 'svelte/store'
import { KEY } from './constants'

function refEquality<T> (a: T, b: T): boolean {
  return a === b
}

export function createUseSelector<
  ST extends unknown = unknown,
  AD extends Dispatch = Dispatch
> (): SelectorHook<ST> {
  return function useSelector<SL> (
    selector: Selector<ST, SL>,
    equalityFn: Comparison<SL> = refEquality
  ): Readable<SL> {
    const store = getContext<BoundStore<ST, AD>> (KEY)

    let previousState = selector (store.getState ())

    return readable<SL> (previousState, (set) =>
      store.subscribe ((state) => {
        const newState = selector (state)

        if (!equalityFn (previousState, newState)) {
          previousState = newState
          set (newState)
        }
      })
    )
  }
}

export const useSelector = createUseSelector ()
