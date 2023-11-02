<p align="center">
      <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/logo.png" alt="Logo" width="70" height="70"/>
</p>

<div align="center">

# Mirax Player 
[![npm version](https://img.shields.io/npm/v/mirax-player.svg?logo=npm&style=flat-square&label=Latest&color=blue)](https://www.npmjs.com/package/mirax-player)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)
![Written](https://img.shields.io/badge/JavaScript-blue?logo=javascript&label=Written&style=flat-square&color=FDDA0D)
![Downloads](https://img.shields.io/npm/dt/mirax-player.svg?&style=flat-square&label=Downloads&color=orange)
[![License](https://img.shields.io/npm/l/mirax-player.svg?style=flat-square&label=License&color=green)](https://github.com/demjhonsilver/mirax-player/blob/main/LICENSE.md)


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
- [TypeScript](#typescript)
- [Embed Css](#embed-css)
- [React](#react)
- [Vue](#vue)
- [Angular](#angular)
- [Svelte](#svelte)
- [Video Player](#video-player)
- [CSS Player](#css-player)
- [Colors](#colors)
- [License](#license)
- [Author](#author)

## Description

Mirax Player is a free video player for React, Vue, Angular, and Svelte that can embed videos from platforms like Facebook, TikTok, YouTube/Shorts, Twitter, Vimeo and Dailymotion. This library package enables you to dynamically embed videos from any video site, using any URL you like, and as many videos as you need.


Frameworks / Libraries | Tested versions
------ | -------- | 
 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | 18 & above
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)  | 3 & above
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)  | 16 & above
![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white) | 3 & above

-----

## Release-notes
Version 6.2.0

Major Changes:

- The Mirax video player has been revised.
- The Mirax embed feature is now easier to use.
- The Mirax player can embed multiple videos.
- The embed TypeScript versions are available. [See TypeScript](#typescript)

Minor Changes:

 v6.2.0
- The progress bar for video player is wider and the default color is white.
- The speed option panel is getting lower.

 v6.1.0
- Examples for React embedding are based on named exports.
- Adding a dependency from Aziwork.


Patch Changes:

 v6.1.2

- Margin added to the Mirax video player for responsive dimensions.

 v6.1.1

- The Aziwork package has been updated to version 1.0.0.

## Features

- Easy to use and responsive.
- Capable of embedding one or many videos from platforms like Facebook, TikTok, YouTube, YouTube Shorts, Twitter, Dailymotion and Vimeo.
- Supports playing videos in both portrait and landscape orientations. 
- Set up once, everything is flexible.

-------------
## Installation

To install the Mirax Player, you can use the following npm command:

```bash
npm install mirax-player
```

## Supported-sites

![Facebook](https://img.shields.io/badge/Facebook-%231877F2.svg?style=for-the-badge&logo=Facebook&logoColor=white) 
![Twitter](https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white) 
![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white) 
![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?style=for-the-badge&logo=TikTok&logoColor=white) 
![Vimeo](https://camo.githubusercontent.com/2026999d43e099c9c835757e3d2f5f8c574efad153f4e3d5143914223e9cbc24/68747470733a2f2f613131796261646765732e636f6d2f62616467653f6c6f676f3d76696d656f) 
![Dailymotion](https://a11ybadges.com/badge?logo=dailymotion)
--------

## Embed-video

Attributes |  Functionality | Type | Required | 
------ | -------- | -------- | ----------
`width` | dynamic width | number | optional
`height` |  dynamic height | number |optional
`fullscreen` |  enable fullscreen | boolean | optional
`controls` | enable controllers | boolean | optional
`autoplay` | enable autoplay | boolean | optional
`loop` | enable loop | boolean | optional
`videoClass` | set any classname | string | yes
`videoUrl` | video address, url/links | string | yes 
---------

## TypeScript
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

- located at repository files

```html
mirax-player/
|-- src/
|   |-- angular/
|   |-- react/TypeScriptEmbed.md
|   |-- svelte/TypeScriptEmbed.md
|   |-- vue/TypeScriptEmbed.md
```

## Embed-css

You can add your own css set-up: <!-- You can rename, change color, resize, positioning etc. -->

You may apply to app.css or index.css or any css file.

This is sample only, you can rename, recreate, and do something:
```css
.embed-youtube-one-clip {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  border: 2px solid orange;
  width: 100%;
  max-width: 640px;
  margin: auto; /* Center the entire container horizontally */
}
```
For more css embed video styles:

- located at css.md

```html
mirax-player/
|-- src/css-embed/css.md (including Angular css)
```
-----------

If you want sample code for embed multiple videos?
-----

Located at repository files ( EMBED MANY VIDEOS HERE)


```
mirax-player/
|-- src/
|   |-- angular/TypeScriptEmbed.md
|   |-- react/JavaScriptEmbed.md
|   |-- svelte/JavaScriptEmbed.md
|   |-- vue/JavaScriptEmbed.md

```
------

Use Google chrome as much as possible to load more videos properly.

------------
Recommended web browser for local test:
-----
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
--------

Reminder:

- Don't forget to restart your server.

------------
## React
```jsx
import { useEffect } from 'react';
import { embed } from 'mirax-player';

export const ExampleComponent = () => {
  useEffect(() => {
    embed([
      {
        width: 640,
        height: 360,
        autoplay: true,
        fullscreen: false,
        controls: true,
        videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
        videoClass: 'embed-youtube-one-clip' 
      }
    ])
  });
  return (
    <>
      <div className="embed-youtube-one-clip"></div>
    </>
  );
};
```
## Vue
```js
<template>
  <div>
    <div class="embed-youtube-one-clip"></div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { embed } from 'mirax-player';

export default {
  name: 'ExampleComponent',
  setup() {

    onMounted(() => {
      embed([
        {
          width: 640,
          height: 360,
          autoplay: true,
          fullscreen: false,
          controls: true,
          videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
          videoClass: 'embed-youtube-one-clip'
        }
      ])
    });

    return {};
  },
};
</script>
```
## Angular 
```ts
import { Component, AfterViewInit } from '@angular/core';
import { embed } from 'mirax-player';

@Component({
  selector: 'app-example',
  template: `
    <div class="embed-youtube-one-clip"></div>
  `,
  styleUrls: ['./example.component.css'],
})
export class ExampleComponent implements AfterViewInit {

  ngAfterViewInit() {
    embed([
      {
          width: 640,
          height: 360,
          autoplay: true,
          fullscreen: false,
          controls: true,
          videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
          videoClass: 'embed-youtube-one-clip'
      }
    ]);
  }
}  
```
For Angular css:

---

[Angular embed Css](#embed-css)

```css
::ng-deep .embed-youtube-one-clip {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  border: 2px solid orange;
  width: 100%;
  max-width: 640px;
  margin: auto; /* Center the entire container horizontally */
}
```

## Svelte 

```js
<script>
  import { onMount } from 'svelte';
  import { embed } from 'mirax-player';

  onMount(() => {
    embed([
      {
        width: 640,
        height: 360,
        autoplay: true,
        fullscreen: false,
        controls: true,
        videoUrl: 'https://www.youtube.com/watch?v=oEXFMGK7IC0',
        videoClass: 'embed-youtube-one-clip'
      }
    ]);
  });
</script>

<div>
  <div class="embed-youtube-one-clip"></div>
</div>
```
## Video-player

Player Attributes |   Functionality |Type | Required |
------ | -------- |  ----------- | ----------
`player-selector` | responsiveness | any| yes
`data-player-width` | dynamic width | number | yes
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
import { useEffect, useRef } from "react";
import { miraxPlayer } from 'mirax-player';

export const ExampleComponent = () => {
  const playerDiv = useRef(null);
  useEffect(() => {
      miraxPlayer(playerDiv.current);
  });
  return (
    <div className="player-selector">
      <video className="mirax-player" ref={playerDiv}
        data-player-width="800"
        src="clip.mp4">
      </video>
    </div>
  );
};
```
# Vue video player
```js
<template>
  <div class="player-selector">
    <video ref="playerDiv"
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
    const playerDiv = ref(null);
    onMounted(() => {
        miraxPlayer(playerDiv.value);
    });
    return {
      playerDiv
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
  @ViewChild('playerDiv', { static: true }) playerDiv!: ElementRef<HTMLVideoElement>;
  ngAfterViewInit(): void {
    this.initializemiraxPlayer();
  }
  initializemiraxPlayer() {
      miraxPlayer(this.playerDiv.nativeElement);
  }
}
```

example.component.html

-------------
```html
  <div class="player-selector">
    <video #playerDiv
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

  let playerDiv;
  onMount(() => {
      miraxPlayer(playerDiv);
  });
</script>

<div class="player-selector">
  <video bind:this={playerDiv} class="mirax-player"
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