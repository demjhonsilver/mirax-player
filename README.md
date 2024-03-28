<p align="center">
<img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/logo.png" alt="Logo" width="70" height="70"/>
</p>



<div align="center">


# Mirax Player 

[![npm version](https://img.shields.io/npm/v/mirax-player.svg?logo=npm&style=flat-square&label=Latest&color=blue)](https://www.npmjs.com/package/mirax-player)
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
- [TypeScript](#typescript)
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

Mirax Player is a free video player for React, Vue, Angular, and Svelte.

Frameworks / Libraries | Tested versions
------ | -------- | 
 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | 18 & above
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)  | 3 & above
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)  | 16 & above
![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white) | 3 & above



-----



## Release-notes

Version 7.0.0

Major Changes:

  - The Mirax video player remains the focus as the media player service, although you can still change the color.
  - The buttons for forward, backward, and play have been changed into simple shapes.
  - The player button moves to the left side.
  - The embed feature has been removed and transferred to another package named `Embedrax`.
   [Embedrax - embed videos](https://www.npmjs.com/package/embedrax)



## Features


- Easy to use and responsive.
- The width can be set to a minimum of 370 and a maximum of 1038.






-------------

## Installation



To install the Mirax Player, you can use the following npm command:



```bash

npm install mirax-player

```

## TypeScript

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)


- located at repository files


```html

mirax-player/
|-- src/
|   |-- angular/
|   |-- react/TypeScriptPlayer.md
|   |-- svelte/TypeScriptPlayer.md
|   |-- vue/TypeScriptPlayer.md
```
--------

Reminder:

- Don't forget to restart your server.

------------


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
press `ctrl + space bar` | Play & Pause |The video will play or pause 
press `alt+p` | PiP | Picture in Picture screen 
press `left arrow key` | rewind clip | backward for 10 sec. 
press `right arrow key` | advance clip | forward for 10 sec.

-------------
- location of videos stored: 

    public/clip.mp4 from your frameworks

    assets/clip.mp4 -Angular

    example.com/video/clip.mp4 (url)

----------------------


# React
```js
import { useEffect, useRef } from "react";
import { miraxPlayer } from 'mirax-player';

export const ExampleComponent = () => {
  const playerDiv = useRef(null);
  useEffect(() => {
      miraxPlayer(playerDiv.current);
  });
  return (
    <>
    <div className="player-selector">
      <video className="mirax-player" ref={playerDiv}
        data-player-width="1038"
        src="clip.mp4">
      </video>
    </div>
    </>
  );
};
```

or


```js
import { useEffect, useRef } from "react";
import { miraxPlayer } from 'mirax-player';

const ExampleComponent = () => {
  const playerDiv = useRef(null);
  useEffect(() => {
      miraxPlayer(playerDiv.current);
  });
  return (
    <>
    <div className="player-selector">
      <video className="mirax-player" ref={playerDiv}
        data-player-width="1038"
        src="clip.mp4">
      </video>
    </div>
    </>
  );
};

export default ExampleComponent
```




# Vue
```js
<template>
  <div class="player-selector">
    <video ref="playerDiv"
      class="mirax-player"
      data-player-width="1038"
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
# Angular
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
      data-player-width="1038"
      src="assets/clip.mp4">
    </video>
  </div>
```
# Svelte
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
      data-player-width="1038"
      src="clip.mp4">
    <track kind="captions" src="" label="English" default>
  </video>
</div>

```

## CSS-player

example:

```js
      <video className="mirax-player" ref={playerDiv}
        data-player-width="800"
        data-player-theme="rgba(250, 149, 35, 0.8)" // it's okay if it's not include
        data-player-bar="rgba(17, 117, 59, 0.9)" // it's okay if it's not include
        src="clip.mp4">
      </video>
```
## To choose from many colors:

you can simply search on Google. Just type:


`html color hex codes`

`html color hex pallete`

or 

`html color rgba codes`

`html color rgba pallete`

and copy it.

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
`HEX` | #6digits | #ff0000| `none` | Red
`COLORNAME` | colorname | red | `none` | Red
----------------------------------------------------


## License

[MIT](http://www.opensource.org/licenses/MIT)

- This library package is FREE for commercial or personal use. ❤️

----------------------------------------------------
## Author

Demjhon Silver

- Thank you for your support. 😃