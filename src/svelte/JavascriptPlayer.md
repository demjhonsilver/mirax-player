```js
<script>
  import { onMount } from 'svelte';
  import { miraxplayer } from 'mirax-player';

  let videoPlayer;

  onMount(() => {
    if (videoPlayer) {
      miraxplayer(videoPlayer);
    }
  });
</script>

<div class="mirax-player-class">
  <video bind:this={videoPlayer}
      class="mirax-player"
      className="mirax-player"
      data-mirax-player-width="800"
      data-mirax-player-float=" "
      data-mirax-player-theme=" "
      data-mirax-player-bar=" "
      src="clip.mp4">
    <track kind="captions" src="" label="English" default>
  </video>
</div>
```