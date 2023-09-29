```ts
<script lang="ts">
  import { onMount } from 'svelte';
  import { miraxPlayer } from 'mirax-player';

  let playerDiv: HTMLVideoElement | undefined;

  onMount(() => {
    if (playerDiv) {
      miraxPlayer(playerDiv);
    }
  });
</script>

<div class="player-selector">
  <video bind:this={playerDiv} class="mirax-player"
      data-player-width="800"
      src="clip.mp4">
    <track kind="captions" src="" label="English" default>
  </video>
</div>
```