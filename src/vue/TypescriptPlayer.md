```ts
<template>
  <div class="player-selector">
    <video ref="playerDiv"
      class="mirax-player"
      data-player-width="800"
      src="clip.mp4">
    </video>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import { miraxPlayer } from 'mirax-player';

export default {
  props: {
    width: Number, 
  },
  setup() {
    const playerDiv = ref<HTMLVideoElement | null>(null);
    
    onMounted(() => {
      if (playerDiv.value) {
        miraxPlayer(playerDiv.value);
      }
    });

    return {
      playerDiv
    };
  }
};
</script>
```