<script>
  import { provideStore } from './provide'

  export let store

  provideStore (store)
</script>

<slot></slot>
