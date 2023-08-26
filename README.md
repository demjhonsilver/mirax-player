# Mirax Player

-------------

<p align="center">
  <img src="./test/demo.gif" alt="video" />
</p>

-------------

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [React](#react)
- [Vue](#vue)
- [Features](#features)
- [License](#license)

## Description

Mirax Player is a javascript video player for react and vue.

------------

[https://www.npmjs.com/package/mirax-player](https://www.npmjs.com/package/mirax-player)


## Installation

To install the Mirax Player, you can use the following npm command:

```bash
npm install mirax-player
```


## How to use


------------

example : location of video file public/clip.mp4
-----------------

------------
## Usage

In your component

------------------


Then use it  from Mirax Player:

```js

//both react and vue importing syntax

import { mirax } from 'mirax-player';

// for react
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
//
// for vue
    const isPlaying = ref(false);
    const videoRef = ref(null);
//

///

```
-----------------





------------
## React

In your React component

------------------

You need to use useRef in React hooks:
-----------
```js

import React, { useEffect, useState, useRef } from 'react';
import { mirax } from 'mirax-player';

const ExampleComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      mirax(videoRef.current, isPlaying, setIsPlaying);
    }
  }, [isPlaying]);

  return (
    <div>
      <div className='whatever'>
        <video ref={videoRef} className="mirax" src="clip.mp4"></video>
      </div>
    </div>
  );
};

export default ExampleComponent;


```


--------------------------------------
--------------------------------------



------------
## Vue

In your Vue component

------------------

You need to use ref in Vue attributes:
-----------
```js

<template>
  <div>
    <div class="whatever">
      <video ref="videoRef" class="mirax" src="clip.mp4"></video>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { mirax } from 'mirax-player';

export default {
  name: 'ExampleComponent',
  setup() {
    const isPlaying = ref(false);
    const videoRef = ref(null);

    onMounted(() => {
      if (videoRef.value) {
        mirax(videoRef.value, isPlaying.value, setIsPlaying);
      }
    });

    watch(isPlaying, () => {
      if (videoRef.value) {
        mirax(videoRef.value, isPlaying.value, setIsPlaying);
      }
    });

    function setIsPlaying(value) {
      isPlaying.value = value;
    }

    return {
      videoRef
    };
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>



```
--------------------------------------

To customize the alignment of video:
-----
- add in your css file .mirax-inject

- note: .whatever, you can rename it, just make sure the classname in your component also replace it.
---------
```js
// in React 
 <div className='whatever'>
        <video ref={videoRef} className="mirax" src="clip.mp4"></video>
</div>

// in vue 
<div class="whatever">
      <video ref="videoRef" class="mirax" src="clip.mp4"></video>
 </div>


```
----------
```css
.whatever {
    margin: 0 auto;
    text-align: center;
}
.mirax-inject {
    margin: 0 auto;
    text-align: center;
}

```


----------------


## Features

- Play and Pause
- Responsive
- Can play videos (Portrait or Landscape)
- 9:16 dimension supported (Mobile video)
- Fullscreen
- Adjust the volume (low or high)
- You can point and drag the timestamp in video time duration anywhere
- PIP supported (picture in picture) will play the clip even if leave the tab open new app 

----------------------------------------------------
## License

MIT


