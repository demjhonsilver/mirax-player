<p align="center">
      <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/logo.png" alt="Logo" width="70" height="70"/>
</p>

<div align="center">

# Mirax Player 
[![Npm version](https://img.shields.io/npm/v/mirax-player.svg?style=flat-square&label=npm&color=brightgreen)](https://www.npmjs.com/package/mirax-player)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)
![Downloads](https://img.shields.io/npm/dt/mirax-player.svg?style=flat-square&label=downloads&color=brightgreen)
[![License](https://img.shields.io/npm/l/mirax-player.svg?style=flat-square&label=license&color=green)](https://github.com/demjhonsilver/mirax-player/blob/main/LICENSE.md)


</div>
<p align="center">
  <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/theme1.png"/>
</p>

---------------------

## Table of Contents

- [Description](#description)
- [Release Notes](#release-notes)
- [Features](#features)
- [Installation](#installation)
- [Supported Sites](#supported-sites)
- [Embed Video](#embed-video)
- [Video Player](#video-player)
- [CSS Player](#css-player)
- [Colors](#colors)
- [License](#license)
- [Author](#author)

## Description

Mirax Player is a free video player for React, Vue, Angular, and Svelte that can embed videos from platforms like TikTok, YouTube/Shorts, Twitter, Vimeo and Dailymotion. This library package enables you to set any URL once within a single embed code tag and dynamically embed videos from any video sites.


Frameworks / Library | Tested versions
------ | -------- | 
 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | 18 & above
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)  | 3 & above
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)  | 16 & above
![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white) | 3 & above

-----

## Release-notes

Major changes:

- Updates the UI video player with backward & forward buttons.
- Mirax embed officially supports Twitter and Dailymotion videos.
- Mirax tags have been replaced with new readability terms, and some are optional.

Minor changes:

- Minimize the parameters.

Patch changes:

- Progress bar move to the top

-------
## Features


- This video player supports both TypeScript and JavaScript, making it developer-friendly.
- Easy to use and responsive.
- Can embed videos like TikTok, YouTube, YouTube Shorts, Twitter, Vimeo and Dailymotion.
- Capable of playing videos (Portrait or Landscape).
- Customizable color themes.
- Supports PIP (Picture-in-Picture).


-------------
## Installation

To install the Mirax Player, you can use the following npm command:

```bash
npm install mirax-player
```

## Supported-sites

 Logo | Sites | Source type | Docs.
------ | -------- | --------- | ---------- |
![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white) | YouTube / Shorts | Iframe Api | https://developers.google.com/youtube/iframe_api_reference 
![Vimeo](https://camo.githubusercontent.com/2026999d43e099c9c835757e3d2f5f8c574efad153f4e3d5143914223e9cbc24/68747470733a2f2f613131796261646765732e636f6d2f62616467653f6c6f676f3d76696d656f) | Vimeo |  Player SDK | https://developer.vimeo.com/player/sdk
![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?style=for-the-badge&logo=TikTok&logoColor=white) | TikTok | oEmbed API |  https://developers.tiktok.com/doc/embed-videos/ 
![Dailymotion](https://a11ybadges.com/badge?logo=dailymotion) | Dailymotion | oEmbed API |  https://developers.dailymotion.com/news/player-api/embed-dailymotion-video-oembed/ 
![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white) | Twitter / X | JavaScript API | https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites
--------

## Embed-video

Mirax embed tags |  Functionality | Type | Required | 
------ | -------- | -------- | ----------
`class-mirax-embed` |responsiveness | any | yes 
`data-mirax-embed-width` | dynamic width | integer | yes 
`data-mirax-embed-height` |  dynamic height | integer | yes 
`data-mirax-embed-fullscreen` |  enable fullscreen | boolean | optional (true false)
`data-mirax-embed-controls` | enable controllers | boolean | optional (true false )
`data-mirax-embed-autoplay` | enable autoplay | boolean | optional (true false)
`data-mirax-embed-loop` | enable loop | boolean | optional (true false)
`data-mirax-embed-url` | video address, url/links | any | yes 
---------
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- located at repository files
```html
src/react/TypeScriptPlayer.md
src/react/TypeScriptEmbed.md
src/vue/TypeScriptPlayer.md
src/vue/TypeScriptEmbed.md
src/svelte/TypeScriptPlayer.md
src/svelte/TypeScriptEmbed.md
```
# React embed  
```js 
import React, { useEffect, useRef } from "react";
import { miraxEmbed } from 'mirax-player';

const ExampleComponent = () => {
  const embedVideo = useRef(null);
  useEffect(() => {
    miraxEmbed(embedVideo.current);
  });
  return (
    <div className="class-mirax-embed"
        ref={embedVideo}
        data-mirax-embed-width="640"
        data-mirax-embed-height="360"
        data-mirax-embed-url="https://vimeo.com/217499569">
    </div>
  );
};
export default ExampleComponent;
```
# Vue embed  
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
# Angular embed  
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
    miraxEmbed(this.embedVideo.nativeElement);
  }
}
```

example.component.html

-------------
```html
<div class="class-mirax-embed">
    <div #embedVideo 
      data-mirax-embed-width="640"
      data-mirax-embed-height="360"
      data-mirax-embed-url="https://vimeo.com/217499569">
    </div>
</div>
```
# Svelte embed  
```js 
<script>
  import { onMount } from 'svelte';
  import { miraxEmbed } from 'mirax-player';

  let embedVideo;
 
  onMount(() => {
    miraxEmbed(embedVideo);
  });
</script>

<div class="class-mirax-embed">
  <div bind:this={embedVideo}
     data-mirax-embed-width="640"
     data-mirax-embed-height="360"
     data-mirax-embed-url="https://vimeo.com/217499569">
  </div>
</div>
```
-----------------

## Video-player

Mirax player tags |   Functionality |Type | Required |
------ | -------- |  ----------- | ----------
`class-mirax-player` | responsiveness | any| yes
`data-mirax-player-width` | dynamic width | integer | yes
`data-mirax-player-float`   | dynamic alignment | string |optional
`data-mirax-player-theme` | player color |  any | optional
`data-mirax-player-bar`  | progress bar color | any | optional

-------


Keyboard shortcuts| Functions | Description 
---- |  ---------------------- | -----------
press `space bar` | Play & Pause |The video will play or pause 
press `alt+p` | PiP | Picture in Picture screen 
press `left arrow key` | Progress bar | backward for 10 sec. 
press `right arrow key` | Progress bar | forward for 10 sec.

-------------
- location of videos stored: 

    public/clip.mp4 from your frameworks

    assets/clip.mp4 angular

    https://example.com/video/clip.mp4

----------------------
# React video player
```js
import React, { useEffect, useRef } from "react";
import { miraxPlayer } from 'mirax-player';

const ExampleComponent = () => {
  const videoPlayer = useRef(null);
  useEffect(() => {
    if (videoPlayer.current) {
      miraxPlayer(videoPlayer.current);
    }
  });
  return (
    <div className="class-mirax-player">
      <video ref={videoPlayer} 
        className="mirax-player"
        data-mirax-player-width="800"
        src="clip.mp4">
      </video>
    </div>
  );
};
export default ExampleComponent;
```
# Vue video player
```js
<template>
  <div class="class-mirax-player">
    <video ref="videoPlayer"
      class="mirax-player"
      data-mirax-player-width="800"
      src="clip.mp4">
    </video>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { miraxPlayer } from 'mirax-player';

export default {
  setup() {
    const videoPlayer = ref(null);
    onMounted(() => {
      if (videoPlayer.value) {
        miraxPlayer(videoPlayer.value);
      }
    });
    return {
      videoPlayer
    };
  }
};
</script>
```
# Angular video player
---------
example.component.ts
-----------
```ts
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { miraxPlayer } from 'mirax-player';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;
  ngAfterViewInit(): void {
    this.initializemiraxPlayer();
  }
  initializemiraxPlayer() {
    if (this.videoPlayer.nativeElement) {
      miraxPlayer(this.videoPlayer.nativeElement);
    }
  }
}
```

example.component.html

-------------
```html
  <div class="class-mirax-player">
    <video #videoPlayer
      class="mirax-player"
      data-mirax-player-width="800"
      src="assets/clip.mp4">
    </video>
  </div>
```
# Svelte video player
```js
<script>
  import { onMount } from 'svelte';
  import { miraxPlayer } from 'mirax-player';

  let videoPlayer;
  onMount(() => {
    if (videoPlayer) {
      miraxPlayer(videoPlayer);
    }
  });
</script>

<div class="class-mirax-player">
  <video bind:this={videoPlayer} class="mirax-player"
      data-mirax-player-width="800"
      src="clip.mp4">
    <track kind="captions" src="" label="English" default>
  </video>
</div>
```
## CSS-player

- Left
```js
      data-mirax-player-float="left"
```
- Center
```js
      data-mirax-player-float=""
      //or
      data-mirax-player-float="center"
```
- Right
```js
      data-mirax-player-float="right"
```

-----
Examples:
---------
```js
      data-mirax-player-theme="rgba(250, 149, 35, 0.9)"
      data-mirax-player-bar="rgba(17, 117, 59, 0.9)"
```
```js
      data-mirax-player-theme="rgb(0,0,0)"
      data-mirax-player-bar="rgb(255, 255, 255)"
```
```js
      data-mirax-player-theme="#000000"
      data-mirax-player-bar="#00ff00"
```
```js
      data-mirax-player-theme="black"
      data-mirax-player-bar="red"
```
If you want pure transparent:
---------
 ```js
      data-mirax-player-theme = "rgba(0, 0, 0, 0)";
```

## Colors

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
- This library package is FREE for commercial or personal use. ❤️
- Thank you for your support. 😃