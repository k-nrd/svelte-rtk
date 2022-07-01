<svelte:options immutable />

<script>
  import { Provider } from '../../src'
  import { store } from './store'
  import Counter from './counter.svelte'
  import Users from './users.svelte'

  let show = true
</script>

<Provider {store}>
  <Counter />
  <hr />
  <button on:click={() => (show = !show)}>Show users</button>
  {#if show}
    <Users />
  {/if}
</Provider>
