<script lang="ts">
  import { dispatcher, selector } from './store'
  import { getUsers } from './store/slices/users'

  const dispatch = dispatcher ()
  const users = selector (getUsers.select (null))
</script>

<h1>Users</h1>

<button on:click={() => dispatch (getUsers.initiate (null))}>
  fetch users!
</button>

{#if !$users.isUninitialized}
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
