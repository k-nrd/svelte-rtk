<script lang="ts">
  import { selector, dispatcher } from './store'
  import { increment, incrementIfOdd, decrement } from './store/slices/counter'

  const count = selector (s => s.counter)
  const dispatch = dispatcher ()

  const whatever = ({ type: 'whatever', payload: null })
  dispatch (whatever)

  let emittedCount = 0
  $: if ($count != null) emittedCount = emittedCount + 1
</script>

<h1>Counter</h1>
<button on:click={() => dispatch (increment (1))}>
  add 1
</button>
<button on:click={() => dispatch (incrementIfOdd ())}>
  add 1 if counter is odd
</button>
<button on:click={() => dispatch (decrement ())}>
  sub 1
</button>
<p>count: {$count}</p>
<p>emitted: {emittedCount}</p>
