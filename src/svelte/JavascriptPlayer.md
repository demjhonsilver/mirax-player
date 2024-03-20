```js
<script>
  import { onMount } from 'svelte';
  import { miraxPlayer } from 'mirax-player';

  let playerDiv;

  onMount(() => {
      miraxPlayer(playerDiv);
    }
  });
</script>

<div class="player-selector">
  <video class="mirax-player" bind:this={playerDiv} 
      data-player-width="800"
      src="clip.mp4">
    <track kind="captions" src="" label="English" default>
  </video>
</div>
```