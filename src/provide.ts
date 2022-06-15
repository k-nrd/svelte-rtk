import type { Action, AnyAction, Store } from '@reduxjs/toolkit'
import { setContext } from 'svelte'
import { bind } from './bind'
import { KEY } from './constants'
import { InferredPayload } from './types'

export function provideStore<S extends unknown = unknown, A extends Action = AnyAction> (store: Store<S, A>): void {
  setContext (KEY, bind<ReturnType<typeof store.getState>, Action<InferredPayload<typeof store.dispatch>>> (store))
}
