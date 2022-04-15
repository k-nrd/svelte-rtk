import type { Action, Dispatch } from '@reduxjs/toolkit'
import { Readable } from 'svelte/store'

export type BoundStore<S, A> = Readable<S> & {
  readonly dispatch: Dispatch<Action<A>>
}
