```js
<script>
  import { onMount } from 'svelte';
  import { miraxEmbed } from 'mirax-player';

  let embedVideo;
  const youtubeParams = {
    playerVars: {
      cc_load_policy: 1
    }
  };
  const vimeoParams = {
    responsive: true
  };

  onMount(() => {
    miraxEmbed(embedVideo, youtubeParams, vimeoParams);
  });
</script>

<div class="mirax-embed-class">
  <div bind:this={embedVideo}
    data-mirax-width="640"
    data-mirax-height="360"
    data-mirax-fullscreen="true"
    data-mirax-controls="true"
    data-mirax-embed="https://vimeo.com/217499569"></div>
</div>
```