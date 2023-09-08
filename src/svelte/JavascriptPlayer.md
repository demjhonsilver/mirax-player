```js
<script>
  import { onMount } from 'svelte';
  import { miraxplayer } from 'mirax-player';

  let videoPlayer;
  const miraxCustomizer = {
    playerTheme: "",
    progressTheme: ""
  };

  onMount(() => {
    if (videoPlayer) {
      miraxplayer(videoPlayer, miraxCustomizer);
    }
  });
</script>

<div class="whatever">
  <video bind:this={videoPlayer} class="mirax-player" src="clip.mp4">
    <track kind="captions" src="" label="English" default>
  </video>
</div>
```