<p align="center">
      <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/logo.png" alt="Logo" width="70" height="70"/>
</p>

<div align="center">

# Mirax Player 
[![Npm version](https://img.shields.io/npm/v/mirax-player.svg?style=flat-square&label=NPM&color=brightgreen)](https://www.npmjs.com/package/mirax-player)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)
![Downloads](https://img.shields.io/npm/dt/mirax-player.svg?style=flat-square&label=Downloads&color=brightgreen)
[![License](https://img.shields.io/npm/l/mirax-player.svg?style=flat-square&label=License&color=green)](https://github.com/demjhonsilver/mirax-player/blob/main/LICENSE.md)


</div>
<p align="center">
  <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/theme1.png"/>
</p>

---------------------



<p align="center">
  <img src="https://raw.githubusercontent.com/demjhonsilver/mirax-player/main/img/theme2.png"/>
</p>


Disclaimer: This image is based on an example [TikTok embedded](https://developers.tiktok.com/doc/embed-videos)  video clip. 




## Table of Contents

- [Description](#description)
- [Release Notes](#release-notes)
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
- [Data Fetching](#data-fetching)
- [License](#license)
- [Author](#author)

## Description

Mirax Player is a powerful free video player for React, Vue, Angular, and Svelte that can embed videos from platforms like TikTok, YouTube/Shorts, and Vimeo. This library package enables you to set any URL once within a single embed code tag and dynamically embed videos from any video sites. It was written in pure JavaScript but can be implemented in both TypeScript and JavaScript.


Frameworks / Library | Version tested | Supported above versions |
------ | -------- | --------- |
 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | 18 | Yes |
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)  | 3 | Yes |
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)  | 16 | Yes |
![Svelte](https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white) | 3 | Yes |

-----
Node version I used:
- [ v18.16.0 ( LTS ) ](https://nodejs.org/en/blog/release/v18.16.0)
------
NPM version I used:
- [9.5.1] (https://www.npmjs.com/package/npm/v/9.5.1)
------

## Release-notes
```html
Mirax Player - Version 4.0.0
```
-----

Major:
- Adding speed control options: 
- Fullscreen will be exact mirax-player ui
- Adding new mirax player tag: 

      `mirax-player-class`
      `data-mirax-player-width`
      `data-mirax-player-float`
      `data-mirax-player-theme`
      `data-mirax-player-bar`

- Adding new mirax embed tag: 

      `data-mirax-fullscreen`
      `data-mirax-controls` 

Minor:
- Speaker icon animation: 
- Embed parameters becomes minimal options
- No more mirax-customizer
- No more .whatever class name setup

Patches:
- Progress bar minimize
- Volume slider getting thin

Bugs Fixed:

- When exiting fullscreen, the progress bar does not have responsive behavior.
- Fixed the nativeElement issue in Angular 16 for video player.
- Fixed issues in fullscreen mode for 9:16 (mobile resolution - portrait clip).
-------
## Features

- The advantage is that this player serves as a universal tool with minimal syntax, distributed to various javascript/typescript libraries and frameworks.
- This video player supports both TypeScript and JavaScript, making it developer-friendly.
- Easy to use and responsive
- Can embed videos like TikTok, YouTube, YouTube Shorts and Vimeo via  `Copy link`
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
![TikTok](https://img.shields.io/badge/TikTok-%23000000.svg?style=for-the-badge&logo=TikTok&logoColor=white)

Sites | Source type | Add-on Params | Links |
------ | -------- | --------- | --------- | 
YouTube / Shorts | Iframe Api | https://developers.google.com/youtube/player_parameters | https://developers.google.com/youtube/iframe_api_reference
Vimeo |  Player SDK | https://developer.vimeo.com/player/sdk/embed  |   https://developer.vimeo.com/player/sdk
TikTok | oEmbed API |  https://developers.tiktok.com/doc/embed-videos/  |  https://developers.tiktok.com/doc/overview/

--------

Thanks to these documentations of YouTube, Vimeo, and TikTok, I was able to integrate their APIs seamlessly into this library package. 😆 👏

---------------


Mirax embed tags | Type |  Functionality | TikTok | YouTube | Vimeo |
------ | -------- | --------- |  --------- | --------- | -------
`mirax-embed-class` | class name | responsiveness | required | required | required
`data-mirax-width` | attribute | dynamic width | n/a | required | required
`data-mirax-height` | attribute | dynamic height | n/a | required | required
`data-mirax-fullscreen` | attribute | enable fullscreen | n/a | required | n/a
`data-mirax-controls` | attribute | enable controllers | n/a | required | required
`data-mirax-embed` | attribute | video links to embed | required | required | required

example:

```js
<div className="mirax-embed-class">
  <div ref={embedVideo}
      data-mirax-width="640" // You can set any value, such as 800x450, to make it larger.
      data-mirax-height="360" //
      data-mirax-fullscreen="true" // boolean only true or false
      data-mirax-controls="true" // boolean only true or false
      data-mirax-embed="https://www.tiktok.com/@scout2015/video/6718335390845095173" // links from TikTok Youtube/Shorts and Vimeo
      >
  </div>
</div>
```

## Player

Mirax player tags | Type |  Functionality | Min | Max| Example value |
------ | -------- | --------- |  --------- | ---------- | ----------- |
`mirax-player-class` | class name | responsiveness | n/a | n/a | n/a |
`data-mirax-player-width` | attribute | width | 360 | 800 | 640 |
`data-mirax-player-float` | attribute | float position | n/a | n/a | left, center, right | 
`data-mirax-player-theme` | attribute | player color | n/a | n/a | red, green |
`data-mirax-player-bar` | attribute | progress bar color | n/a | n/a | blue, yellow |

-------


Keyboard keys / buttons | Functions | Description | Supported Browsers |
---- |  ---------------------- | ----------- | -------
press `space bar` | Play & Pause |The video will play or pause | All browsers
`click`  &#9654; | Play & Pause | The video will play or pause | All browsers
press `alt+p` | PiP | Picture in Picture screen | `!firefox but auto appear PiP icon`
`click`  &#915;  | PiP | Picture in Picture screen | All browsers
`double click the video` | Fullscreen | It will set as fullscreen mode | All browsers
`click`  &#x2750; | Fullscreen | It will set as fullscreen mode | All browsers
`swipe for volume`  | Volume | To adjust the volume level | All browsers
`scroll up/down` speaker icon| Volume | To adjust the volume level | All browsers
`swipe for time frame` | Progress bar | To adjust video frame timestamp | All browsers
`scroll up/down` | Progress bar | backward/forward | All browsers
press `left arrow key` | Progress bar | backward for 10 sec. | All browsers
press `right arrow key` | Progress bar | forward for 10 sec. | All browsers

input: 
```js

src=" "

```
- video stored location: 

    public/clip.mp4 from your frameworks

    assets/clip.mp4 angular

    example.com/video/clip.mp4
  
-----------
Can I add another class name and encapsulate it?
 -------

 - Yes, you can...

 ----------
ex.

```js
<div className="encapsulate-i-can-do-anything-here">
 <div className="mirax-player-class">
      <video ref={videoPlayer} 
      className="mirax-player"
      data-mirax-player-width="800"
      data-mirax-player-float=" "
      data-mirax-player-theme=" "
      data-mirax-player-bar=" "
      src="clip.mp4"></video>
    </div>
</div>

```
----------
```js
<div className="encapsulate-i-can-do-anything-here">
 <div className="mirax-embed-class">
      <div ref={embedVideo}
          data-mirax-width="640"
          data-mirax-height="360"
          data-mirax-fullscreen="true"
          data-mirax-controls="true"
          data-mirax-embed="https://vimeo.com/217499569">
      </div>
    </div>
</div>
```
----------------------

## React

 - Video player - [CSS for Video Player](#css-player)
```js
import React, { useEffect, useRef } from "react";
import { miraxplayer } from 'mirax-player';
const ExampleComponent = () => {
  const videoPlayer = useRef(null);
  useEffect(() => {
    if (videoPlayer.current) {
      miraxplayer(videoPlayer.current);
    }
  });
  return (
    <div className="mirax-player-class">
      <video ref={videoPlayer} 
      className="mirax-player"
      data-mirax-player-width="800"
      data-mirax-player-float=" "
      data-mirax-player-theme=" "
      data-mirax-player-bar=" "
      src="clip.mp4"></video>
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
      cc_load_policy: 1 
    }
  };
  const vimeoParams = { 
    responsive: true
  };
  useEffect(() => {
    miraxEmbed(embedVideo.current, youtubeParams, vimeoParams);
  });
  return (
    <div className="mirax-embed-class">
      <div ref={embedVideo}
          data-mirax-width="640"
          data-mirax-height="360"
          data-mirax-fullscreen="true"
          data-mirax-controls="true"
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
  <div class="mirax-player-class">
    <video ref="videoPlayer"
      class="mirax-player"
      data-mirax-player-width="800"
      data-mirax-player-float=" "
      data-mirax-player-theme=" "
      data-mirax-player-bar=" "
      src="clip.mp4"></video>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { miraxplayer } from 'mirax-player';

export default {
  setup() {
    const videoPlayer = ref(null);
    onMounted(() => {
      if (videoPlayer.value) {
        miraxplayer(videoPlayer.value);
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
        data-mirax-fullscreen="true"
        data-mirax-controls="true"
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
        cc_load_policy: 1
      }
    };
    const vimeoParams = {
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
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { miraxplayer } from 'mirax-player';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.initializeMiraxplayer();
  }
  initializeMiraxplayer() {
    if (this.videoPlayer.nativeElement) {
      miraxplayer(this.videoPlayer.nativeElement);
    }
  }
}
```

example.component.html

-------------
```html
<div>
  <div class="mirax-player-class">
    <video #videoPlayer
      class="mirax-player"
      data-mirax-player-width="800"
      data-mirax-player-float=" "
      data-mirax-player-theme=" "
      data-mirax-player-bar=" "
    src="assets/clip.mp4"></video>
  </div>
</div>
```
Embed videos  
-----------------------------------
```ts
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { miraxplayer } from 'mirax-player';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements AfterViewInit {
  @ViewChild('videoPlayer', { static: true }) videoPlayer!: ElementRef<HTMLVideoElement>;
  ngAfterViewInit(): void {
    this.initializeMiraxplayer();
  }
  initializeMiraxplayer() {
    if (this.videoPlayer.nativeElement) {
      miraxplayer(this.videoPlayer.nativeElement);
    }
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
      data-mirax-fullscreen="true"
      data-mirax-controls="true"
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

  onMount(() => {
    if (videoPlayer) {
      miraxplayer(videoPlayer);
    }
  });
</script>

<div class="mirax-player-class">
  <video bind:this={videoPlayer} class="mirax-player"
      data-mirax-player-width="800"
      data-mirax-player-float=" "
      data-mirax-player-theme=" "
      data-mirax-player-bar=" "
      src="clip.mp4">
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
      cc_load_policy: 1
    }
  };
  const vimeoParams = {
    responsive: true
  };
  onMount(() => {
    miraxEmbed(embedVideo, youtubeParams, vimeoParams);
  });
</script>

<div class="mirax-embed-class">
  <div bind:this={embedVideo}
     data-mirax-width="640"
     data-mirax-height="360"
     data-mirax-fullscreen="true"
     data-mirax-controls="true"
     data-mirax-embed="https://vimeo.com/217499569"></div>
</div>
```

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
- located at repository files
```html
src/svelte/TypeScriptPlayer.md
src/svelte/TypeScriptEmbed.md
```

## CSS-player

You can set-up attribute for position alignment of the video player.

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

You have the freedom to freely set a theme color.

Color Types | Color syntax | Example | Opacity Range |  Appearance
---------- |  --------- | ---------------- | -------------------- | ---------------
`RGBA` | rgba() | rgba(255,0,0, 0.5) | `0.1 to 0.9`  or  `0 and 1` | Red half transparency
`RGB`  |rgb() | rgb(255, 0, 0) | `none` | Red
`HEXA` | #6digits | #ff0000| `none` | Red
`COLORNAME` | colorname | red | `none` | Red
----------------------------------------------------
## Data-Fetching
- video source not inline from template:
```js
import React, { useEffect, useRef } from "react";
import { miraxplayer } from 'mirax-player';

const ExampleComponent = () => {
  const videoPlayer = useRef(null);
  const videoSource = "clip.mp4";

  useEffect(() => {
    if (videoPlayer.current) {
      miraxplayer(videoPlayer.current);
    }
  }, []);

  return (
    <div className="mirax-player-class">
      <video
        ref={videoPlayer}
        className="mirax-player"
        data-mirax-player-width="800"
        data-mirax-player-float=" "
        data-mirax-player-theme=" "
        data-mirax-player-bar=" "
        src={videoSource}
      ></video>
    </div>
  );
};

export default ExampleComponent;
```
- video source from API:
```js
import React, { useEffect, useRef, useState } from "react";
import { miraxplayer } from 'mirax-player';

const ExampleComponent = () => {
  const videoPlayer = useRef(null);
  const [videoSource, setVideoSource] = useState(""); // State to store video source

  useEffect(() => {
    // Fetch video source data from your API here
    // For demonstration purposes, I'm using a placeholder URL
    fetch("https://api.example.com/getVideoSource")
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response provides a video source URL
        // Update the video source state with the API data
        setVideoSource(data.videoSource);
      })
      .catch((error) => {
        console.error("Error fetching video source:", error);
      });
  }, []);

  useEffect(() => {
    if (videoPlayer.current && videoSource) {
      miraxplayer(videoPlayer.current);
    }
  }, [videoSource]);

  return (
    <div className="mirax-player-class">
      <video
        ref={videoPlayer}
        className="mirax-player"
        data-mirax-player-width="800"
        data-mirax-player-float=""
        data-mirax-player-theme=""
        data-mirax-player-bar=""
        src={videoSource}
      ></video>
    </div>
  );
};

export default ExampleComponent;
```
---------
```js
import React, { useEffect, useRef, useState } from "react";
import { miraxEmbed } from 'mirax-player';

const ExampleComponent = () => {
  const embedVideo = useRef(null);
  const [embedUrl, setEmbedUrl] = useState(""); // State to store the embed URL

  useEffect(() => {
    // Fetch the embed URL from your API here
    // For demonstration purposes, I'm using a placeholder URL
    fetch("https://api.example.com/getEmbedUrl")
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response provides an embed URL
        // Update the embedUrl state with the API data
        setEmbedUrl(data.embedUrl);
      })
      .catch((error) => {
        console.error("Error fetching embed URL:", error);
      });
  }, []);

  useEffect(() => {
    if (embedVideo.current && embedUrl) {
      miraxEmbed(embedVideo.current, null, null, embedUrl);
    }
  }, [embedUrl]);

  return (
    <div className="mirax-embed-class">
      <div
        ref={embedVideo}
        data-mirax-width="640"
        data-mirax-height="360"
        data-mirax-fullscreen="true"
        data-mirax-controls="true"
        data-mirax-embed={embedUrl} // Set the embed URL dynamically
      ></div>
    </div>
  );
};

export default ExampleComponent;

```
------

You can apply it to any frameworks as you prefer.

-----
I don't have enough time to do it for each framework and each script.

-------
Just figure out those examples:

-----
Thank you!

-----------------
## License

[MIT](http://www.opensource.org/licenses/MIT)
----------------------------------------------------
## Author

Demjhon Silver
- This project is FREE ❤️
- Supporting ⭐ stars for this project are welcome 😉 
- Thank you for your support. 😃 
- You can follow me on my [Github](https://github.com/demjhonsilver) account.