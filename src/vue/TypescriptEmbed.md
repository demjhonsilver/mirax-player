```ts
<template>
  <div class="mirax-embed" ref="embedDiv"
       data-e-width="640"
       data-e-height="360"
       data-e-autoplay="false"
       data-e-url="https://vimeo.com/217499569">
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { embed } from 'mirax-player';

onMounted(() => {
    embed('mirax-embed');
});
</script>
```