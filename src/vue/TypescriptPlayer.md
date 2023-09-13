```ts
<template>
  <div class="mirax-player-class">
    <video ref="videoPlayer"
      class="mirax-player"
      data-mirax-player-width="800"
      data-mirax-player-float=" "
      data-mirax-player-theme=" "
      data-mirax-player-bar=" "
      src="clip.mp4"></video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { miraxplayer } from 'mirax-player';

const videoPlayer = ref<HTMLVideoElement | null>(null);

onMounted(() => {
  if (videoPlayer.value) {
    miraxplayer(videoPlayer.value);
  }
});

</script>
```