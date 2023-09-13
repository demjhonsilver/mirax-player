```js
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

<script>
import { ref, onMounted } from "vue";
import { miraxplayer } from 'mirax-player';

export default {
  setup() {
    const videoPlayer = ref(null);

    onMounted(() => {
      if (videoPlayer.value) {
        miraxplayer(videoPlayer.value);
      }
    });

    return {
      videoPlayer
    };
  }
};
</script>
```