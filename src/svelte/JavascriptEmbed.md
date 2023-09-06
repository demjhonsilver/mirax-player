```js
<script>
  import { onMount } from 'svelte';
  import { miraxEmbed } from 'mirax-player';
  let embedVideoRef;
  const embedPlayerReady = (event) => {
    event.target.playVideo();
  };

  const youtubeParams = {
    width: 600,
    height: 460,
    playerVars: {
      controls: 1,
      autoplay: 0,
      fs: 1,
      iv_load_policy: 3,
      cc_load_policy: 1
    },
    events: { onReady: embedPlayerReady }
  };

  const vimeoParams = {
    width: 1300,
    height: 760,
    autopause: 0,
    controls: true,
    responsive: true
  };

  onMount(() => {
    miraxEmbed(embedVideoRef, youtubeParams, vimeoParams);
  });
</script>

<div class="embed_clip">
  <div  bind:this={embedVideoRef} mirax-embed-video="https://vimeo.com/217499569">
</div>
</div>


```