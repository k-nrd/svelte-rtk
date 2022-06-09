import type { Action, Dispatch } from '@reduxjs/toolkit'
import { Readable } from 'svelte/store'

export type BoundStore<S, A> = Readable<S> & {
  readonly dispatch: Dispatch<Action<A>>
  readonly getState: () => S
}

export type Selector<S, T> = (state: S) => T

export type Comparison = (a: any, b: any) => boolean
