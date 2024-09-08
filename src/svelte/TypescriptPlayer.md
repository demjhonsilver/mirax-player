```ts
<!-- YourComponent.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { miraxPlayer } from 'mirax-player';

  export let dataPlayerWidth: number | undefined;

  let playerDiv: HTMLVideoElement | null;

  onMount(() => {
    if (playerDiv) {
      miraxPlayer(playerDiv);
    }
  });
</script>

<div class="player-selector">
  <video
    class="mirax-player"
    bind:this={playerDiv}
    data-player-width={dataPlayerWidth || 1038}
    src="clip.mp4">
    <track kind="captions" src="" label="English" default>
  </video>
</div>

```