```js
<template>
  <div class="whatever">
    <video ref="videoRef" class="mirax-player" src="clip.mp4"></video>
  </div>
</template>
<script>
import { miraxplayer } from 'mirax-player';
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const videoRef = ref(null);
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