<script lang="ts">
  import { selector, dispatcher } from './store'
  import { changeRole } from './store/slices/current-user'

  const currentUser = selector (s => s.currentUser)
  const dispatch = dispatcher ()

  let emitted = 0
  $: if ($currentUser != null) emitted = emitted + 1
</script>

<h1>Current User</h1>
<button on:click={() => dispatch (changeRole (1))}>
  change to role 1
</button>
<button on:click={() => dispatch (changeRole (2))}>
  change to role 2
</button>
<p>count: {JSON.stringify ($currentUser)}</p>
<p>emitted: {emitted}</p>
