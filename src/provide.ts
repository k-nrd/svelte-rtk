import type { Action, AnyAction, Store } from '@reduxjs/toolkit'
import { setContext } from 'svelte'
import { bind } from './bind'
import { KEY } from './constants'

export function provideStore<S, A extends Action = AnyAction> (store: Store<S, A>): void {
  setContext (KEY, bind<S, A> (store))
}
