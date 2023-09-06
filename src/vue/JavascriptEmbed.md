```js
<template>
 <div class="embed_clip">
    <div ref="embedVideoRef" mirax-embed-video="https://vimeo.com/217499569">
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from 'vue';
import { miraxEmbed } from 'mirax-player';

export default {
  name: 'ExampleComponent',
  setup() {
    const embedVideoRef = ref(null);

    const embedPlayerReady = (event) => {
      event.target.playVideo();
    };

    onMounted(() => {
      const youtubeParams = {
        width: 1000,
        height: 660,
        playerVars: {
          controls: 1,
          autoplay: 0,
          fs: 1,
          iv_load_policy: 3,
          cc_load_policy: 1
        },
        events: { onReady: embedPlayerReady }
      };

      const vimeoParams = {
        width: 1000,
        height: 660,
        autopause: 0,
        controls: true,
        responsive: true 
      };

      miraxEmbed(embedVideoRef.value, youtubeParams, vimeoParams);
    });

    return {
      embedVideoRef,
    };
  },
};
</script>
```