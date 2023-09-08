```ts
<template>
  <div class="mirax-embed-class">
    <div ref="embedVideo"
        data-mirax-width="640"
        data-mirax-height="360"
        data-mirax-embed="https://vimeo.com/217499569">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { miraxEmbed } from 'mirax-player';

export default {
  setup() {
    const embedVideo = ref<HTMLDivElement | null>(null);

    const youtubeParams = {
      playerVars: {
        controls: 1,
        autoplay: 0,
        fs: 1,
        iv_load_policy: 3,
        cc_load_policy: 1
      }
    };

    const vimeoParams = {
      autopause: 0,
      controls: true,
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