<script lang="ts">
  import { dispatcher, selector } from './store'
  import { getUsers } from './store/slices/users'

  const dispatch = dispatcher ()
  const users = selector (getUsers.select ())
  $: console.log ($users)
</script>

<h1>Users</h1>

<button on:click={() => dispatch (getUsers.initiate ())}>
  fetch users!
</button>

{#if $users.isUninitialized}
  <p>No users to show...</p>
{:else}
  {#if $users.isError}
    <p>Couldn't fetch users :(</p>
  {:else if $users.isLoading}
    <p>Fetching users...</p>
  {:else}
    <br/>
    <ul>
      {#each $users as { name, email }}
        <li>
          {name} - {email}
        </li>
      {/each}
    </ul>
  {/if}
{/if}
