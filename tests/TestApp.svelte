<svelte:options immutable />

<script>
  import { Provider } from '../src'
  import store from './internals/store'
  import Counter from './internals/Counter.svelte'
  import Users from './internals/Users.svelte'
  import Pokemon from './internals/Pokemon.svelte'

  let show = true
</script>

<Provider {store}>
  <Counter />
  <hr/>
  <button on:click={() => (show = !show)}>Show users</button>
  {#if show}
    <Users />
  {/if}
  <hr/>
  <Pokemon name="bulbasaur" />
</Provider>
