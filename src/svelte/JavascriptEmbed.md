```js
<script>
  import { onMount } from 'svelte';
  import { embed } from 'mirax-player';

  onMount(() => {
    embed('mirax-embed');
  });
</script>

<div class="mirax-embed"
     data-e-width="640"
     data-e-height="360"
     data-e-autoplay="false"
     data-e-url="https://vimeo.com/217499569">
</div>
```