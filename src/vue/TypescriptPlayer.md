```ts
<template>
  <div class="player-selector">
    <video
      class="mirax-player"
      ref="playerDiv"
      :data-player-width="dataPlayerWidth || 1038"
      src="clip.mp4"
    >
      <track kind="captions" src="" label="English" default />
    </video>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import { miraxPlayer } from 'mirax-player';

export default {
  props: {
    dataPlayerWidth: Number,
  },
  setup() {
    const playerDiv = ref<HTMLVideoElement | null>(null);
    const props = defineProps(['dataPlayerWidth']);

    onMounted(() => {
      if (playerDiv.value) {
        miraxPlayer(playerDiv.value);
      }
    });

    return {
      playerDiv,
      props,
    };
  },
};
</script>
```