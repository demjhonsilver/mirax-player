```ts
<script lang="ts">
  import { onMount } from 'svelte';
  import { embed } from 'mirax-player';
  
  onMount(() => {
      embed(embedDiv);
  });
</script>

<div class="mirax-player"
     data-e-width="640"
     data-e-height="360"
     data-e-autoplay="false"
     data-e-url="https://vimeo.com/217499569">
</div>
```