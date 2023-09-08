```ts
<template>
  <div class="whatever">
    <video ref="videoPlayer" class="mirax-player" src="clip.mp4"></video>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { miraxplayer } from 'mirax-player';

const videoPlayer = ref<HTMLVideoElement | null>(null);

const miraxCustomizer = {
  playerTheme: "",
  progressTheme:  ""
};

onMounted(() => {
  if (videoPlayer.value) {
    miraxplayer(videoPlayer.value, miraxCustomizer);
  }
});

</script>
```