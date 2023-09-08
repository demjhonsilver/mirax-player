<p align="center">
      <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/logo.png" alt="Logo" width="70" height="70"/>
</p>

<div align="center">

# Mirax Player 
[![Npm version](https://img.shields.io/npm/v/mirax-player.svg?style=flat-square&label=NPM&color=brightgreen)](https://www.npmjs.com/package/mirax-player)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)
![Downloads](https://img.shields.io/npm/dt/mirax-player.svg?style=flat-square&label=Downloads&color=brightgreen)
![!License](https://img.shields.io/npm/l/mirax-player.svg?style=flat-square&label=License&color=brightgreen)

</div>
<p align="center">
  <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/theme1.png"/>
</p>

## Table of Contents

- [Description](#description)
- [Changes](#changes)
- [Features](#features)
- [Installation](#installation)
- [Embed](#embed)
- [Player](#player)
- [React](#react)
- [Vue](#vue)
- [Angular](#angular)
- [Svelte](#svelte)
- [CSS Player](#css-player)
- [Colors](#colors)
- [License](#license)
- [Author](#author)

## Description

Mirax Player is an adaptable video player and embedding solution that seamlessly integrates with TypeScript and JavaScript applications across a range of popular front-end libraries and frameworks, including React, Vue, Angular, and Svelte. It was written in pure JavaScript but can be implemented in both TypeScript and JavaScript.

 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  ![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)  ![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)  ![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)


## Changes

- You can set any color themes inside to your component for video player. 
- You can set dynamic width and height while embedding videos.
- No need to add "embed_clip" for your embed css
- Params for width and height are move to inline embed tag.
-------
## Features

- The advantage is that this player serves as a universal tool with minimal syntax, distributed to various javascript/typescript libraries and frameworks.
- Easy to use and responsive
- Can embed videos like YouTube, YouTube Shorts and Vimeo
- Capable of playing videos (Portrait or Landscape)
- Supports 9:16 dimensions (Mobile video)
- Fullscreen functionality
- Customizable color themes
- Supports PIP (Picture-in-Picture)


-------------
## Installation

To install the Mirax Player, you can use the following npm command:

```bash
npm install mirax-player
```

## Embed

![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white) ![Vimeo](https://camo.githubusercontent.com/2026999d43e099c9c835757e3d2f5f8c574efad153f4e3d5143914223e9cbc24/68747470733a2f2f613131796261646765732e636f6d2f62616467653f6c6f676f3d76696d656f)

Sites | Source |  Control Params | Links |
------ | -------- | --------- |  -------------- |
YouTube / Shorts | Iframe Api | https://developers.google.com/youtube/player_parameters | https://developers.google.com/youtube/iframe_api_reference
Vimeo |  Player SDK | https://developer.vimeo.com/player/sdk/embed  |   https://developer.vimeo.com/player/sdk


---------------


Mirax embed tags | Type |  Functionality |
------ | -------- | --------- |  
`mirax-embed-class` | class name | responsiveness | 
`data-mirax-width` | attribute | dynamic width | 
`data-mirax-height` | attribute | dynamic height | 
`data-mirax-embed` | attribute | video links to embed | 

example:

```js
<div className="mirax-embed-class">
  <div ref={embedVideo}
      data-mirax-width="640" // you can set any value
      data-mirax-height="360" // you can set any value
      data-mirax-embed="https://vimeo.com/217499569" // links from youtube/shorts
      >
  </div>
</div>
```

## Player

Keyboard keys / buttons | Functions | Description | Supported Browsers |
---- |  ---------------------- | ----------- | -------
`space bar` | Play & Pause |The video will play or pause | All browsers
`click`  &#9654; | Play & Pause | The video will play or pause | All browsers
`alt+p` | PiP | Picture in Picture screen | `!firefox but auto appear PiP icon`
`click`  &#915;  | PiP | Picture in Picture screen | All browsers
`double click the video` | Fullscreen | It will set as fullscreen mode | All browsers
`click`  &#x2750; | Fullscreen | It will set as fullscreen mode | All browsers
`swipe for volume`  | Volume | To adjust the volume level | All browsers
`swipe for time frame` | Progress bar | To adjust video frame timestamp | All browsers

input: 
```js

src=" " // Link  public/clip.mp4 from your frameworks | assets/clip.mp4 angular | example.com/video/clip.mp4

```
-------------

## React
 - Video player - [CSS for Video Player](#css-player)
```js
import React, { useEffect, useRef } from "react";
import { miraxplayer } from 'mirax-player';
const ExampleComponent = () => {
  const videoPlayer = useRef(null);
  const miraxCustomizer = {
    playerTheme: "",
    progressTheme:  ""
  };
  useEffect(() => {
    if (videoPlayer.current) {
      miraxplayer(videoPlayer.current, miraxCustomizer);
    }
  });
  return (
    <div className="whatever">
      <video ref={videoPlayer} className="mirax-player" src="clip.mp4"></video>
    </div>
  );
};
export default ExampleComponent;
```
Embed videos  
-----------------------------------
```js 
import React, { useEffect, useRef } from "react";
import { miraxEmbed } from 'mirax-player';

const ExampleComponent = () => {
  const embedVideo = useRef(null);
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
  useEffect(() => {
    miraxEmbed(embedVideo.current, youtubeParams, vimeoParams);
  });
  return (
    <div className="mirax-embed-class">
      <div ref={embedVideo}
          data-mirax-width="1040"
          data-mirax-height="560"
          data-mirax-embed="https://vimeo.com/217499569">
      </div>
    </div>
  );
};
export default ExampleComponent;
```

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- located at repository files
```html
src/react/TypeScriptPlayer.md
src/react/TypeScriptEmbed.md
```

## Vue
 - Video player - [CSS for Video Player](#css-player)
```js
<template>
  <div class="whatever">
    <video ref="videoPlayer" class="mirax-player" src="clip.mp4"></video>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { miraxplayer } from 'mirax-player';

export default {
  setup() {
    const videoPlayer = ref(null);

    const miraxCustomizer = {
      playerTheme: "",
      progressTheme:  ""
    };

    onMounted(() => {
      if (videoPlayer.value) {
        miraxplayer(videoPlayer.value, miraxCustomizer);
      }
    });

    return {
      videoPlayer
    };
  }
};
</script>
```
Embed videos  
-----------------------------------
```js 
<template>
  <div class="mirax-embed-class">
    <div ref="embedVideo"
        data-mirax-width="640"
        data-mirax-height="360"
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

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- located at repository files
```html
src/vue/TypeScriptPlayer.md
src/vue/TypeScriptEmbed.md
```

## Angular
------------------
 - Video player - [CSS for Video Player](#css-player)
---------
example.component.ts
-----------
```ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miraxplayer } from 'mirax-player';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;
  miraxCustomizer = {
    playerTheme: "",
    progressTheme: ""
  };
  ngOnInit(): void {
    this.initializeMiraxplayer();
  }
  initializeMiraxplayer() {
    if (this.videoPlayer.nativeElement) {
      miraxplayer(this.videoPlayer.nativeElement, this.miraxCustomizer);
    }
  }
}
```

example.component.html

-------------
```html
<div>
  <div class="whatever">
    <video #videoPlayer class="mirax-player" src="assets/clip.mp4"></video>
  </div>
</div>
```
Embed videos  
-----------------------------------
```ts
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miraxEmbed } from 'mirax-player';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @ViewChild('embedVideo', { static: true }) embedVideo!: ElementRef;
  constructor() { }
  ngOnInit(): void {
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
    miraxEmbed(this.embedVideo.nativeElement, youtubeParams, vimeoParams);
  }
}
```

example.component.html

-------------
```html
<div class="mirax-embed-class">
    <div #embedVideo 
      data-mirax-width="640"
      data-mirax-height="360"
      data-mirax-embed="https://vimeo.com/217499569">
    </div>
</div>
```
## Svelte
 - Video player - [CSS for Video Player](#css-player)
```js
<script>
  import { onMount } from 'svelte';
  import { miraxplayer } from 'mirax-player';

  let videoPlayer;
  const miraxCustomizer = {
    playerTheme: "",
    progressTheme: ""
  };

  onMount(() => {
    if (videoPlayer) {
      miraxplayer(videoPlayer, miraxCustomizer);
    }
  });
</script>

<div class="whatever">
  <video bind:this={videoPlayer} class="mirax-player" src="clip.mp4">
    <track kind="captions" src="" label="English" default>
  </video>
</div>
```
Embed videos  
-----------------------------------
```js 
<script>
  import { onMount } from 'svelte';
  import { miraxEmbed } from 'mirax-player';

  let embedVideo;
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

  onMount(() => {
    miraxEmbed(embedVideo, youtubeParams, vimeoParams);
  });
</script>

<div class="mirax-embed-class">
  <div bind:this={embedVideo} data-mirax-width="640" data-mirax-height="360" data-mirax-embed="https://vimeo.com/217499569"></div>
</div>
```

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- located at repository files
```html
src/svelte/TypeScriptPlayer.md
src/svelte/TypeScriptEmbed.md
```

## CSS-player

You can assign your own class name to encapsulate the video player.

- Left
```css
.whatever {
  margin: 0 auto;
  position: relative;
  width: 100%;
  float: left;
  text-align: left;
}
```
- Center
```css
 .whatever {
  position: relative;
  width: 100%;
  text-align: center;
}
```
- Right
```css
.whatever {
    margin: 0 auto;
    position: relative;
    width: 100%;
    float: right;
    text-align: right;
}
```
```js
  const miraxCustomizer = {
      playerTheme: "",
      progressTheme:  ""
  };
```
-----
Examples:
---------
```js
  const miraxCustomizer = {
      playerTheme: "rgba(250, 149, 35, 0.9)",
      progressTheme:  "rgba(17, 117, 59, 0.9)"
  };
```
```js
  const miraxCustomizer = {
      playerTheme: "rgb(0,0,0)",
      progressTheme:  "rgb(255, 255, 255)"
  };
```
```js
  const miraxCustomizer = {
      playerTheme: "#000000",
      progressTheme:  "#00ff00"
  };
```
```js
  const miraxCustomizer = {
      playerTheme: "black",
      progressTheme:  "red"
  };
```
If you want pure transparent:
---------
 ```js
  const playerTheme = "rgba(0, 0, 0, 0)";
```

## Colors

You have the freedom to freely set a theme color.

Color Types | Color syntax | Example | Opacity Range |  Appearance
---------- |  --------- | ---------------- | -------------------- | ---------------
`RGBA` | rgba() | rgba(255,0,0, 0.5) | `0.1 to 0.9`  or  `0 and 1` | Red half transparency
`RGB`  |rgb() | rgb(255, 0, 0) | `none` | Red
`HEXA` | #6digits | #ff0000| `none` | Red
`COLORNAME` | colorname | red | `none` | Red
----------------------------------------------------
## License

[MIT](http://www.opensource.org/licenses/MIT)
----------------------------------------------------
## Author

Demjhon Silver
- You can follow me on my [Github](https://github.com/demjhonsilver) account.
- You can give some free stars for this project: ⭐ 
- Thank you for your support. 😃 