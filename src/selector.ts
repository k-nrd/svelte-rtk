import type { Dispatch } from '@reduxjs/toolkit'
import type { BoundStore, Comparison, Selector, CreateSelector } from './types'

import { getContext } from 'svelte'
import { Readable, readable } from 'svelte/store'
import { KEY } from './constants'

function refEquality<T> (a: T, b: T): boolean {
  return a === b
}

export function createSelector<
  ST extends unknown = unknown,
  AD extends Dispatch = Dispatch
> (): CreateSelector<ST> {
  return function selector<SL> (
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

export const selector = createSelector ()
