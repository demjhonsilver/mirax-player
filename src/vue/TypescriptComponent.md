```ts
<template>
  <div class="whatever">
    <video ref="videoRef" class="mirax-player" src="clip.mp4"></video>
  </div>
</template>
<script lang="ts">
import { miraxplayer } from 'mirax-player';
import { ref, onMounted } from 'vue';
export default {
    name: 'ExampleComponent',
  setup() {
    const videoRef = ref<HTMLVideoElement>(null);
    const miraxCustomizer = {
      playerTheme: "none",
      progressTheme:  "orange"
    };
    onMounted(() => {
      if (videoRef.value) {
        miraxplayer(videoRef.value, miraxCustomizer); 
      }
    });
    return {
      videoRef
    };
  }
};
</script>
```