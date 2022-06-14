<script>
  import { useDispatch, useSelector } from './store'
  import { getPokemonByName } from './store/slices/pokemon'

  export let name

  const dispatch = useDispatch ()
  const pokemon = useSelector (getPokemonByName.select (name))
  $: console.log ($pokemon)
</script>

<h1>Pokemon</h1>
<button on:click={() => dispatch (getPokemonByName.initiate (name))}>
  fetch {name}!
</button>
{#if !$pokemon.isUninitialized}
  {#if $pokemon.isError}
    <p>Couldn't fetch {name} :(</p>
  {:else if $pokemon.isLoading}
    <p>Fetching {name}...</p>
  {:else}
    <p>{name} abilities:</p>
    <br/>
    <ul>
      {#each $pokemon.data.abilities as { ability }}
        <li>
          <a href={ability.url}>
            {ability.name}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
{/if}
