```ts
<template>
  <div class="class-mirax-embed">
    <div ref="embedVideo"
        data-mirax-embed-width="640"
        data-mirax-embed-height="360"
        data-mirax-embed-url="https://vimeo.com/217499569">
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { miraxEmbed } from 'mirax-player';

const embedVideo = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (embedVideo.value) {
    miraxEmbed(embedVideo.value);
  }
});
</script>
```