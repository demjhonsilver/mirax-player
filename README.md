# Mirax Player

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)

## Description

Mirax Player is a simple video player for react web application.

## Installation

To install the Mirax Player, you can use the following npm command:

```bash
npm install mirax-player
```


## How to use

You can apply it in react app

------------

example : location of video file public/clip.mp4
-----------------

------------
## Usage

In you React, app.js or main.js / jsx extension

```css

add: 
import 'mirax-player/mirax.css';

```

Then use the attach from Mirax Player:

```js

import React, { useEffect, useState } from 'react';
import  Mirax, { attach }  from 'mirax-player';

const ExampleComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const videoElement = attach('.whatever'); 
    // you can declare any variable here starts with . (known as class selector)
    // find className="whatever" src="clip.mp4"
    const options = {
      playPauseBtn: '.play-pause-btn',
      volumeSlider: '.volume-slider',
      progressBar: '.progress-bar',
      currentTimeStamp: '.current-time',
      durationTimeStamp: '.duration-time',
      fullscreenBtn: '.fullscreen-btn',
    };

    const videoPlayer = new Mirax(videoElement, options);
    // Listen for the "timeupdate" event to update time values
    videoElement.addEventListener('timeupdate', () => {
      videoPlayer.updateCurrentTimeAndDuration();
    });
    return () => {};
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(prevIsPlaying => {
      const video = attach('.whatever'); // Can edit class selector
      if (prevIsPlaying) {video.pause();} else {video.play();}
      return !prevIsPlaying;
    });
  };

  return (
    <div className="video-player">
      <video className="whatever" src="clip.mp4"></video>
      <div className="controls">
       <div className="volume-icon"><div className="speaker"></div>
        </div>
        <button className="play-pause-btn" onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}
        </button>
        <input type="range" className="volume-slider" min="0" max="1" step="0.01"defaultValue="1"/>
        <progress className="progress-bar" min="0" max="100" value="0"></progress>
        <div className="current-time"></div>
        <div className="duration-time"></div>
        <button className="fullscreen-btn">Fullscreen</button>
      </div>
    </div>
  );
};

export default ExampleComponent;

``` 

## Features

- Play and Pause
- Fullscreen
- Adjust the volume (low or high)
- You can point and drag the timestamp in video time duration anywhere

----------------------------------------------------
## License

MIT


```bash
npm install mirax-player
