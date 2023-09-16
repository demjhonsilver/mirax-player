```js
<script>
  import { onMount } from 'svelte';
  import { miraxEmbed } from 'mirax-player';

  let embedVideo;

  onMount(() => {
    miraxEmbed(embedVideo);
  });
</script>

<div class="class-mirax-embed">
  <div bind:this={embedVideo}
     data-mirax-embed-width="640"
     data-mirax-embed-height="360"
     data-mirax-embed-url="https://vimeo.com/217499569">
  </div>
</div>
```