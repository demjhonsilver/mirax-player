```ts
<template>
  <div class="class-mirax-player">
    <video ref="videoPlayer"
      class="mirax-player"
      data-mirax-player-width="800"
      src="clip.mp4">
    </video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { miraxPlayer } from 'mirax-player';

const videoPlayer = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  if (videoPlayer.value) {
    miraxPlayer(videoPlayer.value);
  }
});
</script>
```