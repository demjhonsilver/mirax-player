```js
<script>
  import { onMount } from 'svelte';
  import { miraxEmbed } from 'mirax-player';

  let embedVideo;
  const youtubeParams = {
    playerVars: {
      controls: 1,
      autoplay: 0,
      fs: 1,
      iv_load_policy: 3,
      cc_load_policy: 1
    }
  };
  const vimeoParams = {
    autopause: 0,
    controls: true,
    responsive: true
  };

  onMount(() => {
    miraxEmbed(embedVideo, youtubeParams, vimeoParams);
  });
</script>

<div class="mirax-embed-class">
  <div bind:this={embedVideo} data-mirax-width="640" data-mirax-height="360" data-mirax-embed="https://vimeo.com/217499569"></div>
</div>
```