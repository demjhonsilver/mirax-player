<p align="center">
      <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/logo.png" alt="Logo" width="70" height="70"/>
</p>

<div align="center">

# Mirax Player 
[![npm version](https://img.shields.io/npm/v/mirax-player.svg?logo=npm&style=flat-square&label=Latest&color=blue)](https://www.npmjs.com/package/mirax-player)
![Written](https://img.shields.io/badge/JavaScript-blue?logo=javascript&label=Supports&style=flat-square&color=FDDA0D)
![Written](https://img.shields.io/badge/TypeScript-blue?logo=typescript&label=Supports&style=flat-square&color=blue)
![Downloads](https://img.shields.io/npm/dt/mirax-player.svg?style=flat-square&label=DOWNLOADS&color=brightgreen)
[![License](https://img.shields.io/npm/l/mirax-player.svg?style=flat-square&label=LICENSE&color=green)](https://github.com/demjhonsilver/mirax-player/blob/main/LICENSE.md)









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

Version 6

Major changes:

- Mirax tags become Mirax props."
- useRef, ref, and element are based on HTMLDivElement, which has been removed."
- The class names for the player and embed are more aligned with naming conventions."
- The destructuring syntax becomes straightforward for named exports like { embed } and { player }.

Minor changes:

6.3.0
- The shortcut key for playing videos will be Ctrl + Space for video player

6.2.0
- Revised data-mirax-embed to data-e-."


Patch changes:

6.3.1
- Fixed the player  UI issue.

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
![Dailymotion](https://a11ybadges.com/badge?logo=dailymotion) | Dailymotion | oEmbed API |  https://developers.dailymotion.com/player/#player-oembed
![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white) | Twitter / X | JavaScript API | https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites
--------

## Embed-video

Mirax embed props |  Functionality | Type | Required | 
------ | -------- | -------- | ----------
`mirax-embed` | responsiveness | any | yes 
`data-e-width` | dynamic width | integer | yes 
`data-e-height` |  dynamic height | integer | yes 
`data-e-fullscreen` |  enable fullscreen | boolean | optional (true false)
`data-e-controls` | enable controllers | boolean | optional (true false )
`data-e-autoplay` | enable autoplay | boolean | optional (true false)
`data-e-loop` | enable loop | boolean | optional (true false)
`data-e-url` | video address, url/links | any | yes 
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
import React, { useEffect } from "react";
import { embed } from 'mirax-player';

const ExampleComponent = () => {
  useEffect(() => {
    embed("mirax-embed"); 
  }, []);
  return (
    <div className="mirax-embed"
      data-e-width="640" // 800 x 450 or 1000 x 562.5
      data-e-height="360"
      data-e-autoplay="false" // for autoplay set true or remove this props
      data-e-url="https://vimeo.com/217499569">
    </div>
  );
};
export default ExampleComponent;
```
# Vue embed  
```js 
<template>
  <div class="mirax-embed"
       data-e-width="640" // 800 x 450 or 1000 x 562.5
       data-e-height="360"
       data-e-autoplay="false" // for autoplay set true or remove this props
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
# Angular embed  
```ts
import { Component, OnInit } from '@angular/core';
import { embed } from 'mirax-player';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    embed('mirax-embed'); 
  }
}
```

example.component.html

-------------
```html
<div class="mirax-embed"
      data-e-width="640"
      data-e-height="360"
      data-e-autoplay="false"
      data-e-url="https://vimeo.com/217499569">
</div>
```
# Svelte embed  
```js 
<script>
  import { onMount } from 'svelte';
  import { embed } from 'mirax-player';

  onMount(() => {
    embed('mirax-embed');
  });
</script>

<div class="mirax-embed"
     data-e-width="640" // 800 x 450 or 1000 x 562.5
     data-e-height="360"
     data-e-autoplay="false" // for autoplay set true or remove this props
     data-e-url="https://vimeo.com/217499569">
</div>
```
-----------------

## Video-player

Mirax player props |   Functionality |Type | Required |
------ | -------- |  ----------- | ----------
`player-selector` | responsiveness | any| yes
`data-player-width` | dynamic width | integer | yes
`data-player-float`   | dynamic alignment | string |optional
`data-player-theme` | player color |  any | optional
`data-player-bar`  | progress bar color | any | optional

-------


Keyboard shortcuts| Functions | Description 
---- |  ---------------------- | -----------
press `space bar` | Play & Pause |The video will play or pause 
press `alt+p` | PiP | Picture in Picture screen 
press `left arrow key` | rewind clip | backward for 10 sec. 
press `right arrow key` | advance clip | forward for 10 sec.

-------------
- location of videos stored: 

    public/clip.mp4 from your frameworks

    assets/clip.mp4 -Angular

    example.com/video/clip.mp4 (url)

----------------------
# React video player
```js
import React, { useEffect, useRef } from "react";
import { miraxPlayer } from 'mirax-player';

const ExampleComponent = () => {
  const playerDiv = useRef(null);
  useEffect(() => {
      miraxPlayer(playerDiv.current);
  },[]);
  return (
    <div className="player-selector">
      <video className="mirax-player" ref={playerDiv}
        data-player-width="800"
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
  <div class="player-selector">
    <video ref="videoPlayer"
      class="mirax-player"
      data-player-width="800"
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
        miraxPlayer(videoPlayer.value);
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
      miraxPlayer(this.videoPlayer.nativeElement);
  }
}
```

example.component.html

-------------
```html
  <div class="player-selector">
    <video #videoPlayer
      class="mirax-player"
      data-player-width="800"
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
      miraxPlayer(videoPlayer);
  });
</script>

<div class="player-selector">
  <video bind:this={videoPlayer} class="mirax-player"
      data-player-width="800"
      src="clip.mp4">
    <track kind="captions" src="" label="English" default>
  </video>
</div>
```
## CSS-player

- Left
```js
      data-player-float="left"
```
- Center
```js
      data-player-float="" // center is default
      //or
      data-player-float="center"
```
- Right
```js
      data-player-float="right"
```

-----
Examples:
---------
```js
      data-player-theme="rgba(250, 149, 35, 0.9)"
      data-player-bar="rgba(17, 117, 59, 0.9)"
```
```js
      data-player-theme="rgb(0,0,0)"
      data-player-bar="rgb(255, 255, 255)"
```
```js
      data-player-theme="#000000"
      data-player-bar="#00ff00"
```
```js
      data-player-theme="black"
      data-player-bar="red"
```
If you want pure transparent:
---------
 ```js
      data-player-theme = "rgba(0, 0, 0, 0)"
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

- This library package is FREE for commercial or personal use. ❤️

----------------------------------------------------
## Author

Demjhon Silver

- Thank you for your support. 😃