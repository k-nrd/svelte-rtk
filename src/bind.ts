import { readable } from 'svelte/store'

export const bind = (store) => {
  const state = readable (store.getState (), (set) =>
    store.subscribe (() => {
      set (store.getState ())
    })
  )

  return {
    subscribe: state.subscribe,
    dispatch: store.dispatch
  }
}
