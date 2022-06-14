import type { Dispatch } from '@reduxjs/toolkit'
import type { BoundStore } from './types'

import { getContext } from 'svelte'
import { KEY } from './constants'

export function createUseDispatch<
  ST extends unknown = unknown,
  AD extends Dispatch = Dispatch
> () {
  return function useDispatch (): AD {
    const { dispatch } = getContext<BoundStore<ST, AD>> (KEY)
    return dispatch
  }
}

export const useDispatch = createUseDispatch ()
