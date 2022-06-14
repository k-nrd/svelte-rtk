<svelte:options immutable />

<script>
  import { provideStore } from '../../src'
  import { store, RootState, AppDispatch } from './store'
  import Counter from './counter.svelte'
  import Users from './users.svelte'
  import Pokemon from './pokemon.svelte'

  let show = true

  provideStore<RootState, AppDispatch> (store)
</script>

<Counter />
<hr />
<button on:click={() => (show = !show)}>Show users</button>
{#if show}
  <Users />
{/if}
<hr />
<Pokemon name="bulbasaur" />
