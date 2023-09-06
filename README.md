<p align="center">
      <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/logo.png" alt="Logo" width="70" height="70"/>
</p>

<div align="center">

# Mirax Player 
[![npm version](https://img.shields.io/npm/v/mirax-player.svg?style=flat-square&label=Version&color=brightgreen)](https://www.npmjs.com/package/mirax-player)
![Downloads](https://img.shields.io/npm/dt/mirax-player.svg?style=flat-square&label=Downloads&color=brightgreen)
[![License](https://img.shields.io/npm/l/mirax-player.svg?style=flat-square&label=License&color=brightgreen)](http://www.opensource.org/licenses/MIT)

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

- You can declare your color themes inside to your component. 
- Embedding videos have a controller based on the developer’s documentation.
- New logo


## Features

- Easy to use and responsive
- Can embed videos like YouTube and Vimeo
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

Sites | Source |  Control Params | Links |
------ | -------- | --------- |  -------------- |
YouTube | Iframe Api | https://developers.google.com/youtube/player_parameters | https://developers.google.com/youtube/iframe_api_reference
Vimeo |  Player SDK | https://developer.vimeo.com/player/sdk/embed  |   https://developer.vimeo.com/player/sdk

input: 
```js

mirax-embed-video=" " // Link from YouTube or Vimeo

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

src=" " // Link example.com/video/my.mp4 or clip.mp4

```
-------------

## React
 - Video player - [CSS for Video Player](#css-player)
```js
import React, { useEffect, useRef } from "react";
import { miraxplayer } from 'mirax-player';
const ExampleComponent = () => {
  const videoRef = useRef(null);
  const miraxCustomizer = {
    playerTheme: "",
    progressTheme:  ""
  };
  useEffect(() => {
    if (videoRef.current) {
      miraxplayer(videoRef.current, miraxCustomizer);
    }
  }, []);
  return (
    <div className="whatever">
      <video ref={videoRef} className="mirax-player" src="clip.mp4"></video>
    </div>
  );
};
export default ExampleComponent;
```
 - Embed videos  
 --------
Add css first:
-----
```css
.embed_clip {
  position: relative;
  width: 100%;
  max-width: 640px; /* // same value also in params editable*/
  height: 360px; /* same value also in params editable*/
  margin: 0 auto; 
  overflow: hidden;
}

.embed_clip iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```
-----------------------------------
```js 
import React, { useEffect, useRef } from "react";
import { miraxEmbed } from 'mirax-player';

const ExampleComponent = () => {
  const embedVideoRef = useRef(null);
  const embedPlayerReady = (event) => {
    event.target.playVideo();
  };
  const youtubeParams = {
    width: 640, 
    height: 360,
    playerVars: { 
      controls: 1,
      autoplay: 0,
      fs: 1,
      iv_load_policy: 3,
      cc_load_policy: 1 
    },
    events: { 
      onReady: embedPlayerReady
    },
  };
  const vimeoParams = { 
    width: 640, 
    height: 360, 
    autopause: 0, 
    controls: true,
    responsive: true
  };
  useEffect(() => {
    miraxEmbed(embedVideoRef.current, youtubeParams, vimeoParams);
  }, []);
  return (
    <div className="embed_clip">
      <div ref={embedVideoRef} mirax-embed-video="https://vimeo.com/217499569">
      </div>
    </div>
  );
};
export default ExampleComponent;
```
- For TypeScript version: ( located at repository file )
```html
src/react/TypeScriptComponent.md
src/react/TypeScriptEmbed.md
```

## Vue
 - Video player - [CSS for Video Player](#css-player)
```js
<template>
  <div class="whatever">
    <video ref="videoRef" class="mirax-player" src="clip.mp4"></video>
  </div>
</template>
<script>
import { miraxplayer } from 'mirax-player';
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const videoRef = ref(null);
    const miraxCustomizer = {
      playerTheme: "",
      progressTheme:  ""
    };
    onMounted(() => {
      if (videoRef.value) {
        miraxplayer(videoRef.value, miraxCustomizer);
      }
    });
    return {
      videoRef
    };
  }
};
</script>
```
 - Embed videos

Add css first:
-----
```css
.embed_clip {
  position: relative;
  width: 100%;
  max-width: 640px; /* // same value also in params editable*/
  height: 360px; /* same value also in params editable*/
  margin: 0 auto; 
  overflow: hidden;
}

.embed_clip iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```
-----------------------------------
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
      };

      const vimeoParams = {
        width: 640,
        height: 360,
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
- For TypeScript version: ( located at repository file )
```html
src/vue/TypeScriptComponent.md
src/vue/TypeScriptEmbed.md
```
## Angular
------------------
 - Video player - [CSS for Video Player](#css-player)
---------
example.component.ts
-----------
```js
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miraxplayer } from 'mirax-player';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @ViewChild('video', { static: true }) video!: ElementRef<HTMLVideoElement>;
  miraxCustomizer = {
    playerTheme: "",
    progressTheme: ""
  };
  ngOnInit(): void {
    this.initializeMiraxplayer();
  }
  initializeMiraxplayer() {
    if (this.video.nativeElement) {
      miraxplayer(this.video.nativeElement, this.miraxCustomizer);
    }
  }
}
```
--------------------------------------
example.component.html
-------------
```html
<div>
  <div class="whatever">
    <video #video class="mirax-player" src="assets/clip.mp4"></video>
  </div>
</div>
```
 - Embed videos

Add css first:
-----
```css
.embed_clip {
  position: relative;
  width: 100%;
  max-width: 640px; /* // same value also in params editable*/
  height: 360px; /* same value also in params editable*/
  margin: 0 auto; 
  overflow: hidden;
}

.embed_clip iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```
-----------------------------------
```js
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { miraxEmbed } from 'mirax-player';
@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  @ViewChild('embedVideoRef', { static: true }) embedVideoRef!: ElementRef;
  constructor() { }
  ngOnInit(): void {
    const youtubeParams = {
      width: 640,
      height: 360,
      playerVars: {
        controls: 1,
        autoplay: 0,
        fs: 1,
        iv_load_policy: 3,
        cc_load_policy: 1
      },
      events: { onReady: this.embedPlayerReady.bind(this) }
    };
    const vimeoParams = {
      width: 640,
      height: 360,
      autopause: 0,
      controls: true,
      responsive: true
    };
    miraxEmbed(this.embedVideoRef.nativeElement, youtubeParams, vimeoParams);
  }
  embedPlayerReady(event: any): void {
    event.target.playVideo();
  }
}
```
--------------------------------------
example.component.html
-------------
```html
<div class="embed_clip">
  <div #embedVideoRef mirax-embed-video="https://vimeo.com/217499569"></div>
</div>
```

## Svelte
 - Video player - [CSS for Video Player](#css-player)
```js
<script>
    import { onMount } from 'svelte';
    import { miraxplayer } from 'mirax-player';
  let video;
  const miraxCustomizer = {
      playerTheme: "",
      progressTheme:  ""
  };
  $: if(video) { 
    miraxplayer(video, playerTheme, miraxCustomizer);
  }
</script>
<div>
  <div class='whatever'>
    <video bind:this={video} class="mirax-player" src="clip.mp4">
      <track kind="captions" src="" label="English" default>
    </video>
  </div>
</div>
```
 - Embed videos

Add css first:
-----
```css
.embed_clip {
  position: relative;
  width: 100%;
  max-width: 640px; /* // same value also in params editable*/
  height: 360px; /* same value also in params editable*/
  margin: 0 auto; 
  overflow: hidden;
}

.embed_clip iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```
-----------------------------------
```js
<script>
  import { onMount } from 'svelte';
  import { miraxEmbed } from 'mirax-player';
  let embedVideoRef;
  const embedPlayerReady = (event) => {
    event.target.playVideo();
  };

  const youtubeParams = {
    width: 600,
    height: 360,
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
    width: 640,
    height: 360,
    autopause: 0,
    controls: true,
    responsive: true
  };

  onMount(() => {
    miraxEmbed(embedVideoRef, youtubeParams, vimeoParams);
  });
</script>

<div class="embed_clip">
  <div  bind:this={embedVideoRef} mirax-embed-video="https://vimeo.com/217499569">
</div>
</div>
```
- For TypeScript version: ( located at repository file )
```html
src/svelte/TypeScriptComponent.md
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
Examples of themes:
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

MIT

----------------------------------------------------
## Author

Demjhon Silver



