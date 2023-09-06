```js
<script>
    import { onMount } from 'svelte';
    import { miraxplayer } from 'mirax-player';
  let video;
  const miraxCustomizer = {
      playerTheme: "none",
      progressTheme:  "yellow"
  };
  $: if(video) { 
    miraxplayer(video, playerTheme, miraxCustomizer);
  }
</script>
<div>
  <div class='whatever'>
    <video bind:this={video} class="mirax-player" src="clip.mp4">
      <track kind="captions" src="" label="English" default>
    </video>
  </div>
</div>
```