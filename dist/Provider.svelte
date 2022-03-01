<script>
  import { provideStore } from './hooks'

  export let store

  provideStore (store)
</script>

<slot></slot>
