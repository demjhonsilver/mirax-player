```js
<template>
  <div class="whatever">
    <video ref="videoPlayer" class="mirax-player" src="clip.mp4"></video>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { miraxplayer } from 'mirax-player';

export default {
  setup() {
    const videoPlayer = ref(null);

    const miraxCustomizer = {
      playerTheme: "",
      progressTheme:  ""
    };

    onMounted(() => {
      if (videoPlayer.value) {
        miraxplayer(videoPlayer.value, miraxCustomizer);
      }
    });

    return {
      videoPlayer
    };
  }
};
</script>
```