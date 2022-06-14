import { render } from '@testing-library/svelte'
import TestApp from './internals/test-app.svelte'

test ('All test components are being rendered', () => {
  const { getByText } = render (TestApp)

  expect (getByText ('Counter')).toBeInTheDocument ()
  expect (getByText ('Users')).toBeInTheDocument ()
  expect (getByText ('Pokemon')).toBeInTheDocument ()
})
