```js
<template>
  <div class="class-mirax-embed">
    <div ref="embedVideo"
        data-mirax-embed-width="640"
        data-mirax-embed-height="360"
        data-mirax-embed-url="https://vimeo.com/217499569">
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { miraxEmbed } from 'mirax-player';

export default {
  setup() {
    const embedVideo = ref(null);

    onMounted(() => {
      if (embedVideo.value) {
        miraxEmbed(embedVideo.value);
      }
    });
    return {
      embedVideo
    };
  }
};
</script>
```