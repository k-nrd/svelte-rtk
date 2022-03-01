import { setContext, getContext } from 'svelte'
import { bind } from './bind'

const KEY = Symbol ('@@svelte-redux')

export const provideStore = (store) => {
  setContext (KEY, bind (store))
}

export const useSelector = (selector) => {
  const { subscribe } = getContext (KEY)
  return {
    subscribe: (listener) => subscribe ((state) => listener (selector (state)))
  }
}

export const useDispatch = () => {
  const { dispatch } = getContext (KEY)
  return dispatch
}

export const useSlice = (structuredSelector) => {
  const dispatch = useDispatch ()

  const applyStructuredSelector = () =>
    Object.keys (structuredSelector).reduce (
      (acc, cur) => ({
        ...acc,
        [cur]: useSelector (structuredSelector[cur])
      }),
      {}
    )

  return {
    dispatch,
    ...applyStructuredSelector ()
  }
}
