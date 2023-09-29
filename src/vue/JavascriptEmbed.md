
You can find the css styles for these embed videos

mirax-player/
|-- src/css-embed/css.md

Use Google chrome as much as possible to load more videos properly.

```js
<template>
  <div>
    <div class="embed-tiktok"></div>
    <div class="embed-twitter"></div>
    <div class="embed-youtube"></div>
    <div class="embed-facebook"></div>
    <div class="embed-facebook2"></div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { embed } from 'mirax-player';

export default {
  name: 'ExampleComponent',
  setup() {
    const videos = ([
      {
        videoUrl: 'https://www.tiktok.com/@scout2015/video/6718335390845095173',
        videoClass: 'embed-tiktok'
      },
      {
        width: 300,
        height: 600,
        videoUrl: 'https://twitter.com/cheerfulclips/status/1677022600655175680',
        videoClass: 'embed-twitter'
      },
      {
        width: 640,
        height: 360,
        fullscreen: true,
        controls: true,
        videoUrl: 'https://www.youtube.com/watch?v=vBGiFtb8Rpw',
        videoClass: 'embed-youtube'
      },
      {
        width: 318,
        height: 180,
        autoplay: false,
        videoUrl: 'https://www.facebook.com/facebook/videos/10153231379946729/',
        videoClass: 'embed-facebook'
      },
      {
        width: 318,
        height: 180,
        autoplay: false,
        videoUrl: 'https://www.facebook.com/facebook/videos/10153231379946729/',
        videoClass: 'embed-facebook2'
      },
    ]);

    onMounted(() => {
      embed(videos);
    });

    return {
      videos,
    };
  },
};
</script>
```