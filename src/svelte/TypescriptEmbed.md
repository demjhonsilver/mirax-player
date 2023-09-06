```ts
<script lang="ts">
  import { onMount } from 'svelte';
  import { miraxEmbed } from 'mirax-player';

  let embedVideoRef: HTMLDivElement | null = null;

  interface YouTubePlayerEvent {
    target: {
      playVideo: () => void;
    };
  }

  function embedPlayerReady(event: YouTubePlayerEvent): void {
    event.target.playVideo();
  }

  const youtubeParams = {
    width: 640,
    height: 360,
    playerVars: {
      controls: 1,
      autoplay: 0,
      fs: 1,
      iv_load_policy: 3,
      cc_load_policy: 1,
    },
    events: { onReady: embedPlayerReady },
  };

  const vimeoParams = {
    width: 640,
    height: 360,
    autopause: 0,
    controls: true,
  };

  onMount(() => {
    miraxEmbed(embedVideoRef, youtubeParams, vimeoParams);
  });
</script>

<div class="embed_clip">
  <div bind:this={embedVideoRef} mirax-embed-video="https://vimeo.com/217499569">
  </div>
</div>
```