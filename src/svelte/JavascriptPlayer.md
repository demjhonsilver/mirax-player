```js
<script>
  import { onMount } from 'svelte';
  import { miraxPlayer } from 'mirax-player';

  let videoPlayer;

  onMount(() => {
    if (videoPlayer) {
      miraxPlayer(videoPlayer);
    }
  });
</script>

<div class="class-mirax-player">
  <video bind:this={videoPlayer} class="mirax-player"
      data-mirax-player-width="800"
      src="clip.mp4">
    <track kind="captions" src="" label="English" default>
  </video>
</div>
```