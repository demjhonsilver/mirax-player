<p align="center">
      <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/logo.png" alt="Logo" width="70" height="70"/>
</p>

<div align="center">

# Mirax Player 
[![Latest npm version](https://img.shields.io/badge/npm_%20-v_2.3.2-%23CB3837.svg)](https://www.npmjs.com/package/mirax-player)

</div>



<p align="center">
  <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/theme1.png"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/theme2.png"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/theme3.png"/>
</p>

------


## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Controllers](#Controllers)
- [Usage](#usage)
- [React](#react)
- [Vue](#vue)
- [Angular](#angular)
- [Svelte](#svelte)
- [Style](#style)
- [Colors](#colors)
- [Features](#features)
- [License](#license)
- [Author](#author)

## Description

Mirax Player is a video player has compatibility of typescript and javascript for React, Vue, Angular and Svelte. You can customize the theme color of the video player. Robust and easy to implement with readability syntax and light-weight.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)
![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white)
------------
Supported scripts:
---------
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

Compatibility for web browsers:
---------


![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![Firefox](https://img.shields.io/badge/Firefox-FF7139?style=for-the-badge&logo=Firefox-Browser&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)
![Opera](https://img.shields.io/badge/Opera-FF1B2D?style=for-the-badge&logo=Opera&logoColor=white)

-------------
## Installation

To install the Mirax Player, you can use the following npm command:

```bash
npm install mirax-player
```
----------

### Controllers

Keyboard keys / buttons | Functions | Description | Supported Browsers |
---- |  ---------------------- | ----------- | -------
`space bar` | Play & Pause |The video will play or pause | All browsers
`click`  &#9654; | Play & Pause | The video will play or pause | All browsers
`alt+p or cmd+p` | PiP | Picture in Picture screen | `!firefox auto pip icon`
`click`  &#915;  | PiP | Picture in Picture screen | All browsers
`double click the video` | Fullscreen | It will set as fullscreen mode | All browsers
`click`  &#x2750; | Fullscreen | It will set as fullscreen mode | All browsers
`swipe for volume`  | Volume | To adjust the volume level | All browsers
`swipe for time frame` | Progress bar | To adjust video frame timestamp | All browsers
-------------

## Usage

In your component

------------------

Then use it  from Mirax Player:

```js

//both react,vue, angular and svelte importing syntax

import { miraxplayer } from 'mirax-player';

// for React (video file stored: public/clip.mp4)
  const video = useRef(null);
//
// for Vue (video file stored: public/clip.mp4)
    const video = ref(null);
//
// for Angular (video file stored: src/assets/clip.mp4)
  @ViewChild('video', { static: true }) video!: ElementRef<HTMLVideoElement>;
//
// for Svelte (video file stored: public/clip.mp4)
   let video;
//

```

## React

You need to use useRef in React hooks:
-----------
```js

import React, { useEffect, useRef } from 'react';
import { miraxplayer } from 'mirax-player';

const ExampleComponent = () => {
  const video = useRef(null);
  useEffect(() => {
    if (video.current) {
      miraxplayer(video.current);
    }
  }, []);

  return (
    <div className='whatever'>
      <video ref={video} className="mirax-player" src="clip.mp4"></video>
    </div>
  );
};
export default ExampleComponent;



```
Typescript: React
---------

```js 

import React, { useEffect, useRef } from 'react';
import { miraxplayer } from 'mirax-player';

const ExampleComponent: React.FC = () => {
  const video = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (video.current) {
      miraxplayer(video.current);
    }
  }, []);
  
  return (
    <div className='whatever'>
      <video ref={video} className="mirax-player" src="clip.mp4"></video>
    </div>
  );
};
export default ExampleComponent;


```
## Vue
------------------
You need to use ref in Vue attributes:
-----------
```js

<template>
  <div class="whatever">
    <video ref="video" class="mirax-player" src="clip.mp4"></video>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { miraxplayer } from 'mirax-player';

export default {
  name: 'ExampleComponent',
  setup() {
    const video = ref(null);

    onMounted(() => {
      if (video.value) {
        miraxplayer(video.value);
      }
    });

    return {
      video
    };
  }
};
</script>


```
Typescript:  Vue
-------------
```js 

<template>
  <div class="whatever">
    <video ref="video" class="mirax-player" src="clip.mp4"></video>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { miraxplayer } from 'mirax-player';

export default {
  name: 'ExampleComponent',
  setup() {
    const video = ref<HTMLVideoElement | null>(null);

    onMounted(() => {
      if (video.value) {
        miraxplayer(video.value);
      }
    });

    return {
      video
    };
  }
};
</script>


```
## Angular

------------------

You need to use ElementRef native DOM element:
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
  ngOnInit(): void {
    this.initializeMiraxplayer();
  }
  initializeMiraxplayer() {
    if (this.video.nativeElement) {
      miraxplayer(this.video.nativeElement);
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
## Svelte

You need to use bind:this in svelte:
-----------
```js

<script>
    import { onMount } from 'svelte';
    import { miraxplayer } from 'mirax-player';

    let video;
  
    onMount(() => {
      if (video) {
        const miraxPlayer = miraxplayer(video);
      }
    });
</script>
  
  <div>
    <div class='whatever'>
      <video bind:this={video} class="mirax-player" src="clip3.mp4">
        <track kind="captions" src="" label="English" default>
      </video>
    </div>
  </div>

```
Typescipt: Svelte
--------

```js

<script lang="ts">
  import { onMount } from 'svelte';
  import { miraxplayer } from 'mirax-player';

  let video: HTMLVideoElement | undefined;

  onMount(() => {
    if (video) {
      const miraxPlayer = miraxplayer(video);
    }
  });
</script>

<div>
  <div class='whatever'>
    <video bind:this={video} class="mirax-player" src="clip.mp4">
      <track kind="captions" src="" label="English" default>
    </video>
  </div>
</div>


```

--------------------------------------

To customize the alignment of video:
-----

- note: .whatever, you can rename it, just make sure the classname in your component also replace it.
---------
```js
// in React 
 <div className='whatever'>
        <video ref={video} className="mirax-player" src="clip.mp4"></video>
</div>

// in Vue 
<div class="whatever">
      <video ref="video" class="mirax-player" src="clip.mp4"></video>
 </div>

// in Angular
  <div class="whatever">
    <video #video class="mirax-player" src="assets/clip.mp4"></video>
  </div>

// in Svelte
 <div class='whatever'>
   <video bind:this={video} class="mirax-player" src="clip.mp4">
      <track kind="captions" src="" label="English" default>
   </video>
 </div>

```


----------------
Left Alignment: ( 3 progress syntax should be remain )
--------------
```css
.whatever {
  margin: 0 auto;
  position: relative;
  width: 100%;
  text-align: left;
}
.mirax-theme {
  float: left!important;
  background-color: rgba(36, 22, 223, 0.5)!important;
}
progress::-webkit-progress-value {
  background-color: rgb(65, 7, 224, 0.9)!important;
} 
progress[value]::-moz-progress-bar {
  background-color: rgb(65, 7, 224, 0.9)!important;
}
progress::-ms-fill {
  background-color: rgb(65, 7, 224, 0.9)!important;
}

```

----------
Center Alignment: ( 3 progress syntax should be remain )
--------------
```css

.whatever {
  margin: 0 auto;
  position: relative;
  width: 100%;
  text-align: center;
}
.mirax-theme {
  margin: 0 auto!important;
  background-color: rgba(36, 22, 223, 0.5)!important;
}
progress::-webkit-progress-value {
  background-color: rgb(65, 7, 224, 0.9)!important;
}
progress[value]::-moz-progress-bar {
  background-color: rgb(65, 7, 224, 0.9)!important;
}
progress::-ms-fill {
  background-color: rgb(65, 7, 224, 0.9)!important;
}




```

--------

Right Alignment: ( 3 progress syntax should be remain )
---------
```css

.whatever {
  margin: 0 auto;
  position: relative;
  width: 100%;
  text-align: right;
}
.mirax-theme {
  float: right!important;
  background-color: rgba(36, 22, 223, 0.5)!important;
}
progress::-webkit-progress-value {
  background-color: rgb(65, 7, 224, 0.9)!important;
} 
progress[value]::-moz-progress-bar {
  background-color: rgb(65, 7, 224, 0.9)!important;
}
progress::-ms-fill {
  background-color: rgb(65, 7, 224, 0.9)!important;
}


```


----------
## Style

You can set your own class name to wrap the video player
----------------------------

```css
.whatever {
    margin: 0 auto;
    position: relative;
    width: 100%;
}

```
--------------
## Colors

You have freedom to set a theme color for free.



Color Types | Color syntax | Example | Opacity Range |  Appearance
---------- |  --------- | ---------------- | -------------------- | ---------------
`RGBA` | rgba() | rgba(255,0,0, 0.5) | `0.1 to 0.9`  or  `0 to 1` | Red half transparency
`RGB`  |rgb() | rgb(255, 0, 0) | `none` | Red
`HEXA` | # | #ff0000| `none` | Red
`COLORNAME` | colorname | red | `none` | Red
-------------

To change color and theme, just add to your css file
----------

Reminder for progress bar: 3 progress syntax must declared
-------------------
```css

progress::-webkit-progress-value {
  //change color here
} 
progress[value]::-moz-progress-bar {
  //change color here
}
progress::-ms-fill {
  //change color here
}

```
---------
```bash

- note always put !important at the end of statement.

```

```css


.mirax-theme {
    background-color: rgba(4, 88, 25, 0.2)!important;
}
progress::-webkit-progress-value {
    background-color: rgb(252, 227, 7)!important;
} 
progress[value]::-moz-progress-bar {
    background-color: rgb(252, 227, 7)!important;
}
progress::-ms-fill {
    background-color: rgb(252, 227, 7)!important;
}

```
---------------------------

 if you want pure transparent, mirax-theme only:
---------
 change into:
 ---------
 ```css

.mirax-theme {
  background: none !important;
}

```

---------------
Sample themes:

-------------
```css

.mirax-theme {
  background-color: purple!important;
}
progress::-webkit-progress-value {
  background-color: lime!important;
} 
progress[value]::-moz-progress-bar {
  background-color: lime!important;
}
progress::-ms-fill {
  background-color: lime!important;
}


```
-------------------

```css

.mirax-theme {
  background-color: rgba(250, 149, 35, 0.9)!important;
}
progress::-webkit-progress-value {
  background-color: rgb(17, 117, 59)!important;
} 
progress[value]::-moz-progress-bar {
  background-color: rgb(17, 117, 59)!important;
}
progress::-ms-fill {
  background-color: rgb(17, 117, 59)!important;
}


```
-----------

```css

.mirax-theme {
  background: none !important;
}
progress::-webkit-progress-value {
  background-color: rgba(253, 75, 90, 0.897)!important;
} 
progress[value]::-moz-progress-bar {
  background-color: rgba(253, 75, 90, 0.897)!important;
}
progress::-ms-fill {
  background-color: rgba(253, 75, 90, 0.897)!important;
}


```

---------------

```css

.mirax-theme {
  background: none !important;
}
progress::-webkit-progress-value {
  background-color: rgba(250, 234, 5, 0.7)!important;
} 
progress[value]::-moz-progress-bar {
  background-color: rgba(250, 234, 5, 0.7)!important;
}
progress::-ms-fill {
  background-color: rgba(250, 234, 5, 0.7)!important;
}


```

----------------------

## Features

- Play and Pause 
- Responsive
- Auto hide the player bar
- Can play videos (Portrait or Landscape)
- 9:16 dimension supported (Mobile video)
- Fullscreen
- Adjust the volume (low or high)
- Can change color themes
- You can point and drag the timestamp in video time duration anywhere
- PIP supported (picture in picture) will play the clip even if you leave the tab open for new app 

----------------------------------------------------
## License

MIT

----------------------------------------------------
## Author

Demjhon Silver



