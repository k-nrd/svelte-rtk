import type { Action, Dispatch } from '@reduxjs/toolkit'
import { Readable } from 'svelte/store'

export type BoundStore<S, A> = Readable<S> & {
  readonly dispatch: Dispatch<Action<A>>
}

export type Selector<S, T> = (state: S) => T

export type EqualityChecker<T> = (a: T | null | undefined, b: T | null | undefined) => boolean

export type Listener<S> = (state: S) => void
