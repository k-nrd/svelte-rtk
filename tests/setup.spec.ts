import { render } from '@testing-library/svelte'
import TestApp from './internals/test-app.svelte'

describe ('Setup', () => {
  test ('All test components are being rendered', () => {
    const { getByText } = render (TestApp)

    expect (getByText ('Counter')).toBeInTheDocument ()
    expect (getByText ('Users')).toBeInTheDocument ()
  })

  test ('Counter component starting at 0', () => {
    const { getByText } = render (TestApp)

    expect (getByText ('count: 0')).toBeInTheDocument ()
  })

  test ('No users being shown', () => {
    const { getByText } = render (TestApp)

    expect (getByText ('No users to show...')).toBeInTheDocument ()
  })
})
