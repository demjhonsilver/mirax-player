```js
<template>
  <div class="class-mirax-player">
    <video ref="videoPlayer"
      class="mirax-player"
      data-mirax-player-width="800"
      src="clip.mp4">
    </video>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { miraxPlayer } from 'mirax-player';

export default {
  setup() {
    const videoPlayer = ref(null);
    onMounted(() => {
      if (videoPlayer.value) {
        miraxPlayer(videoPlayer.value);
      }
    });
    return {
      videoPlayer
    };
  }
};
</script>
```