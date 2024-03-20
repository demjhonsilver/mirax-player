```js
<template>
  <div class="player-selector">
    <video class="mirax-player" ref="playerDiv"
      data-player-width="800"
      src="clip.mp4">
    </video>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { miraxPlayer } from 'mirax-player';

export default {
  setup() {
    const playerDiv = ref(null);
    onMounted(() => {
        miraxPlayer(playerDiv.value);
    });
    return {
      playerDiv
    };
  }
};
</script>
```