import { Action, AnyAction, Dispatch } from '@reduxjs/toolkit'
import { Readable } from 'svelte/store'

export type BoundStore<ST, AD extends Dispatch> = Readable<ST> & {
  readonly dispatch: AD
  readonly getState: () => ST
}

export type Selector<ST, SL> = (state: ST) => SL

export type SelectorHook<ST> = <SL>(
  selector: Selector<ST, SL>,
  equalityFn?: Comparison<SL>
) => Readable<SL>

export type InferredAction<D> = D extends Dispatch<infer A>
  ? A extends Action
    ? A
    : AnyAction
  : AnyAction

export type Comparison<T> = (a: T, b: T) => boolean
