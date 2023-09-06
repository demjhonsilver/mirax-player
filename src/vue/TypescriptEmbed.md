```ts
<template>
  <div class="embed_clip">
    <div ref="embedVideoRef" mirax-embed-video="https://vimeo.com/217499569"></div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, computed, Ref } from 'vue'; 
import { miraxEmbed } from 'mirax-player';

interface YouTubePlayerEvent {
  target: {
    playVideo: () => void;
  };
}

export default {
  setup() {
    const embedVideoRef: Ref<HTMLDivElement | null> = ref(null);

    function embedPlayerReady(event: YouTubePlayerEvent) {
      event.target.playVideo();
    }
    const youtubeParams = computed(() => ({
      width: 640,
      height: 360,
      playerVars: {
        controls: 1,
        autoplay: 0,
        fs: 1,
        iv_load_policy: 3,
        cc_load_policy: 1
      },
      events: { onReady: embedPlayerReady }
    }));

    const vimeoParams = computed(() => ({
      width: 640,
      height: 360,
      autopause: 0,
      controls: true
    }));

    onMounted(() => {
      miraxEmbed(embedVideoRef.value, youtubeParams.value, vimeoParams.value);
    });

    return {
      embedVideoRef,
      youtubeParams,
      vimeoParams
    };
  }
};
</script>
```