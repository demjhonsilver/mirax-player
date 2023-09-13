```js
<template>
  <div class="mirax-embed-class">
    <div ref="embedVideo"
        data-mirax-width="640"
        data-mirax-height="360"
        data-mirax-fullscreen="true"
        data-mirax-controls="true"
        data-mirax-embed="https://vimeo.com/217499569">
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { miraxEmbed } from 'mirax-player';

export default {
  setup() {
    const embedVideo = ref(null);
    const youtubeParams = {
      playerVars: {
        cc_load_policy: 1
      }
    };
    const vimeoParams = {
      responsive: true
    };

    onMounted(() => {
      if (embedVideo.value) {
        miraxEmbed(embedVideo.value, youtubeParams, vimeoParams);
      }
    });
    return {
      embedVideo
    };
  }
};
</script>
```