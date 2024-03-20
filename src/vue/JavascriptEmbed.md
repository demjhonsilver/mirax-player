```js
<template>
  <div class="mirax-embed"
       data-e-width="640"
       data-e-height="360"
       data-e-autoplay="false"
       data-e-url="https://vimeo.com/217499569">
  </div>
</template>

<script>
import { onMounted } from "vue";
import { embed } from 'mirax-player';

export default {
  setup() {
    onMounted(() => {
        embed('mirax-embed');
    });
    return {};
  }
};
</script>
```