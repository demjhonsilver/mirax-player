```ts
<template>
  <div class="player-selector">
    <video class="mirax-player" ref="playerDiv"
      data-player-width="800"
      src="clip.mp4">
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { miraxPlayer } from 'mirax-player';

const playerDiv = ref<HTMLVideoElement | null>(null);

onMounted(() => {
    miraxPlayer(playerDiv.value);
});
</script>
```